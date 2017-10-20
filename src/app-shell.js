import "../node_modules/@polymer/font-roboto/roboto.js"
import "../node_modules/@polymer/iron-pages/iron-pages.js"
import "../node_modules/@polymer/iron-icons/iron-icons.js"
import "../node_modules/@polymer/paper-styles/color.js"
import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js"
import "../node_modules/@polymer/paper-input/paper-input-container.js"
import "../node_modules/@polymer/paper-input/paper-input-error.js"
import "../node_modules/@polymer/paper-input/paper-input.js"
import "../node_modules/@polymer/app-route/app-route.js"
import "../node_modules/@polymer/app-route/app-location.js"
import "../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
import "../node_modules/@polymer/app-layout/app-drawer/app-drawer.js"
import "../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js"
import "../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js"
import "../node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js"
import "../node_modules/@polymer/app-layout/app-header/app-header.js"
import "../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"
import "../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js"
import "./components/my-element.js"
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

export class appShell extends PolymerElement {
    static get template() {
        return ` 
    <custom-style>
        <style is="custom-style">
            paper-input {
                display: block;
            }  
            app-drawer a {
                background-color: var(--paper-cyan-100);
            }            
            a paper-icon-button {
                margin-left: 0px;
                margin-right: 40px;
              }
            a paper-icon-button {
                color: var(--paper-blue-600);
               /* --paper-icon-button-ink-color: var(--google-grey-100);*/
                width: 60%;
                height: 40px;
                padding: 0px 4px;
            }
            a:hover {
                background-color: var(--paper-cyan-300);
                color: #18ffff;
              } 
            paper-icon-button.giant {
                margin-left: 10%;
                font-weight: bolder;
                width: 70%;
                height: 35px;
              } 

            /*a:active paper-icon-button{
                color: var(--paper-red-300);
                --paper-icon-button-ink-color: var(--google-grey-100);                
            }
            a:visited paper-icon-button {
                color: var(--paper-teal-900);
                --paper-icon-button-ink-color: var(--google-grey-100);                
            } */
            iron-icon {
                padding-right: 5px;
            }    
            #inputForValidation {
                display: inline-block;
                width: calc(100% - 75px);
            }    
            app-header {
                background-color: #4285f4;
                color: #fff;
            }    
            .content {
                @apply --layout-flex;
            }    
            app-header paper-icon-button {
                --paper-icon-button-ink-color: white;
            }    
            footer {
                height: 50px;
                line-height: 50px;
                text-align: center;
                background-color: white;
                font-size: 14px;
            }    
            app-toolbar {
                background-color: #4285f4;
                color: #fff;
            }    
            app-drawer-layout:not([narrow]) [drawer-toggle] {
                display: none;
            }    
            app-drawer {
                --app-drawer-content-container: {
                    background-color: #d0e2ea;
                }
            }                           
            paper-input {
                background-color: #6e9feb7d;
                margin-left: 2px;
            }    
            app-drawer {
                z-index: 1
            }    
            .drawer-list {
                margin: 0 20px;
            }    
            .drawer-list a {
                display: block;
                padding: 0 16px;
                text-decoration: none;
                color: var(--app-secondary-color);
                line-height: 40px;
            }    
            .drawer-list a.iron-selected {
                color: black;
                font-weight: bold;
            }
        </style>
    </custom-style>
<app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
<app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
    <app-drawer-layout>
        <app-drawer id="drawer" slot="drawer">
        <paper-icon-button class="giant" icon="polymer">
        </paper-icon-button>
            <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
                <a name="home" href="[[rootPath]]home">
            
                <paper-icon-button icon="home" title="Home page">
                </paper-icon-button>                
                </a>
                <a name="login" href="[[rootPath]]login">
             
                <paper-icon-button icon="lock-open" title="login">
                </paper-icon-button>
                </a>
                <a name="youtube" href="[[rootPath]]profile">
                
                <paper-icon-button icon="account-circle" title="profile"> 
                </paper-icon-button>
                </a>
            </iron-selector>
        </app-drawer>
        <app-header-layout fulhttps://github.com/aruntk/kickstart-meteor-polymer-with-app-route.gitlbleed>
            <app-header slot="header" effects="waterfall" condenses reveals>
                <app-toolbar>
                    <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
                    <my-element>
                    </my-element>
                </app-toolbar>
                <app-toolbar></app-toolbar>
                <app-toolbar>
                    <div spacer main-title>Polymer 3.0 pre Starter Kit</div>
                </app-toolbar>
            </app-header>
            <div class="content">
                <iron-pages selected="{{routeData.page}}" attr-for-selected="name" fallback-selection="home" role="main">
                    <my-home name="home">
                        loading..
                    </my-home>
                    <my-login name="login">
                        loading..
                    </my-login>
                    <my-profile name="profile" dataq="{{someData}}">
                        loading..
                    </my-profile>
                </iron-pages>
            </div>
            <footer>
                &copy; Polymer project
            </footer>
        </app-header-layout>
    </app-drawer-layout>           
    `;
    }
    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged',
                notify: true,
            },
            routeData: Object,
            subroute: Object,
            rootPath: {
                type: String,
                value: '/'
            },
            someData: {
                type: String,
                value: '',
                notify: true,
            }
        };
    }
    static get observers() {
        return [
            '_routePageChanged(routeData.page)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        if (window.performance && performance.mark)
            performance.mark('app-shell.connected');
    }
    _routePageChanged(page) {
        this.page = page || 'home'
    }
    _pageChanged(script) {
        var resolvedPageUrl = 'src/routes/my-' + script + '.js'
        this.imports(resolvedPageUrl, script)
    }
    imports(resolvedPageUrl, script) {
        var exists = document.querySelectorAll(`script[src^=${resolvedPageUrl}]`)[0]
        if (exists === undefined) {
            let script1 = document.createElement('script')
            script1.setAttribute('type', 'module')
            script1.setAttribute('src', resolvedPageUrl)
            this.append(script1)
            script1.onload = evt => {                t
                console.log('..script loaded!', resolvedPageUrl, this.scripts[script])
            }
        }
    }
}
customElements.define('app-shell', appShell)




