Feature: Login in test website

    As a user, I can login in the website and see the secure page

    Scenario Outline: As a user, I can login in the website and see the secure page
        Given I open "https://the-internet.herokuapp.com/login"
        When I enter user <username> and pass <password>
        Then I should see a flash message saying <message>

        Examples:
            | username      | password             | message                        |
            | tomsmith      | SuperSecretPassword! | You logged into a secure area! |
            | jorgeMohedano | randompass929        | Your username is invalid!      |