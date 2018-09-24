import { Furniture3Page } from './app.po';

describe('furniture3 App', function() {
  let page: Furniture3Page;

  beforeEach(() => {
    page = new Furniture3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
