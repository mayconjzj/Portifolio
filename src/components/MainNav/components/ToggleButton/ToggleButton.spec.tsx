import { render } from '@testing-library/react';

import { ToggleButton } from './ToggleButton';

describe('ToggleButton', () => {
  it('should render the mainnav', () => {
    const { container } = render(
      <ToggleButton
        isOpenMenu={false}
        handleToggleMenu={() => {
          'Next test';
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
