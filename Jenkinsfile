pipeline {
    agent {
        docker {
            image 'cypress/browsers:latest'
            args 'entrypoint='
        }
    }

    stages {
        stage("Installation") {
            steps {
                sh 'npm ci'
            }
        }

        stage("Run Cypress Tests") {
            steps {
                sh 'npx cypress run'
            }
        }

        stage("Generate Cucumber Report") {
            steps {
                sh 'tools/generate_html_cucumber_report.sh'
            }
        }
    }

    post {
        always {
            // Directement ici, pas de node
            archiveArtifacts artifacts: 'cypress/screenshots/**, reports/**', allowEmptyArchive: true
        }
    }
}
