import { Ng2TodoMVCPage } from './app.po';

describe('ng2-todo-mvc App', () => {
  let page: Ng2TodoMVCPage;

  beforeEach(() => {
    page = new Ng2TodoMVCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
