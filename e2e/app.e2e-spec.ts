import { EgocheckPage } from './app.po';

describe('egocheck App', function() {
  let page: EgocheckPage;

  beforeEach(() => {
    page = new EgocheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
