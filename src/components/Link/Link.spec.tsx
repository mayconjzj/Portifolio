import { render } from '@testing-library/react';

import { Link } from './Link';

describe('Link', () => {
  it('should render the link', () => {
    const { container } = render(<Link href="/">Next test</Link>);
    expect(container).toMatchSnapshot();
  });
});
