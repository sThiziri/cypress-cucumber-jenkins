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

    
}
