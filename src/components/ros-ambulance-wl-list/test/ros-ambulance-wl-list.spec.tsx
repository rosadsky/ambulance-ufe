import { newSpecPage } from '@stencil/core/testing';
import { RosAmbulanceWlList } from '../ros-ambulance-wl-list';

describe('ros-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RosAmbulanceWlList],
      html: `<ros-ambulance-wl-list></ros-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ros-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ros-ambulance-wl-list>
    `);
  });
});
