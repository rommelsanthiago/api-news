<h1 align="center">API de busca de noticias</h1>

## Descrição
#### Essa é uma api de busca de noticias que pode ser usada para busacar noticias por pais, categoria, por uma frase ou uma palavra chave.
#### Logo abaixo você encontra as rotas disponiveis para pesquisa

## Tecnologias
<img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' /><img src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' /><img src='https://img.shields.io/badge/Axios-FFFFFF?style=for-the-badge&logo=axios&logoColor=black' /><img src='https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white' />

## Rotas
### - `/` Receba todas as noticias referentes ao Brasil
### - `/country/:country` Receba uma lista de noticias do pais especificado
Exemplo: `https://localhost:3003/country/us` recebe noticias referentes ao pais Estados Unidos

Opções disponiveis: `ae`,`ar`,`at`,`au`,`be`,`bg`,`br`,`ca`,`ch`,`cn`,`co`,`cu`,`cz`,`de`,`eg`,`fr`,`gb`,`gr`,`hk`,`hu`,`id`,`ie`,`il`,`in`,`it`,`jp`,`kr`,`lt`,`lv`,`ma`,`mx`,`my`,`ng`,`nl`,`no`,`nz`,`ph`,`pl`,`pt`,`ro`,`rs`,`ru`,`sa`,`se`,`sg`,`si`,`sk`,`th`,`tr`,`tw`,`ua`,`us`,`ve`,`za`

### - `/category/:category` Receba noticias referente a uma categoria especifica
Exemplo: `https://localhost:3003/category/business` recebe noticias relacionadas a negocios

Opções disponiveis:
`business`,`entertainment`,`generalhealths`,`cience`,`sports`,`technology`

### - `/country/:country/category/:category` Recebe noticias do pais e da categoria especificado
Exemplo: `https://localhost:3003/country/fr/category/entertainment` recebe noticias relacionadas ao entretenimento frances

### - `/keywords` Recebe noticias referente ao termo da busca ou uma palavra-chave
Exemplo: 
```
  https://localhost:3003/keywords
  Content-Type: application/json
   {
      "q": "spacex"
   }
 ```
 recebe noticias que tenha uma frase ou uma palavra-chave referente a spacex
