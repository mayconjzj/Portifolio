'use client';

import { Link } from '@/components/Link';
import { List, ListItem } from '@/components/List';

import { MainNavProps } from '@/models';

import { ToggleButton } from './components';
import { useMainNav } from './hooks';
import * as S from './styles';

export const MainNav = ({ items }: { items: MainNavProps[] }) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();

  return (
    <>
      <S.MainNav>
        <List>
          {items.map((item) => (
            <ListItem key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </ListItem>
          ))}
        </List>
      </S.MainNav>

      <ToggleButton
        isOpenMenu={isOpenMenu}
        handleToggleMenu={handleToggleMenu}
      />
    </>
  );
};
