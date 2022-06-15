class HomePage  {
  get featuredPosts(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".flex-row > .bg-slate-50 > :nth-child(1) > .px-4 > .grid");
  }
  get FeaturedPostsImages(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".mb-3 > a > .object-cover");
  }
  get featuredPostsTitles(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(" .mb-3 > a > .font-sans");
  }
  get featuredPostsCreatedDate(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".mb-2");
  }
  get featuredPostsAuthorsImages(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(" a > .rounded-full");
  }
  get featuredPostsAuthorsNames(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".items-center > div > .font-semibold");
  }
  get featuredPostsDescriptions(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".mb-4");
  }
  get featuredPostsTags(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(".flex-wrap");
  }
  public visit(): Cypress.Chainable<Cypress.AUTWindow> {
    return cy.visit("localhost");
  }
}
export default new HomePage();
