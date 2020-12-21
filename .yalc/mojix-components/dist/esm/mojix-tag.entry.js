import { r as registerInstance, h, H as Host } from './index-468d0917.js';

const mojixTagIosCss = ".sc-mojix-tag-ios-h .container.sc-mojix-tag-ios{background-color:#E50914;display:flex;border-radius:15px;text-align:center !important;width:-webkit-max-content;width:-moz-max-content;width:max-content}.sc-mojix-tag-ios-h .container.sc-mojix-tag-ios .text.sc-mojix-tag-ios{color:#FFF}";

const mojixTagMdCss = ".sc-mojix-tag-md-h .container.sc-mojix-tag-md{background-color:#E50914;display:flex;border-radius:15px;text-align:center !important;width:-webkit-max-content;width:-moz-max-content;width:max-content}.sc-mojix-tag-md-h .container.sc-mojix-tag-md .text.sc-mojix-tag-md{color:#FFF}";

const mojixTagWebCss = ".sc-mojix-tag-web-h .container.sc-mojix-tag-web{background-color:#E50914;display:flex;border-radius:15px;text-align:center !important;width:-webkit-max-content;width:-moz-max-content;width:max-content}.sc-mojix-tag-web-h .container.sc-mojix-tag-web .text.sc-mojix-tag-web{color:#FFF}";

const MojixTag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    if (this.icon) {
      return this.renderTemplateWithIcon();
    }
    return this.renderTemplate();
  }
  renderBaseTemplate(iconTmpl) {
    return (h(Host, null, h("div", { class: "container" }, iconTmpl ? iconTmpl : null, h("div", { class: "text" }, h("slot", null)))));
  }
  renderTemplateWithIcon() {
    const iconTmpl = (h("div", { class: "icon" }, h("img", { src: this.icon })));
    return this.renderBaseTemplate(iconTmpl);
  }
  renderTemplate() {
    return this.renderBaseTemplate();
  }
};
MojixTag.style = {
  ios: mojixTagIosCss,
  md: mojixTagMdCss,
  web: mojixTagWebCss
};

export { MojixTag as mojix_tag };
