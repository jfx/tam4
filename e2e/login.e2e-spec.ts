import { Tam4Login } from './login.po';

describe('TAM4 Login', function() {
  let page: Tam4Login;

  beforeEach(() => {
    page = new Tam4Login();
  });

  it('should display title saying Login To Your Account', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual('Login To Your Account');
  });
});
