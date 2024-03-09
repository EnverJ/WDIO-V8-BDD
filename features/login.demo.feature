Feature: Test login functionlity

  Scenario: check login with valid credentials
    Given user is on the login page
    When user enter <username> and <password>
    And user click in login button
    Then this <message> is dispalyed

    Examples: 
      | username  | password             | message      |
      | tomsmith  | SuperSecretPassword! | The Internet |
      | tomsmiths | SuperSecretPassword  | The Internet |
