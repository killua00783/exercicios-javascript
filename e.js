//ex.01
let nome = "joão"
console.log(nome)
//ex.02
let a = 5, b = 10
console.log(a + b)
//ex.03
let primeiroNome = "Josefa ", ultimoNome = "Silva"
console.log(primeiroNome + ultimoNome) 
//ex.04
let pessoa = {
nome : "Josefa",
idade : 18,
endereco : "Garcia",
telefone : 93445444
}
console.log(pessoa)
//ex.04b
let frutas = ['maçã', 'banana', 'laranja']
frutas[3] = 'uva'
frutas.push('abacate')
console.log(frutas)
frutas[0] = 'abacaxi'

console.log('o tamanho do vetor é: ', frutas.length)
for(i=0; i<frutas.length;i++){
    console.log(frutas[i])
}
//ex.05
let numeros = [1, 2, 3, 4, 5]
console.log(numeros[0], numeros[numeros.length-1])
console.log(numeros [0], numeros[4])
//ex.06
let cores = ['vermelho', 'verde', 'azul']
for(i=0; i<cores.length; i++){
    console.log(cores[i])
}
//ex.07
let idade = 16
console.log(idade)
if(idade < 18){
    console.log("menor")
}else{
    console.log("maior")
}
//ex.08
let notas = 8
console.log(notas)
if(notas > 7){
    console.log("aprovado")
}else if(notas >= 5 && notas <= 7){
    console.log("recuperação")
}else if (notas < 5) {
    console.log("reprovado")
}
//ex.09
let diaDaSemana = 1, 2, 3, 4, 5, 6, 7
console.log(diaDaSemana)
switch(1 = 'domingo', 2 = 'segunda-feira', 3 = 'terça-feira', 4 = 'quarta-feira', 5 = 'quinta-feira', 6 = 'sexta-feita', 7 = 'sabado')
