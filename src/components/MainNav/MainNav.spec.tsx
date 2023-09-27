import { render } from '@testing-library/react';

import { MainNavConfig } from '@/config/MainNav';

import { MainNav } from './MainNav';

describe('MainNav', () => {
  it('should render the mainnav', () => {
    const { asFragment } = render(<MainNav items={MainNavConfig} />);
    expect(asFragment()).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
