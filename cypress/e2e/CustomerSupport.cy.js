/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente', function() {
  beforeEach(function() {
      cy.visit('./src/index.html')
  })

  it('Validate application title', function() { 
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('Exercise 0- Filling out mandatory fields and submitting form', function() {
      cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
      cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
      cy.get('#email').type('test@email.com').should('have.value','test@email.com') //CSS selector uses # for id and a dot for class
      cy.get('#phone').type('123456789').should('have.value','123456789')
      cy.get('#open-text-area').type('decription test')
      cy.get('button[type="submit"]').click() //'TagName[attribute="value"]' 
      cy.get('.success').should('be.visible')
  })
  it('Exercise 1- Applying delay 0 from the Option object', function() {
      const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
      cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
      cy.get('#email').type('test@email.com').should('have.value','test@email.com') 
      cy.get('#phone').type('123456789').should('have.value','123456789')
      cy.get('#open-text-area').type(longText, {delay:0})
      cy.get('button[type="submit"]').click() 
      cy.get('.success').should('be.visible')
  })
  it('Exercise 2- Validating error message by sending email in wrong format', function() {
      cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
      cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
      cy.get('#email').type('test_email.com').should('have.value','test_email.com') /
      cy.get('#phone').type('123456789').should('have.value','123456789')
      cy.get('#open-text-area').type('decription test')
      cy.get('button[type="submit"]').click()
      cy.get('.error').should('be.visible')
  })
  it('Exercise 3- Validating phone number field: non numeric characters', function() {
      cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
      cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
      cy.get('#email').type('test_email.com').should('have.value','test_email.com') /
      cy.get('#phone').type('testtest').should('have.value','')
      cy.get('#open-text-area').type('decription test')
      cy.get('button[type="submit"]').click()
      cy.get('.error').should('be.visible')
  })
  it('Exercise 4- Validating mandatory phone number field: leaving it blank', function() {
      cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest')
      cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest')
      cy.get('#email').type('test@email.com').should('have.value','test@email.com') 
      cy.get('#phone-checkbox').click()
      //cy.get('#phone').type('123456789').should('have.value','123456789')
      cy.get('#open-text-area').type('decription test')
      cy.get('button[type="submit"]').click() 
      cy.get('.error').should('be.visible')
  })
  it('Exercise 5- Validating cleaning fields', function() {
      cy.get('#firstName').type('FirstNameTest').should('have.value','FirstNameTest').clear()
      cy.get('#lastName').type('LastNameTest').should('have.value','LastNameTest').clear()
      cy.get('#email').type('test@email.com').should('have.value','test@email.com') .clear()
      cy.get('#phone').type('123456789').should('have.value','123456789').clear()
      cy.get('#open-text-area').type('decription test').clear()
      cy.get('button[type="submit"]').click()
      cy.get('.error').should('be.visible')
  })
  it('Exercise 6- Validating mandatory fields', function() {
      cy.get('button[type="submit"]').click() 
      cy.get('.error').should('be.visible')
  })
   // MANDATORY fields test cases
  context('GUI Custom Commands - Mandatory Fields', () => {
      it('Exercise 7- Fills form and send it', () => {
        cy.fillMandatoryFieldsAndSubmit()
      }) 
      it('Exercise 8- Use Cy.contains() to indentify buttons', () => {
        cy.useCyContainsToClickButton()
      })
  })
  // DROPDOWN field test cases
  context('GUI Custom Commands - Dropdown Field', () => { 
      it('Select Youtube from dropdown field by the text', () => {
        cy.selectYoutubeFromDropdown()
      })
      it('Exercise 1- Select Mentoria from dropdown field by the value', () => {
        cy.selectMentoriaFromDropdown()
      })
      it('Exercise 2- Select Blog from dropdown field by the index', () => {
        cy.selectBlogFromDropdown()
      })
  })
  //RADIO BUTTON test cases
  context('GUI Custom Commands - Radio Button', () => {
      it('Check the radio button "feedback"', () => {
        cy.selectOptionFeedback()
      })
      it('Check each radio button', () => {
        cy.checkEachRadioButton()
      })
  }) 

  //CHECKBOX test cases
  context('GUI Custom Commands - Checkbox', () => {
    it('Check both checkboxes and uncheck the last one', () => {
      cy.checkBothCheckboxes()
    })
    it('Show alert message when phone number field is mandatory but is not filled out', () => {
      cy.displayErrorAlertMessage()
    })
})

// FILE UPLOADING
context('GUI Custom Commands - Uploading Files', () => {
    it('Uploading File through selectFile', () => {
      cy.uploadingFile()
    })
    it('Uploading File through Drag And Drop', () => {
      cy.uploadingFileDragAndDrop()
    })
    it('Uploading File With an Alias', () => {
      cy.uploadingFIleWithAlias()
    })
})

// VALIDATING LINK THAT OPENS IN DIFFERENT TAB

  context('GUI Custom Commands - Validating Hiperlink', () => {
    it.only('Accessing Privacy Page (Hiperlink)', () => {
      cy.accessingPrivacyPage()
    })
})
})