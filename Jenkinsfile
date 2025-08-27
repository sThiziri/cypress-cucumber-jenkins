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
            script {
                sh 'tools/generate_html_cucumber_report.sh'
                archiveArtifacts artifacts: 'cypress/screenshots/**, rapports/**', allowEmptyArchive: true
            }
        }
    }
    
}