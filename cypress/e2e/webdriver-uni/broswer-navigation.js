/// reference types="cypress" />

describe("Validate webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {
        //cy.visit("https://webdriveruniversity.com/Contact-us/contactus.html");
        cy.visit("https://webdriveruniversity.com");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'contactus');

        cy.go('back');
        cy.reload();
        cy.reload(true); //reload without cache
    });
}  );   