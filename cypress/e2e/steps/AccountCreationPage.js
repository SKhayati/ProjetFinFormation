import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../pages/LoginPageAction";

const login = new LoginPage()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

When("Cliquer sur login", () => {
    login.login()
});

When("Cliquer sur Créer un compte", () => {
    login.creationCompte()
});

When("Renseigner email {string} et mot de passe {string}", (email, password) => {
    login.eMail(email)
    login.password(password)
})

When("Choisir civilité", () => {
    login.gender()
})

When("Compléter la date de naissance {string}", (date) => {
    login.birthDate(date)
})

When("Compléter le code postal {string}", (codePostal) => {
    login.codePostale(codePostal)
})

When("Valider le compte", () => {
    login.validerCompte()
})

Then("Vérifier que le compte est créé", () => {
    login.verifCreationCompte()
})