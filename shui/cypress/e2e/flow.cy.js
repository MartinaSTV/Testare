describe('template spec', () => {
  beforeEach(() => {
    // Denna funktion körs varje gång innan varje test
    cy.visit('http://localhost:5173/');
  });
  it('should show Stefans message first', () => {
    cy.wait(1000)
    cy.get("data-id='msgUser'").first().should('have.text', 'stefan')
    cy.get("data-id='msgText'").first().should('have.text', 'hejsan')
  })
})