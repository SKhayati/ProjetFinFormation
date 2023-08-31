Feature: Account Creation Page

    Feature Description
    Scenario: Création de compte
        Given Aller sur le site de TF1
        When Cliquer sur login
        And Cliquer sur Créer un compte
        And Renseigner email "cypressformation@yopmail.com2" et mot de passe "Test&123"
        And Choisir civilité
        And Compléter la date de naissance "02/12/1990"
        And Compléter le code postal "78500"
        And Valider le compte
        Then Vérifier que le compte est créé