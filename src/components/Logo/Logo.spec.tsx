import { render } from '@testing-library/react';

import { LogoConfig } from '@/config/Logo';

import { Logo } from './Logo';

describe('Logo', () => {
  it('should render the logo', () => {
    const { asFragment } = render(
      <Logo
        ContentLogo={LogoConfig.ContentLogo}
        Description={LogoConfig.Description}
      />
    );
    expect(asFragment()).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
