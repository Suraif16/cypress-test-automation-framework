/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    it("Check and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

        //cy.get('#checkboxes > :nth-child(1) > input').check();
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check().should('be.checked'); //@ symbol is used to alias the element
        //for not
        cy.get('@option-1').uncheck().should('not.be.checked');

    });

    it("Unchecked and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

        //cy.get('#checkboxes > :nth-child(1) > input').check();
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').uncheck().should('not.be.checked'); //@ symbol is used to alias the element
    });

    it("Check multiple checkboxes", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true});

        //cy.get('#checkboxes > :nth-child(1) > input').check();
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked');
    });

});
