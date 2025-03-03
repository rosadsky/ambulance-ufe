import { newSpecPage } from '@stencil/core/testing';
import { RosAmbulanceWlList } from '../ros-ambulance-wl-list';

describe('ros-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RosAmbulanceWlList],
      html: `<ros-ambulance-wl-list></ros-ambulance-wl-list>`,
    });

      const wlList = page.rootInstance as RosAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
   });
});

