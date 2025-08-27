/// <reference types="cypress" />


class LoginPage {
    // web elements
    elements = {
        loginButton: () => cy.get("#login-button"),
        userName: () => cy.get("#user-name"),
        password: () => cy.get("#password"),
        errorMessage: ()=> cy.get('[data-test="error"]')
    }

    // actions
    saisirUsernam(username) {
        this.elements.userName().type(username)
    }

    saisirPassword(password){
        this.elements.password().type(password)
    }

    cliqueSurLogin(){
        this.elements.loginButton().click()
    }

    genererErreur(){
    this.elements.errorMessage().should(
            'have.text',
            'Epic sadface: Username and password do not match any user in this service'
        );
    }

    doLogin(username, password){
        this.saisirUsernam(username)
        this.saisirPassword(password)
        this.cliqueSurLogin()
    }

}

export default new LoginPage();