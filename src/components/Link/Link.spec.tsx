import { render } from '@testing-library/react';

import { MainNavConfig } from '@/config/MainNav';

import { Link } from './Link';

describe('Link', () => {
  it('should render the link', () => {
    const { asFragment } = render(
      <>
        {MainNavConfig.map((item) => (
          <Link key={item.title} href={item.href}>
            {item.icon && item.icon}
            {item.title}
          </Link>
        ))}
      </>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
