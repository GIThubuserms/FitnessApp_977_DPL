pipeline{
    agent any

    stages{
        stage("Clone code"){
            steps{
                git: "https://github.com/GIThubuserms/FitnessApp_977_DPL.git",branch:"master"
            }
        }
        stage("Build dockerimage"){
            steps{
               sh: "docker built -it murtaza0318/977fitnessapp ."
            }
        }
        stage("Push To dockerHub"){
            steps{
               sh: "docker push murtaza0318/977fitnessapp:latest"
            }
        }
        stage("Run Kind cluster"){
            steps{
                sh: "kind create cluster --name=mycluster"
            }
        }
        stage("Make namespace"){
            steps{
                sh:"kubectl create namespace 977ns"
            }
        }
        stage("Run K8s manifest"){
            steps{
                dir('infra/k8s'){
                sh: "kubectl apply -f . -n 977ns"
               }
            }
        }
        stage("Make svc available"){
            steps{
             sh "kubectl port-forward svc/977svc -n 977ns 8082:8081 --address=0.0.0.0/0 &"
            }
        }
        stage("Success"){
            steps{
               echo: "Suucessfully achived CI of 977fitnessapp"
            }
        }
        
        
    }
}