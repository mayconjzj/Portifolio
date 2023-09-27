import { render } from '@testing-library/react';

import { Logo } from './Logo';

describe('Logo', () => {
  it('should render the logo', () => {
    const { container } = render(
      <Logo ContentLogo="Next test" Description="Next test" />
    );
    expect(container).toMatchSnapshot();
  });
});
