import { Component, Host, h, Prop } from '@stencil/core';
export class MojixTag {
  render() {
    if (this.icon) {
      return this.renderTemplateWithIcon();
    }
    return this.renderTemplate();
  }
  renderBaseTemplate(iconTmpl) {
    return (h(Host, null,
      h("div", { class: "container" },
        iconTmpl ? iconTmpl : null,
        h("div", { class: "text" },
          h("slot", null)))));
  }
  renderTemplateWithIcon() {
    const iconTmpl = (h("div", { class: "icon" },
      h("img", { src: this.icon })));
    return this.renderBaseTemplate(iconTmpl);
  }
  renderTemplate() {
    return this.renderBaseTemplate();
  }
  static get is() { return "mojix-tag"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "ios": ["mojix-tag.ios.scss"],
    "md": ["mojix-tag.md.scss"],
    "web": ["mojix-tag.web.scss"]
  }; }
  static get styleUrls() { return {
    "ios": ["mojix-tag.ios.css"],
    "md": ["mojix-tag.md.css"],
    "web": ["mojix-tag.web.css"]
  }; }
  static get properties() { return {
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon",
      "reflect": false
    },
    "link": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "link",
      "reflect": false
    },
    "disable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disable",
      "reflect": false
    }
  }; }
}
