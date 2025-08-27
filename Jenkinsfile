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
            //sh 'chmod +x tools/generate_html_cucumber_report.sh'
            sh 'tools/generate_html_cucumber_report.sh'
            archiveArtifacts 'cypress/reports/**'
            cucumber 'reports/cucumber-json/*.json'
        }
    }
}
