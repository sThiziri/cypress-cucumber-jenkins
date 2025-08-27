pipeline{
    agent{
        docker{
            image 'cypress/browsers:latest'
            args '--entrypoint=' 
        }
    }
    stages{
        stage('Node Version') {
            steps {
                 sh 'node --version'
            }
        }
        stage("installation"){
            steps{
                sh 'npm ci'
            }
        }
        stage("run tests"){
            steps{
                sh 'npx cypress run'
            }
        }
    }
    post{
        always{
            sh 'chmod +x tools/generate_html_cucumber_report.sh'
            sh './tools/generate_html_cucumber_report.sh'
            archiveArtifacts 'rapports/**/*.*'
            cucumber "cypress/cucumber-json/*.json"
            
        }
    }
}