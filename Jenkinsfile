@Library('sharedLIB') _

pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "murtaza0318/977fitnessapp"
        DOCKER_TAG   = "latest"
        DOCKER_CREDS = "DockerHubCred"  
    }

    stages {
        stage("Clone code") {
            steps {
                git branch: 'master', url: 'https://github.com/GIThubuserms/FitnessApp_977_DPL.git'
            }
        }

        stage("Build docker image") {
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
            }
        }

        stage("Login to DockerHub") {
            steps {
                script {
                    dockerpush(env.DOCKER_CREDS) 
                }
            }
        }

        stage("Push to DockerHub") {
            steps {
                sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }
        }

        stage("Apply Kubernetes Manifests") {
            steps {
                sh """
                    # make sure namespace exists
                    kubectl get ns 977ns || kubectl create ns 977ns
                    
                    # apply all manifests from infra/k8s
                    kubectl apply -n 977ns -f infra/k8s/
                """
            }
        }

        stage("Success") {
            steps {
                echo "Successfully achieved CI/CD of 977fitnessapp 🚀"
            }
        }
    }
}
