import { html } from 'lit';
import BaseElement from '../base/base-element';
import css from './button.css';

class Button extends BaseElement {
  constructor() {
    super();
    this.type = 'button';
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
      <button type="${this.type}">
        <slot></slot>
      </button>
    `;
  }
}

export default Button;
