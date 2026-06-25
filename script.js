// 1. Solicite dois números ao usuário e exiba a soma entre eles.
function ex1() {
    let n1 = parseFloat(prompt("Escreva o primeiro número"));
    let n2 = parseFloat(prompt("Escreva o segundo número"))

    let soma = n1 + n2;
    alert(soma);
}

// 2. Solicite dois números ao usuário e exiba o resultado da subtração do primeiro pelo segundo.
function ex2() {
    let n1 = parseFloat(prompt("Escreva o primeiro número"));
    let n2 = parseFloat(prompt("Escreva o segundo número"));

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
    let numero = parseFloat(prompt("Escreva um número para descobrir o seu dobro"))

    let resultado = numero * 2;
    alert(resultado);
}

// 7. Solicite um número e exiba o seu triplo.
function ex7() {
    let numero = parseFloat(prompt("Escreva um número para descobrir o seu triplo"))

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
    alert("A medida " + (metros) + " metros em centímetros é igual a " + (centimetros));
}

// 12. Solicite o valor do lado de um quadrado e calcule sua área.
function ex12() {
    let lado = parseInt(prompt("Escreva o lado do quadrado"))

    let area = lado * lado;
    alert("A área do quadrado é " + (lado));
}

// 13. Solicite o valor de um produto e calcule o preço final após aplicar um desconto de 10%.
function ex13() {
    let valor = parseFloat(prompt("Digite o valor para aplicar o desconto"))

    let desconto = valor * 0.10;
    alert("O valor do desconto é " + (valor - desconto));
}

// 14. Solicite o salário de um funcionário e calcule o novo salário após um aumento de 10%.
function ex14() {
    let valor = parseFloat(prompt("Digite o salário para aplicar o aumento"))

    let aumento = valor * 0.10;
    alert("O valor do desconto é " + (valor + aumento));
}

// 15. Solicite dois números, exiba seus valores originais e, em seguida, troque os valores entre as variáveis e exiba o resultado.
function ex15() {
    let num1 = parseInt(prompt("Digite o primeiro Número"))
    let num2 = parseInt(prompt("Digite o segundo Número"))
    let num3 = 0

    alert("O primeiro valor é " + num1 + " e o segundo valor é " + num2)

    // A variável 3 que era 0 recebe o valor de num1, logo, temos duas variáveis de mesmo valor num3 e num1
    num3 = num1
    num1 = num2
    num2 = num3

    alert("Os novos valores são " + num1 + " e " + num2)
}

// 16. Solicite um número e informe se ele é par ou ímpar.
function ex16() {
    let numero = parseInt(prompt("Digite um número inteiro para saber se ele é par ou ímpar"))

    // Caso o usuário não digite um número válido
    if (isNaN(numero)) {
        alert("Digite um número válido!");
        return;
    }

    let resultado = numero % 2;
    if (resultado === 0) {
        alert("O número é PAR")
    } else {
        alert("O número é ÍMPAR")
    }
}

// 17. Solicite um número e informe se ele é positivo, negativo ou zero.
function ex17() {
    let numero = parseFloat(prompt("Digite um número para saber se ele é negativo, positivo ou zero"))

    if (isNaN(numero)) {
        alert("Digite um valor válido!")
        return
    }

    if (numero > 0) {
        alert("O número é POSITIVO!")
    } else if (numero < 0) {
        alert("O número é NEGATIVO!")
    } else {
        alert("O número é zero!")
    }
}

// 18. Solicite três números e exiba qual deles é o maior.
function ex18() {
    let num1 = parseInt(prompt("Digite o primeiro número"))
    let num2 = parseInt(prompt("Digite o segundo número"))
    let num3 = parseInt(prompt("Digite o terceiro número"))

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Digite um valor válido!")
        return
    }

    if (num1 > num2 && num1 > num3) {
        alert("O número " + num1 + " é maior")
    } else if (num2 > num1 && num2 > num3) {
        alert("O número " + num2 + " é maior")
    } else {
        alert("O número " + num3 + " é maior")
    }
}

// 19. Solicite três números e exiba qual deles é o menor.
function ex19() {
    let num1 = parseInt(prompt("Digite o primeiro número"))
    let num2 = parseInt(prompt("Digite o segundo número"))
    let num3 = parseInt(prompt("Digite o terceiro número"))

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Digite um valor válido!")
        return
    }

    if (num1 < num2 && num1 < num3) {
        alert("O número " + num1 + " é menor")
    } else if (num2 < num1 && num2 < num3) {
        alert("O número " + num2 + " é menor")
    } else {
        alert("O número " + num3 + " é menor")
    }
}

// 20. Solicite a idade de uma pessoa e informe se ela é maior ou menor de idade.
function ex20() {
    let idade = parseInt(prompt("Digite sua idade"))

    if (isNaN(idade)) {
        alert("Digite um valor válido!")
        return
    }

    if (idade < 18) {
        alert("Você é menor de idade")
    } else {
        alert("Você é maior de idade")
    }
}

// 21. Solicite a temperatura em graus Celsius e converta para Fahrenheit.
function ex21() {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius para conversão em Fahrenheit"))

    let fahrenheit = (celsius * 1.8) + 32
    alert("A temperatura em Fahrenheit é " + fahrenheit)
}

// 22. Solicite a temperatura em graus Fahrenheit e converta para Celsius.
function ex22() {
    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit para converter em Celsius"))

    let celsius = ((fahrenheit - 32) * 5) / 9
    alert("A temperatura em Celsius é " + celsius)
}

// 23. Solicite a base e a altura de um retângulo e calcule sua área.
function ex23() {
    let base = parseInt(prompt("Digite a base do retângulo"))
    let altura = parseInt(prompt("Digite a altura do retângulo"))

    let area = base * altura
    alert("A área do retângulo é " + area)
}

// 24. Solicite a base e a altura de um triângulo e calcule sua área.
function ex24() {
    let base = parseInt(prompt("Digite a base do triângulo"))
    let altura = parseInt(prompt("Digite a altura do triângulo"))

    let area = (base * altura) / 2
    alert("A área do triângulo é " + area)
}

// 25. Solicite um número e informe se ele é múltiplo de 5.
function ex25() {
    let num = parseInt(prompt("Digite um número inteiro para descobrir se ele é múltiplo de 5"))

    if (isNaN(num)) {
        prompt("Digite um valor válido!")
        return
    }

    if (num % 5 === 0) {
        alert("O número é múltiplo de 5!")
    } else {
        alert("O número NÃO é múltiplo de 5")
    }
}

// 26. Solicite um número inteiro e exiba a tabuada desse número de 1 a 10.

// 27. Solicite um número e calcule seu quadrado.
function ex27() {
    let num = parseInt(prompt("Digite um número inteiro para descobrir o seu quadrado"))

    let resultado = num * num
    alert("O quadrado de " + num + " é: " + resultado)
}

//28. Solicite o valor de uma compra e informe o valor final após aplicar:
    //* 5% de desconto para compras acima de R$ 100,00;
    //* 10% de desconto para compras acima de R$ 500,00.
function ex28() {
    let valor = parseFloat(prompt("Digite o valor da sua compra!")) // parseFloat --> transforma o texto em um número decimal
    let desconto
    let valorTotal

    if (valor >= 100 && valor <= 500) {
        desconto = valor * 0.05
        valorTotal = valor - desconto
    } else {
        desconto = valor * 0.10
        valorTotal = valor - desconto
    }

    alert("O valor total é: " + valorTotal)
}

// 29. Solicite a quantidade de quilômetros percorridos por um carro e a quantidade de litros de combustível consumidos. Em seguida, calcule o consumo médio em km/l.
function ex29() {
    let km = parseFloat(prompt("Insira a quantidade de quilômetros percorrido pelo carro"))
    let litros = parseFloat(prompt("Insira a quantidade de litros consumidos"))

    let consumoMedio = km/litros
    alert("O consumo médio do automóvel é: " + consumoMedio)
}


// 30. Solicite o nome de um aluno e suas três notas. Calcule a média e informe:
//* "Aprovado" se a média for maior ou igual a 7;
//* "Recuperação" se a média for maior ou igual a 5 e menor que 7;
//* "Reprovado" se a média for menor que 5.
function ex30() {
    let nome = prompt("Digite o seu nome")
    let nota1 = parseInt(prompt("Digite sua primeira nota"))
    let nota2 = parseInt(prompt("Digite sua segunda nota"))
    let nota3 = parseInt(prompt("Digite sua terceira nota"))
    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        alert("Aluno " + nome + " APROVADO!")
    } else if (media >= 5 && media < 7) {
        alert("Aluno " + nome + " em RECUPERAÇÃO" )
    } else {
        alert("Aluno " + nome + " REPROVADO!")
    }
}
