import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mojix-movie-card',
  styleUrl: 'mojix-movie-card.css',
  shadow: true,
})
export class MojixMovieCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
