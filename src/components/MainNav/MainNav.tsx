import { twMerge } from 'tailwind-merge';

import { ActiveLink } from '@/components/ActiveLink';
import { List } from '@/components/List';

import { MainNavProps } from '@/models/MainNav';

import { ToggleButton } from './components';

export const MainNav = ({
  items,
  ...rest
}: {
  items: MainNavProps[];
  className?: string;
}) => {
  return (
    <>
      <nav className={twMerge('hidden md:flex', rest.className)} {...rest}>
        <List.Root>
          {items.map((item) => (
            <List.Item key={item.title}>
              <ActiveLink href={item.href}>{item.title}</ActiveLink>
            </List.Item>
          ))}
        </List.Root>
      </nav>

      <ToggleButton />
    </>
  );
};
