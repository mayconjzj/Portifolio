import { render } from '@testing-library/react';

import { Logo } from './Logo';

describe('Logo', () => {
  it('should render the logo', () => {
    render(<Logo />);
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
