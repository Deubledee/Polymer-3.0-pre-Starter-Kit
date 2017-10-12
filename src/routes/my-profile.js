
import "../../node_modules/@polymer/paper-icon-button/paper-icon-button.js"
import "../../node_modules/@polymer/paper-card/paper-card.js"
import "../../node_modules/@polymer/iron-icons/iron-icons.js"
import "../../node_modules/@polymer/iron-image/iron-image.js"
import "../../node_modules/@polymer/paper-styles/color.js"
import "../../node_modules/@polymer/paper-icon-button/paper-icon-button.js"
import "../../node_modules/@polymer/paper-input/paper-input-container.js"
import "../../node_modules/@polymer/paper-input/paper-input-error.js"
import "../../node_modules/@polymer/paper-input/paper-input.js"
import "../../node_modules/@polymer/paper-input/paper-textarea.js"
import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';

export class myProfile extends PolymerElement {
  static get template() {
    return `
    <style>
    :host([video-page-active]) {
        overflow: hidden;
    }

    :host([video-page-active]) iron-pages {
        transform: translateY(-170px);
    }

    iron-pages {
        transition: transform 0.3s;
    }
</style>


<h1>Profile Page</h1>
<paper-card>
  <div class="card-content">
  <iron-image alt="The Polymer logo." src="src/images/polymer.svg"></iron-image>
  </div>
  <div class="card-actions">     
  </div>
</paper-card>
    ` }

  static get properties() {
    return {
      dataq: {
        type: String,
        observer: '_logDAta'
      }
    }
  }
}

customElements.define('my-profile', myProfile)