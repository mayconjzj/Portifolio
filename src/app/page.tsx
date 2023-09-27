import { Button } from '@/components/Button';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <div>
        <h1 className="text-5xl font-black text-slate-100">
          Desenvolvedor <br /> Front-End
        </h1>
        <p className="text-slate-400 w-[400px] text-justify">
          Sou um estudante de Front-End dedicado e apaixonado por criar
          experiências digitais incríveis. Estou sempre em busca de aprimorar
          minhas habilidades e aprender novas técnicas para me destacar nessa
          área em constante evolução.
        </p>
        <div className="flex gap-[5px] my-5">
          <Button>CONTATO</Button>
          <Button>PORTFOLIO</Button>
        </div>
      </div>

      <div>
        <div className="w-[250px] h-[250px] bg-slate-600"></div>
      </div>
    </S.Container>
  );
}
