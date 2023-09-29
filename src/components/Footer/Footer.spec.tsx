import { render } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
  it('should render the footer', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
