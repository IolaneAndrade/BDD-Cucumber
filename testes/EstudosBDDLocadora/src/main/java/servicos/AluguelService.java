package servicos;

import javax.management.RuntimeErrorException;

import entidades.Filme;
import entidades.NotaAluguel;
import entidades.TipoAluguel;
import utils.DateUtils;

public class AluguelService {

	public NotaAluguel alugar(Filme filme, TipoAluguel tipoAluguel) {

		if (filme.getEstoque() == 0) {
			throw new RuntimeErrorException(null, "Este filme possui zero unidades em estoque");
		}

		NotaAluguel nota = new NotaAluguel();

		switch (tipoAluguel) {
		case COMUM:
			nota.setPreco(filme.getAluguel());
			nota.setDataEntrega(DateUtils.obterDataDiferencaDias(1));
			nota.setPontuacao(1);

			break;

		case EXTENDIDO:
			nota.setPreco(filme.getAluguel() * 2);
			nota.setDataEntrega(DateUtils.obterDataDiferencaDias(3));
			nota.setPontuacao(2);

			break;

		case SEMANAL:
			nota.setPreco(filme.getAluguel() * 3);
			nota.setDataEntrega(DateUtils.obterDataDiferencaDias(7));
			nota.setPontuacao(3);

			break;

		default:
			System.out.println("Tipo de aluguel n�o existe");
			break;
		}

		filme.setEstoque(filme.getEstoque() - 1);

		return nota;
	}

}
