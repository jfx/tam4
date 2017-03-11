// This build is parameterized :
// - PROJECT_PATH : string parameter
// - TEST_CHROME_BIN : string parameter
// - INTERNET : choice parameter true/false
//Jenkins plugins :
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
                    sh "robot -d ${WORKSPACE}/build/reports --xunit rf-local-junit.xml -v GRID:False -v BROWSER:gc -v ENV:LOCAL /home/fxs/Dropbox/Src/tam4/tests/RF"
                    sh 'sudo pkill Xvfb'
                    sh 'tests/bin/stopLocalTest.sh'
                }
            }
        }
    }
    
    post {
        success {
            echo 'Success'
        }
        failure {
            echo 'Failure'
        }
        always {
            step([$class: 'CheckStylePublisher', pattern: "build/reports/checkstyle.xml", canRunOnFailed: true])
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
            step([$class: 'RobotPublisher', disableArchiveOutput: false, logFileName: 'log.html', onlyCritical: true, otherFiles: '*.png', outputFileName: 'output.xml', outputPath: 'build/reports/', passThreshold: 90, reportFileName: 'report.html', unstableThreshold: 100])
        }
    }
}