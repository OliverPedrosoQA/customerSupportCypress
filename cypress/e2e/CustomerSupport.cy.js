/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente', function() {
  beforeEach(function() {
      cy.visit('./src/index.html') 
  })

context('App Title Validation', () => {
  it('Validate application title', function() { 
    cy.validateAppTitle()
  })
})

 context('Mandatory Fields Validations', () => {
  Cypress._.times(3, () => {
    it('Filling out mandatory fields and submitting form', () => {
      cy.submitFormOnlyMandatoryFields()
    })
  })
  it('Filling form and submitting it', () => {
    cy.fillMandatoryFieldsAndSubmit()
  }) 
  it('Use Cy.contains() to indentify buttons', () => {
    cy.useCyContainsToClickButton()
  })
  it('Applying delay 0 of Option object', function() {
    cy.textFieldWithDelayZero()
  })
  it('Validating cleaning fields', function() {
    cy.cleaningFields()
  })
  it.only('Adding long text to text field with lodash repeat function', () => {
    cy.addLongTextToTextField()
  })
})

context('Dropdown Field Validations', () => { 
  it('Select Youtube from dropdown field by the text', () => {
    cy.selectYoutubeFromDropdown()
  })
  it('Select Mentoria from dropdown field by the value', () => {
    cy.selectMentoriaFromDropdown()
  })
  it('Select Blog from dropdown field by the index', () => {
    cy.selectBlogFromDropdown()
  })
})
 
context('Radio Button Validations', () => {
  it('Check the radio button "feedback"', () => {
     cy.selectOptionFeedback()
  })
  it('Check each radio button', () => {
     cy.checkEachRadioButton()
  })
}) 

context('Checkboxes Validations', () => {
  it('Check both checkboxes and uncheck the last one', () => {
    cy.checkBothCheckboxes()
  })
  it('Show alert message when phone number field is mandatory but is not filled out', () => {
    cy.displayErrorAlertMessage()
  })
})

context('Uploading Files Validations', () => {
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

 context('Privacy Page Access Validations ', () => {
  it('Validating Target property is blank - Privacy Page)', () => {
    cy.validatingTargetPrivacyPage()
  })
  it("Removing Taget Attribute - Privacy Page", () => {
    cy.removingTagetAttributePrivacyPage()
  })  
  it('Acessing Privacy Page', () => {
    cy.accessingPrivacyPage();
  })  
  it('Acessing Privacy Page Removing Target Property', () => {
    cy.accessPrivacyPageRemovingTarget();
  })
 })

context('Error Messages Validations', () => {
  it('Validating error message by sending email in wrong format', function() {
    cy.wrongFormatEmailErrorMessage()
  })
  it('Validating phone number field: non numeric characters', function() {
     cy.nonNumericPhoneNumberErrorMessage()
  })
  it('Validating mandatory phone number field: leaving it blank', function() {
    cy.blankPhoneFieldErrorMessage()
  })
  it('Validating mandatory fields', function() {
    cy.errorMenssageMandatoryFieldsEmpty()
  })
  it('Validating error and success messages with Invoke()', () => {
    cy.showAndHideErrorAndSuccessMessages()
  })
  })
})