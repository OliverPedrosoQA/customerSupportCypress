//MANDATORY FIELDS
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', user => {
    cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') //CSS selector uses # for id and a dot for class
    cy.get('#phone').type('123456789').should('have.value','123456789')
    cy.get('#open-text-area').type('decription test')
    cy.contains('Enviar').click()//cy.get('button[type="submit"]').click() //'TagName[attribute="value"]' 
    cy.get('.success').should('be.visible')
})
Cypress.Commands.add('useCyContainsToClickButton', user => {
    cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') //CSS selector uses # for id and a dot for class
    cy.get('#phone').type('123456789').should('have.value','123456789')
    cy.get('#open-text-area').type('decription test')
    cy.contains('button', 'Enviar').click() // cy.contains('DOM element', 'label') identify the button by the label and click it 
    cy.get('.success').should('be.visible')
})
//DROPDOWN FIELD
Cypress.Commands.add('selectYoutubeFromDropdown', dropdown => {
    cy.get('#firstName').type('FirtNameTest').should('have.value', 'FirtNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') 
    cy.get('#phone').type('123456789').should('have.value','123456789')
    cy.get('#product').select('youtube').should('have.value', 'youtube') //select text 'Youtube' in the dropdown (select by the "text")
    cy.get('#open-text-area').type('decription test')
    cy.contains('button', 'Enviar').click()  
    
})
Cypress.Commands.add('selectMentoriaFromDropdown', dropdown => {
    cy.get('#firstName').type('FirtNameTest').should('have.value', 'FirtNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') 
    cy.get('#phone').type('123456789').should('have.value','123456789')
    cy.get('#product').select('mentoria').should('have.value', 'mentoria') //select value 'mentoria' in the dropdown (select by the "value")
    cy.get('#open-text-area').type('decription test')
    cy.contains('button', 'Enviar').click()  
})
Cypress.Commands.add('selectBlogFromDropdown', dropdown => {
    cy.get('#firstName').type('FirtNameTest').should('have.value', 'FirtNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') 
    cy.get('#phone').type('123456789').should('have.value','123456789')
    cy.get('#product').select(1).should('have.value', 'blog') //select 'blog' in the dropdown (select by the "index")
    cy.get('#open-text-area').type('decription test')
    cy.contains('button', 'Enviar').click() 
})
//RADIO BUTTON 
Cypress.Commands.add('selectOptionFeedback', () => {
    cy.get('#firstName').type('FirtNameTest').should('have.value', 'FirtNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') 
    cy.get('#phone').type('123456789').should('have.value','123456789')
    cy.get('#product').select(1).should('have.value', 'blog')
    cy.get('input[type="radio"] [value="feedback"]').check().should('have.value', 'feedback') //check the option Feedback out of the 3 possible options by the value
    cy.get('#open-text-area').type('decription test')
    cy.contains('button', 'Enviar').click()  
})

// Cypress.Commands.add('selectEachRadioButton', () => {
//     cy.get('.field').each(() => {
//         should('be.checked')
//     })
// })