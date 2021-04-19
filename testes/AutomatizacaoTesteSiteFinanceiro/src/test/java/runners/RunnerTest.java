package runners;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber-report"},
		features = "src/test/resources/features", 
		glue = "stepsDefinitions",
		snippets = SnippetType.CAMELCASE,
		monochrome = true,
		dryRun = false
)
public class RunnerTest {

	@BeforeClass
	public static void reset() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "C:\\Driver\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://seubarriga.wcaquino.me");
		Thread.sleep(2000);
		driver.findElement(By.id("email")).sendKeys("mel@mel.com");
		driver.findElement(By.id("senha")).sendKeys("1234");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();
	}
}
