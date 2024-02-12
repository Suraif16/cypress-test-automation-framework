/// <reference types="Cypress"/> //this is for intellisense to suggest commands for cypress command

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code here
        cy.visit("https://www.automationteststore.com/");
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').click();
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code here
    });
});
