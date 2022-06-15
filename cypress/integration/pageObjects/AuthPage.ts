class AuthPage {
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

  get signInTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
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

  get coverImage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".img-responsive");
  }
  get logo(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".text-2xl");
  }
  get signUpLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(` form > .items-center > .text-xs`);
  }
  get signInLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`form > .items-center > .text-xs`);
  }

  //Page Actions
  public visit(): void {
    cy.visit(`http://localhost/sign-auth`);
  }

  public typeEmail(email: string): void {
    this.signInEmailInput.type(email);
  }

  public typePassword(password: string) {
    this.signInPasswordInput.type(password);
  }

  public signIn(email: string, password: string): void {
    this.signInEmailInput.type(email);
    this.signInPasswordInput.type(password);
    this.loginBtn.click();
  }

  public signUp(name: string, email: string, password: string): void {
    this.signUpNameInput.type(name);
    this.signUpEmailInput.type(email);
    this.signUpPasswordInput.type(password);
    this.signupConfirmPasswordInput.type(password);
    this.signUpBtn.click();
  }
}
export default new AuthPage();
