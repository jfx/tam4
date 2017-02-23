import { browser, element, by } from 'protractor';

export class Tam4Home {
  navigateTo() {
    return browser.get('/home');
  }

  getPageTitle() {
    return element(by.css('app-home h3')).getText();
  }
}
