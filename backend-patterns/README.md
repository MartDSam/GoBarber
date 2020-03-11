# Informações

    - Middlewares -> Funções usadas para manipular as informações que estão na requizição de uma rota.

## Pacotes
    - bcryptjs: Utilizado para criptografar as senhas
    - sequelize: Muda a forma como a aplicação se comunica com o banco de dados
      - pg e pg-hstore: Para utilizar o dialeto postgre
    - date-fns: Utilizado para formatar datas
    - express-async-erros: Permite o express detectar erros dentro de funções assicronas
    - youch: Faz tratamento das mensagens de error, para uma melhor visualização
    - dotenv: Utilizado para carregar as variaveis de ambiente .env

### Upload de arquivos
    - multer

### Pacotes de e-mail
    - nodemailer: Utilizado para enviar e-mails
    - express-handlebars: Integração handlebars com o express e permite inserir HTML nos emails do nodemailer
    - nodemailer-express-handlebars: Integração do nodemailer com o express-handlebars
    - bee-queue: Ferramenta de fila para trabalhos em segundo plano

### Bancos de dados
    - Postgre: Banco de dados relacional, trabalha com tabelas e é bom para vários conteúdos relacionados
    - mongodb: Banco de dados não relacional, melhor para dados não estruturados e sem relacionamento focado em performance.
    - redis:alpine: Extremamente performático, consiguimos salvar apenas chave e valor.

### Docker
    - docker ps : Lista containers ativos
    - docker ps -a : Lista containers ativos e inativos
    - docker rm containerID : Remove container
    - docker stop containerID : Pausa container
    - Redis: docker run --name redisqualquernome -p 6379:6379 -d -t redis:alpine
