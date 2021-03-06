import { viewPorts } from "../../../utils/portSizes";
class Nav {
  get mobileToggleOpenBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.viewport(viewPorts.mobile).get(`.w-5`);
  }
  get mobileExploreLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .viewport(viewPorts.mobile)
      .get(`[href="/explore"] > .text-gray-700`);
  }
  get mobileCreatePostLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .viewport(viewPorts.mobile)
      .get(`.space-y-4 > :nth-child(2) > a > .text-gray-700`);
  }
  get mobileSearchLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .viewport(viewPorts.mobile)
      .get(`.space-y-4 > :nth-child(3) > [href="/search"] > .text-gray-700`);
  }
  get mobileFeaturesLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .viewport(viewPorts.mobile)
      .get(`[href="/feature-request"] > .text-gray-700`);
  }
  get mobileSignInLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .viewport(viewPorts.mobile)
      .get(`:nth-child(5) > [href="/sign-auth"] > .text-gray-700`);
  }

  get exploreLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.viewport(viewPorts.laptop).get("li > .text-gray-700");
  }
  get createLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .viewport(viewPorts.laptop)
      .get(":nth-child(2) > a > .text-gray-700");
  }
  get searchLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .viewport(viewPorts.laptop)
      .get('[href="/search"] > .text-gray-700');
  }
  get featuresLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.viewport(viewPorts.laptop).get(".read-only");
  }
  get signInLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.viewport(viewPorts.laptop).get(`[href="/sign-auth"] `);
  }
}
export default new Nav();
