import { HomePage } from './config';

import { Button } from '@/components/Button';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <div>
        <S.ContentTextTitle>
          {HomePage.ContentTitle.slice(0, 11)}
          <S.ContentTextGradient>
            {HomePage.ContentTitle.slice(12, 26)}
          </S.ContentTextGradient>
          {HomePage.ContentTitle.slice(27)}
        </S.ContentTextTitle>
      </div>

      <div>
        <S.ContentTextDescription>
          {HomePage.Description}
        </S.ContentTextDescription>
      </div>

      <S.ContentBoxButton>
        <Button>{HomePage.links.contactMe}</Button>
        <Button>{HomePage.links.downloadCV}</Button>
      </S.ContentBoxButton>
    </S.Container>
  );
}
