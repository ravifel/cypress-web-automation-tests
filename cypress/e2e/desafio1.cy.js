/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
const user_data = require('../fixtures/user_create_desafio.json');

describe('Cadastro de usuário', () => {
    //Dado
    //Quando
    //Então

    beforeEach('Acessar aplicação', () => {
        cy.visit('/')
            .get('.right_list_fix > :nth-child(2) > a > .fa')
            .click()
    })


    it('Validação campo nome vazio', () => {
        cy.get('#user')
            .should('be.visible')
            .should('be.empty')

        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo nome deve ser prenchido')
    })

    it('Validação campo email vazio', () => {
        cy.get('#user')
            .should('be.visible')
            .type(user_data.name)

        cy.get('#btnRegister')
            .click()

        cy.get('#email')
            .should('be.visible')
            .should('be.empty')

        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

    it('Validação campo email inválido', () => {
        cy.get('#user')
            .should('be.visible')
            .type(user_data.name)

        cy.get('#email')
            .should('be.visible')
            .type(user_data.email_invalid)

        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })


    it('Validação campo senha vazio', () => {
        cy.get('#user')
            .should('be.visible')
            .type(user_data.name)

        cy.get('#email')
            .should('be.visible')
            .type(user_data.email)

        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')

        cy.get('#password')
            .should('be.visible')
            .should('be.empty')
    })

    it('Validação de senha com pelo menos 6 digitos', () => {
        // pelo menos 6 digitos (validar erro)

        cy.get('#user')
            .should('be.visible')
            .type(user_data.name)

        cy.get('#email')
            .should('be.visible')
            .type(user_data.email)

        cy.get('#password')
            .should('be.visible')
            .type(user_data.password_invalid)

        cy.get('#btnRegister')
            .should('be.visible')
            .click()

        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')

    })

    it.only('Validação de cadastros realizado com sucesso', () => {
        // validar o nome do usuário sendo exibido na mensagem de sucesso.
        // bem vindo + nome_usuário

        const name = faker.person.fullName();
        const email = faker.internet.email();

        cy.get('#user')
            .should('be.visible')
            .type(name) //user_data.name

        cy.get('#email')
            .should('be.visible')
            .type(user_data.email)

        cy.get('#password')
            .should('be.visible')
            .type(user_data.password)

        cy.get('#btnRegister')
            .should('be.visible')
            .click()

        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${name}`) //user_data.name

        cy.get('#swal2-html-container')
            .contains(name) //user_data.name
    })
})