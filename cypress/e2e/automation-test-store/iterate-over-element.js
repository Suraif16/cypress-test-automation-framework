/// <reference types="Cypress"/> //this is for intellisense to suggest commands for cypress command

describe("Iterate over elements", () => {
    it("Log information of all hair care products", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text());

          })
    });

    it("Add specific product to a basket", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Curls to straight Shampoo')){
                // $el.click(); //this is jquery element therfore we need to convert it to cypress element using wrap
                cy.wrap($el).click(); //wrap converts the element to cypress element
            }
          })
    })


})