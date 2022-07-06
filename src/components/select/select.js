import {html} from 'lit';
import BaseElement from '../base/base-element';
import css from './select.css';

class Select extends BaseElement {
  constructor() {
    super();
    this.type = 'select';
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
      <select type="${this.type}" disabled="${this.disabled}" theme="${this.theme}" size="${this.size}" outline="${this.outline}">
        <slot></slot>
      </select>
    `;
  }
}

export default Select;

customElements.define('wc-select', Select);