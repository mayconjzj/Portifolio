import { render } from '@testing-library/react';

import { List } from './List';

describe('List', () => {
  it('should render the list', () => {
    const { container } = render(<List>Next test</List>);
    expect(container).toMatchSnapshot();
  });
});
