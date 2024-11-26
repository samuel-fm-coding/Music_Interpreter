export const DashboardView = {
    getText() {
      return $("#text-area").val().trim();
    },
    displayResult(mensagem) {
      const div = $('#retorno');
      div.text(mensagem);
    },
    bindPredictButton(handler) {
      const predictButton = document.querySelector('#predict-button');
      predictButton.addEventListener('click', handler);
    },
  };