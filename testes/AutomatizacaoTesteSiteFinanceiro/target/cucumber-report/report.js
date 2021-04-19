$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Contas.feature");
formatter.feature({
  "name": "Cadastrar Contas",
  "description": "  Como um usuario \n  Gostaria de cadastrar contas\n  Para que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@conta"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Deve validar regras de cadastro de conta",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ]
    },
    {
      "cells": [
        "Conta de teste da Mel",
        "Conta adicionada com sucesso!"
      ]
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ]
    },
    {
      "cells": [
        "Conta de teste da Mel",
        "Já existe uma conta com esse nome!"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "ContaSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o campo usuario como \"mel@mel.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "ContaSteps.informoOCampoUsuarioComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o campo senha como \"1234\"",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.oCampoSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "ContaSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "ContaSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar regras de cadastro de conta",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@conta"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"Conta de teste da Mel\"",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ContaSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "ContaSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o campo usuario como \"mel@mel.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "ContaSteps.informoOCampoUsuarioComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o campo senha como \"1234\"",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.oCampoSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "ContaSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "ContaSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar regras de cadastro de conta",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@conta"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ContaSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "ContaSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o campo usuario como \"mel@mel.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "ContaSteps.informoOCampoUsuarioComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o campo senha como \"1234\"",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.oCampoSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "ContaSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "ContaSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar regras de cadastro de conta",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@conta"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"Conta de teste da Mel\"",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "ContaSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ContaSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});