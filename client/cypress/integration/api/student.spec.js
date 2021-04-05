describe("Student Controller", () => {
  const baseUrl = "http://localhost:3001/student";
  
  it("Requests all student accounts", () => {
    cy.request(baseUrl).as("student_accounts");

    cy.get("@student_accounts")
      .then(res => {
        expect(res.status).to.eq(200);

        expect(res.body).to.have.length.of.at.least(1);

        res.body.forEach((student) => {
          expect(student.perms).to.eq(0);
        });
      })
  });

  it("Requests student accounts with a specific advisor id", () => {
    const advisor_id = 1001; // Adam Advisor advisor account
    cy.request(`${baseUrl}/advisor/${advisor_id}`).as("student_accounts");

    cy.get("@student_accounts").should(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length.of.at.least(1);

      response.body.forEach((student) => {
        expect(student.advisor_id).to.eq(advisor_id);
        expect(student.perms).to.eq(0);
      });
    });
  });

  it("Requests a student account with a specific id", () => {
    const student_id = 1; // Bary Kaes
    cy.request(`${baseUrl}/${student_id}`).as("student_account");

    cy.get("@student_account")
      .then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.of.at.least(1);
        expect(response.body).to.have.length.of.at.most(1);

        let student = response.body[0];

        expect(student.id).to.eq(student_id);
        expect(student.perms).to.eq(0);
      });
  });
});