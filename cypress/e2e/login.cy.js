import { errorMessages } from "../../src/components/login";

describe('Sayfa Yüklendi', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  describe('success login', () => {

    it('should submit success', () => {

      cy.get('input[name="email"]').type("erdem.guntay@wit.com.tr");
      cy.get('input[name="password"]').type("9fxIH0GXesEwH_I");
      cy.get('input[name="terms"]').click();

      cy.get('button').should('not.be.disabled').click();

      cy.url().should('include', '/main')
    })
  });
  describe('Error login', () => {
    it('email Not success', () => {
      cy.get('input[name="email"]').type("erdem.guntay@wit");
      cy.contains(errorMessages.email);
    })
    it('password Not success', () => {
      cy.get('input[name="password"]').type("123");
      cy.contains(errorMessages.password);
    })
    it('terms Not success', () => {
      cy.get('input[name="terms"]').should('not.be.checked')
    })
    it('button Not success', () => {
      cy.get('button').should('be.disabled')
    })
  })
})