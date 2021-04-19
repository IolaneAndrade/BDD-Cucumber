package utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.core.api.Scenario;

public class Utils {

	public static WebDriver driver;

	public static void acessarSistema() {
		System.setProperty("webdriver.chrome.driver", "C:\\Driver\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://seubarriga.wcaquino.me");
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

	}

	public static void capturarTela(Scenario scenario) {
		final byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");
	}
}
