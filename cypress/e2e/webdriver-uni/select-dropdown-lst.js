/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

        //1. Using select command : Note that we can select wither by value or by text
        cy.get('#dropdowm-menu-1').select('c#');
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng');
        cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery');
        cy.get('#dropdowm-menu-3').select('maven').should('have.value', 'maven');

        //2. Using select command if values are dynamic
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG');
    });
});