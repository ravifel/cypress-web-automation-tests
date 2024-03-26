// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

//ELEMENTS
const elements = {
    buttons: {
        btnIconRegister: '.right_list_fix > :nth-child(2) > a > .fa'
    },
    fields: {
        userName: '#user'
    }
}

//FUNCTIONS / METHODS
Cypress.Commands.add('accessRegisterPage', () => {
    cy.visit('/')
        .get(elements.buttons.btnIconRegister)
        .click()

    cy.get(elements.fields.userName)
        .should('be.visible');
})