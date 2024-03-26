/// <reference types="cypress" />

describe('Get Text', () => { //CENÁRIOS DE TESTE

    //CASOS DE TESTE
    it('Obter o texto de um elemento', () => {
        cy.visit('/')
            .get('#top_header')

        cy.get('.top_header_left > p')
            .then((element) => {
                console.log(element.text())
                element.hide()
            })
    })


})