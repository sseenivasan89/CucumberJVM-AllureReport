package Runners;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/Features", 
	glue = { "Steps" }, 
	tags = "@search",
	plugin = { "pretty", "html:test-output",  
			"json:target/cucumber-report/cucumber.json",
			"io.qameta.allure.cucumber5jvm.AllureCucumber5Jvm"
			}, 	
	dryRun = false, monochrome = true
	)
public class RunnerTest {
	
	
}
