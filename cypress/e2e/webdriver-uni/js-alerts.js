/// <reference types="cypress" />

describe("Handle js alerts", () => {
    // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    it("Confirm js alert contains the correct text", () => {
        cy.visit("https://webdriveruniversity.com");
        cy.get('#popup_alerts').invoke('removeAttr', 'target').click({force:true});
        cy.get('#button1').click();
    
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!');
        })
    });

    it("Validate js confirm alert box works correctly when clicking ok", () => {
        // cypress automatically clicks ok on confirm alert box, so we need to override it
        cy.visit("https://webdriveruniversity.com");
        cy.get('#popup_alerts').invoke('removeAttr', 'target').click({force:true});
        cy.get('#button4').click();
    
        cy.on('window:confirm', (str) => {
            return true; //if we return true, it will click ok, if we return false, it will click cancel
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    });

    it("Validate js confirm alert box using a stub", () => {
        // cypress automatically clicks ok on confirm alert box, so we need to override it
        cy.visit("https://webdriveruniversity.com");
        cy.get('#popup_alerts').invoke('removeAttr', 'target').click({force:true});

        const stub = cy.stub();
        cy.on('window:confirm', stub); //stub is a function that will be called when the event is triggered
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!'); //0 is to check if the stub is called exactly once
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        })
    });

});