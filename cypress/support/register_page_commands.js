/// <reference types="cypress" />

//ELEMENTS
const elements = {
    buttons: {
        register: '#btnRegister'
    },
    fields: {
        userName: '#user',
        email: '#email',
        password: '#password'
    },
    messages: {
        error: '#errorMessageFirstName',
        registerSuccessTitle: '#swal2-title',
        registerSuccessSubTitle: '#swal2-html-container'
    }
}

//ACTIONS / METHODS / FUNCTIONS

Cypress.Commands.add('saveRegister', () => {
    cy.get(elements.buttons.register)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('fillUser', (user) => {
    cy.get(elements.fields.userName)
        .should('be.visible')
        .type(user)
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.fields.password)
        .should('be.visible')
        .type(password)
})

Cypress.Commands.add('checkMessageError', (message) => {
    cy.get(elements.messages.error)
        .should('have.text', message)
})

Cypress.Commands.add('successMessageRegister', (name) => {
    cy.get(elements.messages.registerSuccessTitle, { timeout: 3000 })
        .should('have.text', 'Cadastro realizado!')

    cy.get(elements.messages.registerSuccessSubTitle, { timeout: 3000 })
        .should('have.text', `Bem-vindo ${name}`)

    cy.get(elements.messages.registerSuccessSubTitle, { timeout: 3000 })
        .contains(name)
})

Cypress.Commands.add('emptyFieldRegister', (selector) => {
    cy.get(selector)
        .should('be.visible')
        .should('be.empty')
})