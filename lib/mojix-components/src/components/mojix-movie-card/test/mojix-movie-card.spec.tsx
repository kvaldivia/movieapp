import { newSpecPage } from '@stencil/core/testing';
import { MojixMovieCard } from '../mojix-movie-card';

describe('mojix-movie-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MojixMovieCard],
      html: `<mojix-movie-card></mojix-movie-card>`,
    });
    expect(page.root).toEqualHtml(`
      <mojix-movie-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mojix-movie-card>
    `);
  });
});
