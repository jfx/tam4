import { browser, element, by } from 'protractor';

import { Tam4Today } from './today.po';

describe('tam4 Today', function () {
  let page: Tam4Today;

  beforeEach(() => {
    page = new Tam4Today();
  });

  it('should display 2 titles', () => {
    page.navigateTo();
    const pageTitleElt = page.getPageTitleElements();
    expect(pageTitleElt.count()).toEqual(2);
  });

  it('should display title saying Sprint backlog', () => {
    page.navigateTo();
    const pageTitleElt = page.getPageTitleElements();
    expect(pageTitleElt.get(0).getText()).toEqual('Sprint backlog');
  });
});


