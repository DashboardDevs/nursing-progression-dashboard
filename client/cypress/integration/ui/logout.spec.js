describe("Log out", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Logs out from the student page", () => {
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

      cy.get("button#Logout").click();
      cy.location("pathname", { timeout: 60000 }).should("eq", "/");
    });

    it("Logs out from the advisor page", () => {
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

      cy.get("button#Logout").click();
      cy.location("pathname", { timeout: 60000 }).should("eq", "/");
    });

    it("Logs out from the update request page (student)", () => {
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

      cy.get("a[href='/request']")
        .eq(0)
        .click();

      cy.location("pathname", { timeout: 60000 }).should("include", "/request");

      cy.get("button#Logout").click();
      cy.location("pathname", { timeout: 60000 }).should("eq", "/");
    });

    it("Logs out from the update page (advisor)", () => {
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

      cy.get("a[href='/update']")
        .eq(0)
        .click();

      cy.location("pathname", { timeout: 60000 }).should("include", "/update");

      cy.get("button#Logout").click();
      cy.location("pathname", { timeout: 60000 }).should("eq", "/");
    });
  });
