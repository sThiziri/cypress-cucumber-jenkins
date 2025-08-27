
/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
Given('je visite l url {string}', (url) => {
    cy.visit(url);
});
When('je saisis le username {string}', (username) => {
    cy.get('#user-name').type(username);
});


Then('je suis redirige vers la page d accueil', () => {
    cy.url().should('include', '/inventory.html');
});
Then("un message d'erreur s affiche {string}", (errorMessage) => {
    cy.get('[data-test="error"]').should('have.text', errorMessage);
});

When('je clique sur le bouton login', () => {
  // Write code here that turns the phrase above into concrete actions
  cy.get("#login-button").click();
})

When('je saisis le password  {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
  cy.get("#password").type(s);
})






