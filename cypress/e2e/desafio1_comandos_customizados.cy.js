/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
const user_data = require('../fixtures/user_create_desafio.json');
import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';

describe('Cadastro de usuário', () => {

    beforeEach('Acessar aplicação', () => {
        //ACESSANDO TELA DE CADASTRO DE USUÁRIO
        
        //cy.accessRegisterPage();
        home_page.accessRegisterPage();
    })

    it('Validação campo nome vazio', () => {
        // cy.emptyFieldRegister('#user');
        // cy.saveRegister();
        // cy.checkMessageError('O campo nome deve ser prenchido');

        register_page.emptyFieldRegister('#user');
        register_page.saveRegister();
        register_page.checkMessageError('O campo nome deve ser prenchido');
    })

    it('Validação campo email vazio', () => {
        // cy.fillUser(user_data.name);
        // cy.saveRegister();
        // cy.emptyFieldRegister('#email');
        // cy.checkMessageError('O campo e-mail deve ser prenchido corretamente');

        register_page.fillUser(user_data.name);
        register_page.saveRegister();
        register_page.emptyFieldRegister('#email');
        register_page.checkMessageError('O campo e-mail deve ser prenchido corretamente');
    })

    it('Validação campo email inválido', () => {
        // cy.fillUser(user_data.name);
        // cy.fillEmail(user_data.email_invalid);
        // cy.saveRegister();
        // cy.checkMessageError('O campo e-mail deve ser prenchido corretamente');

        register_page.fillUser(user_data.name);
        register_page.fillEmail(user_data.email_invalid);
        register_page.saveRegister();
        register_page.checkMessageError('O campo e-mail deve ser prenchido corretamente');
    })

    it('Validação campo senha vazio', () => {
        // cy.fillUser(user_data.name);
        // cy.fillEmail(user_data.email);
        // cy.saveRegister();
        // cy.checkMessageError('O campo senha deve ter pelo menos 6 dígitos');
        // cy.emptyFieldRegister('#password');

        register_page.fillUser(user_data.name);
        register_page.fillEmail(user_data.email);
        register_page.saveRegister();
        register_page.checkMessageError('O campo senha deve ter pelo menos 6 dígitos');
        register_page.emptyFieldRegister('#password');
    })

    it('Validação de senha com pelo menos 6 digitos', () => {
        // pelo menos 6 digitos (validar erro)
        // cy.fillUser(user_data.name);
        // cy.fillEmail(user_data.email);
        // cy.fillPassword(user_data.password_invalid);
        // cy.saveRegister();
        // cy.checkMessageError('O campo senha deve ter pelo menos 6 dígitos');

        register_page.fillUser(user_data.name);
        register_page.fillEmail(user_data.email);
        register_page.fillPassword(user_data.password_invalid);
        register_page.saveRegister();
        register_page.checkMessageError('O campo senha deve ter pelo menos 6 dígitos');
    })

    it('Validação de cadastros realizado com sucesso', () => {
        // validar o nome do usuário sendo exibido na mensagem de sucesso.
        // bem vindo + nome_usuário

        const name = faker.person.fullName();
        const email = faker.internet.email();

        // cy.fillUser(name);
        // cy.fillEmail(user_data.email);
        // cy.fillPassword(user_data.password);
        // cy.saveRegister();
        // cy.successMessageRegister(name);

        register_page.fillUser(name);
        register_page.fillEmail(user_data.email);
        register_page.fillPassword(user_data.password);
        register_page.saveRegister();
        register_page.successMessageRegister(name);
    })
})