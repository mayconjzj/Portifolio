import Link from 'next/link';

import { render } from '@testing-library/react';

import { MainNavConfig } from '@/config/MainNav';

import { ListItem } from './components/ListItem';
import { List } from './List';

describe('List', () => {
  it('should render the list', () => {
    const { asFragment } = render(
      <List>
        {MainNavConfig.map((item) => (
          <ListItem key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </ListItem>
        ))}
      </List>
    );
    expect(asFragment()).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
