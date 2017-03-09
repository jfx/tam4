// This build is parameterized :
// - PROJECT_PATH : string parameter
// - INTERNET : choice parameter true/false
//Jenkins plugins :
// - Static Analysis Utilities + Checkstyle plugin
// - Robot Framework plugin
//
pipeline {
    agent any
    
//    environment {
//    }
    
    stages {
        
        stage('Clean') {
            steps {
                sh 'rm -rf build/'
                sh 'mkdir build/'
                sh 'mkdir build/reports/'
            }
        }
 
         stage('Check') {
            steps {
                dir("${PROJECT_PATH}") {
                    sh "ng lint --format checkstyle > ${WORKSPACE}/build/reports/checkstyle-bug.xml || true"
                    // Fix ng lint issue
                    sh "sed '2q;d' ${WORKSPACE}/build/reports/checkstyle-bug.xml > ${WORKSPACE}/build/reports/checkstyle.xml"
                }
            }
        }
        
        stage('RF Test Local') {
            steps {
                dir("${PROJECT_PATH}") {
                    sh 'tests/bin/startLocalTest.sh'
                    sh 'tests/bin/checkSite.sh http://localhost:4201'
                    sh 'sudo Xvfb :10 -ac -screen 0 1280x1024x24 &'
                    sh "export DISPLAY=:10; robot -d ${WORKSPACE}/build/reports --xunit rf-local-junit.xml -v GRID:False -v BROWSER:gc -v ENV:LOCAL /home/fxs/Dropbox/Src/tam4/tests/RF"
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
            step([$class: 'RobotPublisher', disableArchiveOutput: false, logFileName: 'log.html', onlyCritical: true, otherFiles: '*.png', outputFileName: 'output.xml', outputPath: 'build/reports/', passThreshold: 90, reportFileName: 'report.html', unstableThreshold: 100])
        }
    }
}