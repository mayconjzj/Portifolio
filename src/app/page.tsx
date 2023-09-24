import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <S.Content>
        <h1 className="text-4xl font-black text-slate-100">
          Desenvolvedor <br /> Front-End
        </h1>
        <p className="text-slate-400 w-[400px] text-justify">
          Sou um estudante de Front-End dedicado e apaixonado por criar
          experiências digitais incríveis. Estou sempre em busca de aprimorar
          minhas habilidades e aprender novas técnicas para me destacar nessa
          área em constante evolução.
        </p>
      </S.Content>
    </S.Container>
  );
}
