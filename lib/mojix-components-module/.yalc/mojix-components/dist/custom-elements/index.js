import { Context, setMode, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const userAgent = navigator.userAgent;
if (/windows phone/i.test(userAgent)) {
  Context.mode = 'android';
}
else if (/android/i.test(userAgent)) {
  Context.mode = 'android';
}
else if (/iPad|iPhone|iPod/.test(userAgent)) {
  Context.mode = 'ios';
}
else {
  Context.mode = 'web';
}
setMode(elm => {
  return elm.mode || elm.getAttribute('mode') || Context.mode;
});

const mojixTagIosCss = ".sc-mojix-tag-ios-h .container.sc-mojix-tag-ios{background-color:#E50914;display:flex;border-radius:15px;text-align:center !important;width:-webkit-max-content;width:-moz-max-content;width:max-content}.sc-mojix-tag-ios-h .container.sc-mojix-tag-ios .text.sc-mojix-tag-ios{color:#FFF}";

const mojixTagMdCss = ".sc-mojix-tag-md-h .container.sc-mojix-tag-md{background-color:#E50914;display:flex;border-radius:15px;text-align:center !important;width:-webkit-max-content;width:-moz-max-content;width:max-content}.sc-mojix-tag-md-h .container.sc-mojix-tag-md .text.sc-mojix-tag-md{color:#FFF}";

const mojixTagWebCss = ".sc-mojix-tag-web-h .container.sc-mojix-tag-web{background-color:#E50914;display:flex;border-radius:15px;text-align:center !important;width:-webkit-max-content;width:-moz-max-content;width:max-content}.sc-mojix-tag-web-h .container.sc-mojix-tag-web .text.sc-mojix-tag-web{color:#FFF}";

const MojixTag = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  static get style() { return {
    ios: mojixTagIosCss,
    md: mojixTagMdCss,
    web: mojixTagWebCss
  }; }
};

const MojixTag$1 = /*@__PURE__*/proxyCustomElement(MojixTag, [38,"mojix-tag",{"icon":[1],"link":[1],"disable":[4]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      MojixTag$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { MojixTag$1 as MojixTag, defineCustomElements };
