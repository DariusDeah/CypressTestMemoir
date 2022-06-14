import AuthPage from "../intergration/AuthPage";
import HomePage from "../intergration/HomePage";
describe("My First Test", () => {
  it("it block", () => {});
  it("should login successfully", () => {});
  it("should like a post", () => {
    HomePage.visit();
    HomePage.nav.signInLink.click({ force: true });
    AuthPage.signIn("AutoTest@gmail.com", "12345678910");
    // AuthPage.signUpLink.click();
    // AuthPage.signUp("autoTest", "AutoTest@gmail.com", "12345678910");
  });
});
