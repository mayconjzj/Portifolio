import { render } from '@testing-library/react';

import { Password } from './Password';

describe('Password', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Password />);
    expect(baseElement).toBeTruthy();

    expect(baseElement).toMatchSnapshot();
  });
});
