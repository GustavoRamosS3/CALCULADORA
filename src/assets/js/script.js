// Função para adicionar ganhos
function adicionarGanhos() {
  var ganhosInput = document.getElementById('ganhos');
  var valorGanhos = parseFloat(ganhosInput.value);
  var totalGanhosSpan = document.getElementById('totalGanhos');
  var totalGanhos = parseFloat(localStorage.getItem('totalGanhos')) || 0; // Recuperar os ganhos do LocalStorage ou 0 se não houver valor armazenado

  totalGanhos += valorGanhos;
  totalGanhosSpan.textContent = totalGanhos.toFixed(2);

  ganhosInput.value = "";

  // Armazenar os ganhos atualizados no LocalStorage
  localStorage.setItem('totalGanhos', totalGanhos.toFixed(2));

  calcularTotalFinal();
}

// Função para adicionar gastos
function adicionarGastos() {
  var gastosInput = document.getElementById('gastos');
  var valorGastos = parseFloat(gastosInput.value);
  var totalGastosSpan = document.getElementById('totalGastos');
  var totalGastos = parseFloat(localStorage.getItem('totalGastos')) || 0; // Recuperar os gastos do LocalStorage ou 0 se não houver valor armazenado

  totalGastos += valorGastos;
  totalGastosSpan.textContent = totalGastos.toFixed(2);

  gastosInput.value = "";

  // Armazenar os gastos atualizados no LocalStorage
  localStorage.setItem('totalGastos', totalGastos.toFixed(2));

  calcularTotalFinal();
}

// Função para calcular o total final
function calcularTotalFinal() {
  var totalGanhos = parseFloat(localStorage.getItem('totalGanhos')) || 0; // Recuperar os ganhos do LocalStorage ou 0 se não houver valor armazenado
  var totalGastos = parseFloat(localStorage.getItem('totalGastos')) || 0; // Recuperar os gastos do LocalStorage ou 0 se não houver valor armazenado
  var totalFinalSpan = document.getElementById('totalFinal');

  var totalFinal = totalGanhos - totalGastos;
  totalFinalSpan.textContent = totalFinal.toFixed(2);
}

// Função para carregar os valores do LocalStorage quando a página for carregada
window.onload = function() {
  // Carregar os valores dos ganhos e gastos quando a página for carregada
  document.getElementById('totalGanhos').textContent = parseFloat(localStorage.getItem('totalGanhos')) || 0;
  document.getElementById('totalGastos').textContent = parseFloat(localStorage.getItem('totalGastos')) || 0;
  
  // Calcular o total final após carregar os valores
  calcularTotalFinal();
}
// Função para limpar os dados do LocalStorage
function limparDadosLocalStorage() {
  localStorage.removeItem('totalGanhos'); // Remover o item de ganhos do LocalStorage
  localStorage.removeItem('totalGastos'); // Remover o item de gastos do LocalStorage

  // Atualizar os campos na página para refletir a limpeza dos dados
  document.getElementById('totalGanhos').textContent = '0';
  document.getElementById('totalGastos').textContent = '0';
  document.getElementById('totalFinal').textContent = '0';
}

// Adicionar evento de clique ao botão Limpar
document.getElementById('botaoLimpar').addEventListener('click', function() {
  limparDadosLocalStorage();
});
