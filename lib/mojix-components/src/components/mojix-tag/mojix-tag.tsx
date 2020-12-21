import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mojix-tag',
  styleUrls: {
    ios: 'mojix-tag.ios.scss',
    md: 'mojix-tag.md.scss',
    web: 'mojix-tag.web.scss'
  },
  scoped: true,
})
export class MojixTag {
  @Prop() icon: string;
  @Prop() link: string;
  @Prop() disable: boolean;

  render() {
    if (this.icon) {
      return this.renderTemplateWithIcon();
    }

    return this.renderTemplate();
  }

  private renderBaseTemplate(iconTmpl?) {
    return (
      <Host>
        <div class="container">
          { iconTmpl ? iconTmpl : null }
          <div class="text">
            <slot />
          </div>
        </div>
      </Host>
    )
  }

  private renderTemplateWithIcon() {
    const iconTmpl = (
      <div class="icon">
        <img src={this.icon}>
        </img>
      </div>
    );
    return this.renderBaseTemplate(iconTmpl);
  }

  private renderTemplate() {
    return this.renderBaseTemplate();
  }
}
