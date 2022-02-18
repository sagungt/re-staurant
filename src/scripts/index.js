import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import './views/templates/app-bar';
import './views/templates/hero-element';
import './utils/modernizr-webp';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  appBar: document.querySelector('app-bar'),
  hero: document.querySelector('hero-element'),
  content: document.querySelector('#app'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
