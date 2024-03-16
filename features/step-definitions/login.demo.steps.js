const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

Given(/^user is on the login page$/, async () => {
  await browser.url("https://the-internet.herokuapp.com/login");
});

When(/^user enter username and password$/, async () => {
  await $("#username").setValue("tomsmith");
  await $("#password").setValue("SuperSecretPassword!");
});

When(/^user enter (.*) and (.*)$/, async (username, password) => {
  await $("#username").setValue(username);
  await $("#password").setValue(password);
});

When(/^user click in login button$/, async () => {
  (await $("//i[contains(text(),'Login')]")).click();
});

Then(/^user is navigated to the home pages$/, async () => {
  await expect(browser).toHaveTitle("The Internet");
});

Then(/^this (.*) is dispalyed$/, async (message) => {
  await expect(browser).toHaveTitle(message);
});
