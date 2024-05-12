// script.js

// Função para adicionar ganhos
function adicionarGanhos() {
  var ganhosInput = document.getElementById('ganhos');
  var valorGanhos = parseFloat(ganhosInput.value);
  var totalGanhosSpan = document.getElementById('totalGanhos');
  var totalGanhos = parseFloat(totalGanhosSpan.textContent);

  totalGanhos += valorGanhos;
  totalGanhosSpan.textContent = totalGanhos.toFixed(2);

  ganhosInput.value = "";


  calcularTotalFinal();
}

// Função para adicionar gastos
function adicionarGastos() {
  var gastosInput = document.getElementById('gastos');
  var valorGastos = parseFloat(gastosInput.value);
  var totalGastosSpan = document.getElementById('totalGastos');
  var totalGastos = parseFloat(totalGastosSpan.textContent);

  totalGastos += valorGastos;
  totalGastosSpan.textContent = totalGastos.toFixed(2);

  gastosInput.value = "";

  calcularTotalFinal();
}

// Função para calcular o total final
function calcularTotalFinal() {
  var totalGanhos = parseFloat(document.getElementById('totalGanhos').textContent);
  var totalGastos = parseFloat(document.getElementById('totalGastos').textContent);
  var totalFinalSpan = document.getElementById('totalFinal');

  var totalFinal = totalGanhos - totalGastos;
  totalFinalSpan.textContent = totalFinal.toFixed(2);
}
