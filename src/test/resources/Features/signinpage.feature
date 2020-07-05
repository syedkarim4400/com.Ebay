Feature: Signin Functionality
@Test
Scenario: Verify user can Signin successfully

Given Launch "<URL>"
When click on Sign in link
Then enter username 
Then click on continue button
Then enter password
Then click on signin button
Then Verify user can signin successfully
