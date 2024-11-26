import { DashboardModel } from '../model/dashboardModel.js';
import { DashboardView } from '../view/dashboardView.js';

const handlePrediction = async () => {
  const texto = DashboardView.getText();

  if (!texto) {
    DashboardView.displayResult("Por favor, digite a letra da música desejada.");
    return;
  }

  try {
    const prediction = await DashboardModel.makePrediction(texto);
    DashboardView.displayResult(`Gênero: ${prediction}`);
  } catch (error) {
    DashboardView.displayResult(error.message);
  }
};

DashboardView.bindPredictButton(handlePrediction);
