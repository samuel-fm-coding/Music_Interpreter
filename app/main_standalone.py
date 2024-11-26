#pip install fastapi
#pip install joblib
#pip install uvicorn
#pip install scikit-learn

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import uvicorn

# Inicializar o app FastAPI
app = FastAPI()

# Adicione o middleware CORS ao app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite qualquer origem (pode especificar domínios específicos)
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos HTTP
    allow_headers=["*"],  # Permite todos os headers
)

# Carregar o modelo com joblib
modelo = joblib.load('models/ai_v2.robson')


# Modelo de dados para receber o texto
class TextoEntrada(BaseModel):
    texto: str

@app.post("/api/v1/ai/music/prediction")
async def realizar_predicao(dados: TextoEntrada):
    try:
        # Realizar a predição
        predicao = modelo.predict([dados.texto])
        # Retornar a predição em formato JSON
        return {"predicao": predicao[0]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Código para rodar o servidor com uvicorn diretamente no script
if __name__ == "__main__":
    uvicorn.run("main_standalone:app", host="0.0.0.0", port=8000, reload=True)