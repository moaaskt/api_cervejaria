# API Cervejaria

Uma API para gerenciar informações sobre cervejas.

## Visão Geral

A API Cervejaria é um projeto desenvolvido para gerenciar informações sobre diferentes tipos de cervejas, incluindo detalhes sobre cada cerveja, como nome, estilo, teor alcoólico, etc. Ela oferece endpoints que permitem aos usuários obter informações sobre cervejas específicas, listar todas as cervejas disponíveis e adicionar novas cervejas ao sistema.

## Recursos

- Listagem de cervejas
- Detalhes de cerveja por ID
- Adição de novas cervejas

## Documentação da API

A documentação completa da API está disponível [aqui](link_para_documentacao_da_api).

## Exemplo de uso:

###  Retorna a lista de todas as cervejas disponíveis.

```http

GET /cervejas
```
Esta rota retorna uma lista de todas as cervejarias cadastradas.

###  Adiciona uma nova cerveja ao sistema.

```http
POST /cadastrar-cerveja
```
Envie um JSON no corpo da solicitação contendo os detalhes da cervejaria para criar uma nova cerveja.


### Buscar Cerveja pelo ABV:

```http
GET /buscar-cerveja-abv
```
buscar cerveja na ordem decrescente pela maior porcentagem de álcool.

### Buscar a ceveja pelo nome

```http
GET /buscar-cerveja/:nome
```
Substitua ':nome' pelo nome da cerveja desejada.

### Buscar cerveja por nacionalidade

```http
GET /buscar-cerveja-nacionalidade/:nacionalidade
```
Substitua ':nacionalidade' pelo nacionalidade da cerveja desejada.

### Atualizar Informações de uma Cerveja:

```http
PUT /cervejas/:id
```
Substitua :id pelo ID da cerveja que deseja atualizar e envie um JSON no corpo da solicitação com os novos detalhes.

### Remover uma Cerveja:

```http
DELETE /deletar-cerveja/:id
```
Substitua :id pelo ID da cervejaria que deseja excluir.




## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB (ou outro banco de dados utilizado)
- Outras bibliotecas e ferramentas relacionadas

## Status do Desenvolvimento

O projeto API Cervejaria está em desenvolvimento ativo. Atualmente, estamos trabalhando na implementação das funcionalidades principais e na melhoria da documentação.

Próximas etapas incluem:

- Implementar autenticação de usuário
- Melhorar a validação de entrada
- Adicionar testes automatizados

## Licença

Este projeto está sob a Licença [Nome da Licença]. Para mais detalhes, consulte o arquivo [LICENSE](link_para_arquivo_license).

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
