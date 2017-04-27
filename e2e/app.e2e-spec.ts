import { BabelShoppingPage } from './app.po';

describe('babel-shopping App', function() {
  let page: BabelShoppingPage;

  beforeEach(() => {
    page = new BabelShoppingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
