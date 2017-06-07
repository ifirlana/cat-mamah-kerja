import { CatAppPage } from './app.po';

describe('cat-app App', function() {
  let page: CatAppPage;

  beforeEach(() => {
    page = new CatAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
