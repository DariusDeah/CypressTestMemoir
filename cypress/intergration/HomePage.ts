import { IHomePage } from "../../interfaces/IHomePage.interface";
import NavPage from "./NavPage";
class HomePage implements IHomePage {
  nav = NavPage;
  public visit(): Cypress.Chainable<Cypress.AUTWindow> {
    return cy.visit("localhost");
  }
}
export default new HomePage();
