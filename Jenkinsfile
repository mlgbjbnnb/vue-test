Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker 'node:8.7.0' }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
