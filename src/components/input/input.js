import { html } from 'lit';
import BaseElement from "../base/base-element";
import css from "./input.css";

class Input extends BaseElement {
  constructor() {
    super();
    this.type = "text";
    this.disabled = false;
    this.theme = "";
    this.size = "";
    this.outline = false;
  }

  static get styles() {
    return this.processStyle(css);
  }

  static get properties() {
    return {
      type: { type: String },
      disabled: { type: Boolean },
      theme: { type: String, reflect: true },
      size: { type: String, reflect: true },
      outline: { type: Boolean, reflect: true },
    };
  }

  render() {
    return html`
      <input type="${this.type}" disabled="${this.disabled}" theme="${this.theme}" size="${this.size}" outline="${this.outline}">
    `;
  }
}

export default Input;

customElements.define("wc-input", Input);