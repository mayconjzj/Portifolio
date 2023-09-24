import Link from 'next/link';

import { render } from '@testing-library/react';

import { MainNavConfig } from '@/config/MainNav';

import { ListItem } from './ListItem';

describe('Header', () => {
  it('should render the header', () => {
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
