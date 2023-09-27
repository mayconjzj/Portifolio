import { HomePage } from '@/config/HomePage';

import { Button } from '@/components/Button';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <div>
        <h1 className="md:text-6xl text-5xl font-black text-slate-100 md:max-w-2xl max-w-lg flex flex-wrap md:gap-y-7 gap-y-4 mx-auto justify-center">
          {HomePage.ContentTitle.slice(0, 11)}
          <span>{HomePage.ContentTitle.slice(12, 26)}</span>
          {HomePage.ContentTitle.slice(27)}
        </h1>
      </div>

      <div>
        <p className="text-gray-500 md:w-[500px] w-96 text-center">
          {HomePage.Description}
        </p>
      </div>

      <div className="flex gap-4 justify-center">
        <Button>{HomePage.links.contactMe}</Button>
        <Button>{HomePage.links.downloadCV}</Button>
      </div>
    </S.Container>
  );
}
