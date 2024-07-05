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
    nome: "Josefa",
    idade: 18,
    endereco: "Garcia",
    telefone: 93445444
}
console.log(pessoa)
//ex.04b
let frutas = ['maçã', 'banana', 'laranja']
frutas[3] = 'uva'
frutas.push('abacate')
console.log(frutas)
frutas[0] = 'abacaxi'

console.log('o tamanho do vetor é: ', frutas.length)
for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
//ex.05
let numeros = [1, 2, 3, 4, 5]
console.log(numeros[0], numeros[numeros.length - 1])
console.log(numeros[0], numeros[4])
//ex.06
let cores = ['vermelho', 'verde', 'azul']
for (i = 0; i < cores.length; i++) {
    console.log(cores[i])
}
//ex.07
let idade = 16
console.log(idade)
if (idade < 18) {
    console.log("menor")
} else {
    console.log("maior")
}
//ex.08
let notas = 8
console.log(notas)
if (notas > 7) {
    console.log("aprovado")
} else if (notas >= 5 && notas <= 7) {
    console.log("recuperação")
} else if (notas < 5) {
    console.log("reprovado")
}
//ex.09


let diaDaSemana = 1
console.log(diaDaSemana)
switch (diaDaSemana) {
    case 1:
        console.log('domingo');
        break;
    case 2:
        console.log('segunda-feira');
        break;
    case 3:
        console.log('terça-feira');
        break;
    case 4:
        console.log('quarta-feira');
        break;
    case 5:
        console.log('quinta-feira');
        break;
    case 6:
        console.log('sexta-feira');
        break;
    case 7:
        console.log('sabado');
        break;
}
//ex.10


let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 0; i < numero.length; i++) {
    console.log(numero[i])
}
//ex.11


let contador = 1
while (contador <= 5) {
    console.log(contador)
    contador++
}
//ex.12
//ex.13


let valores = [10, 20, 30, 40, 50]
let soma = 0
for (i = 0; i<valores.length; i++) {
    soma += valores[i]
}
console.log('ex.13: a soma é ', soma);

//ex.14

vetor = [5, 4, 6, 10, 8, 2]
let maior = 0
n=0
while (n< vetor.length){
    if(vetor[n] > maior){
        maior = vetor[n]
    }
    n++
}
console.log('ex.14: O maior numero é ', maior);
//ex.15
vetor = [1, 2, 3]
let menor = 1
n=3
while (n> vetor.length){
    if(vetor[n] < menor){
        menor = vetor[n]
    }
}
console.log('ex.15: o menor numero é ', menor);
//ex.16
n = 10
let fatorial = 1
for(let i=1; i<=n; i++){
    fatorial  *=i
}
console.log('ex. 16: ', fatorial);
//ex.17
for(i=1; i<10; i++){
    if(i % 2 == 0){
        console.log(i, ' é par');
    }else {
        console.log(i, 'é impar');
    }
}
//ex.19
let texto = "texto", resultado = "", cont=0
for(i = texto.length-1; i>=0; i--){
    resultado = resultado.concat(texto[i])
}
console.log('texto invertido: ', resultado);
