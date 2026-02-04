# API de Previsão das Condições do Mar

Esta API fornece previsões meteorológicas e condições do mar para praias específicas, utilizando dados do NOAA e armazenados em MongoDB.

## Tecnologias Utilizadas

- Node.js com ES Modules
- Express.js
- MongoDB
- Moment.js para manipulação de datas
- CORS para controle de acesso

## Instalação

```sh
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

- `ENV_API_PORT`: Porta do servidor (ex: 3000)
- `URI_MONGO`: URI de conexão do MongoDB
- `DB_MONGO`: Nome do banco de dados
- `TABLE_MONGO`: Nome da coleção

## Execução

```sh
npm start
```

Para modo debug (com watch):

```sh
npm run debug
```

## Endpoints

### GET /forecast

Retorna a previsão atual e semanal das condições do mar.

**Resposta de Sucesso (200):**
```json
{
  "status": "ok",
  "forecast": {
    "currentTemp": "25",
    "condition": "Sol",
    "conditionIcon": "☀️",
    "waveHeight": "1.2",
    "waveDirection": "Sudeste",
    "waveDirectionIcon": "↖️",
    "windSpeed": "10.5",
    "windDirection": "Nordeste",
    "windDirectionIcon": "↙️",
    "forecast": [...]
  }
}
```

**Resposta de Erro (500):**
```json
{
  "status": "error",
  "message": "Failed to fetch forecast"
}
```

## Estrutura do Projeto

- `server.js`: Ponto de entrada da aplicação
- `config.js`: Configurações e imports
- `module/serviceDB.js`: Conexão com MongoDB
- `module/serviceWeather/`: Lógica de processamento das previsões

## Melhorias Futuras

- Implementar pool de conexões MongoDB
- Adicionar validação de entrada
- Implementar testes unitários
- Melhorar segurança (restringir CORS)
