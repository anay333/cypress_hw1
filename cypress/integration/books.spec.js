// books.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

beforeEach(() => {
  cy.visit("/");
  cy.login("test@test.com", "test")
});

it("shouldAddBook", () => {
  cy.addBook("Книга №1", "Незнайка", "Букварь");
  cy.contains("Букварь").should("be.visible");
});

it("shouldAddBookToFavorites", () => {
  cy.addBookWithFavorite("Книга №1", "Незнайка", "Букварь");
  cy.get("h4").click();
  cy.contains("Букварь").should("be.visible");
});

it("shoulDeleteBookFromFavorites", () => {
  cy.addBookWithFavorite("Книга №1", "Незнайка", "Букварь");
  cy.get("h4").click();
  cy.deleteBookFromFavoriteForTitle("Книга №1");
  cy.contains("Книга №1").should("not.exist");
});