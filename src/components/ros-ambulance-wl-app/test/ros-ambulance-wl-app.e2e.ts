import { newE2EPage } from '@stencil/core/testing';

describe('ros-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ros-ambulance-wl-app></ros-ambulance-wl-app>');

    const element = await page.find('ros-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
