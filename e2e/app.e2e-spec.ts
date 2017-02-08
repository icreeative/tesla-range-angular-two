import { TeslaRangeAngularTwoPage } from './app.po';

describe('tesla-range-angular-two App', function() {
  let page: TeslaRangeAngularTwoPage;

  beforeEach(() => {
    page = new TeslaRangeAngularTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
