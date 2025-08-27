Feature: Login with cridentials to saucedemo

  @smoke @login @valide @tc-001
  Scenario: Login with valid username and valide Password
  
    Given je visite l url "https://www.saucedemo.com/"
    When je saisis le username "standard_user"
    And je saisis le password  "secret_sauce"
    And je clique sur le bouton login
    Then je suis redirige vers la page d accueil

  @smoke @login @invalide @tc-002
  Scenario: Login with Invalide Username and Valide Password
    Given je visite l url "https://www.saucedemo.com/"
    When je saisis le username "invalide_username"
    And je saisis le password  "secret_sauce"
    And je clique sur le bouton login
    Then un message d'erreur s affiche "Epic sadface: Username and password do not match any user in this service"

  @smoke @login @invalide @tc-003
  Scenario: Login with Valide Username and Invalide Password
    Given je visite l url "https://www.saucedemo.com/"
    When je saisis le username "standard_user"
    And je saisis le password  "invalide_password"
    And je clique sur le bouton login
    Then un message d'erreur s affiche "Epic sadface: Username and password do not match any user in this service"
  
