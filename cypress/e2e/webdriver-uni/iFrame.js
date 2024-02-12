/// reference types="cypress" />

describe("Handling IFrame & Modals", () => {
    it("Handle webdriveruni iframe and modal", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true});

        cy.get('#frame').then($iframe => {  //here we are using the same format as premises
            const body = $iframe.contents().find('body');
            cy.wrap(body).as('iframe'); //aliasing the body of the iframe, wrapping up so that the cypress commands can be applied
        });

        cy.get('@iframe').find('#button-find-out-more').click(); // using  @ to use the alias
        cy.get('@iframe').find('#myModal').as('modal'); //aliasing the modal

        cy.get('#modal').should(($expectedText) => {
            const text = $expectedText.text();
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');
        });

        cy.get('@modal').contains('Close').click();
    });

});