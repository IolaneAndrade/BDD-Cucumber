package stepsDefinitions;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class ContaSteps {

	private WebDriver driver;

	@Dado("que estou acessando a aplicacao")
	public void queEstouAcessandoAAplicacao() {
//		acessarSistema();
		System.setProperty("webdriver.chrome.driver", "C:\\Driver\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		// driver.manage().window().maximize();
		driver.get("https://seubarriga.wcaquino.me");
		// driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}

	@Quando("informo o campo usuario como {string}")
	public void informoOCampoUsuarioComo(String usuario) throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.id("email")).sendKeys(usuario);
	}

	@Quando("o campo senha como {string}")
	public void oCampoSenhaComo(String senha) {
		driver.findElement(By.id("senha")).sendKeys(senha);
	}

	@Quando("seleciono entrar")
	public void selecionoEntrar() {
		driver.findElement(By.tagName("button")).click();
	}

	@Entao("visualizo a pagina inicial")
	public void visualizoAPaginaInicial() {
		String sucesso = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		assertEquals("Bem vindo, Mel!", sucesso);
	}

	@Quando("seleciono Contas")
	public void selecionoContas() {
		driver.findElement(By.linkText("Contas")).click();
	}

	@Quando("seleciono Adicionar")
	public void selecionoAdicionar() {
		driver.findElement(By.linkText("Adicionar")).click();
	}

	@Quando("informo a conta {string}")
	public void informoAConta(String conta) {
		driver.findElement(By.id("nome")).sendKeys(conta);
	}

	@Quando("seleciono Salvar")
	public void selecionoSalvar() {
		driver.findElement(By.tagName("button")).click();
	}

	@Entao("recebo a mensagem {string}")
	public void receboAMensagem(String mensagemTeste) {
		String mensagemSite = driver.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText();
		assertEquals(mensagemTeste, mensagemSite);
	}

	@Before()
	public void setUp() {
		System.out.println("Inicio teste");
	}

	@After()
	public void tearDown(Scenario scenario) {
		final byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");
		driver.quit();
	}

}
