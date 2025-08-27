Feature: Login with cridentials

    @tc-001  @positif
  Scenario Outline: Valide cridentials
    Given je visite le lien "<url>"
    When je saisis le username "<username>"
    And je saisis le password "<password>"
    And je clique sur le bouton Login
    Then j acced a mon dashboard

    @positif
    Examples:
      | url                            | username       | password           |
      | https://www.saucedemo.com/ | standard_user | secret_sauce |
      # | http://192.168.1.95:8001/admin | qa_recette | efi-academy |


