import { SectionProps } from '@/models';

import * as S from './styles';

export const Section = ({ children, id }: SectionProps) => {
  return (
    <S.Container id={id} className="element">
      {children}
    </S.Container>
  );
};
