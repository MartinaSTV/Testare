describe('write Message', () => {
  it('komma till sidan med url writemsg', () => {
    cy.visit('http://localhost:5174/writemsg')
  })
  it('Finnas två inputfält', () => {
    cy.visit('http://localhost:5174/writemsg')
    cy.get('[data-id="writeMsgText"]')
    cy.get('[data-id="writeMsgUser"]')
  })
  it('klicka på post knappen', () => {
    cy.visit('http://localhost:5174/writemsg')
    cy.get('[data-id="writeMsgPost"]').click()
  })
  it('Skickas vidare till flow sidan efter klick', () => {
    cy.visit('http://localhost:5174/writemsg')
    cy.get('[data-id="writeMsgPost"]').click()
    cy.get("[data-id='flow']")
  })
})