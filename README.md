# Desafios JS

Desafios para sedimentarmos conhecimentos relacionados a JavaScript e Node.js

___

## Desafios 01

Para verificar os resultados, execute o comando `node nomeDoArquivo.js` . Resolva os desafios com base no seguinte JSON de usuários ( `usuarios01.json` ):

**usuarios01.json**

```json
[
  {
    "id": 1,
    "nome": "Fulano",
    "sobrenome": "da Silva",
    "idade": 19,
    "uf": "SP",
    "cidade": "São Paulo"
  },
  {
    "id": 2,
    "nome": "Ciclano",
    "sobrenome": "da Silva",
    "idade": 91,
    "uf": "SP",
    "cidade": "Santos"
  },
  {
    "id": 3,
    "nome": "Beltrano",
    "sobrenome": "da Silva",
    "idade": 28,
    "uf": "MG",
    "cidade": "Belo Horizonte"
  },
  {
    "id": 4,
    "nome": "Huguinho",
    "sobrenome": "Donald",
    "idade": 82,
    "uf": "RJ",
    "cidade": "Niterói"
  },
  {
    "id": 5,
    "nome": "Zezinho",
    "sobrenome": "Donald",
    "idade": 37,
    "uf": "GO",
    "cidade": "Goiânia"
  },
  {
    "id": 6,
    "nome": "Luizinho",
    "sobrenome": "Donald",
    "idade": 73,
    "uf": "BA",
    "cidade": "Itaparica"
  },
  {
    "id": 7,
    "nome": "Mônica",
    "sobrenome": "de Souza",
    "idade": 46,
    "uf": "CE",
    "cidade": "Canoa Quebrada"
  },
  {
    "id": 8,
    "nome": "Magali",
    "sobrenome": "de Souza",
    "idade": 64,
    "uf": "PR",
    "cidade": "Ilha do Mel"
  },
  {
    "id": 9,
    "nome": "Cascão",
    "sobrenome": "de Souza",
    "idade": 55,
    "uf": "RJ",
    "cidade": "Rio de Janeiro"
  },
  {
    "id": 10,
    "nome": "Cebolinha",
    "sobrenome": "de Souza",
    "idade": 100,
    "uf": "SP",
    "cidade": "São Paulo"
  }
]
```

## Desafio 01.01

Criar uma função que exiba ( `console.log()` ) o nome e sobrenome (numa _string_ só) de cada usuário.
Tente usar a desestruturação.

## Desafio 01.02

Criar uma função que exiba ( `console.log()` ) o nome e cidade (numa _string_ só) apenas dos usuários de RJ.
Tente usar a desestruturação.

## Desafio 01.03

Criar uma função que exiba ( `console.log()` ) um _array_ de cidades - sem repetir valores.
Tente usar a desestruturação.

## Desafio 01.04

Criar uma função que exiba ( `console.log()` ) um objeto com um objeto por UF dentro - e, dentro desse objeto 'UF', as cidades dessa UF (sem repetir) 
Tente usar a desestruturação.
Resultado esperado:

```jsx
{
 SP: [ 'São Paulo', 'Ribeirão Preto' ], 
 RJ: [ 'Rio de Janeiro', 'Niterói' ]
}
```

___

## Desafios 02

Para verificar os resultados, execute o comando `node nomeDoArquivo.js` . Resolva os desafios com base nos seguintes JSONs de produtos e categorias ( `produtos01.json` e `categorias01.json` ):

**produtos01.json**

```json
[
  {
    "id": 1,
    "titulo": "Bola de Futebol",
    "descricao": "Bola tipo dente de leite",
    "preco": 190.00,
    "precoPromo": 90.00,
    "categoriaId": 1,
    "dataLancamento": "12/31/2000"
  },
  {
    "id": 2,
    "titulo": "Saia Justa",
    "descricao": "Atenção - laceia após primeira lavagem",
    "preco": 290.01,
    "precoPromo": 290.00,
    "categoriaId": 2,
    "dataLancamento": "07/13/2021"
  },
  {
    "id": 3,
    "titulo": "Pente para Careca",
    "descricao": "Pra matar a saudades daquela cabeleira",
    "preco": 29.99,
    "precoPromo": 29.99,
    "categoriaId": 3,
    "dataLancamento": "07/01/2021"
  },
  {
    "id": 4,
    "titulo": "Tesoura do Mickey",
    "descricao": "Eu tenho, você não tem",
    "preco": 55.95,
    "precoPromo": 50.95,
    "categoriaId": 4,
    "dataLancamento": "07/01/1996"
  },
  {
    "id": 5,
    "titulo": "Papel Rascunho",
    "descricao": "Quase 100% rabiscado",
    "preco": 3.79,
    "precoPromo": 3.79,
    "categoriaId": 4,
    "dataLancamento": "07/11/2021"
  },
  {
    "id": 6,
    "titulo": "Loção Embelezadora",
    "descricao": "Você fica oh! Uma belezura!",
    "preco": 73.21,
    "precoPromo": 3.21,
    "categoriaId": 3,
    "dataLancamento": "01/31/2020"
  },
  {
    "id": 7,
    "titulo": "Camisa Social Esporte Fino",
    "descricao": "Ideal pra jogadores de golfe",
    "preco": 46.46,
    "precoPromo": 46.46,
    "categoriaId": 2,
    "dataLancamento": "01/10/2018"
  },
  {
    "id": 8,
    "titulo": "Gol de Futebole de Botão",
    "descricao": "Acompanha rede",
    "preco": 64.99,
    "precoPromo": 40.99,
    "categoriaId": 1,
    "dataLancamento": "11/01/2021"
  },
  {
    "id": 9,
    "titulo": "Borracha de Caneta",
    "descricao": "Não funciona com lápis",
    "preco": 4.46,
    "precoPromo": 4.06,
    "categoriaId": 4,
    "dataLancamento": "08/21/2008"
  },
  {
    "id": 10,
    "titulo": "Carimbo \"TOP SECRET\"",
    "descricao": "Acompanha estojo e tinta vermelha",
    "preco": 100.00,
    "precoPromo": 99.99,
    "categoriaId": 4,
    "dataLancamento": "07/10/2021"
  }
]
```

**categorias01.json**

```json
[
  {
    "id": 1,
    "titulo": "Esportes"
  },
  {
    "id": 2,
    "titulo": "Moda"
  },
  {
    "id": 3,
    "titulo": "Beleza"
  },
  {
    "id": 4,
    "titulo": "Papelaria"
  }
]
```

### Desafio 02.01

Criar uma função que exiba ( `console.log()` ) apenas os lançamentos (lançados no mês atual).
Formato esperado: um _array_ de objetos com título, descrição, preço e data de lançamento (no formato brasileiro) por produto

### Desafio 02.02

Criar uma função que exiba ( `console.log()` ) um _array_ apenas com produtos em promoção. 
Para cada produto devemos mostrar uma _string_ única assim: `{TITULO} - de {preco} por apenas {precoPromo}` .
Ah! Mostrar os valores em reais (R$ 99, 00).

### Desafio 02.03

Criar uma função que exiba ( `console.log()` ) um objeto com uma chave por categoria.
Cada categoria terá como valor um _array_ com os produtos pertencentes a ela.
Cada produto será exibido com uma _string_ assim: `{titulo} | "{descricao}"` .

### Desafio 02.04

Criar uma função que exiba uma tabela no console com as colunas:
Categoria (título da categoria), Produto (título do produto), Preço (em R$ 99, 99), Promoção (true ou false), Desconto (em R$ 99, 99 - se não houver desconto, mostrar um hífen)

___

## Desafios 03

Para verificar os resultados, execute o comando `node nomeDoArquivo.js` . Perceba que dessa vez já estamos passando algumas instruções em formato de documentação (JSDoc) - aproveite para utilizar os nomes sugeridos para funções e argumentos.

Resolva os desafios com base no mesmo JSON de usuários ( `usuarios01.json` ) utilizado nos [desafios 01](#desafios-01):

**usuarios01.json**

```json
[
  {
    "id": 1,
    "nome": "Fulano",
    "sobrenome": "da Silva",
    "idade": 19,
    "uf": "SP",
    "cidade": "São Paulo"
  },
  {
    "id": 2,
    "nome": "Ciclano",
    "sobrenome": "da Silva",
    "idade": 91,
    "uf": "SP",
    "cidade": "Santos"
  },
  {
    "id": 3,
    "nome": "Beltrano",
    "sobrenome": "da Silva",
    "idade": 28,
    "uf": "MG",
    "cidade": "Belo Horizonte"
  },
  {
    "id": 4,
    "nome": "Huguinho",
    "sobrenome": "Donald",
    "idade": 82,
    "uf": "RJ",
    "cidade": "Niterói"
  },
  {
    "id": 5,
    "nome": "Zezinho",
    "sobrenome": "Donald",
    "idade": 37,
    "uf": "GO",
    "cidade": "Goiânia"
  },
  {
    "id": 6,
    "nome": "Luizinho",
    "sobrenome": "Donald",
    "idade": 73,
    "uf": "BA",
    "cidade": "Itaparica"
  },
  {
    "id": 7,
    "nome": "Mônica",
    "sobrenome": "de Souza",
    "idade": 46,
    "uf": "CE",
    "cidade": "Canoa Quebrada"
  },
  {
    "id": 8,
    "nome": "Magali",
    "sobrenome": "de Souza",
    "idade": 64,
    "uf": "PR",
    "cidade": "Ilha do Mel"
  },
  {
    "id": 9,
    "nome": "Cascão",
    "sobrenome": "de Souza",
    "idade": 55,
    "uf": "RJ",
    "cidade": "Rio de Janeiro"
  },
  {
    "id": 10,
    "nome": "Cebolinha",
    "sobrenome": "de Souza",
    "idade": 100,
    "uf": "SP",
    "cidade": "São Paulo"
  }
]
```

### Desafio 03.01

Criar função que exiba o objeto do usuário a partir de seu nome completo.

**IMPORTANTE**

Caso o usuário não exista, devemos exibir: `Não encontramos nenhum usuário com nome {{NOME COMPLETO ENVIADO}}` .

**Instruções detalhadas**

```js
/**
 * DESAFIO 01 | Criar função que exiba o objeto do usuário a partir de seu nome completo.
 * 
 * @function lerUsuario
 * @description Função que recebe o nome completo e exibe o usuário com esse nome e sobrenome. IMPORTANTE: caso o usuário não exista, devemos exibir: "Não encontramos nenhum usuário com nome {{NOME COMPLETO ENVIADO}}".
 * @param {String} nomeCompleto 
 * @returns { (Object|String) } Objeto do usuário encontrado ou string com aviso
 * @example <caption>Exemplo com usuário existente</caption>
 * // Retorno esperado
 * { "id": 1, "nome": "Fulano", "sobrenome": "da Silva", "idade": 19, "uf": "SP", "cidade": "São Paulo" }
 * lerUsuario('Fulano da Silva')
 * @example <caption>Exemplo com usuário inexistente</caption>
 * // Retorno esperado
 * "Não encontramos nenhum usuário com nome Fulano de Tal"
 * lerUsuario('Fulano de Tal')
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```js
const lerUsuario = nomeCompleto => {
    // SUA SOLUÇÃO
}
```

```jsx
// Enviando nomeCompleto existente
lerUsuario('Fulano da Silva')
lerUsuario('Beltrano da Silva')
// Enviando nomeCompleto inexistente
lerUsuario('Ciclano de Tal')
```

### Desafio 03.02

Criar função que adicione um novo usuário a partir o objeto enviado.

**IMPORTANTE**

1. Caso não sejam enviados os dados 'nome', 'sobrenome', 'idade', 'uf' e 'cidade', devemos retornar a seguinte mensagem de erro: `Por favor, verifique os dados enviados.`.

2. Caso o usuário já exista (verificação de nome e sobrenome), devemos exibir: `Ops... parece que o usuário {{NOME NOVO USUÁRIO}} {{SOBRENOME NOVO USUÁRIO}} já existe...`.

3. O ID do usuário não deve ser enviado no objeto, ele deve ser definido dentro da função (id do último usuário + 1).

**Instruções detalhadas**

```js
/**
 * DESAFIO 02 | Criar função que inclua um novo usuário no JSON de usuários.
 * 
 * @function adicionarUsuario
 * @description Função que recebe um objeto de novo usuário e o cadastra.
 * 
 * IMPORTANTE:
 * 1. Caso não sejam enviados os dados 'nome', 'sobrenome', 'idade', 'uf' e 'cidade', devemos retornar a seguinte mensagem de erro: "Por favor, verifique os dados enviados.".
 * 2. Caso o usuário já exista (verificação de nome e sobrenome), devemos exibir: "Ops... parece que o usuário {{NOME NOVO USUÁRIO}} {{SOBRENOME NOVO USUÁRIO}} já existe...".
 * 3. O ID do usuário não deve ser enviado no objeto, ele deve ser definido dentro da função (id do último usuário + 1).
 * @param { {} } usuarioNovo - {nome: 'Marcelo', sobrenome: 'Diament', idade: 33, uf: 'SP', cidade: 'São Paulo'}
 * @returns { String } Mensagem de erro ou de sucesso
 * @example <caption>Exemplo com usuário incompleto</caption>
 * // Retorno esperado
 * 'Por favor, verifique os dados enviados.'
 * adicionarUsuario({nome: 'Fulano', sobrenome: 'de Tal'}) 
 * @example <caption>Exemplo com usuário existente</caption>
 * // Retorno esperado
 * 'Ops... parece que o usuário Fulano de Tal já existe...'
 * adicionarUsuario({nome: 'Fulano', sobrenome: 'de Tal', idade: 19, uf: 'SP', cidade: 'São Paulo'})
 * @example <caption>Exemplo com usuário correto e inexistente</caption>
 * // Retorno esperado
 * 'Usuário cadastrado com sucesso'
 * adicionarUsuario({ nome: 'Marcelo', sobrenome: 'Diament', idade: 33, uf: 'SP', cidade: 'São Paulo' })
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```js
const adicionarUsuario = usuarioNovo => {
    // SUA SOLUÇÃO
}
```

```jsx
// Passando dados incompletos
adicionarUsuario({
    sobrenome: 'Diament',
    idade: 33,
    uf: 'SP',
    cidade: 'São Paulo'
})
// Passando dados completos de usuário inexistente (nome e sobrenome)
adicionarUsuario({
    nome: 'Marcelo',
    sobrenome: 'Diament',
    idade: 33,
    uf: 'SP',
    cidade: 'São Paulo'
})
// Passando dados completos de usuário existente (nome e sobrenome)
adicionarUsuario({
    nome: 'Marcelo',
    sobrenome: 'Diament',
    idade: 33,
    uf: 'SP',
    cidade: 'São Paulo'
})
```

### Desafio 03.03

Criar função que atualize um usuário existente.

**IMPORTANTE**

1. O id, o nome e o sobrenome não podem ser alterados, pois estão trabalhando como 'chaves primárias', nunca podem ser alterados.

2. Caso o usuário não exista, devemos exibir: `Não encontramos nenhum usuário com nome {{NOME COMPLETO ENVIADO}}`.

3. Se não recebermos os dados a serem atualizados, devemos exibir `Por favor, verifique os dados enviados.`.

**Instruções detalhadas**

```js
/**
 * DESAFIO 03 | Criar função que edite um usuário existente no JSON de usuários.
 * 
 * DICA: ao desestruturar um objeto, caso não haja aquela chave, podemos fazer o seguinte:
 * 
 * const { idade, uf, cidade } = dadosNovos || {}
 * 
 * Então evitamos o erro e definimos a chave inexistente como undefined.
 * Podemos ainda definir um valor padrão (default), caso a chave não exista:
 * 
 * const { idade = null, uf = null, cidade = null } = dadosNovos || {}
 * 
 * A mesma lógica serve na hora de atualizarmos um valor, veja:
 * 
 * usuarios[indice].chave = valor || usuario.chave
 * 
 * Nesse caso, caso o valor seja undefined, usamos a segunda opção - usuario.chave
 *
 * @function atualizarUsuario
 * @description Função que recebe um nome completo (string) e um objeto com os dados que devem ser atualizados e atualize o usuário.
 *
 * IMPORTANTE:
 * 1. O id, o nome e o sobrenome não podem ser alterados, pois estão trabalhando como 'chaves primárias', nunca podem ser alterados.
 * 2. Caso o usuário não exista, devemos exibir: "Não encontramos nenhum usuário com nome {{NOME COMPLETO ENVIADO}}".
 * 3. Se não recebermos os dados a serem atualizados, devemos exibir "Por favor, verifique os dados enviados.".
 * @param { String } nomeCompleto - "Fulano da Silva"
 * @param { {} } dadosNovos - {idade: 91}
 * @returns { String } Mensagem de erro ou de sucesso
 * @example <caption>Exemplo com usuário incompleto</caption>
 * // Retorno esperado
 * 'Por favor, verifique os dados enviados.'
 * atualizarUsuario('Fulano de Tal')
 * @example <caption>Exemplo com usuário inexistente</caption>
 * // Retorno esperado
 * 'Não encontramos nenhum usuário com nome Fulano de Tal'
 * atualizarUsuario( 'Fulano de Tal', {idade: 91, uf: 'SP', cidade: 'São Paulo'})
 * @example <caption>Exemplo com dados corretos e usuário existente</caption>
 * // Retorno esperado
 * 'Usuário atualizado com sucesso'
 * atualizarUsuario('Fulano da Silva', {idade: 91})
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```jsx
const atualizarUsuario = (nomeCompleto, dadosNovos) => {
  // SUA SOLUÇÃO
}
```

```jsx
// Passando apenas nomeCompleto
atualizarUsuario('Fulano da Silva')
// Passando nomeCompleto (inexistente) e dados (apenas idade)
atualizarUsuario('Fulano de Tal', { idade: 91 })
// Passando nomeCompleto (existente) e dados (apenas idade)
atualizarUsuario('Fulano da Silva', { idade: 91 })
// Passando nomeCompleto (existente) e dados (apenas uf e cidade)
atualizarUsuario('Beltrano da Silva', { uf: 'AL', cidade: 'Maragogi' })
// Passando nomeCompleto (existente) e dados (todos)
atualizarUsuario('Ciclano da Silva', { idade: 13, uf: 'RN', cidade: 'Natal' })
// Passando nomeCompleto (existente) e dados (todos e mais um não previsto) - não devemos incluir dados não previstos
atualizarUsuario('Ciclano da Silva', { idade: 13, uf: 'RN', cidade: 'Natal', 'sexo': 'Masculino' })
```

### Desafio 03.04

Criar função que apague um usuário existente.

**IMPORTANTE**

1. Caso o usuário não exista, devemos exibir: `Não encontramos nenhum usuário com nome {{NOME COMPLETO ENVIADO}}`.

**Instruções detalhadas**

```js
/**
 * DESAFIO 04 | Criar função que remova um usuário existente no JSON de usuários.
 * 
 * @function apagarUsuario
 * @description Função que recebe um nome completo (string) e apaga o usuário no arquivo JSON de usuários.
 *
 * IMPORTANTE:
 * 1. Caso o usuário não exista, devemos exibir: "Não encontramos nenhum usuário com nome {{NOME COMPLETO ENVIADO}}".
 * @param { String } nomeCompleto - "Fulano da Silva"
 * @returns { String } Mensagem de erro ou de sucesso
 * @example <caption>Exemplo com usuário inexistente</caption>
 * // Retorno esperado
 * 'Não encontramos nenhum usuário com nome Fulano de Tal'
 * apagarUsuario( 'Fulano de Tal')
 * @example <caption>Exemplo usuário existente</caption>
 * // Retorno esperado
 * 'Usuário removido com sucesso'
 * apagarUsuario('Fulano da Silva')
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```js
const apagarUsuario = nomeCompleto => {
    // SUA SOLUÇÃO
}
```

```jsx
// Passando nomeCompleto (existente e inexistente)
apagarUsuario('Fulano de Tal')
apagarUsuario('Beltrano da Silva')
```

### Desafio 03.05 - EXTRA

Criar função única que possa executar as diferentes funções que definimos anteriormente.
E, já que vamos pôr a mão na massa, podemos refatorar as funções também.

**Instruções detalhadas**

```js
/**
 * EXTRAS!
 * Fazer uma função única para executar qualquer uma das funções anteriormente criadas. 🤔
 * Como podemos melhorar essas funções? REFATORANDO! =)
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```jsx
const manipularUsuario = (params = { acao: null, nomeCompleto: null, dados: null }) => {
  // SUA SOLUÇÃO
}
```

```jsx
// Sem passar argumentos
manipularUsuario()
// Passando apenas a ação
manipularUsuario({ acao: 'ler' })
manipularUsuario({ acao: 'adicionar' })
manipularUsuario({ acao: 'atualizar' })
manipularUsuario({ acao: 'apagar' })
// Passando apenas nomeCompleto (existente e inexistente)
manipularUsuario({ nomeCompleto: 'Fulano da Silva' })
manipularUsuario({ nomeCompleto: 'Fulano de Tal' })
// Passando apenas dados
manipularUsuario({ dados: { idade: 99 } })
// Passando acao e nomeCompleto (existente e inexistente)
manipularUsuario({ acao: 'ler', nomeCompleto: 'Fulano da Silva' })
manipularUsuario({ acao: 'ler', nomeCompleto: 'Fulano de Tal' })
manipularUsuario({ acao: 'atualizar', nomeCompleto: 'Fulano da Silva' })
manipularUsuario({ acao: 'atualizar', nomeCompleto: 'Fulano de Tal' })
manipularUsuario({ acao: 'adicionar', nomeCompleto: 'Fulano da Silva' })
manipularUsuario({ acao: 'adicionar', nomeCompleto: 'Fulano de Tal' })
manipularUsuario({ acao: 'apagar', nomeCompleto: 'Fulano da Silva' })
manipularUsuario({ acao: 'apagar', nomeCompleto: 'Fulano de Tal' })
// Passando acao e dados
manipularUsuario({ acao: 'ler', dados: { idade: 999 } })
manipularUsuario({ acao: 'atualizar', dados: { idade: 999 } })
manipularUsuario({ acao: 'adicionar', dados: { idade: 999 } })
manipularUsuario({ acao: 'apagar', dados: { idade: 999 } })
// Passando nomeCompleto (existente e inexistente) e dados
manipularUsuario({ nomeCompleto: 'Fulano da Silva', dados: { idade: 9999 } })
manipularUsuario({ nomeCompleto: 'Fulano dos Santos', dados: { idade: 99 } })
// Passando acao, nomeCompleto (existente e inexistente) e dados (completos ou incompletos)
manipularUsuario({ acao: 'ler', nomeCompleto: 'Fulano da Silva', dados: { idade: 999 } })
manipularUsuario({ acao: 'ler', nomeCompleto: 'Fulano de Tal', dados: { idade: 999 } })
manipularUsuario({ acao: 'atualizar', nomeCompleto: 'Fulano da Silva', dados: { idade: 999 } })
manipularUsuario({ acao: 'atualizar', nomeCompleto: 'Fulano de Tal', dados: { idade: 999 } })
manipularUsuario({ acao: 'adicionar', nomeCompleto: 'Fulano da Silva', dados: { idade: 999 } })
manipularUsuario({ acao: 'adicionar', nomeCompleto: 'Fulano de Tal', dados: { idade: 999 } })
manipularUsuario({ acao: 'adicionar', nomeCompleto: 'Fulano da Silva', dados: { idade: 999, uf: 'MG', cidade: 'Ouro Preto' } })
manipularUsuario({ acao: 'adicionar', nomeCompleto: 'Fulano de Tal', dados: { idade: 999, uf: 'MG', cidade: 'Ouro Preto' } })
manipularUsuario({ acao: 'apagar', nomeCompleto: 'Fulano dos Santos', dados: { idade: 999 } })
manipularUsuario({ acao: 'apagar', nomeCompleto: 'Fulano de Tal', dados: { idade: 999 } })
```

___

## DESAFIOS 04

Para verificar os resultados, execute o comando `node nomeDoArquivo.js` . Perceba que dessa vez já estamos passando algumas instruções em formato de documentação (JSDoc) - aproveite para utilizar os nomes sugeridos para funções e argumentos, bem como a forma de exibir a resposta.

Resolva os desafios com base no mesmo JSON de usuários ( `listaPresenca01.json` ):

**listaPresenca01.json**

```json
[
  {
    "id": 1,
    "nome": "Irmão do Jorel",
    "presencas": 8,
    "ausencias": 2,
    "atualizadoEm": "18/07/2021"
  },
  {
    "id": 2,
    "nome": "Lara",
    "presencas": 4,
    "ausencias": 6,
    "atualizadoEm": "18/07/2021"
  },
  {
    "id": 3,
    "nome": "Marcinho",
    "presencas": 10,
    "ausencias": 0,
    "atualizadoEm": "18/07/2021"
  },
  {
    "id": 4,
    "nome": "Beto Cachinhos",
    "presencas": 9,
    "ausencias": 1,
    "atualizadoEm": "18/07/2021"
  },
  {
    "id": 5,
    "nome": "Pablito",
    "presencas": 8,
    "ausencias": 2,
    "atualizadoEm": "18/07/2021"
  },
  {
    "id": 6,
    "nome": "Ana Catarina",
    "presencas": 10,
    "ausencias": 0,
    "atualizadoEm": "18/07/2021"
  },
  {
    "id": 7,
    "nome": "Billy Doidão",
    "presencas": 0,
    "ausencias": 10,
    "atualizadoEm": "18/07/2021"
  },
  {
    "id": 8,
    "nome": "William Shostners",
    "presencas": 6,
    "ausencias": 4,
    "atualizadoEm": "18/07/2021"
  }
]
```

### Desafio 04.01 - SORT

Criar função que retorne um array de alunos ordenados por nome (A a Z).

**Instruções detalhadas**

```jsx
/**
* DESAFIO 01 [SORT]
* 
* Criar função que retorne uma lista de alunos (objetos) ordenados por nome (A a Z).
* @function ordernarAlunosPorNome
* @param {[{}]} listaPresenca 
* @returns {[{}]} Array de objetos com id, nome, presencas, ausencias e atualizadoEm
* @example <caption>Exemplo</caption>
* // Retorno esperado
* [
  {
    "id": 7,
    "nome": "Billy Doidão",
    "presencas": 0,
    "ausencias": 10,
    "atualizadoEm": "07/18/2021"
  },
  {
    "id": 1,
    "nome": "Irmão do Jorel",
    "presencas": 8,
    "ausencias": 2,
    "atualizadoEm": "07/18/2021"
  }
 ]
* ordernarAlunosPorNome(listaPresenca)
*/
```

**Sugestão de 'casca' da função e chamadas para testar**

```jsx
const ordernarAlunosPorNome = listaPresenca => {
  // SUA SOLUÇÃO
}
```

```jsx
// Salvando a resposta numa variável
const listaAlunosOrdenadosPorNome = ordernarAlunosPorNome(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 01 - Ordenar alunos por nome (de A a Z)\n', listaAlunosOrdenadosPorNome)
```

### Desafio 04.02 - SORT

Criar função que retorne um array de alunos ordenados por presença (10 a 0).

**Instruções detalhadas**

```jsx
/**
 * DESAFIO 02 [SORT]
 * 
 * Criar função que retorne uma lista de alunos (objetos) ordenados por frequência (alunos com maior presença primeiro).
 * @function ordernarAlunosPorPresenca
 * @param {[{}]} listaPresenca 
 * @returns {[{}]} Array de objetos com id, nome, presencas, ausencias e atualizadoEm
 * @example <caption>Exemplo</caption>
 * // Retorno esperado
 * [
    {
      "id": 8,
      "nome": "William Shostners",
      "presencas": 6,
      "ausencias": 4,
      "atualizadoEm": "07/18/2021"
    },
    {
      "id": 7,
      "nome": "Billy Doidão",
      "presencas": 0,
      "ausencias": 10,
      "atualizadoEm": "07/18/2021"
    }
   ]
 * ordernarAlunosPorPresenca(listaPresenca)
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```jsx
const ordernarAlunosPorPresenca = listaPresenca => {
  // SUA SOLUÇÃO
}
```

```jsx
// Salvando a resposta numa variável
const listaAlunosOrdenadosPorPresenca = ordernarAlunosPorPresenca(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 02 - Ordenar alunos por presença (de 10 a 0)\n', listaAlunosOrdenadosPorPresenca)
```

### Desafio 04.03 - EVERY

Criar função que diga se há algum aluno que nunca foi à aula (usando o _loop_ `every` ).

**Instruções detalhadas**

```jsx
/**
 * DESAFIO 03 [EVERY]
 * 
 * Criar função que retorne true caso haja ao menos um aluno que nunca veio.
 * @function checarSeHaAlunoQueNuncaVeioComEvery
 * @param {[{}]} listaPresenca 
 * @returns {Boolean} Valor booleano (se há aluno que nunca veio, retorna True, senão retorna False)
 * @example <caption>Exemplo</caption>
 * // Retorno esperado
 * true
 * checarSeHaAlunoQueNuncaVeioComEvery(listaPresenca)
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```jsx
const checarSeHaAlunoQueNuncaVeioComEvery = listaPresenca => {
  // SUA SOLUÇÃO
}
```

```jsx
// Salvando a resposta numa variável
const haAlunoQueNuncaVeioComEvery = checarSeHaAlunoQueNuncaVeioComEvery(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 03 - Verificar se há algum aluno que nunca veio com EVERY\n', haAlunoQueNuncaVeioComEvery)
```

### Desafio 04.04 - SOME

Criar função que diga se há algum aluno que nunca foi à aula (usando o _loop_ `some` ).

**Instruções detalhadas**

```jsx
/**
 * DESAFIO 04 [SOME]
 * 
 * Criar função que retorne true caso haja ao menos um aluno que nunca veio.
 * @function checarSeHaAlunoQueNuncaVeioComSome
 * @param {[{}]} listaPresenca 
 * @returns {Boolean} Valor booleano (se há aluno que nunca veio, retorna True, senão retorna False)
 * @example <caption>Exemplo</caption>
 * // Retorno esperado
 * true
 * checarSeHaAlunoQueNuncaVeioComSome(listaPresenca)
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```jsx
const checarSeHaAlunoQueNuncaVeioComSome = listaPresenca => {
  // SUA SOLUÇÃO
}
```

```jsx
// Salvando a resposta numa variável
const haAlunoQueNuncaVeioComSome = checarSeHaAlunoQueNuncaVeioComSome(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 04 - Verificar se há algum aluno que nunca veio com SOME\n', haAlunoQueNuncaVeioComSome)
```

### Desafio 04.05 - FIND

Criar função que diga se há algum aluno que nunca foi à aula (usando o _loop_ `find` ).

**Instruções detalhadas**

```jsx
/**
 * DESAFIO 05 [FIND]
 * 
 * Criar função que retorne true caso haja ao menos um aluno que nunca veio.
 * 
 * DICA: o find retornará a primeira ocorrência que encontrar dentro da condição que passarmos.
 * Se incluirmos uma negação (!) antes da expressão do find, receberemos false caso ache algum objeto e true caso não ache.
 * Logo, se incluirmos duas negações (!!) antes da expressão, receberemos true caso ache algum objeto e false case não ache.
 * @function checarSeHaAlunoQueNuncaVeioComFind
 * @param {[{}]} listaPresenca 
 * @returns {Boolean} Valor booleano (se há aluno que nunca veio, retorna True, senão retorna False)
 * @example <caption>Exemplo</caption>
 * // Retorno esperado
 * true
 * checarSeHaAlunoQueNuncaVeioComFind(listaPresenca)
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```jsx
const checarSeHaAlunoQueNuncaVeioComFind = listaPresenca => {
  // SUA SOLUÇÃO
}
```

```jsx
// Salvando a resposta numa variável
const haAlunoQueNuncaVeioComFind = !!checarSeHaAlunoQueNuncaVeioComFind(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 05 - Verificar se há algum aluno que nunca veio com FIND\n', haAlunoQueNuncaVeioComFind)
```

### Desafio 04.06 - INCLUDES

Criar função que diga se há algum aluno que nunca foi à aula (usando o _loop_ `includes` ).

**Instruções detalhadas**

```jsx
/**
 * DESAFIO 06 [INCLUDES]
 * 
 * Criar função que retorne true caso haja ao menos um aluno que nunca veio.
 * 
 * NOTA: Construa um array apenas com as presenças para aplicar o includes.
 * @function checarSeHaAlunoQueNuncaVeioComIncludes
 * @param {[{}]} listaPresenca 
 * @returns {Boolean} Valor booleano (se há aluno que nunca veio, retorna True, senão retorna False)
 * @example <caption>Exemplo</caption>
 * // Retorno esperado
 * true
 * checarSeHaAlunoQueNuncaVeioComIncludes(listaPresenca)
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```jsx
const checarSeHaAlunoQueNuncaVeioComIncludes = listaPresenca => {
  // SUA SOLUÇÃO
}
```

```jsx
// Salvando a resposta numa variável
const haAlunoQueNuncaVeioComIncludes = checarSeHaAlunoQueNuncaVeioComIncludes(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 06 - Verificar se há algum aluno que nunca veio com INCLUDES\n', haAlunoQueNuncaVeioComIncludes)
```

### Desafio 04.07 - MAP

Criar função que retorne um array que mostre os alunos com a porcentagem de presença de cada um.

Dica: crie uma função auxiliar para o cálculo de porcentagem.

**Instruções detalhadas**

```jsx
/**
 * DESAFIO 07 [MAP]
 * 
 * Criar função que retorne uma lista de alunos (objetos), cada um com as chaves nome, atualizadoEm e porcentagemPresenca.
 * @function exibirPorcentagemDePresencas
 * @param {[{}]} listaPresenca 
 * @returns {[{}]} Array de objetos com nome, atualizadoEm e porcentagemPresenca
 * @example <caption>Exemplo</caption>
 * // Retorno esperado
 * [
    {
      nome: 'Billy Doidão',
      atualizadoEm: '18/07/2021',
      porcentagemPresenca: '0%'
    },{
      nome: 'William Shostners',
      atualizadoEm: '18/07/2021',
      porcentagemPresenca: '60%'
    }
   ]
 * exibirPorcentagemDePresencas(listaPresenca)
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```jsx
const exibirPorcentagemDePresencas = listaPresenca => {
  // SUA SOLUÇÃO
}
```

```jsx
// Salvando a resposta numa variável
const listaPorcentagem = exibirPorcentagemDePresencas(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 07 - Mapear porcentagem de presença dos alunos\n', listaPorcentagem)
```

### Desafio 04.08 - MAP

Criar função que retorne um array de alunos com o status dele (Aprovado para alunos com no mínimo 70% de presença e Reprovados para os demais).

**Instruções detalhadas**

```jsx
/**
 * DESAFIO 08 [MAP]
 * 
 * Criar função que retorne uma lista de alunos (objetos), cada um com as chaves nome, atualizadoEm e status - a partir do resultado da função anterior (listaPorcentagem).
 * 
 * O status pode ser aprovado (caso tenha no mínimo 70% de presença) ou reprovado (caso tenha menos de 70% de presença).
 * @function exibirStatusAlunos
 * @param {[{}]} listaPorcentagem 
 * @returns {[{}]} Array de objetos com nome, atualizadoEm e status
 * @example <caption>Exemplo</caption>
 * // Retorno esperado
 * [
    { nome: 'Lara', atualizadoEm: '18/07/2021', status: 'Reprovado' },
    { nome: 'Marcinho', atualizadoEm: '18/07/2021', status: 'Aprovado' }
   ]
 * exibirStatusAlunos(listaPresenca)
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```jsx
const exibirStatusAlunos = listaPorcentagem => {
  // SUA SOLUÇÃO
}
```

```jsx
// Salvando a resposta numa variável
const listaStatus = exibirStatusAlunos(listaPorcentagem)
// Exibindo a resposta
console.log('DESAFIO 08 - Mapear status dos alunos\n', listaStatus)
```

### Desafio 04.09 - FILTER

Criar função que retorne um array de alunos reprovados.

**Instruções detalhadas**

```jsx
/**
 * DESAFIO 09 [FILTER]
 * 
 * Criar função que retorne uma lista de alunos reprovados (com nome e data de atualização) - a partir da lista da função anterior (listaStatus)
 * @function exibirAlunosReprovados
 * @param {[{}]} listaStatus 
 * @returns {[{}]} Array de objetos com nome, atualizadoEm e status
 * @example <caption>Exemplo</caption>
 * // Retorno esperado
 * [
    { nome: 'Lara', atualizadoEm: '18/07/2021', status: 'Reprovado' },
    { nome: 'Billy Doidão', atualizadoEm: '18/07/2021', status: 'Reprovado' },
    { nome: 'William Shostners', atualizadoEm: '18/07/2021', status: 'Reprovado' }
   ]
 * exibirAlunosReprovados(listaPresenca)
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```jsx
const exibirAlunosReprovados = listaStatus => {
  // SUA SOLUÇÃO
}
```

```jsx
// Salvando a resposta numa variável
const alunosReprovados = exibirAlunosReprovados(listaStatus)
// Exibindo a resposta
console.log('DESAFIO 09 - Filtrar alunos reprovados\n', alunosReprovados)
```

### Desafio 04.10 - FILTER

Criar função que retorne um array de alunos aprovados.

**Instruções detalhadas**

```jsx
/**
 * DESAFIO 10 [FILTER]
 * 
 * Criar função que retorne uma lista de alunos aprovados (com nome e data de atualização) - a partir da lista da função exibirStatusAlunos (listaStatus)
 * @function exibirAlunosAprovados
 * @param {[{}]} listaStatus 
 * @returns {[{}]} Array de objetos com nome, atualizadoEm e status
 * @example <caption>Exemplo</caption>
 * // Retorno esperado
 * [
    { nome: 'Irmão do Jorel', atualizadoEm: '18/07/2021', status: 'Aprovado' },
    { nome: 'Marcinho', atualizadoEm: '18/07/2021', status: 'Aprovado' },
    { nome: 'Beto Cachinhos', atualizadoEm: '18/07/2021', status: 'Aprovado' },
    { nome: 'Pablito', atualizadoEm: '18/07/2021', status: 'Aprovado' },
    { nome: 'Ana Catarina', atualizadoEm: '18/07/2021', status: 'Aprovado' }
   ]
 * exibirAlunosAprovados(listaPresenca)
 */
```

**Sugestão de 'casca' da função e chamadas para testar**

```jsx
const exibirAlunosAprovados = listaStatus => {
  // SUA SOLUÇÃO
}
```

```jsx
// Salvando a resposta numa variável
const alunosAprovados = exibirAlunosAprovados(listaStatus)
// Exibindo a resposta
console.log('DESAFIO 10 - Filtrar alunos aprovados\n', alunosAprovados)
```
