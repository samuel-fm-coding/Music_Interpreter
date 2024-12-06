export const DashboardModel = {
  async makePrediction(texto) {
    try {
      const response = await fetch('http://localhost:8000/api/v1/ai/music/prediction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ texto }),
      });


      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Erro desconhecido");
      }

      const data = await response.json();
      return data.predicao;
    } catch (error) {
      throw new Error(`A conexão com o servidor falhou: ${error.message}`);
    }
  },
};
