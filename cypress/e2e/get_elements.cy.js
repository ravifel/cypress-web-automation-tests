/// <reference types="cypress" />

describe('Get Elements', () => { //CENÁRIOS DE TESTE

    //CASOS DE TESTE
    it('Obter elemento cabecalho', () => {
        //get()
        cy.visit('/')
            .get('.header-logo')
    })

    it('Obter elemento Login no cabecalho', () => {
        //contains()
        cy.visit('/')
            .get('#top_header').as('cabecalho')
            .contains('Login')

        //find()
        cy.get('cabecalho')
            .find('.fa-user')
    })

})