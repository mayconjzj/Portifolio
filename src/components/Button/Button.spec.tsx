import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('should render the button', () => {
    const { asFragment } = render(<Button>TESTE</Button>);
    expect(asFragment()).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
