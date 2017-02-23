import { Tam4Home } from './home.po';

describe('tam4 Home', function() {
  let page: Tam4Home;

  beforeEach(() => {
    page = new Tam4Home();
  });

  it('should display title saying Dashboard', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual('Dashboard');
  });
});
