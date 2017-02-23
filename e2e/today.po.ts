import { browser, element, by } from 'protractor';

export class Tam4Today {
  navigateTo() {
    return browser.get('/today');
  }

  getPageTitleElements() {
    return element.all(by.css('app-personal-today h3'));
  }
}
