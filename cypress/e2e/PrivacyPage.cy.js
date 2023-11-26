/// <reference types="Cypress" />

context('GUI Custom Commands - Validating Privacy Page', () => {
    it.only('Validating Components Privacy Page', () => {
        cy.visit('./src/privacy.html')
        cy.testPrivacyPage();
    })
  })  