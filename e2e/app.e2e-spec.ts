import { JenkinsTestPage } from './app.po';

describe('jenkins-test App', () => {
  let page: JenkinsTestPage;

  beforeEach(() => {
    page = new JenkinsTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
