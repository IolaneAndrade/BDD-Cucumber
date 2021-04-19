package stepsDefinitions;

import static org.junit.Assert.assertEquals;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import entidades.Filme;
import entidades.NotaAluguel;
import entidades.TipoAluguel;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import servicos.AluguelService;
import utils.DateUtils;

public class AlugarFilmeSteps {

	private Filme umFilme = new Filme();
	private AluguelService umAluguel = new AluguelService();
	private NotaAluguel umaNota = new NotaAluguel();
	private String erro;
	private TipoAluguel tipoAluguel =  TipoAluguel.COMUM; 

	@Dado("um filme com estoque de {int} unidades")
	public void umFilmeComEstoqueDeUnidades(int quantidade) {
		umFilme.setEstoque(quantidade);
	}

	@Dado("o preco do aluguel seja de R$ {int}")
	public void oPrecoDoAluguelSejaDeR$(int preco) {
		umFilme.setAluguel(preco);
	}
	
	@Dado("um filme")
	public void umFilme(DataTable dataTable) {
	    Map<String, String> map = dataTable.asMap(String.class, String.class);
	    umFilme.setEstoque(Integer.parseInt(map.get("estoque")));
	    umFilme.setAluguel(Integer.parseInt(map.get("preco")));
	    String tipo = map.get("tipo");
	    tipoAluguel = tipo.equals("semanal")? TipoAluguel.SEMANAL: tipo.equals("extendido")? TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;
	}

	@Quando("alugar")
	public void alugar() {
		try {
			umaNota = umAluguel.alugar(umFilme, tipoAluguel);
		} catch (RuntimeException e) {
			erro = e.getMessage();
		}
	}

	@Entao("o preco do aluguel sera de R$ {int}")
	public void oPrecoDoAluguelSeraDeR$(int preco) {
		assertEquals(preco, umaNota.getPreco(), 0);

	}

	@Entao("o estoque do filme sera de {int} unidade")
	public void oEstoqueDoFilmeSeraDeUnidade(int quantidade) {
		assertEquals(quantidade, umFilme.getEstoque());
	}

	@Entao("nao sera possivel por falta de estoque")
	public void naoSeraPossivelPorFaltaDeEstoque() {
		assertEquals("Este filme possui zero unidades em estoque", erro);
	}
	
	@Dado("que o tipo de aluguel seja (.*)")
	public void queOTipoDeAluguelSejaExtendido(String tipo) {
	    tipoAluguel = tipo.equals("semanal")? TipoAluguel.SEMANAL: tipo.equals("extendido")? TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;
	}

	@Entao("a data de entrega sera em {int} dia(s)")
	public void aDataDeEntregaSeraEmDias(int dia) {
	    Date dataEsperada = DateUtils.obterDataDiferencaDias(dia);
	    Date dataReal = umaNota.getDataEntrega();
	    
	    DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
	    
	    assertEquals(format.format(dataEsperada), format.format(dataReal));
	}

	@Entao("a pontuacao recebida sera de {int} ponto(s)")
	public void aPontuacaoRecebidaSeraDePontos(int pontuacao) {
	    assertEquals(pontuacao, umaNota.getPontuacao());
	}

}
