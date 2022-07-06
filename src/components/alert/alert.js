import { html } from 'lit'
import BaseElement from "../base/base-element";
import css from "./alert.css";

class Alert extends BaseElement {
  constructor() {
    super();
    this.type = "";
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
      theme: { type: String, reflect: true },
      size: { type: String, reflect: true },
      outline: { type: Boolean, reflect: true },
    };
  }

  render() {
    return html`
      <div class="alert alert-${this.type}">
        <slot></slot>
      </div>
    `;
  }
}

export default Alert;

customElements.define("wc-alert", Alert);