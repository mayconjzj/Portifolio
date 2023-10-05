import { Button } from '@/components/Button';

export default function Home() {
  return (
    <article className="flex flex-col">
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center gap-y-10"
      >
        <div>
          <h1 className="md:text-6xl text-4xl font-black text-slate-100 md:max-w-2xl max-w-md flex flex-wrap md:gap-y-7 gap-y-4 mx-auto justify-center">
            Olá, eu sou
            <span className="md:h-[70px] h-[43px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:170%] animate-[gradient_5s_ease-in-out_infinite]">
              Maycon Douglas
            </span>
            Desenvolvedor Web
          </h1>
        </div>

        <div>
          <p className="text-gray-500 md:w-[500px] w-[300px] text-center">
            Sou um estudante de Front-End dedicado e apaixonado por criar
            experiências digitais incríveis. Estou sempre em busca de aprimorar
            minhas habilidades e aprender novas técnicas para me destacar nessa
            área em constante evolução.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button>CONTATO</Button>
          <Button>BAIXAR CV</Button>
        </div>
      </section>

      <section
        id="about"
        className="h-[calc(100vh-60px)] px-[10%] flex flex-col gap-y-10"
      >
        <h1 className="text-4xl font-black">Sobre mim</h1>

        <div className="flex lg:flex-row flex-col justify-between gap-10">
          <div className="flex flex-col gap-y-2 text-justify">
            <p>
              Meu nome é Maycon Douglas, tenho 16 anos e resido em Boa Vista,
              Roraima, embora tenha nascido em Marabá, Pará, e me mudei para Boa
              Vista com 2 anos de idade. Minha paixão pela tecnologia me levou a
              dominar tecnologias como Next.js, React, Tailwind CSS,
              Styled-Components e Typescript. Atualmente, estou buscando minha
              primeira oportunidade de estágio, onde espero aplicar meu
              conhecimento e contribuir para projetos inovadores. Minha
              abordagem é baseada na determinação e não necessáriamente com
              desenvolvimento profissional. Estou ansioso pelas minhas
              oportunidades futuras e pelas conexões valiosas que farei ao longo
              da jornada.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
