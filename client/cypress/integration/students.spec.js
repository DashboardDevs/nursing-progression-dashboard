describe("Students", () => {
  const url = "http://localhost:3001/student";
  
  it("Requests the student accounts", () => {
    cy.request(url).as("student_accounts");

    cy.get("@student_accounts").should(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length.of.at.least(1);

      response.body.forEach((student) => {
        expect(student.perms).to.eq(0);
      });
    });
  });
});