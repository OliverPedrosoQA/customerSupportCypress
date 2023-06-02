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
    cy.get('#product').select('YouTube').should('have.value', 'youtube') //select text 'Youtube' in the dropdown (select by the "text")
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
    cy.get('input[type="radio"]').check('feedback').should('have.value', 'feedback') //check the option Feedback out of the 3 possible options by the value
    cy.get('#open-text-area').type('decription test')
    cy.contains('button', 'Enviar').click()  
})

Cypress.Commands.add('checkEachRadioButton', () => {
    cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio) { //using each and wrap one can 
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
})

//CHECKBOX 
Cypress.Commands.add('checkBothCheckboxes', () => {
    cy.get('input[type="checkbox"]')
        .check()
        .last()
        .uncheck()
        .should('not.be.checked')
})

Cypress.Commands.add('displayErrorAlertMessage', () => {
    cy.get('#firstName').type('FirtNameTest').should('have.value', 'FirtNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') 
    cy.get('#open-text-area').type('decription test')
    cy.get('#phone-checkbox')
        .check()
        .should('be.checked')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
})

//FILE UPLOADING
Cypress.Commands.add('uploadingFile', () => {
    cy.get('#file-upload')
        .selectFile('cypress/fixtures/file-example.pdf')
        .then(input => {
            expect(input[0].files[0].name).to.equal('file-example.pdf')
        })
})

Cypress.Commands.add('uploadingFileDragAndDrop', () => {
    cy.get('input[type="file"]#file-upload')
        .selectFile('cypress/fixtures/file-example.pdf', { action: 'drag-drop'})
        .then(input => {
            expect(input[0].files[0].name).to.equal('file-example.pdf')
            console.log()
        })
    })
Cypress.Commands.add('uploadingFIleWithAlias', () => {
   cy.fixture('example.json').as('sampleFile')
    cy.get('input[type="file"]#file-upload')
        .selectFile('@sampleFile')
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        console.log()
        })
})
