# School Manager-API

## :memo: Descrição do projeto
O projeto School Manager é uma API para gerenciamento escolar. Possibilita o cadastro de alunos, professores e criação de turmas, utilizando um professor e até 20 alunos.

A aplicação utiliza a biblioteca Bull, responsável pelo gerenciamento de filas (queues) com suporte a prioridade e retry para determinados tipos de jobs. A persistência das filas é realizada através do Redis.

Foi desenvolvida em TypeScript, seguindo padrões de projeto como SOLID, DDD e Clean Architecture. Esses padrões têm como objetivo promover a separação de preocupações, modularidade, testabilidade e escalabilidade do código.

O framework Express.js foi utilizado para criação das APIs e queries SQL foram empregadas para acessar os dados no banco de dados PostgreSQL.

## :wrench: Tecnologias Utilizadas

Express.js, TypeScript, PostgreSQL, Redis, Bull(Queue Lib) e Docker.

<img align="left" height="50em" src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png" />
<img align="left" height="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
<img align="left" height="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
<img align="left" height="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg" />
<img align="left" height="40em" src="https://github.com/DevPhde/SchoolManager-API/assets/113299561/375ca4a3-cfdf-4ef0-b4c4-499a7f2f3ccb"/>
<img align="left" height="50em" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
<br>
<br>

## :rocket: Implementação futura
* Sem planos futuros para o mesmo.

## Como Rodar o Projeto
Observação: Para rodar o projeto é necessário ter o Docker instalado e configurado na máquina.

Para executar o projeto, siga os passos abaixo:

1. Abra o terminal e navegue até a pasta raiz do projeto.

2. Execute o seguinte comando:
```
docker-compose up
```
Esse comando irá gerar as imagens do Redis e do PostgreSQL e inicializará o servidor na porta 3000.

Observação: É importante lembrar que a primeira execução do comando pode levar alguns minutos, pois o Docker precisa baixar as imagens necessárias para o projeto.

3. Acesse o servidor através do endereço `http://localhost:3000`.

Com esses passos, o projeto deverá estar rodando corretamente na sua máquina.

## :books: Documentação da API
Documentação criada utilizando Swagger e está disponível em ```localhost:3000/doc-api```.
## :dart: Status do projeto
Concluído.
