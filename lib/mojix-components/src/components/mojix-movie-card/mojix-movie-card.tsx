import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mojix-movie-card',
  styleUrls: [
    'mojix-movie-card.android.scss',
    'mojix-movie-card.ios.scss',
    'mojix-movie-card.web.scss',
  ],
  scoped: true,
})
export class MojixMovieCard {

  @Prop() posterUrl: string;
  @Prop() name: string;
  @Prop() summary: string;
  @Prop() genres: string[];

  render() {
    return (
      <Host>
        <div class="container">
          <img src={ this.posterUrl } class="poster" />
          <div class="info">
            <div class="blurred-background">
            </div>
            <div class="meta">
              <div class="title">
                { this.name }
              </div>
              <div class="genres">
                  {
                    this.genres.map((genre) => {
                      return (
                        <div class="tag">
                          <mojix-tag>
                            { genre }
                          </mojix-tag>
                        </div>
                      );
                    })
                  }
              </div>
              <div class="summary">
                { this.summary }
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
