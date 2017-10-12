import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';

export class MyElement extends PolymerElement {
  static get template() {
    return `
      <h1>Hello World!</h1>
    `;
  }
}
customElements.define('my-element', MyElement)