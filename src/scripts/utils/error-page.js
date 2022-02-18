import '../views/templates/error-element';
import { render, html } from 'lit-html';

const errorPage = (ToastPresenter, container, err = 'error') => {
  const toastElement = document.querySelector('toast-alert');
  ToastPresenter.init({
    toastElement,
    message: String(err),
  });
  render(html`<error-element></error-element>`, container);
};

export default errorPage;
