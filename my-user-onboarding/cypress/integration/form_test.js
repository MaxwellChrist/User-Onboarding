describe("Form_test App", () => {
    // commented this out since it couldn't find it running on 
    // beforeEach(() => {
    //     cy.visit("localhost:3000");
    // })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsOfServiceInput = () => cy.get('input[name=termsOfService]');
    const submitBtn = () => cy.get(`button[id="submitBtn"]`);
    const barFoo = () => cy.get('input[name=barFoo]');

    it("test working test", () => {
        expect(4 * 5).to.equal(20);
        expect(5 - 4).not.to.equal(6);
    })
    it("Do any elements show?" , () => {
        nameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        termsOfServiceInput().should("exist");
        submitBtn().should("exist");
        barFoo().should("not.exist");
    })
    describe("inputs filled out correctly", () => {
        it("should be localhost", () => {
          cy.url().should("include", "localhost");
        })
    })
    it("these are the inputs that should be able to be typed in", () => {
        nameInput()
          .should("have.value", "")
          .type("Max")
          .should("have.value", "Max!");
        emailInput()
          .should("have.value", "")
          .type("myemail@email.com")
          .should("have.value", "myemail@email.com");
        passwordInput()
          .should("have.value", "")
          .type("thisISb@d123")
          .should("have.value", "thisISb@d123");
      })
      it("The submit button should be able to fire with these values", () => {
        nameInput().type("Max!");
        emailInput().type("myemail@email.com");
        passwordInput().type("thisISb@d123");
        submitButton().click()
      })
})