import { browser, element, by } from 'protractor';

export class Tam4Login {
  navigateTo() {
    return browser.get('/login');
  }

  getPageTitle() {
    return element(by.css('app-login h1')).getText();
  }
}
