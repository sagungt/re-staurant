const DrawerInitiator = {
  init({ appBar, hero, content }) {
    hero.addEventListener('click', (event) => {
      if (appBar.querySelector('#drawer').classList.contains('open')) {
        const drawerRectBottom = appBar.querySelector('#drawer').getClientRects()[0].bottom;
        if (event.clientY > drawerRectBottom) {
          this._closeDrawer(event, appBar.querySelector('#drawer'));
        }
      }
    });

    content.addEventListener('click', (event) => {
      if (appBar.querySelector('#drawer').classList.contains('open')) this._closeDrawer(event, appBar.querySelector('#drawer'));
    });
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
