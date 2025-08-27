pipeline{
    agent{
        docker{
            image 'cypress/browsers:latest'
            args 'entrypoint='
        }
    }
    stages{
        stage("installation"){
            steps{
                sh 'npm ci'
            }
        }
        stage(""){
            steps{
                sh 'npx cypress run'
            }
        }
    }

    post{
        always{
            sh 'tools/generate_html_cucumber_report.sh'
            archiveArtifacts 'cypress/screenshots/**, rapports/**'
        }
    }
    
}