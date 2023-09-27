import Link from 'next/link';

import { render } from '@testing-library/react';

import { MainNavConfig } from '@/config/MainNav';

import { ListItem } from './ListItem';

describe('ListItem', () => {
  it('should render the listitem', () => {
    const { asFragment } = render(
      <>
        {MainNavConfig.map((item) => (
          <ListItem key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </ListItem>
        ))}
      </>
    );
    expect(asFragment()).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
