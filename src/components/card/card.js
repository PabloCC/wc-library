import { html } from 'lit';
import BaseElement from '../base/base-element';
import css from './card.css';

class Card extends BaseElement {
  constructor() {
    super();
    this.type = 'card';
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
      <div class="card card-${this.type}">
        <slot></slot>
      </div>
    `;
  }
}