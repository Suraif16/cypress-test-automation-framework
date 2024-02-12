/// <reference types="Cypress"/> //this is for intellisense to suggest commands for cypress command

describe("Alias and invoke", () => {
    it("Validate a specific hair care products", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail'); // aliasing enables us to use the value of the alias in other places
        // <<invoke is used to extract the text from the element and store it in the alias>>
        cy.get('@productThumbnail').its('length').should('be.gt', 5); //<<using the alias>>
        //why its is used here? because we are using the alias as a variable and not as a cypress element 
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
    }); 


})