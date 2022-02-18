const ToastPresenter = {
  init({ toastElement, message }) {
    this._toastElement = toastElement;
    this._message = message;
    this._delay = null;

    this._showMessage();
  },

  _showMessage() {
    this._toastElement.setAttribute('message', this._message);
  },
};

export default ToastPresenter;
