/**
 * Dependências (usuários, path e fs)
 */
 const usuarios = require('./data/usuarios01.json'),
 path = require('path'),
 fs = require('fs')

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
const lerUsuario = nomeCompleto => {}
// lerUsuario('Fulano da Silva')
// lerUsuario('Beltrano da Silva')
// lerUsuario('Ciclano de Tal')

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
const adicionarUsuario = usuarioNovo => {}
// adicionarUsuario({ sobrenome: 'Diament', idade: 33, uf: 'SP', cidade: 'São Paulo' })
// adicionarUsuario({ nome: 'Marcelo', sobrenome: 'Diament', idade: 33, uf: 'SP', cidade: 'São Paulo' })
// adicionarUsuario({ nome: 'Marcelo', sobrenome: 'Diament', idade: 33, uf: 'SP', cidade: 'São Paulo' })

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
const atualizarUsuario = (nomeCompleto, dadosNovos) => {}
// atualizarUsuario('Fulano da Silva')
// atualizarUsuario('Fulano de Tal', { idade: 91 })
// atualizarUsuario('Fulano da Silva', { idade: 91 })
// atualizarUsuario('Beltrano da Silva', { uf: 'AL', cidade: 'Maragogi' })
// atualizarUsuario('Ciclano da Silva', { idade: 13, uf: 'RN', cidade: 'Natal' })

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
const apagarUsuario = nomeCompleto => {}
// apagarUsuario('Fulano de Tal')
// apagarUsuario('Beltrano da Silva')

/**
* EXTRA!
* Fazer uma função única para executar qualquer uma das funções anteriormente criadas. 🤔
* Como podemos melhorar essas funções? REFATORANDO! =)
*/
const acoesUsuario = {
 ler: lerUsuario,
 adicionar: adicionarUsuario,
 atualizar: atualizarUsuario,
 apagar: apagarUsuario
}

const manipularUsuario = (params = { acao: null, nomeCompleto: null, dados: null }) => {}
// manipularUsuario()
// manipularUsuario({ acao: 'ler' })
// manipularUsuario({ acao: 'adicionar' })
// manipularUsuario({ acao: 'atualizar' })
// manipularUsuario({ acao: 'xxx' })
// manipularUsuario({ acao: 'apagar' })
// manipularUsuario({ nomeCompleto: 'Fulano da Silva' })
// manipularUsuario({ nomeCompleto: 'Fulano de Tal' })
// manipularUsuario({ dados: { idade: 99 } })
// manipularUsuario({ dados: { uf: 'SP' } })
// manipularUsuario({ dados: { cidade: 'São Paulo' } })
// manipularUsuario({ dados: { uf: 'SP', cidade: 'São Paulo' } })
// manipularUsuario({ dados: { idade: 99, cidade: 'São Paulo' } })
// manipularUsuario({ dados: { idade: 99, uf: 'SP' } })
// manipularUsuario({ dados: { idade: 999, uf: 'MG', cidade: 'Ouro Preto' } })
// manipularUsuario({ acao: 'ler', nomeCompleto: 'Fulano da Silva' })
// manipularUsuario({ acao: 'ler', nomeCompleto: 'Fulano de Tal' })
// manipularUsuario({ acao: 'atualizar', nomeCompleto: 'Fulano da Silva' })
// manipularUsuario({ acao: 'atualizar', nomeCompleto: 'Fulano de Tal' })
// manipularUsuario({ acao: 'adicionar', nomeCompleto: 'Fulano da Silva' })
// manipularUsuario({ acao: 'adicionar', nomeCompleto: 'Fulano de Tal' })
// manipularUsuario({ acao: 'xxx', nomeCompleto: 'Fulano da Silva' })
// manipularUsuario({ acao: 'xxx', nomeCompleto: 'Fulano de Tal' })
// manipularUsuario({ acao: 'apagar', nomeCompleto: 'Fulano da Silva' })
// manipularUsuario({ acao: 'apagar', nomeCompleto: 'Fulano de Tal' })
// manipularUsuario({ acao: 'ler', dados: { idade: 999 } })
// manipularUsuario({ acao: 'atualizar', dados: { idade: 999 } })
// manipularUsuario({ acao: 'adicionar', dados: { idade: 999 } })
// manipularUsuario({ acao: 'xxx', dados: { idade: 999 } })
// manipularUsuario({ acao: 'apagar', dados: { idade: 999 } })
// manipularUsuario({ nomeCompleto: 'Fulano da Silva', dados: { idade: 9999 } })
// manipularUsuario({ nomeCompleto: 'Fulano dos Santos', dados: { idade: 99 } })
// manipularUsuario({ acao: 'ler', nomeCompleto: 'Fulano da Silva', dados: { idade: 999 } })
// manipularUsuario({ acao: 'ler', nomeCompleto: 'Fulano de Tal', dados: { idade: 999 } })
// manipularUsuario({ acao: 'atualizar', nomeCompleto: 'Fulano da Silva', dados: { idade: 999 } })
// manipularUsuario({ acao: 'atualizar', nomeCompleto: 'Fulano de Tal', dados: { idade: 999 } })
// manipularUsuario({ acao: 'adicionar', nomeCompleto: 'Fulano da Silva', dados: { idade: 999 } })
// manipularUsuario({ acao: 'adicionar', nomeCompleto: 'Fulano de Tal', dados: { idade: 999 } })
// manipularUsuario({ acao: 'adicionar', nomeCompleto: 'Fulano da Silva', dados: { idade: 999, uf: 'MG', cidade: 'Ouro Preto' } })
// manipularUsuario({ acao: 'adicionar', nomeCompleto: 'Fulano de Tal', dados: { idade: 999, uf: 'MG', cidade: 'Ouro Preto' } })
// manipularUsuario({ acao: 'xxx', nomeCompleto: 'Fulano da Silva', dados: { idade: 999 } })
// manipularUsuario({ acao: 'xxx', nomeCompleto: 'Fulano de Tal', dados: { idade: 999 } })
// manipularUsuario({ acao: 'apagar', nomeCompleto: 'Fulano dos Santos', dados: { idade: 999 } })
// manipularUsuario({ acao: 'apagar', nomeCompleto: 'Fulano de Tal', dados: { idade: 999 } })
