import { LitElement, html } from 'lit';

export default class HeroElement extends LitElement {
  render() {
    return html`
    <div class="hero" role="img" aria-label="Hero Image" title="Hero image" id="heroContainer">
      <div class="hero-inner">
        <h1 class="hero-title">Good food is better than body.</h1>
        <p class="hero-tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis rerum autem totam
          officia delectus minima, aspernatur vel hic ex eos saepe, quia temporibus, et explicabo minus facere eligendi
          magni.</p>
      </div>
    </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('hero-element', HeroElement);
