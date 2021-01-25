// https://docs.cypress.io/api/introduction/api.html

describe('Counter', () => {
  it('Increments the counter', () => {
    cy.visit('/')

    // get current text
    cy.get('.Counter__number')
      .invoke('text')
      .then(text1 => {
        // increment counter
        cy.get('button').click()

        // get new text
        cy.get('.Counter__number')
          .invoke('text')
          .should(text2 => {
            expect(text1).not.to.eq(text2)
          })
      })
  })
})
