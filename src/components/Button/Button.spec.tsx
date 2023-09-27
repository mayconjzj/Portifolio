import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('should render the button', () => {
    const { asFragment } = render(<Button>TESt</Button>);
    expect(asFragment()).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
