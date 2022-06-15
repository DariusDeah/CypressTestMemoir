import { IUser } from "../../interfaces/user.interface";
import AuthPage from "../integration/pageObjects/AuthPage";
class LoginTest {
  private userData: Cypress.FileReference & IUser;

  constructor() {
    this.test();
  }

  public test() {
    describe("account creation", () => {
      beforeEach(() => {
        AuthPage.visit();
      });

      it("should greet with Welcome back title", () => {
        AuthPage.signInTitle.contains("Welcome");
      });

      it("should require email", () => {
        AuthPage.signInEmailInput.should("have.attr", "required");
      });

      it("should require password", () => {
        AuthPage.signInPasswordInput.should("have.attr", "required");
      });

      before(() => {
        cy.fixture("user").then((user) => {
          this.userData = user;
        });
      });

      it("should navigate to home page on successful login", () => {
        AuthPage.signIn(this.userData.email, this.userData.password);
        cy.hash().should("eq", "");
      });
    });
  }
}
new LoginTest();
