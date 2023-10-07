import { render } from '@testing-library/react';

import { Title } from './Title';

describe('Title', () => {
  it('should render the title', () => {
    const { container } = render(<Title>Next test</Title>);
    expect(container).toMatchSnapshot();
  });
});
