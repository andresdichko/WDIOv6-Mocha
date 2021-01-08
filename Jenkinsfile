pipelane {
agent any
parameters{
string(name: 'Test',defaultValue: 'test',description: 'test')
}
stages{
stage('Build'){
steps{
echo '...Building...'
sh 'npm install'
}
}
stage('Test'){
step{
echo '...Testing...'
sh 'npm test'}
}
}
post {
always{
junit '*.xml'
}
}
}
