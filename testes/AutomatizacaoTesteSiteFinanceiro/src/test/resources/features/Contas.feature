# language: pt
# encoding: utf-8
@conta
Funcionalidade: Cadastrar Contas
  
  Como um usuario 
  Gostaria de cadastrar contas
  Para que eu possa distribuir meu dinheiro de uma forma mais organizada

  Contexto: 
    Dado que estou acessando a aplicacao
    Quando informo o campo usuario como "mel@mel.com"
    E o campo senha como "1234"
    E seleciono entrar
    Entao visualizo a pagina inicial
    Quando seleciono Contas
    E seleciono Adicionar

  Esquema do Cenario: Deve validar regras de cadastro de conta
    E informo a conta "<conta>"
    E seleciono Salvar
    Entao recebo a mensagem "<mensagem>"

    Exemplos: 
      | conta                 | mensagem                           |
      | Conta de teste da Mel | Conta adicionada com sucesso!      |
      |                       | Informe o nome da conta            |
      | Conta de teste da Mel | Já existe uma conta com esse nome! |
