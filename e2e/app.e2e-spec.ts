import { Angular2PrimengDemoPage } from './app.po';

describe('angular2-primeng-demo App', function() {
  let page: Angular2PrimengDemoPage;

  beforeEach(() => {
    page = new Angular2PrimengDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
