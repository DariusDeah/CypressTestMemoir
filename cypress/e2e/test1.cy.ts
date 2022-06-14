import { IUser } from "../../interfaces/user.interface";
import AuthPage from "../integration/AuthPage";
import HomePage from "../integration/HomePage";
class Test1 {
  private userFixtureData: Cypress.FileReference & IUser;
  constructor() {
    this.test();
  }
  public test() {
    describe("My First Test", () => {
      before(() => {
        cy.fixture("example").then((data) => {
          this.userFixtureData = data;
        });
      });
      it("should sign in", () => {
        HomePage.visit();
        HomePage.nav.signInLink.click({ force: true });
        AuthPage.signInForm.signInPasswordInput.type(
          this.userFixtureData.password
        );
        AuthPage.signInForm.signInPasswordInput
          .should("have.value", this.userFixtureData.password)
          .should("be.focused")
          .should("have.attr", "required");
      });
    });
  }
}
new Test1();
