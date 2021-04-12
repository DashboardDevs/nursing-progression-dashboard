/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
describe("Notes Controller", () => {
  const url = "http://localhost:3001/notes";
  
  it("Requests notes for a student", () => {
    let student_id = 1; // Bary Kaes
    cy.request(`${url}/${student_id}`).as("notes");

    cy.get("@notes")
      .then(res => {
        expect(res.status).to.eq(200);
        expect(res.body).to.have.length.of.at.least(1);

        let notes = res.body;

        notes.forEach(note => {
          expect(note.note).to.be.ok;
          expect(note.date).to.be.ok;
        });
      });
  });
});