import { SanitizHtmlPipe } from './sanitiz-html.pipe';

describe('SanitizHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
