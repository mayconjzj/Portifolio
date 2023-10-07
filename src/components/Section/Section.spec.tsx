import { render } from '@testing-library/react';

import { Section } from './Section';

describe('MainNav', () => {
  it('should render the mainnav', () => {
    const { container } = render(<Section>Next test</Section>);
    expect(container).toMatchSnapshot();
  });
});
