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
const ordernarAlunosPorNome = listaPresenca => {
  // SUA SOLUÇÃO
}
// Salvando a resposta numa variável
const listaAlunosOrdenadosPorNome = ordernarAlunosPorNome(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 01 - Ordenar alunos por nome (de A a Z)\n', listaAlunosOrdenadosPorNome)

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
const ordernarAlunosPorPresenca = listaPresenca => {
  // SUA SOLUÇÃO
}
// Salvando a resposta numa variável
const listaAlunosOrdenadosPorPresenca = ordernarAlunosPorPresenca(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 02 - Ordenar alunos por presença (de 10 a 0)\n', listaAlunosOrdenadosPorPresenca)

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
const checarSeHaAlunoQueNuncaVeioComEvery = listaPresenca => {
  // SUA SOLUÇÃO
}
// Salvando a resposta numa variável
const haAlunoQueNuncaVeioComEvery = checarSeHaAlunoQueNuncaVeioComEvery(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 03 - Verificar se há algum aluno que nunca veio com EVERY\n', haAlunoQueNuncaVeioComEvery)

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
const checarSeHaAlunoQueNuncaVeioComSome = listaPresenca => {
  // SUA SOLUÇÃO
}
// Salvando a resposta numa variável
const haAlunoQueNuncaVeioComSome = checarSeHaAlunoQueNuncaVeioComSome(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 04 - Verificar se há algum aluno que nunca veio com SOME\n', haAlunoQueNuncaVeioComSome)

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
const checarSeHaAlunoQueNuncaVeioComFind = listaPresenca => {
  // SUA SOLUÇÃO
}
// Salvando a resposta numa variável
const haAlunoQueNuncaVeioComFind = !!checarSeHaAlunoQueNuncaVeioComFind(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 05 - Verificar se há algum aluno que nunca veio com FIND\n', haAlunoQueNuncaVeioComFind)

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
const checarSeHaAlunoQueNuncaVeioComIncludes = listaPresenca => {
  // SUA SOLUÇÃO
}
// Salvando a resposta numa variável
const haAlunoQueNuncaVeioComIncludes = checarSeHaAlunoQueNuncaVeioComIncludes(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 06 - Verificar se há algum aluno que nunca veio com INCLUDES\n', haAlunoQueNuncaVeioComIncludes)

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
const exibirPorcentagemDePresencas = listaPresenca => {
  // SUA SOLUÇÃO
}
// Salvando a resposta numa variável
const listaPorcentagem = exibirPorcentagemDePresencas(listaPresenca)
// Exibindo a resposta
console.log('DESAFIO 07 - Mapear porcentagem de presença dos alunos\n', listaPorcentagem)

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
const exibirStatusAlunos = listaPorcentagem => {
  // SUA SOLUÇÃO
}
// Salvando a resposta numa variável
const listaStatus = exibirStatusAlunos(listaPorcentagem)
// Exibindo a resposta
console.log('DESAFIO 08 - Mapear status dos alunos\n', listaStatus)

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
const exibirAlunosReprovados = listaStatus => {
  // SUA SOLUÇÃO
}
// Salvando a resposta numa variável
const alunosReprovados = exibirAlunosReprovados(listaStatus)
// Exibindo a resposta
console.log('DESAFIO 09 - Filtrar alunos reprovados\n', alunosReprovados)

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
const exibirAlunosAprovados = listaStatus => {
  // SUA SOLUÇÃO
}
// Salvando a resposta numa variável
const alunosAprovados = exibirAlunosAprovados(listaStatus)
// Exibindo a resposta
console.log('DESAFIO 10 - Filtrar alunos aprovados\n', alunosAprovados)
