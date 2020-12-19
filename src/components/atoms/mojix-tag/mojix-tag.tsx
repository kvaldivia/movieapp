import { Component, Event, h, Prop, State } from '@stencil/core';


@Component({
  tag: 'mojix-tag',
  styleUrls: {
    web: 'mojix-tag.web.scss',
    ios: 'mojix-tag.ios.scss',
    android: 'mojix-tag.android.scss',
  },
  scoped: true,
})
export class MojixTag {
  @Prop() icon: string;
  @Prop() text: string;
  @Prop() link: string;
  @Prop() disable: boolean;

  render() {
    if (this.icon) {
      return this.renderTemplateWithIcon();
    }

    return this.renderTemplate();
  }

  private renderTemplate() {
    return (

    )
  }

  private renderTemplateWithIcon() {

  }

  private renderTemplate(content) {
    return (
      <Host>
        <div>
          { content }
        </div>
      </Host>
    );
  }
}
