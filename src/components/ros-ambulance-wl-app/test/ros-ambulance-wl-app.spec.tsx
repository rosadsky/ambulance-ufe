import { newSpecPage } from '@stencil/core/testing';
import { RosAmbulanceWlApp } from '../ros-ambulance-wl-app';

  describe('<pfx>-ambulance-wl-app', () => {

    it('renders editor', async () => {
      const page = await newSpecPage({
        url: `http://localhost/entry/@new`,
        components: [RosAmbulanceWlApp],
          html: `<ros-ambulance-wl-app base-path="/"></ros-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("<pfx>-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
        components: [RosAmbulanceWlApp],
          html: `<ros-ambulance-wl-app base-path="/ambulance-wl/"></ros-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("<pfx>-ambulance-wl-list");
  });
});
