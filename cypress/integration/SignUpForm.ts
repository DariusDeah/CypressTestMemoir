class SignUpForm {
  get signUpTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".text-2xl");
  }
  get singUpSubtitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".px-6 > .text-xl");
  }
  get signUpNameLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("form > :nth-child(1) > .text-gray-600");
  }
  get signUpEmailLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`form > :nth-child(1) > .text-gray-600`);
  }
  get signUpNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("#name");
  }
  get signUpEmailInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`#email`);
  }
  get signUpPasswordLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(" :nth-child(3) > .flex");
  }
  get signUpPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`#password`);
  }
  get signupConfirmPasswordLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("form > :nth-child(4) > .flex");
  }
  get signupConfirmPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("#passwordConfirm");
  }

  get signUpBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".bg-gray-200");
  }
}
export default new SignUpForm();
