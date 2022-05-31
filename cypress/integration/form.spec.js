describe("Scenario 1", () => {
  it("testing inputs and form", () => {
    cy.visit("login.html");
    cy.get("form").submit();
  });
});

describe("My Second Test password", () => {
  it("Scenario 2", () => {
    cy.visit("login.html");
    cy.get("#email").type("mohamed@instabug.com");
    cy.get("#password").type("ljsjfweA1rr");
    cy.get("form").submit();
  });
});

describe("My Third Test password", () => {
  it("Scenario 3", () => {
    cy.visit("login.html");
    cy.get("#email").type("mohamed3@instabug.com");
    cy.get("#password").type("A12345678");
    cy.get("form").submit();
  });
});

describe("My fourth Test password", () => {
  it("Scenario 4", () => {
    cy.visit("login.html");
    cy.get("#email").type("dddd").focus();
  });
});
