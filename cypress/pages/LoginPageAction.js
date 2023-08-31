const creationCompteSelector = '.SignInForm_signInForm__signup_WVhGZ > a'
const seConnecterSelector = '[data-testid="login-button"]'
const inputMailSelector = '#email'
const inputPasswordSelector = '.PasswordInput_passwordInput__input_JySuY > .Input_input__content_ccW9l'
const checkboxGenreSelector = '#gender-f'
const inputBirthdateSelector = '#birthDate'
const zipCodeSelector = '#zip'
const validateButtonSelector = '.longButton__content'

export class LoginPage {

    creationCompte() {
        cy.get(creationCompteSelector).click()
    }

    login() {
        cy.get(seConnecterSelector).click()
    }

    eMail(email) {
        cy.get(inputMailSelector).type(email)
    }
    password(pwd) {
        cy.get(inputPasswordSelector).type(pwd)
    }

    gender() {
        cy.get(checkboxGenreSelector).check()
    }

    birthDate(date) {
        cy.get(inputBirthdateSelector).type(date)
    }

    codePostale(cp) {
        cy.get(zipCodeSelector).type(cp)
    }

    validerCompte() {
        cy.get(validateButtonSelector).click()
    }

    verifCreationCompte() {
        cy.get(validateButtonSelector).should('be.visible')
    }
}