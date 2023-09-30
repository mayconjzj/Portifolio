import { FooterConfig } from '@/config';

import { Icon } from '../Icon';
import * as S from './styles';

export const Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        {FooterConfig.map((item) => (
          <Icon key={item.title} icon={item.icon} />
        ))}
      </S.Content>
    </S.Footer>
  );
};
