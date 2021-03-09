describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Redirects to Student page after logging in as a student", () => {
    cy.get("input[name='username']")
      .eq(0)
      .type("kaes.15");

    cy.get("input[name='password']")
      .eq(0)
      .type("password");

    cy.get("button[type='submit']")
      .eq(0)
      .click();
    cy.wait(500);

    cy.get("h1.text-scarlet").eq(0).should('contain', "Kaes, Bary");
    cy.location("pathname", { timeout: 60000 }).should("include", "/student");
  });

  it("Redirects to Advisor page after logging in as an advisor", () => {
    cy.get("input[name='username']")
      .eq(0)
      .type("ackerman.249");

    cy.get("input[name='password']")
      .eq(0)
      .type("password");

    cy.get("button[type='submit']")
      .eq(0)
      .click();
    cy.wait(500);

    cy.location("pathname", { timeout: 60000 }).should("include", "/advisor");
  });
});