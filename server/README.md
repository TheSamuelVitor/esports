# Server Backend

- package.json contém todas as informações relacionadas a aplicação:

## API RESTful

- usa todos os métodos HTTP de acordo;
  - GET: para mostrar os dados;
  - POST: para adicionar dados;
  - PUT: atualizar dados;
  - PATCH: atualização específica;
  - DELETE: deletar dados;
- usa corretamente os códigos de resposta do HTTP:
  - 2xx - Sucesso;
  - 3xx - Redirecionamento;
  - 4xx - Erro na requisição;
  - 5xx - Erro no lado do servidor;

## Parametros

- Query:
  - Sempre devem ser nomeados
  - Usados para persistir estado
  - Vem antes do ponto de interrogação
  - Ex: localhost:3000/ads?page=2&sort=title
- Route:
  - Parametros não nomeados
  - Algo mais específico, identificação de recurso
  - Ex: localhost:3000/ads/5
- Body
  - Varias informacoes em uma mesma requisicao
  - Não se revela na url, mas por tras
  - Por exemplo quando se envia um JSON na criação de algo
