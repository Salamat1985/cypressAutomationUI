describe('VISIBLE BUTTON', () => {

    it('visible button and click', () => {
       cy.visit('https://play1.automationcamp.ir/expected_conditions.html');
       cy.get('#visibility_trigger').should('be.visible').and('exist').click();
       cy.get('#visibility_target').should('be.visible').and('exist').click();
       cy.contains('.popover-body','I just removed my invisibility cloak!!');
       });
   });