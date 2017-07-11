import { KulquiPage } from './app.po';

describe('kulqui App', () => {
  let page: KulquiPage;

  beforeEach(() => {
    page = new KulquiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
