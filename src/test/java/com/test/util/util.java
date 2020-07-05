package com.test.util;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class util {
	
	public static long page_Load_Timeout = 50;
	public static long implicitly_Wait = 30;
	
	public static void takescreenshot (WebDriver driver, String screenshot) {
		
		File scrFile  = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		
		String CurrentDir = System.getProperty("user.dir");
		
		try {
			FileUtils.copyFile(scrFile, new File(CurrentDir+"/ScreenShots/"+screenshot+".png"));
			
		}catch(IOException e) {
			e.printStackTrace();
		}
	}

}
