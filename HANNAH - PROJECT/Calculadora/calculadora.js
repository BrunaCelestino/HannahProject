const somar = (num1, num2) => num1 + num2
const subtrair = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

const calcular = (num1, num2, operacao) => {
  let resultado

  if (operacao == "somar") {
    resultado = somar(num1, num2)
  } else if (operacao == "subtrair") {
    resultado = subtrair(num1, num2)
  } else if (operacao == "multiplicar") {
    resultado = multiplicar(num1, num2)
  } else if (operacao == "dividir") {
    resultado = dividir(num1, num2)
  }
  console.log(`O resultado da operação "${operacao}" é ${resultado}`)

}

calcular(20, 4, "subtrair")