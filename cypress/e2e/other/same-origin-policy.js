/// <reference types="cypress" />

describe("Cypress web security", () => {
        it.skip("Validate visiting two different domains", () => {
            cy.visit("https://automationteststore.com/");
            cy.visit("https://google.com/");
        });
        //Above fails as visiting 2 different domains is not allowed by default

        it("Validate visiting two different domains via user actions", () => {
            cy.visit("https://automationteststore.com/");
            cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
        });

        it("Origin command", () => {
            cy.origin('webdriveruniversity.com', () => {
                cy.visit("/");
            });

            cy.origin('automationteststore.com', () => {
                cy.visit("/");
            });
        });
        // Two different domains can be visited using origin command
    });