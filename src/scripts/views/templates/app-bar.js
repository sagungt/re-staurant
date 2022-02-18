import { LitElement, html } from 'lit';

export default class AppBar extends LitElement {
  render() {
    return html`
    <header class="header" id="header">
      <div class="navbar">
        <div class="header-inner">
          <h1 class="header-title">Re:staurant</h1>
        </div>
        <button class="header-menu" id="menu" aria-label="Menu Toggler" @click="${this._toggleMenu}">☰</button>
        <nav class="nav" id="drawer">
          <ul class="nav-list">
            <li class="nav-item"><a href="#/home">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Favorite</a></li>
            <li class="nav-item"><a href="https://github.com/sagungt">About Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
    `;
  }

  createRenderRoot() {
    return this;
  }

  _toggleMenu(event) {
    event.stopPropagation();
    this.querySelector('#drawer').classList.toggle('open');
  }
}

customElements.define('app-bar', AppBar);
