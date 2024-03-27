describe('WebSite', () => {
    beforeEach(()=>{
        cy.visit('/home')
    })
    before(()=>{
        cy.log('Test1')
    })
    after(()=>{
        cy.log('Test2')
    })
    it('Verify page', () => {
        cy.title()
        .should('eq', "UI Test Automation Playground")
    });
    it('Verify page', () => {
        cy.window().title().then(element=>{
        cy.log(element)
        expect(element === "UI Test Automation Playground").to.be.true
        expect(element).to.eq;("UI Test Automation Playground")
        cy.wrap(element).should('eq',"UI Test Automation Playground")
        })
    });
});