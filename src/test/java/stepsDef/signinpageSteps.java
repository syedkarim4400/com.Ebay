package stepsDef;

import com.test.pageAction.signinpageAction;
import com.test.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class signinpageSteps extends TestBase {
	
	signinpageAction action = new signinpageAction();


	@Given("^Launch \"([^\"]*)\"$")
	public void launch(String URL) throws Throwable {
		geturl(URL);
	}

	@When("^click on Sign in link$")
	public void click_on_Sign_in_link() throws Throwable {
	    action.clickonSigninlink();
	}

	@Then("^enter username$")
	public void enter_username() throws Throwable {
	    action.credential(prop.getProperty("username"));
	}

	@Then("^click on continue button$")
	public void click_on_continue_button() throws Throwable {
	    action.clickoncontinuebutton();
	}

	@Then("^enter password$")
	public void enter_password() throws Throwable {
	    action.credential1(prop.getProperty("password"));
	}

	@Then("^click on signin button$")
	public void click_on_signin_button() throws Throwable {
		action.clickonsigninbutton();
	}

	@Then("^Verify user can signin successfully$")
	public void verify_user_can_signin_successfully() throws Throwable {
	    action.Verifyusercansigninsuccessfully();
	}

}
