import { render } from '@testing-library/react';

import { ListItem } from './ListItem';

describe('ListItem', () => {
  it('should render the listitem', () => {
    const { container } = render(<ListItem>Next test</ListItem>);
    expect(container).toMatchSnapshot();
  });
});
