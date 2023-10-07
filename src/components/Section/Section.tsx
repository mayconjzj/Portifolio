'use client';

import { useScrollReveal } from './hooks';
import * as S from './styles';

type SectionProps = {
  children: React.ReactNode;
  id?: string;
};
export const Section = ({ children, id }: SectionProps) => {
  useScrollReveal();

  return (
    <S.Container id={id} className="element">
      {children}
    </S.Container>
  );
};
