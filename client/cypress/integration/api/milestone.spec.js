describe("Milestone Controller", () => {
  const url = "http://localhost:3001/milestones";
  
  it("Requests a student's milestones", () => {
    const student_id = 1; //Bary Kaes
    cy.request(`${url}/${student_id}`).as("milestones");

    cy.get("@milestones")
      .then(res => {
        expect(res.status).to.eq(200);
        expect(res.body).have.length(14);

        let milestones = res.body;

        milestones.forEach(milestone => {
          expect(milestone.name).to.be.ok;
          expect(milestone.description).to.be.ok;
          expect(milestone.status).to.be.exist;
        })
      })
  });

  it("Requests an advisor's reviewable milestones", () => {
    const advisor_id = 1004; //Michael Ackerman
    cy.request(`${url}/reviews/${advisor_id}`).as("milestones");

    cy.get("@milestones")
      .then(res => {
        expect(res.status).to.eq(200);

        let milestones = res.body;

        milestones.forEach(milestone => {
          expect(milestone.name).to.be.ok;
          expect(milestone.submitted).to.be.ok;
          expect(milestone.id).to.be.ok;
          expect(milestone.s_id).to.be.ok;
        })
      })
  });

  // If we want to add update tests we need to be able to clean up database after running it
  // Currently manually testing PUT/DELETE requests
});