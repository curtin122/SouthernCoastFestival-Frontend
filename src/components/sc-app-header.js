import { LitElement, html, css } from 'lit'

class AppHeader extends LitElement {
    constructor() {
        super();
        this.anchorEl = null;
        this.menuOpen = false;
        this.reactRoot = null;
    }

    static get properties() {
        return {
            title: { type: String },
            user: { type: String },
            anchorEl: { type: Object },
            menuOpen: { type: Boolean }
        };
    }

    firstUpdated() {
        this.navActiveLinks();
    }

    navActiveLinks() {
        const currentPath = window.location.pathname;
        const navLinks = this.shadowRoot.querySelectorAll('.app-top-nav a');
        navLinks.forEach(navLink => {
            if (navLink.href.slice(-1) === '#') return;
            if (navLink.pathname === currentPath) {
                navLink.classList.add('active');
            }
        });
    }

    render() {
        return html`
            <style>
                .app-header {
                    height: 8.5em;
                    background-color: #000000;
                    border-bottom: 0.2em solid #FFC600;

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
                .app-header-left {
                    width: 6.5em;
                    margin: auto 1em;
                    display: flex;
                    align-items: center;

                    .app-header-logo {
                        width: 6.5em;
                        position: absolute;
                    }
                }
                .app-header-nav {
                    display: flex;
                    align-items: center;
                    width: 50%;
                    margin: auto;

                    ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;

                        font-family: var(--base-font-family);
                        font-weight: 700;

                        width: 100%;
                        display: flex;
                        justify-content: space-evenly;
                    }
                    .nav-item a {
                        display: block;
                        color: #FFFFFF;
                        text-align: center;
                        padding: 0.75em;
                        text-decoration: none;
                    }
                    .nav-item a:hover {
                        background-color: #FFC600;
                        color: black;
                    }
                }
                .app-header-right {
                    height: 6.5em;
                    margin: auto 1em;
                    display: flex;
                    align-items: center;
                }
            </style>

            <header class="app-header">

                <div class="app-header-left">
                    <img class="app-header-logo" src="/images/soco-logo.png">
                </div>

                <nav class="app-header-nav">
                    <ul>
                        <li class="nav-item"><a href="#home">Home</a></li>
                        <li class="nav-item"><a href="#events">Events</a></li>
                        <li class="nav-item"><a href="#venue">Venue</a></li>
                        <li class="nav-item"><a href="#about">About</a></li>
                    </ul>
                </nav>
                
                <div class="app-header-right">
                    <img src="https://dummyimage.com/200/a19ca1/ffffff.png&text=placeholder" alt="" height="100%">
                </div>

            </header>
        `;
    }
}

customElements.define('sc-app-header', AppHeader);