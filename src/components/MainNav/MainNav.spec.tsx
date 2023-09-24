import { render } from '@testing-library/react';

import { MainNavConfig } from '@/config/MainNav';

import { MainNav } from './MainNav';

describe('Header', () => {
  it('should render the header', () => {
    render(<MainNav items={MainNavConfig} />);
    const { asFragment } = render(<MainNav items={MainNavConfig} />);
    expect(asFragment()).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
