import { Angular2QuickStartPage } from './app.po';

describe('angular2-quick-start App', () => {
  let page: Angular2QuickStartPage;

  beforeEach(() => {
    page = new Angular2QuickStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
