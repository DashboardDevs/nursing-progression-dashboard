describe("Routes", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Logs into a student account, redirecting to the student page", () => {
      cy.get("input[name='username']")
        .eq(0)
        .type('kaes.387');
      cy.get("input[name='password']")
        .eq(0)
        .type('password')
      cy.get("button[type='submit']")
        .eq(0)
        .click();
      cy.wait(500);
      cy.location("pathname", { timeout: 60000 }).should("include", "/student");
    });

    it("Logs into an advisor account, redirecting to the advisor page", () => {
      cy.get("input[name='username']")
        .eq(0)
        .type('ackerman.249');
      cy.get("input[name='password']")
        .eq(0)
        .type('password')
      cy.get("button[type='submit']")
        .eq(0)
        .click();
      cy.wait(500);
      cy.location("pathname", { timeout: 60000 }).should("include", "/advisor");
    });

    it("Redirects to Update page from Student Page", () => {
      cy.get("input[name='username']")
        .eq(0)
        .type('kaes.387');
      cy.get("input[name='password']")
        .eq(0)
        .type('password')
      cy.get("button[type='submit']")
        .eq(0)
        .click();
      cy.wait(500);

      cy.get("a[href='/update']")
        .eq(0)
        .click();

      cy.location("pathname", { timeout: 60000 }).should("include", "/update");
    });
  });
