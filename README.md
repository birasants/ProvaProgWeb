#  Cardápio Interativo com JavaScript, HTML e CSS

Este projeto é um cardápio interativo desenvolvido com JavaScript, HTML e CSS, integrado a um servidor back-end usando Node.js (com Nodemon), Express e PostgreSQL (PG). Ele permite aos usuários cadastrar, atualizar e deletar pratos do cardápio, proporcionando uma experiência dinâmica e interativa.
  </p>


## :man_mechanic: Linguagens e Ferramentas

![Skills](https://skillicons.dev/icons?i=nodejs,js,express,postgres,html,css)

## :ladder: Fucionalidades do Projeto

- [x] Cadastrar Pratos: Adiciona novos pratos ao cardápio com descrições e preços.
- [x] Atualizar Pratos: Permite a edição das informações dos pratos já existentes.
- [x] Listagem de Pratos
- [x] Deletar Pratos: Remove pratos do cardápio.


## :facepunch: Como Usar

- Clone o repositório para sua máquina local.
- No terminal, navegue até o diretório do projeto e execute npm install para instalar as dependências.
- As depedências utilizadas nesse projeto foram PG, Nodemon e Express.
- Na parte de configurações do PostgreSQL insira os seus respectivos dados.
- Inicie o servidor usando npm run dev. O Nodemon garantirá que o servidor seja reiniciado automaticamente após cada alteração no código.
- Utilize o Insomnia ou qualquer outra ferramenta de teste de API para enviar requisições para os endpoints fornecidos pela API.

## :triangular_flag_on_post: Contribua com o projeto

- Realize o Fork
- Faça as modificações necessárias
- Realize a Pull Request (PR)

## :computer: Rodando o Projeto

```shell
# 1. Clone o projeto

git clone <urlProjeto>

# 2. Instale as dependências

npm install

# 3. Execute a API

npm run dev
```

## :sassy_man: Endpoints

- POST /prato/cadastro - Cadastra o prato
- GET /lista/prato - lista os pratos disponíveis
- POST /adicionar/pedido - Adiciona o Pedido enviado pelo usuário
- GET /transacao/:id - Listar uma transação específica do usuario logado através do Id da transação
- PUT /atualizar/prato - Atualiza os dados de um prato informado
- DELETE /deletar/pratos - Deleta um prato específico
- GET /prato/:prato_id - Retorna um prato específico através do id informado


