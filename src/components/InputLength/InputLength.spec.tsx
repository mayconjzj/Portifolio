import { render } from '@testing-library/react';

import { InputLength } from './InputLength';

describe('InputLength', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputLength min={5} max={25} />);
    expect(baseElement).toBeTruthy();

    expect(baseElement).toMatchSnapshot();
  });
});
