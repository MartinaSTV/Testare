describe('template spec', () => {
  beforeEach(() => {
    // Denna funktion körs varje gång innan varje test
    cy.visit('http://localhost:5174/');
  });

  it('should show Stefans message first', () => {
    cy.wait(1000)
    cy.get("[data-id='flowBtn']").click()
    cy.get("[data-id='writeMsgPost']").click()
    cy.wait(1000)
    cy.get("[data-id='msg']").should('be.visible')
    // cy.get("data-id='msgUser'").first().should('have.length.greaterThan', 1)
    // cy.get("data-id='msgText'").first().should('have.length.greaterThan', 1)
    // cy.get("data-id='msgDateTime'").first().should('have.length.greaterThan', 1)
  });

  it('should remove message', () => {
    cy.wait(1000)
    cy.get("[data-id='flowBtn']").click()
    cy.get("[data-id='writeMsgPost']").click()
    cy.get("[data-id='msgRemove']").first().click()
    cy.get("[data-id='msgUser']").first().should('not.have.text', 'stefan')
  })

  it('should go to write message page', () => {
    cy.get("[data-id='flowBtn']").click()
    cy.get("[data-id='writeMsg']").should('be.visible')
  })
})