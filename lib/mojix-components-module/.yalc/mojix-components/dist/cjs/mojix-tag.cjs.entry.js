'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eb9f49e2.js');

const mojixTagIosCss = ".sc-mojix-tag-ios-h .container.sc-mojix-tag-ios{background-color:#E50914;display:flex;border-radius:15px;text-align:center !important;width:-webkit-max-content;width:-moz-max-content;width:max-content}.sc-mojix-tag-ios-h .container.sc-mojix-tag-ios .text.sc-mojix-tag-ios{color:#FFF}";

const mojixTagMdCss = ".sc-mojix-tag-md-h .container.sc-mojix-tag-md{background-color:#E50914;display:flex;border-radius:15px;text-align:center !important;width:-webkit-max-content;width:-moz-max-content;width:max-content}.sc-mojix-tag-md-h .container.sc-mojix-tag-md .text.sc-mojix-tag-md{color:#FFF}";

const mojixTagWebCss = ".sc-mojix-tag-web-h .container.sc-mojix-tag-web{background-color:#E50914;display:flex;border-radius:15px;text-align:center !important;width:-webkit-max-content;width:-moz-max-content;width:max-content}.sc-mojix-tag-web-h .container.sc-mojix-tag-web .text.sc-mojix-tag-web{color:#FFF}";

const MojixTag = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    if (this.icon) {
      return this.renderTemplateWithIcon();
    }
    return this.renderTemplate();
  }
  renderBaseTemplate(iconTmpl) {
    return (index.h(index.Host, null, index.h("div", { class: "container" }, iconTmpl ? iconTmpl : null, index.h("div", { class: "text" }, index.h("slot", null)))));
  }
  renderTemplateWithIcon() {
    const iconTmpl = (index.h("div", { class: "icon" }, index.h("img", { src: this.icon })));
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

exports.mojix_tag = MojixTag;
