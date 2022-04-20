import { getTitle } from '../support/app.po';

describe('kickstartgreen', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file

    // Function helper example, see `../support/app.po.ts` file
    getTitle().contains('kickstartgreen');
  });
});
