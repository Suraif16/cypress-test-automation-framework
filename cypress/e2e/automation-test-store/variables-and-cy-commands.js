/// <reference types="Cypress"/> //this is for intellisense to suggest commands for cypress command

describe("Verifiying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific prpduct pages", () => {
        // This code fails because the order of execution
        // cy.visit("https://www.automationteststore.com/");
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // makeupLink.click();
        // skincareLink.click();
        
        //This code will pass, but both shud not be used because order of execution is not guaranteed
        cy.visit("https://www.automationteststore.com/");
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
        // skincareLink.click();

        //Recommended approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();

        // Following code will fail since header.text is not a function
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text());

        // Following code will pass. This is because cypress commands are asynchronous
        cy.get("h1.maintext").then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Found header text: " + headerText);

            //inserting an assertion here 
            expect(headerText).is.eq('Makeup');
        })

        //Using constants is tricky since the order of execution is not guaranteed

        // 
        it("Validate properties of the contact us page", () => {
            cy.visit("https://www.automationteststore.com/index.php?rt=content/contact");

            //Uses cypress commands and chaining
            cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:');
            //JQuery approach
            cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
                const firstNameText = text.find('#field_11').text();
                expect(firstNameText).to.contain('First name:');
            })           
            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text());
                cy.log(fnText); // outputs the element
            })
        })

        it.only("Validate properties of the contact us page", () => {
            cy.visit("https://www.automationteststore.com/index.php?rt=content/contact");
            // uses cypress commands and chaining
   
            cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:');
            //jquery approach

            //embedded commands (closure)
        })
    });


})