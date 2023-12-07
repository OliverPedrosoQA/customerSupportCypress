# Test Automation Project with Cypress - Basic Level

👋 Welcome!

This repository houses a test automation project utilizing Cypress and JavaScript to automate end-to-end tests for a demo customer support webpage.

##  Project Structure

This basic project comprises two spec files, each testing different webpages: the main page (CustomerSupport.cy.js) and the privacy policy page (PrivacyPage.cy.js).

To enhance test organization and maintainability, this project leverages Custom Commands. These commands implement functions containing the test steps, which are then called by the Context functions in the spec files.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I developed this project using Node.js v18.17.0 and npm 9.8.1. I recommend using the same versions or later. Additionally, the project was tested with Git 2.41.0.windows.3, Google Chrome 119.0.6045.200 (x86_64), and Visual Studio Code 1.84.2.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

These are the different ways to run this project. The code can be found in the package.json file:

* `npm run cy:open`: Open Cypress in interactive mode.
* `npm run cy:open:mobile`: Open Cypress in interactive mode with a mobile viewport configuration (width: 410, height: 860).
* `npm test`: Run all Cypress tests in headless mode.
* `npm run privacySpec`: Run the privacy policy spec file (PrivacyPage.cy.js).
* `npm run customerSupportSpec`: Run the customer support spec file (CustomerSupport.cy.js).
* `npm run test:mobile`: Run all Cypress tests with a mobile viewport configuration (width: 410, height: 860).

## Support this project

If you want to support this project, leave a ⭐.

___