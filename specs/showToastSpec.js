import ToastPresenter from '../src/scripts/utils/toast-presenter';

describe('Showing toast alert', () => {
  let toastElement;
  const message = 'alert information';

  beforeEach(async () => {
    document.body.innerHTML = '<toast-alert></toast-alert>';
    toastElement = document.querySelector('toast-alert');
    await toastElement.render();
  });

  it('should showing information toast', async () => {
    ToastPresenter.init({ toastElement, message });
    await toastElement.render();

    expect(document.querySelector('.toast-alert').textContent)
      .toEqual(message);
  });

  it('should not displaying after 5 seconds', async () => {
    ToastPresenter.init({ toastElement, message });
    await toastElement.render();

    setTimeout(() => {
      expect(toastElement.querySelector('div').classList.contains('show-toast'))
        .toBeFalsy();
    }, 5000);
  });
});
