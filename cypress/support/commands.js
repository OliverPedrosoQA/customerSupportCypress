//CUSTOMER SUPPORT SPEC

Cypress.Commands.add('validateAppTitle', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
})

Cypress.Commands.add('submitFormOnlyMandatoryFields', () => {
    cy.clock()
    cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
    cy.get('#lastName').clear().type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') //CSS selector uses # for id and a dot for class
    cy.get('#phone').type('123456789').should('have.value','123456789')
    cy.get('#open-text-area').type('decription test')
    cy.get('button[type="submit"]').click() //'TagName[attribute="value"]' 
    cy.get('.success').should('be.visible')
    cy.tick(3000)
    cy.get('.success').should('not.be.visible') 
})

Cypress.Commands.add('textFieldWithDelayZero', () => {
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
   
    cy.clock()
    cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') 
    cy.get('#phone').type('123456789').should('have.value','123456789')
    cy.get('#open-text-area').type(longText, {delay:0})
    cy.get('button[type="submit"]').click() 
    cy.get('.success').should('be.visible')
    cy.tick(3000)
    cy.get('.success').should('not.be.visible') 
})

Cypress.Commands.add('addLongTextToTextField', () => {
    const longText1 = Cypress._.repeat('InputTest', 30)
    cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') 
    cy.get('#phone').type('123456789').should('have.value','123456789')
    cy.get('#open-text-area').invoke('val', longText1)
        .should('have.value', longText1)

})

Cypress.Commands.add('showAndHideErrorAndSuccessMessages', () => {
    cy.get('.error')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Valide os campos obrigatórios!')
        .invoke('hide')
        .should('not.be.visible')
    cy.get('.success')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Mensagem enviada com sucesso.')
        .invoke('hide')
        .should('not.be.visible')
})

Cypress.Commands.add('wrongFormatEmailErrorMessage', () => {
    cy.clock()
    cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test_email.com').should('have.value','test_email.com') 
    cy.get('#phone').type('123456789').should('have.value','123456789')
    cy.get('#open-text-area').type('decription test')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
    cy.tick(3000) //used with cy.clock() so dont need to wait 3s for the error message, it just checks the message and continues to the next step
    cy.get('.error').should('not.be.visible')
})

Cypress.Commands.add('nonNumericPhoneNumberErrorMessage', () => {
    cy.clock()
    cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test_email.com').should('have.value','test_email.com') 
    cy.get('#phone').type('testtest').should('have.value','')
    cy.get('#open-text-area').type('decription test')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
    cy.tick(3000)
    cy.get('.error').should('not.be.visible')
})

Cypress.Commands.add('blankPhoneFieldErrorMessage', () => {
    cy.clock()
    cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') 
    cy.get('#phone-checkbox').click() // selecting phone number but no adding the mandatory info
    cy.get('#open-text-area').type('decription test')
    cy.get('button[type="submit"]').click() 
    cy.get('.error').should('be.visible')
    cy.tick(3000)
    cy.get('.error').should('not.be.visible')
})

Cypress.Commands.add('cleaningFields', () => {
    cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest').clear()
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest').clear()
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') .clear()
    cy.get('#phone').type('123456789').should('have.value','123456789').clear()
    cy.get('#open-text-area').type('decription test').clear()
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
})

Cypress.Commands.add('errorMenssageMandatoryFieldsEmpty', () => {
    cy.clock()
    cy.get('button[type="submit"]').click() 
    cy.get('.error').should('be.visible')
    cy.tick(3000)
    cy.get('.error').should('not.be.visible')
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', user => {
    cy.clock()
    cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') //CSS selector uses # for id and a dot for class
    cy.get('#phone').type('123456789').should('have.value','123456789')
    cy.get('#open-text-area').type('decription test')
    cy.contains('Enviar').click()//cy.get('button[type="submit"]').click() //'TagName[attribute="value"]' 
    cy.get('.success').should('be.visible') 
    cy.tick(3000)
    cy.get('.success').should('not.be.visible') 
})
Cypress.Commands.add('useCyContainsToClickButton', user => {
    cy.clock()
    cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') //CSS selector uses # for id and a dot for class
    cy.get('#phone').type('123456789').should('have.value','123456789')
    cy.get('#open-text-area').type('decription test')
    cy.contains('button', 'Enviar').click() // cy.contains('DOM element', 'label') identify the button by the label and click it 
    cy.get('.success').should('be.visible')
    cy.tick(3000)
    cy.get('.success').should('not.be.visible') 
})


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

Cypress.Commands.add('checkBothCheckboxes', () => {
    cy.get('input[type="checkbox"]')
        .check()
        .last()
        .uncheck()
        .should('not.be.checked')
})

Cypress.Commands.add('displayErrorAlertMessage', () => {
    cy.get('#firstName').type('FirstNameTest').should('have.value', 'FirstNameTest')
    cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
    cy.get('#email').type('test@email.com').should('have.value','test@email.com') 
    cy.get('#open-text-area').type('decription test')
    cy.get('#phone-checkbox')
        .check()
        .should('be.checked')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
})

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

Cypress.Commands.add('validatingTargetPrivacyPage', () => {
    cy.get('#privacy a').should('have.attr', 'target', '_blank') //the purpose of this test is to validate if the link will open in another tab, by validating the target = _blank is enought and there is no need to click the link and really check if opened in another tab
})

Cypress.Commands.add('removingTagetAttributePrivacyPage', () => {
    cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        .click()                    
})

Cypress.Commands.add('accessingPrivacyPage', () => {
    cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        .click()
})

Cypress.Commands.add('accessPrivacyPageRemovingTarget', () => {
    cy.get('#privacy a').invoke('removeAttr', 'target').click()

})

//PRIVACY SPEC
Cypress.Commands.add('testPrivacyPage', () => {
    cy.get('#title').should('be.visible', 'CAC TAT - Política de privacidade') 
    cy.contains('Talking About Testing').should('be.visible')
})