// This build is parameterized :
// - PROJECT_PATH : string parameter
// - TEST_CHROME_BIN : string parameter
// - INTERNET : choice parameter true/false
//Jenkins plugins :
// - Slack Notification plugin
// - Checkstyle plugin
// - Clover plugin
// - HTML Publisher plugin
// - Robot Framework plugin
//
pipeline {
    agent any
    
    environment {
        DISPLAY    = ':10'
        CHROME_BIN = "${TEST_CHROME_BIN}"
    }
    
    stages {
        
        stage('Clean') {
            steps {
                notifySlack("#CCCCCC", "build started")
                sh 'rm -rf build/'
                sh 'mkdir build/'
                sh 'mkdir build/reports/'
                sh "rm -rf ${PROJECT_PATH}/dist/"
                sh "mkdir ${PROJECT_PATH}/dist/"
            }
        }
 
        stage('Check') {
            steps {
                dir("${PROJECT_PATH}") {
                    sh 'ng version'
                    sh "ng lint --format checkstyle > ${WORKSPACE}/build/reports/checkstyle-bug.xml || true"
                    // Fix ng lint issue
                    sh "sed '2q;d' ${WORKSPACE}/build/reports/checkstyle-bug.xml > ${WORKSPACE}/build/reports/checkstyle.xml"
                }
            }
        }

        stage('Karma Tests') {
            steps {
                dir("${PROJECT_PATH}") {
                    sh 'sudo Xvfb :10 -ac -screen 0 1280x1024x24 &'
                    sh "ng test --single-run true --code-coverage true --reporters progress,junit,coverage-istanbul"
                    sh 'sudo pkill Xvfb'
                    sh "cp dist/reports/karma-junit.xml ${WORKSPACE}/build/reports"
                    sh "cp -r dist/reports/coverage ${WORKSPACE}/build/reports"
                }
            }
        }

        stage('Protractor Tests') {
            steps {
                dir("${PROJECT_PATH}") {
                    sh 'sudo Xvfb :10 -ac -screen 0 1280x1024x24 &'
                    sh "ng e2e"
                    sh 'sudo pkill Xvfb'
                    sh "cp dist/reports/protractor-junit.xml ${WORKSPACE}/build/reports"
                }
            }
        }

        stage('RF Local Tests') {
            steps {
                    dir("${PROJECT_PATH}") {
                        sh 'tests/bin/startLocalTest.sh'
                        sh 'tests/bin/checkSite.sh http://localhost:4201'
                        sh 'sudo Xvfb :10 -ac -screen 0 1280x1024x24 &'
                        sh "robot -v GRID:False -v BROWSER:gc -v ENV:LOCAL -d ${WORKSPACE}/build/reports --log none --report none --output local.xml --xunit rf-local-junit.xml /home/fxs/Dropbox/Src/tam4/tests/RF"
                        sh 'sudo pkill Xvfb'
                        sh 'tests/bin/stopLocalTest.sh'
                    }
            }
        }

        stage('RF Remote Tests') {
            when { environment name: 'INTERNET', value: 'true' }
            steps {
                dir("${PROJECT_PATH}") {
                    sh 'tests/bin/loadRemoteDB.sh'
                    sh 'tests/bin/startRemoteTest.sh'
                    sh 'tests/bin/checkSite.sh http://localhost:4202'
                    sh 'sudo Xvfb :10 -ac -screen 0 1280x1024x24 &'
                    sh "robot -v GRID:False -v BROWSER:gc -v ENV:REMOTE -d ${WORKSPACE}/build/reports --log none --report none --output remote.xml --xunit rf-remote-junit.xml /home/fxs/Dropbox/Src/tam4/tests/RF"
                    sh 'sudo pkill Xvfb'
                    sh 'tests/bin/stopRemoteTest.sh'
                }
            }
        }
    }
    
    post {
        success {
            notifySlack("good", "build ended successfully")
        }
        failure {
            notifySlack("danger", "build failed")
        }
        always {
            step([
                $class: 'CheckStylePublisher',
                pattern: "build/reports/checkstyle.xml",
                canRunOnFailed: true
            ])
            junit 'build/reports/*-junit.xml'
            step([
                $class: 'CloverPublisher',
                cloverReportDir: 'build/reports/coverage',
                cloverReportFileName: 'clover.xml',
                healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80], // optional, default is: method=70, conditional=80, statement=80
                unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50], // optional, default is none
                failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]     // optional, default is none
            ])
            publishHTML (target: [
                allowMissing: true,
                alwaysLinkToLastBuild: false,
                keepAll: false,
                reportDir: 'build/reports/coverage',
                reportFiles: 'index.html',
                reportName: "Code Coverage"
            ])
            publishRFReports()
        }
    }
}

def notifySlack(String color, String message) {
    boolean internet = INTERNET.toBoolean()
    if (internet) {
        dir("${PROJECT_PATH}") {
            withCredentials([string(credentialsId: 'e6a6c2db-c5bb-4a3f-80e7-20533a1c4194', variable: 'token')]) {
                slackSend channel: 'tam4', color: "${color}", message: "${env.JOB_NAME} ${env.BUILD_NUMBER} : ${message}", teamDomain: 'jfx4', token: "${token}"
            }
        }
    } else {
        echo "No Internet - no slack notifications : ${message}"
    }
}

def publishRFReports() {
    boolean internet = INTERNET.toBoolean()
    if (internet) {
        sh 'rebot --nostatusrc --name "Test Env" --outputdir build/reports --output output.xml build/reports/local.xml build/reports/remote.xml'
    } else {
        sh 'rebot --nostatusrc --name "Test Env" --outputdir build/reports --output output.xml build/reports/local.xml'
    }
    step([
        $class: 'RobotPublisher',
        disableArchiveOutput: false,
        logFileName: 'log.html',
        onlyCritical: true,
        otherFiles: '*.png',
        outputFileName: 'output.xml',
        outputPath: 'build/reports/',
        passThreshold: 90,
        reportFileName: 'report.html',
        unstableThreshold: 100
    ])
}