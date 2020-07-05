$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signinpage.feature");
formatter.feature({
  "line": 1,
  "name": "Signin Functionality",
  "description": "",
  "id": "signin-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify user can Signin successfully",
  "description": "",
  "id": "signin-functionality;verify-user-can-signin-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter username",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify user can signin successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 8
    }
  ],
  "location": "signinpageSteps.launch(String)"
});
formatter.result({
  "duration": 1372786000,
  "status": "passed"
});
formatter.match({
  "location": "signinpageSteps.click_on_Sign_in_link()"
});
formatter.result({
  "duration": 1135296600,
  "status": "passed"
});
formatter.match({
  "location": "signinpageSteps.enter_username()"
});
formatter.result({
  "duration": 735310600,
  "status": "passed"
});
formatter.match({
  "location": "signinpageSteps.click_on_continue_button()"
});
formatter.result({
  "duration": 184990500,
  "status": "passed"
});
formatter.match({
  "location": "signinpageSteps.enter_password()"
});
formatter.result({
  "duration": 300915900,
  "status": "passed"
});
formatter.match({
  "location": "signinpageSteps.click_on_signin_button()"
});
formatter.result({
  "duration": 1582474600,
  "status": "passed"
});
formatter.match({
  "location": "signinpageSteps.verify_user_can_signin_successfully()"
});
formatter.result({
  "duration": 30070590500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"gh-ug\"]/b[1]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-ROMM88M\u0027, ip: \u0027192.168.254.93\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\lisaf\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50831}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f7ffd5ac809feb30e0ae1cf89127a2b6\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"gh-ug\"]/b[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy24.isDisplayed(Unknown Source)\r\n\tat com.test.pageAction.signinpageAction.Verifyusercansigninsuccessfully(signinpageAction.java:38)\r\n\tat stepsDef.signinpageSteps.verify_user_can_signin_successfully(signinpageSteps.java:47)\r\n\tat ✽.Then Verify user can signin successfully(signinpage.feature:11)\r\n",
  "status": "failed"
});
});