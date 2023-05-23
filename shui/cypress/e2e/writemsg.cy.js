describe('write Message', () => {
  it('komma till sidan med url writemsg', () => {
    cy.visit('http://localhost:5174/writemsg')
  })
  it('klicka på post knappen', () => {
    cy.visit('http://localhost:5174/writemsg')
    cy.get('[data-id="writeMsgPost"]').click()
  })
  it('passes', () => {
    cy.visit('http://localhost:5174/writemsg')
    cy.get('[data-id="writeMsgPost"]').click()
    cy.get('flow')
  })
})