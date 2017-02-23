import { browser, element, by } from 'protractor';

export class Tam4App {
  navigateTo() {
    return browser.get('/');
  }

  getWindowTitle() {
    return browser.getTitle();
  }
}
