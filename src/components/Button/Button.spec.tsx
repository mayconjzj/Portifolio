import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('should render the button', () => {
    const { container } = render(<Button>Next test</Button>);
    expect(container).toMatchSnapshot();
  });
});
