package com.test.pageLocator;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.test.util.TestBase;

public class signinpageLocator extends TestBase{
	
	public signinpageLocator() {
		PageFactory.initElements(driver, this);
	}
	

	@FindBy(how=How.XPATH,using="//a[text()='Sign in']")
	public WebElement Signinlink;
	@FindBy(how=How.ID,using="userid")
	public WebElement username;
	@FindBy(how=How.XPATH,using="//*[@id=\"signin-continue-btn\"]")
	public WebElement continuebutton;
	@FindBy(how=How.XPATH,using="//*[@id=\"pass\"]")
	public WebElement password;
	@FindBy(how=How.ID,using="sgnBt")
	public WebElement signinbutton;
	@FindBy(how=How.XPATH,using="//*[@id=\"gh-ug\"]/b[1]")
	public WebElement signinsuccessfully;

}
