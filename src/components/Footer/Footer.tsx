import { FooterConfig } from '@/config';

import { Icon } from '../Icon';
import * as S from './styles';

export const Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        {FooterConfig.map((item) => (
          <a key={item.title} href={item.href} target={item.target}>
            <Icon key={item.title} icon={item.icon} />
          </a>
        ))}
      </S.Content>
    </S.Footer>
  );
};
