describe("Login", () => {
  const url = "http://localhost:3001/login";
  
  it("Requests the user account", () => {
    let last_name = 'kaes';
    let dot_number = 387;
    cy.request(`${url}?last_name=${last_name}&dot_number=${dot_number}`).as("student_account");

    cy.get("@student_account").should(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length.of.at.least(1);
      expect(response.body).to.have.length.of.at.most(1);

      expect(response.body[0].last_name).to.eq("Kaes");
      expect(response.body[0].first_name).to.eq("Bary");
      expect(response.body[0].dot_number).to.eq(387);

    });
  });
});