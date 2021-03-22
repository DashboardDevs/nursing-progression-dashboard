/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
describe("User Controller", () => {
  const url = "http://localhost:3001/login";
  
  it("Requests a student account", () => {
    let last_name = 'kaes';
    let dot_number = 387;
    cy.request(`${url}?last_name=${last_name}&dot_number=${dot_number}`).as("student_account");

    cy.get("@student_account")
      .then(res => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.length.of.at.least(1);
        expect(res.body).to.have.length.of.at.most(1);

        let data = res.body[0];

        expect(data.last_name).to.eq("Kaes");
        expect(data.first_name).to.eq("Bary");
        expect(data.dot_number).to.eq(387);
      });
  });

  it("Requests an advisor account", () => {
    let last_name = 'ackerman';
    let dot_number = 249;
    cy.request(`${url}?last_name=${last_name}&dot_number=${dot_number}`).as("advisor_account");

    cy.get("@advisor_account")
      .then(res => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.length.of.at.least(1);
        expect(res.body).to.have.length.of.at.most(1);

        let data = res.body[0];

        expect(data.last_name).to.eq("Ackerman");
        expect(data.first_name).to.eq("Michael");
        expect(data.dot_number).to.eq(249);
      })
  });
});