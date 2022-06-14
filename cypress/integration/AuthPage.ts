import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

class AuthPage {
  signUpForm = SignUpForm;
  signInForm = SignInForm;
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
  public signIn(email: string, password: string): void {
    this.signInForm.signInEmailInput.type(email);
    this.signInForm.signInPasswordInput.type(password);
    this.signInForm.loginBtn.click();
  }
  public signUp(name: string, email: string, password: string): void {
    this.signUpForm.signUpNameInput.type(name);
    this.signUpForm.signUpEmailInput.type(email);
    this.signUpForm.signUpPasswordInput.type(password);
    this.signUpForm.signupConfirmPasswordInput.type(password);
    this.signUpForm.signUpBtn.click();
  }
}
export default new AuthPage();
