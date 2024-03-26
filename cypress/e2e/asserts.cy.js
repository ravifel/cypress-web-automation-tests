/// <reference types="cypress" />

describe('Asserts', () => { //CENÁRIOS DE TESTE

    it('Verificação se um elemento está visivel com should', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click()

        cy.get('.account_form > h3')
            .should('be.visible')

        cy.get('.account_form > h3')
            .should('contain', 'Login')

        cy.get('.account_form > h3')
            .should('have.text', 'Login')
    })

    it.only('Verificação se um elemento está visivel com expect', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click()

        cy.get('.account_form > h3')
            .then((element) => {
                expect(element.text()).equal('Login')
                expect(element).to.be.visible
                expect(element).not.disabled
            })

    })
})