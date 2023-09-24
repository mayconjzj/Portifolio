import { render } from '@testing-library/react';

import { MainNavConfig } from '@/config/MainNav';

import { ListItem } from './components/ListItem';
import { List } from './List';

describe('Header', () => {
  it('should render the header', () => {
    const { asFragment } = render(
      <List>
        {MainNavConfig.map((item) => (
          <ListItem key={item.title}>{item.title}</ListItem>
        ))}
      </List>
    );
    expect(asFragment()).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});