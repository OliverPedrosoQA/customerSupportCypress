/// <reference types="Cypress" />

context('Validating Privacy Page', () => {
    it.only('Validating Components Privacy Page', () => {
        cy.visit('./src/privacy.html')
        cy.testPrivacyPage();
    })
  })  