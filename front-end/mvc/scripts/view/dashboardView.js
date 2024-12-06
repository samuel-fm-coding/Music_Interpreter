export const DashboardView = {
  getText() {
    return $("#text-area").val().trim();
  },
  displayLoading() {
    const content = $("#content");

    content.html('').append(`
        <div class="col-xs-12 d-flex center mt-15">
          <img src="assets/img/load.gif" alt="Carregando..." id="load">
        </div>`
    );
  },
  displayError(messageError, handler) {
    const content = $("#content");

    const originalContent = content.html();

    content.html(`
        <div class="col-xs-12 d-flex center mt-15">
          <p class="text-danger fw-600" style="font-size: 18px;">${messageError}</p>
        </div>
      `);

    setTimeout(() => {
      content.html(originalContent);

      this.bindPredictButton(handler);
    }, '2000');
  },
  displayResult(mensagem) {
    const content = $("#content");

    // Remover o load e adicionar a mensagem de resultado
    content.html('').append(`
        <div id="container-retorno" class="col-xs-12 d-flex center mt-30">
          <p class="fw-600" id="retorno" style="font-size: 18px;"></p>
        </div>
        <br>
        <div class="col-xs-12 d-flex center mt-30">
          <button class="btn" id="new-prediction" onclick="window.location.reload();">Nova predição</button>
        </div>
      `);

    const p_retorno = $('#retorno');
    p_retorno.text(mensagem);
  },
  bindPredictButton(handler) {
    const predictButton = document.querySelector('#predict-button');
    predictButton.addEventListener('click', handler);
  },
};