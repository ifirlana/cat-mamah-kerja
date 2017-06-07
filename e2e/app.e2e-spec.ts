import { CatMamahKerjaPage } from './app.po';

describe('cat-mamah-kerja App', function() {
  let page: CatMamahKerjaPage;

  beforeEach(() => {
    page = new CatMamahKerjaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
