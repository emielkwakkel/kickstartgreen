pipeline {
    agent any

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