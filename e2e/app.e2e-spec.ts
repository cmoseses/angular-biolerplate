import { HomeworkPage } from './app.po';

describe('homework App', function() {
  let page: HomeworkPage;

  beforeEach(() => {
    page = new HomeworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
