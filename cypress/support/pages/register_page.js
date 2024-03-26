/// <reference types="cypress"/>

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

export default {
    saveRegister() {
        cy.get(elements.buttons.register)
            .should('be.visible')
            .click()
    },

    fillUser(user) {
        cy.get(elements.fields.userName)
            .should('be.visible')
            .type(user)
    },

    fillEmail(email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(email)
    },

    fillPassword(password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
    },

    checkMessageError(message) {
        cy.get(elements.messages.error)
            .should('have.text', message)
    },

    successMessageRegister(name) {
        cy.get(elements.messages.registerSuccessTitle, { timeout: 3000 })
            .should('have.text', 'Cadastro realizado!')

        cy.get(elements.messages.registerSuccessSubTitle, { timeout: 3000 })
            .should('have.text', `Bem-vindo ${name}`)

        cy.get(elements.messages.registerSuccessSubTitle, { timeout: 3000 })
            .contains(name)
    },

    emptyFieldRegister(selector) {
        cy.get(selector)
            .should('be.visible')
            .should('be.empty')
    }

}