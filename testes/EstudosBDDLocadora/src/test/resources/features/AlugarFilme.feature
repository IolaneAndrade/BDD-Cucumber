#language: pt
#encoding: UTF-8
@Locadora
Funcionalidade: Alugar Filme
  Como um usuario
  Eu quero cadastrar alugueis de filmes
  Para controlar precos e datas de entrega

  @alugarFilme
  Cenario: Deve alugar um filme com sucesso
    Dado um filme com estoque de 2 unidades
    E o preco do aluguel seja de R$ 3
    Quando alugar
    Entao o preco do aluguel sera de R$ 3
    E a data de entrega sera em 1 dia
    E o estoque do filme sera de 1 unidade

  Cenario: Deve alugar um filme com sucesso
    Dado um filme
      | estoque |     2 |
      | preco   |     3 |
      | tipo    | comum |
    Quando alugar
    Entao o preco do aluguel sera de R$ 3
    E a data de entrega sera em 1 dia
    E o estoque do filme sera de 1 unidade

  Cenario: Nao deve alugar filme sem estoque
    Dado um filme com estoque de 0 unidades
    Quando alugar
    Entao nao sera possivel por falta de estoque
    E o estoque do filme sera de 0 unidade

  Cenario: Deve dar condicaoes especiais para categoria extendida
    Dado um filme com estoque de 2 unidades
    E o preco do aluguel seja de R$ 4
    E que o tipo de aluguel seja extendido
    Quando alugar
    Entao o preco do aluguel sera de R$ 8
    E a data de entrega sera em 3 dias
    E a pontuacao recebida sera de 2 pontos

  Cenario: Deve alugar para categoria comum
    Dado um filme com estoque de 2 unidades
    E o preco do aluguel seja de R$ 4
    E que o tipo de aluguel seja comum
    Quando alugar
    Entao o preco do aluguel sera de R$ 4
    E a data de entrega sera em 1 dia
    E a pontuacao recebida sera de 1 ponto

  Esquema do Cenario: Deve dar condicoes conforme tipo do aluguel
    Dado um filme com estoque de 2 unidades
    E o preco do aluguel seja de R$ "<preco>"
    E que o tipo de aluguel seja "<tipoAluguel>"
    Quando alugar
    Entao o preco do aluguel sera de R$ "<valor>"
    E a data de entrega sera em "<dataEntrega>" dia
    E a pontuacao recebida sera de "<pontuacao>" ponto

    Exemplos: 
      | preco | tipoAluguel | valor | dataEntrega | pontuacao |
      |     4 | extendido   |     8 |           3 |         2 |
      |     4 | comum       |     4 |           1 |         1 |
      |    10 | extendido   |    20 |           3 |         2 |
      |     5 | semanal     |    15 |           7 |         3 |
