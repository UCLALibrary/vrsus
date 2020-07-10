// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js + TypeScript App");
  });
});

describe("Visible navbar", () => {
  it("Visits the app root url and the navbar is visible", () => {
    cy.visit("/");
    cy.contains("navbar", "About", "Give Us Feedback");
  });
});
