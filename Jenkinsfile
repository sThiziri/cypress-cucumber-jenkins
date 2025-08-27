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
    }

    post {
        always {
            script {
                // Génération du rapport Cucumber HTML
                sh 'tools/generate_html_cucumber_report.sh'

                // Archivage des screenshots et rapports
                archiveArtifacts artifacts: 'cypress/screenshots/**, rapports/**', allowEmptyArchive: true
            }
        }
    }
}
