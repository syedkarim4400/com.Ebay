package com.test.testRunner;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import com.test.util.TestBase;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {"src/test/resources/Features"},format= {"html:target/site/cucumber-pretty"},
glue = "stepsDef",
tags = {"@Test"})


public class TestRunner extends AbstractTestNGCucumberTests {

@BeforeTest
	
	public void SetUp() {
		TestBase test = new TestBase();
		test.initialization();
	}
	
	@AfterTest
	
	public void tearDown() {
		TestBase test = new TestBase();
		TestBase.driver.quit();
	}
}
