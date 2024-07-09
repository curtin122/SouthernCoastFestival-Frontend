import { LitElement } from 'lit'
import { anchorRoute } from '../Router'
import Auth from '../Auth'
import App from '../App'

customElements.define('sc-app-header', class AppHeader extends LitElement {
    constructor() {
        super()
    }

    static get properties() {
        return {
            title: {
                type: String
            },
            user: {
                type: String
            }
        }
    }

    firstUpdated() {
        super.firstUpdated()
        this.navActiveLinks()
    }

    navActiveLinks() {
        const currentPath = window.location.pathname
        const navLinks = this.shadowRoot.querySelectorAll('.app-top-nav a')
        navLinks.forEach(navLink => {
            if(navLink.href.slice(-1) == '#') return
            if(navLink.pathname === currentPath) {
                navLink.classList.add('active')
            }
        })
    }

    render() {
        return html`
            <style>
                .app-header {
                    background: #000000;
                    position: fixed;
                    top: 0;
                    right: 0;
                    left: 0;
                    height: 100px;
                    width: 90%;
                    margin: auto;
                    color: #fff;
                    display: flex;
                }
            </style>

            <header class="app-header">
                <div class="app-header-main">
                </div>

                <nav class="app-top-nav">
                    <ul>
                        <li>Home</li>
                        <li>Events</li>
                        <li>Venue</li>
                        <li>About</li>
                    </ul>
                </nav>
            </header>
        `
    }
})