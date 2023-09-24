import { List, ListItem } from '@/components/List';

import { MainNavProps } from '@/models/MainNav';

import * as S from './styles';

export const MainNav = ({ items }: { items: MainNavProps[] }) => {
  return (
    <S.MainNav>
      <List>
        {items.map((item) => (
          <ListItem key={item.title}>
            {item.icon && item.icon}
            {item.title}
          </ListItem>
        ))}
      </List>
    </S.MainNav>
  );
};
