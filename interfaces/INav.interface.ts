interface INav {
  /** hamburger nav toggle button for mobile  */
  get mobileToggleOpenBtn(): Cypress.Chainable<JQuery<HTMLElement>>;
  /** Child element of mobile nav DOM element, must be targeted within mobile nav */
  get mobileSignInLink(): Cypress.Chainable<JQuery<HTMLElement>>;
  /** Child element of mobile nav DOM element, must be targeted within mobile nav */
  get mobileExploreLink(): Cypress.Chainable<JQuery<HTMLElement>>;
}
