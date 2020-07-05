package com.test.pageAction;

import com.test.pageLocator.signinpageLocator;
import com.test.util.TestBase;

import com.test.util.util;

import junit.framework.Assert;

public class signinpageAction extends TestBase {
	
	signinpageLocator SigninpageLocator = new signinpageLocator();
	
	public void credential(String username) {
		SigninpageLocator.username.sendKeys(username);
		
	}
	
	public void credential1(String password) {
		SigninpageLocator.password.sendKeys(password);
	}
	
	public void clickonSigninlink() {
		SigninpageLocator.Signinlink.click();
		util.takescreenshot(driver, "Signin Page");
	}
	
	public void clickoncontinuebutton() {
		SigninpageLocator.continuebutton.click();
	}
	

	public void clickonsigninbutton() {
		SigninpageLocator.signinbutton.click();
	}
	
	public void Verifyusercansigninsuccessfully() {
		boolean success= SigninpageLocator.signinsuccessfully.isDisplayed();
		Assert.assertTrue(success);
		util.takescreenshot(driver, "Profile Page");
	}
}


