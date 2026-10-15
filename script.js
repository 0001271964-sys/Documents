const campoNumero1 = document.getElementById("numero1");
const campoNumero2 = document.getElementById("numero2");
const textoResultado = document.getElementById("resultado");

function calcular(operacao) {
  const textoNumero1 = campoNumero1.value;
  const textoNumero2 = campoNumero2.value;

  if (textoNumero1 === "" || textoNumero2 === "") {
    textoResultado.textContent = "Digite os dois números.";
    return;
  }

  const numero1 = Number(textoNumero1);
  const numero2 = Number(textoNumero2);
  let resultado;

  if (operacao === "+") {
    resultado = numero1 + numero2;
  } else if (operacao === "-") {
    resultado = numero1 - numero2;
  } else if (operacao === "*") {
    resultado = numero1 * numero2;
  } else if (operacao === "/") {
    if (numero2 === 0) {
      textoResultado.textContent = "Não é possível dividir por zero.";
      return;
    }

    resultado = numero1 / numero2;
  }

  textoResultado.textContent = "Resultado: " + resultado;
}

document.getElementById("somar").addEventListener("click", function () {
  calcular("+");
});

document.getElementById("subtrair").addEventListener("click", function () {
  calcular("-");
});

document.getElementById("multiplicar").addEventListener("click", function () {
  calcular("*");
});

document.getElementById("dividir").addEventListener("click", function () {
  calcular("/");
});

document.getElementById("limpar").addEventListener("click", function () {
  campoNumero1.value = "";
  campoNumero2.value = "";
  textoResultado.textContent = "O resultado aparecerá aqui.";
});