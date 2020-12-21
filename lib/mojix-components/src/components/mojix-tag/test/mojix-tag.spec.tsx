import { newSpecPage } from '@stencil/core/testing';
import { MojixTag } from '../mojix-tag';

describe('mojix-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MojixTag],
      html: `<mojix-tag></mojix-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <mojix-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mojix-tag>
    `);
  });
});
