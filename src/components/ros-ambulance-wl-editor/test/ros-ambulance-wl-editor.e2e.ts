import { newE2EPage } from '@stencil/core/testing';

describe('ros-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ros-ambulance-wl-editor></ros-ambulance-wl-editor>');

    const element = await page.find('ros-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
