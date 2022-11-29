pipeline {
    agent { docker { image 'node:latest' } }
    environment {
        HOME = '.'
        npm_config_cache = 'npm-cache'
    }

    stages {
        stage('Prepare') {
            steps {
                sh 'npm install -g yarn'
                sh 'yarn'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
    }
}