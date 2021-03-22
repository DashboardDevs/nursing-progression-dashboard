describe("Milestone Controller", () => {
  const url = "http://localhost:3001/milestones";
  
  it("Requests a student's milestones", () => {
    const student_id = 6; //Bary Kaes
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
});