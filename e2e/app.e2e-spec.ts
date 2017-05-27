import { UploadAngular2ToFirebasePage } from './app.po';

describe('upload-angular2-to-firebase App', () => {
  let page: UploadAngular2ToFirebasePage;

  beforeEach(() => {
    page = new UploadAngular2ToFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
