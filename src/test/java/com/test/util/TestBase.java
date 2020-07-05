package com.test.util;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {
	
	public static WebDriver driver;
	public static Properties prop;
	
	public TestBase() {
		prop = new Properties();
		
		FileInputStream fis;
		try {
			fis = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\com\\test\\config\\config.properties");
			
			prop.load(fis);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void initialization() {
		String Browser = prop.getProperty("browser");
		
		if(Browser.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver","C:\\Driver\\chromedriver.exe\\");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().pageLoadTimeout(util.page_Load_Timeout,TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(util.implicitly_Wait,TimeUnit.SECONDS);
		}
		else if (Browser.equals("FF")) {
		
	}
	

}
	public static void geturl(String URL) {
		driver.get(prop.getProperty("url"));
	}
	
}
