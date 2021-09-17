/// <reference types="cypress" />

describe("Treasure Hunt Game", function () {
  it("Check site is active", function () {
    cy.visit("https://smileytreasurehunt.netlify.app/");
  });

  it("Has a score board", function () {
    cy.get(".score-style").should("have.length", 1);
  });

  it("Has a timer", function () {
    cy.get(".timer-style").should("have.length", 1);
  });

  it("Has a input field", function () {
    cy.get("#answerInput").should("have.length", 1);
  });
});
