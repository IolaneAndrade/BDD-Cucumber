$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AlugarFilme.feature");
formatter.feature({
  "name": "Alugar Filme",
  "description": "  Como um usuario\n  Eu quero cadastrar alugueis de filmes\n  Para controlar precos e datas de entrega",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Locadora"
    }
  ]
});
formatter.scenario({
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Locadora"
    },
    {
      "name": "@alugarFilme"
    }
  ]
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preco do aluguel seja de R$ 3",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preco do aluguel sera de R$ 3",
  "keyword": "Entao "
});
formatter.match({
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraDeR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega sera em 1 dia",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme sera de 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeraDeUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Locadora"
    }
  ]
});
formatter.step({
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ]
    },
    {
      "cells": [
        "preco",
        "3"
      ]
    },
    {
      "cells": [
        "tipo",
        "comum"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilme(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preco do aluguel sera de R$ 3",
  "keyword": "Entao "
});
formatter.match({
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraDeR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega sera em 1 dia",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme sera de 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeraDeUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Nao deve alugar filme sem estoque",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Locadora"
    }
  ]
});
formatter.step({
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nao sera possivel por falta de estoque",
  "keyword": "Entao "
});
formatter.match({
  "location": "AlugarFilmeSteps.naoSeraPossivelPorFaltaDeEstoque()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme sera de 0 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeraDeUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condicaoes especiais para categoria extendida",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Locadora"
    }
  ]
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preco do aluguel seja de R$ 4",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo de aluguel seja extendido",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preco do aluguel sera de R$ 8",
  "keyword": "Entao "
});
formatter.match({
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraDeR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega sera em 3 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuacao recebida sera de 2 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aPontuacaoRecebidaSeraDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve alugar para categoria comum",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Locadora"
    }
  ]
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preco do aluguel seja de R$ 4",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo de aluguel seja comum",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preco do aluguel sera de R$ 4",
  "keyword": "Entao "
});
formatter.match({
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraDeR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega sera em 1 dia",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuacao recebida sera de 1 ponto",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.aPontuacaoRecebidaSeraDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Deve dar condicoes conforme tipo do aluguel",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "name": "o preco do aluguel seja de R$ \"\u003cpreco\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "que o tipo de aluguel seja \"\u003ctipoAluguel\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "name": "o preco do aluguel sera de R$ \"\u003cvalor\u003e\"",
  "keyword": "Entao "
});
formatter.step({
  "name": "a data de entrega sera em \"\u003cdataEntrega\u003e\" dia",
  "keyword": "E "
});
formatter.step({
  "name": "a pontuacao recebida sera de \"\u003cpontuacao\u003e\" ponto",
  "keyword": "E "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "preco",
        "tipoAluguel",
        "valor",
        "dataEntrega",
        "pontuacao"
      ]
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ]
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ]
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Deve dar condicoes conforme tipo do aluguel",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Locadora"
    }
  ]
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preco do aluguel seja de R$ \"4\"",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que o tipo de aluguel seja \"extendido\"",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o preco do aluguel sera de R$ \"8\"",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a data de entrega sera em \"3\" dia",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a pontuacao recebida sera de \"2\" ponto",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Deve dar condicoes conforme tipo do aluguel",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Locadora"
    }
  ]
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preco do aluguel seja de R$ \"4\"",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que o tipo de aluguel seja \"comum\"",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o preco do aluguel sera de R$ \"4\"",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a data de entrega sera em \"1\" dia",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a pontuacao recebida sera de \"1\" ponto",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Deve dar condicoes conforme tipo do aluguel",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Locadora"
    }
  ]
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preco do aluguel seja de R$ \"10\"",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que o tipo de aluguel seja \"extendido\"",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o preco do aluguel sera de R$ \"20\"",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a data de entrega sera em \"3\" dia",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a pontuacao recebida sera de \"2\" ponto",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Deve dar condicoes conforme tipo do aluguel",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@Locadora"
    }
  ]
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preco do aluguel seja de R$ \"5\"",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que o tipo de aluguel seja \"semanal\"",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.queOTipoDeAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o preco do aluguel sera de R$ \"15\"",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a data de entrega sera em \"7\" dia",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a pontuacao recebida sera de \"3\" ponto",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});