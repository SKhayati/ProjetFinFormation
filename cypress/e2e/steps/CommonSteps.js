import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPage } from "../../pages/CommonPage";

const commonPage = new CommonPage()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Given("Aller sur le site de TF1", () => {
    commonPage.webSite()
});