import { Tam4App } from './app.po';

describe('tam4 App', function() {
  let page: Tam4App;

  beforeEach(() => {
    page = new Tam4App();
  });

  it('should have a title', () => {
    page.navigateTo();
    expect(page.getWindowTitle()).toEqual('Tam4');
  });
});
