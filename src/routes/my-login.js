import "../../node_modules/@polymer/paper-card/paper-card.js"
import "../../node_modules/@polymer/paper-styles/color.js"
import "../../node_modules/@polymer/paper-input/paper-input-error.js"
import "../../node_modules/@polymer/paper-input/paper-input.js"
import "../../node_modules/@polymer/paper-input/paper-textarea.js"
import { Element as PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';

export class myLogin extends PolymerElement {
  static get template() {
    return `
    <h1>LOGIN PAGE</h1>
    <paper-card heading="login">
        <div class="card-content">
            input your data
        </div>
        <div class="card-actions">    
            <paper-input label="name"></paper-input>
            <paper-input label="email" value="pre-filled"></paper-input>        
            <paper-textarea label="autoresizing textarea input"></paper-textarea>
            <paper-input label="password input" type="password"></paper-input>
            <paper-input label="disabled input" disabled="" value="batman"></paper-input>    
        </div>
    </paper-card>
    `;
  }
}
customElements.define('my-login', myLogin)