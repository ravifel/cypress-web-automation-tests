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
export default {
    accessRegisterPage() {
        cy.visit('/')
            .get(elements.buttons.btnIconRegister)
            .click()

        cy.get(elements.fields.userName)
            .should('be.visible');
    }
}