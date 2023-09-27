import { render } from '@testing-library/react';

import { MainNav } from './MainNav';

describe('MainNav', () => {
  it('should render the mainnav', () => {
    const { container } = render(
      <MainNav items={[{ title: 'Next test', href: 'Next test' }]} />
    );
    expect(container).toMatchSnapshot();
  });
});
