import { DashboardModel } from '../model/dashboardModel.js';
import { DashboardView } from '../view/dashboardView.js';

const handlePrediction = async () => {
  const texto = DashboardView.getText();

  if (!texto) {
    DashboardView.displayError("Por favor, digite a letra da música desejada.", handlePrediction);
    return;
  }

  try {
    DashboardView.displayLoading();

    const prediction = await DashboardModel.makePrediction(texto);

    setTimeout(() => {
      DashboardView.displayResult(`Gênero: ${prediction}`);
    }, 1000);

  } catch (error) {
    DashboardView.displayResult(error.message);
  }
};

DashboardView.bindPredictButton(handlePrediction);
