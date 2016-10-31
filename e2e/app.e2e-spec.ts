import { Tam4Page } from './app.po';

describe('tam4 App', function() {
  let page: Tam4Page;

  beforeEach(() => {
    page = new Tam4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
