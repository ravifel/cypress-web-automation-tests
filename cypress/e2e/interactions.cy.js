/// <reference types="cypress" />

describe('Interactions', () => { //CENÁRIOS DE TESTE

    //CASOS DE TESTE
    it('Digitar em um campo', () => {
        cy.visit('/')
            .get('#top_header')

        cy.get('#mc_embed_signup > form > div.mc-form > input.form-control')
            .type('ravi@email.com.br')

        cy.get('.clear > .theme-btn-one').click()
    })

    it('Click em um campo', () => {
        cy.visit('/').get('.header-logo')

        //click normal
        cy.get('.fa-user').click()

        //click duplo
        //cy.get('.fa-user').dblclick()

        //click com o botão direito
        //cy.get('.fa-user').rightclick()

        //click por coordenadas
        //cy.get('.fa-user').click(100, 100)
        //cy.get('.fa-user').click(100, 100, { force: true })

        //simular apertar 'enter' do teclado
        // cy.get('#mc_embed_signup > form > div.mc-form > input.form-control')
        //     .type('ravi@email.com.br{enter}')
    })

    it('Select dropdown', () => {
        cy.visit('/')
            .get('.col-lg-2 > .footer_one_widget > ul')
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
            .select('Albania')
    })

    it.only('Checkbox and radio button', () => {
        cy.visit('/')
            .get('.col-lg-2 > .footer_one_widget > ul')
            .contains('Checkout View One')
            .click()

        //Checkbox
        cy.get('#materialUnchecked')
            .check()
            .uncheck()

        //Radio button
        cy.get('#css')
            .check()

    })
})