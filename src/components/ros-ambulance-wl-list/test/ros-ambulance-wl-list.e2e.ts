import { newE2EPage } from '@stencil/core/testing';

describe('ros-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ros-ambulance-wl-list></ros-ambulance-wl-list>');

    const element = await page.find('ros-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
