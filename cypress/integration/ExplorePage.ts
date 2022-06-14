class ExplorePage {
  get title(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".al");
  }
  get creatorSpotlight_title(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".text-4xl");
  }
  get creatorSpotlightImage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".relative > .object-cover");
  }
  get creatorSpotlightTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".text-4xl");
  }
  get creatorSpotlightDescription(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".leading-relaxed");
  }
  get creatorSpotlightProfileLinkBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("a > .items-center");
  }
  get posts(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(":nth-child(3) > .px-4 > .grid");
  }
  public getPostByIndex(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(`:nth-child(3) > .px-4 > .grid > :nth-child(${index})`);
  }
  get postCreatedAtDate(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(":nth-child(1) > .justify-between > .text-xs");
  }
  get postCoverImage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(":nth-child(1) > :nth-child(2) > a > .object-cover");
  }
  get postTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(":nth-child(1) > .text-2xl");
  }
  get postContent(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".grid > :nth-child(1) > .text-base");
  }
  get postAuthorImage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(":nth-child(1) > .items-center > a > .rounded-full");
  }
  get postAuthorName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(":nth-child(1) > .items-center > .px-2 > .font-semibold");
  }
  get postAuthorLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(":nth-child(1) > .items-center > .px-2 > .text-sm");
  }
  get postTag(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".grid > :nth-child(1) > .flex-wrap > :nth-child(1)");
  }
}
