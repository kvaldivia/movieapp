import { newE2EPage } from '@stencil/core/testing';

describe('mojix-movie-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mojix-movie-card></mojix-movie-card>');

    const element = await page.find('mojix-movie-card');
    expect(element).toHaveClass('hydrated');
  });
});
