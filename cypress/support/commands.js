// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("checkIfElementInvalid", (selector) => {
  cy.get(selector)
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
});

Cypress.Commands.add("addBook", (title, description, authors) => {
  cy.wait(1000);
  cy.contains("Books").click();
  cy.contains("Add new").click();
  cy.get("#title").type(title);
  cy.get("#description").type(description);
  cy.get("#authors").type(authors);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBookWithFavorite", (title, description, authors) => {
  cy.wait(1000);
  cy.contains("Books").click();
  cy.contains("Add new").click();
  cy.get("#title").type(title);
  cy.get("#description").type(description);
  cy.get("#authors").type(authors);
  cy.wait(1000);
  cy.get("#favorite").click();
  cy.contains("Submit").click();
});

Cypress.Commands.add("deleteBookFromFavoriteForTitle", (title) => {
  cy.contains(title).contains("Delete from favorite").click();
});