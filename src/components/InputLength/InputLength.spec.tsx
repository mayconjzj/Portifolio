import { render } from '@testing-library/react';

import { InputLength } from './InputLength';

describe('InputLength', () => {
  it('should render successfully', () => {
    const { baseElement, asFragment } = render(<InputLength />);
    expect(baseElement).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
