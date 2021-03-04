describe("Routes", () => {
    before(() => {
      cy.visit("/");
    });
  
    it("Redirects to Student page from Login page", () => {
      cy.get(".text-center > a")
        .eq(1)
        .click();
      cy.location("pathname", { timeout: 60000 }).should("include", "/student");
    });
  });