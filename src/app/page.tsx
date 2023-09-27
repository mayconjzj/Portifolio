import { Button } from '@/components/Button';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <div>
        <h1 className="text-6xl font-black text-slate-100 max-w-[600px] flex flex-wrap gap-7 mx-auto justify-center">
          <span>Olá, eu sou</span> <span>Maycon Douglas</span>{' '}
          <span>Desenvolvedor Web</span>
        </h1>
      </div>

      <div>
        <p className="text-slate-400 w-[500px] text-center">
          Sou um estudante de Front-End dedicado e apaixonado por criar
          experiências digitais incríveis. Estou sempre em busca de aprimorar
          minhas habilidades e aprender novas técnicas para me destacar nessa
          área em constante evolução.
        </p>
      </div>

      <div className="flex gap-4 justify-center">
        <Button>CONTATO</Button>
        <Button>DOWNLOAD CV</Button>
      </div>
    </S.Container>
  );
}
