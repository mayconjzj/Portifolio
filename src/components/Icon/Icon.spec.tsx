import { render } from '@testing-library/react';

import { Icon } from './Icon';

describe('Icon', () => {
  it('should render the icon', () => {
    const { container } = render(<Icon>Next test</Icon>);
    expect(container).toMatchSnapshot();
  });
});
