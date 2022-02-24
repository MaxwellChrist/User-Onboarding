describe("Form_test App", () => {
    beforeEach(() => {
        cy.visit("https://http://localhost:3000");
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsOfServiceInput = () => cy.get('input[name=termsOfService]');
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
    })

})