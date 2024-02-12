/// <reference types="Cypress"/> //this is for intellisense to suggest commands for cypress command
/// <reference types="cypress-xpath" /> //cypress doesnt use xpath by defualt, so we need to install this package to use xpath
describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        // cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.xpath("//a[contains(@href,'contact')]").click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe@gmail.com"); 
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?");
        cy.get('.col-md-6 > .btn').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!');

    });
});
