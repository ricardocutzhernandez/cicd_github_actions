pipeline {
    agent {
        docker 'node:16'
    }
    stages {
        stage('Build') {
            steps {
                echo 'build app'
                sh 'npm install'
            }
        }

        stage('test') {
            steps {
                echo 'testing app'
                sh 'npm test'
            }
        }
    }
}