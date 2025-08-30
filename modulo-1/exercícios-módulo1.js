

//Programa que calcule a média de três números e exiba o resultado no console.//
const num1 = 10;
const num2 = 20;
const num3 = 50;

const mediaDeValores = (num1+num2+num3)/3
console.log(mediaDeValores)

//Programa que verifique se um número é maior que 10 e exiba o resultado no console.//
const numeroAleatorio = 8

if (numeroAleatorio > 10) {
 console.log("Esse número é maior que 10")   
}else{
    console.log("Esse número é menor que 10")
}

//Programa que verifique se um número é positivo e exiba o resultado no console.//
const valorDoExercicio = -5

if (valorDoExercicio > 0) {
    console.log("O número " + valorDoExercicio + " é positivo.");
} else {
    console.log("O número " + valorDoExercicio + " não é positivo.");

}
//Escreva um programa que calcule a soma de dois números e exiba o resultado utilizando uma template string.//
const numero1 = 10
const numero2 = 48

const somaDosValores = numero1 + numero2
const resultado = `A soma dos valores ${numero1} e ${numero2} é igual a ${somaDosValores}` 
console.log(resultado)