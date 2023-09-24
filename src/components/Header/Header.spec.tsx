import { render } from '@testing-library/react';

import { Header } from './Header';

describe('Header', () => {
  it('should render the header', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
