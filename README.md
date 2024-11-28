# Quiz

Projeto desenvolvido para nossa A3 da matéria de Sistemas Distribuidos e Mobile.

## Objetivo

Desenvolver uma aplicação web distribuída utilizando contêineres Docker, na qual o frontend se comunica com o backend por meio de uma web service RESTful. Esta atividade visa proporcionar aos alunos experiência prática com a orquestração de contêineres, criação de APIs RESTful e a comunicação entre microserviços.

## Requisitos

- 1. Frontend: O frontend deve ser desenvolvido em uma linguagem de escolha dos alunos (HTML, CSS, e Javascript com frameworks como React ou Angular, ou uma aplicação simples em Flask).

- 2. Backend: O backend deve ser uma API RESTful desenvolvida com uma linguagem de servidor (Python com Flask ou Node.js com Express), com rotas para adicionar e consultar livros.

- 3. Banco de Dados: O banco de dados pode ser implementado com SQLite ou PostgreSQL.

### Entregáveis

Os alunos deverão entregar o código-fonte da aplicação, o arquivo docker-compose.yml, e uma documentação detalhada explicando cada componente e o processo de execução.

## Obtendo o projeto

Ao clonar o repositório ou fazer o download do arquivo zip para testar executar os seguintes passos:

- Verifique se o Docker já está instalado na sua máquina. Caso não esteja, siga os passos de instalação presentes no [site oficial do Docker](https://www.docker.com/products/docker-desktop/);
- Ao entrar na pasta do projeto, execute o comando `docker-compose up --build` no terminal, para que sejam instaladas as dependências necessárias e os conteiners sejam configurados e inicializados automaticamente;
