class SignInForm {
  get signInTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".text-2xl");
  }
  get signInSubtitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".px-6 > .text-xl");
  }
  get signInEmailLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`form > :nth-child(1) > .text-gray-600`);
  }
  get signInEmailInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`#email`);
  }
  get signInPasswordLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("form > :nth-child(2) > .flex");
  }
  get signInPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`#password`);
  }
  get loginBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`.bg-gray-200`);
  }
}
export default new SignInForm();
