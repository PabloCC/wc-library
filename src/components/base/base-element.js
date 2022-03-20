import { LitElement, css, unsafeCSS } from "lit";

class BaseElement extends LitElement {
   static processStyle(style) {
    return css`${unsafeCSS(style)}`;
  }
}

export default BaseElement;