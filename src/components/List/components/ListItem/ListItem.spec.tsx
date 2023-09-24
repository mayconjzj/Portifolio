import { render } from '@testing-library/react';

import { MainNavConfig } from '@/config/MainNav';

import { ListItem } from './ListItem';

describe('Header', () => {
  it('should render the header', () => {
    render(<ListItem>{MainNavConfig.map((item) => item.title)}</ListItem>);
    const { asFragment } = render(
      <ListItem>{MainNavConfig.map((item) => item.title)}</ListItem>
    );
    expect(asFragment()).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
