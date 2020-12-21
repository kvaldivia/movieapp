import { newE2EPage } from '@stencil/core/testing';

describe('mojix-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mojix-tag></mojix-tag>');

    const element = await page.find('mojix-tag');
    expect(element).toHaveClass('hydrated');
  });
});
