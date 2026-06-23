// 1. Solicite dois números ao usuário e exiba a soma entre eles.
function ex1() {
    let n1 = parseInt(prompt("Escreva o primeiro número"));
    let n2 = parseInt(prompt("Escreva o segundo número"))

    let soma = n1 + n2;
    alert(soma);
}

// 2. Solicite dois números ao usuário e exiba o resultado da subtração do primeiro pelo segundo.
function ex2() {
    let n1 = parseInt(prompt("Escreva o primeiro número"));
    let n2 = parseInt(prompt("Escreva o segundo número"));

    let subtracao = n1 - n2;
    alert(subtracao);
}

// 3. Solicite dois números ao usuário e exiba o resultado da multiplicação entre eles.
function ex3() {
    let n1 = parseInt(prompt("Escreva o primeiro número"));
    let n2 = parseInt(prompt("Escreva o segundo número"));

    let multiplicacao = n1 * n2;
    alert(multiplicacao);
}

// 4. Solicite dois números ao usuário e exiba o resultado da divisão do primeiro pelo segundo.
function ex4() {
    let n1 = parseInt(prompt("Escreva o primeiro número"));
    let n2 = parseInt(prompt("Escreva o segundo número"));

    let divisao = n1 / n2;
    alert(divisao);
}

// 5. Solicite um número inteiro e exiba seu antecessor e seu sucessor.
function ex5() {
    let numero = parseInt(prompt("Escreva um número inteiro para receber seu antecessor e seu sucessor"))

    alert("Antecessor: " + (numero - 1) + "\nSucessor: " + (numero + 1))
}

// 6. Solicite um número e exiba o seu dobro.
function ex6() {
    let numero = parseInt(prompt("Escreva um número para descobrir o seu dobro"))

    let resultado = numero * 2;
    alert(resultado);
}

// 7. Solicite um número e exiba o seu triplo.
function ex7() {
    let numero = parseInt(prompt("Escreva um número para descobrir o seu triplo"))

    let resultado = numero * 3;
    alert(resultado);
}

// 8. Solicite um número e exiba a metade dele.
function ex8() {
    let numero = parseInt(prompt("Escreva um número para descobrir o seu triplo"))

    let resultado = numero * 3;
    alert(resultado);
}

// 9. Solicite duas notas e calcule a média aritmética entre elas.
function ex9() {
    let nota1 = parseInt(prompt("Escreva sua primeira nota"))
    let nota2 = parseInt(prompt("Escreva sua segunda nota"))

    let resultado = nota1 + nota2 / 2;
    alert(resultado);
}

// 10. Solicite a idade de uma pessoa em anos e exiba aproximadamente quantos meses ela já viveu.
function ex10() {
    let idade = parseInt(prompt("Escreva a sua idade"))

    let meses = idade * 12;
    alert("Você viveu " + (meses) + " meses");
}

// 11. Solicite uma medida em metros e converta esse valor para centímetros.
function ex11() {
    let metros = parseInt(prompt("Escreva a medida em metros"))

    let centimetros = metros * 100;
    alert("A medida " + (metros) + " em centímetros é igual a " + (centimetros));
}

// 12. Solicite o valor do lado de um quadrado e calcule sua área.
function ex12() {
    let lado = parseInt(prompt("Escreva o lado do quadrado"))

    let area = lado * lado;
    alert("A área do quadrado é " + (lado));
}

// 13. Solicite o valor de um produto e calcule o preço final após aplicar um desconto de 10%.
function ex13() {
    let valor = parseInt(prompt("Digite o valor para aplicar o desconto"))

    let desconto = valor * 0.10;
    alert("O valor do desconto é " + (valor - desconto));
}

// 14. Solicite o salário de um funcionário e calcule o novo salário após um aumento de 10%.
function ex14() {
    let valor = parseInt(prompt("Digite o salário para aplicar o aumento"))

    let aumento = valor * 0.10;
    alert("O valor do desconto é " + (valor + aumento));
}

// 15. Solicite dois números, exiba seus valores originais e, em seguida, troque os valores entre as variáveis e exiba o resultado.

// 16. Solicite um número e informe se ele é par ou ímpar.

// 17. Solicite um número e informe se ele é positivo, negativo ou zero.

// 18. Solicite três números e exiba qual deles é o maior.

// 19. Solicite três números e exiba qual deles é o menor.

// 20. Solicite a idade de uma pessoa e informe se ela é maior ou menor de idade.

// 21. Solicite a temperatura em graus Celsius e converta para Fahrenheit.

// 22. Solicite a temperatura em graus Fahrenheit e converta para Celsius.

// 23. Solicite a base e a altura de um retângulo e calcule sua área.

// 24. Solicite a base e a altura de um triângulo e calcule sua área.

// 25. Solicite um número e informe se ele é múltiplo de 5.

// 26. Solicite um número inteiro e exiba a tabuada desse número de 1 a 10.

// 27. Solicite um número e calcule seu quadrado.

//28. Solicite o valor de uma compra e informe o valor final após aplicar:
//* 5% de desconto para compras acima de R$ 100,00;
//* 10% de desconto para compras acima de R$ 500,00.

// 29. Solicite a quantidade de quilômetros percorridos por um carro e a quantidade de litros de combustível consumidos. Em seguida, calcule o consumo médio em km/l.

// 30. Solicite o nome de um aluno e suas três notas. Calcule a média e informe:
//* "Aprovado" se a média for maior ou igual a 7;
//* "Recuperação" se a média for maior ou igual a 5 e menor que 7;
//* "Reprovado" se a média for menor que 5.
