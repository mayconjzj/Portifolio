import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { Title } from '@/components/Title';

export default function Home() {
  return (
    <>
      <Section id="home">
        <div className="flex flex-col items-center justify-center gap-y-10 h-[calc(100vh-140px)]">
          <div>
            <h1 className="md:text-6xl text-4xl text-center font-black text-[#eee] md:max-w-2xl max-w-md flex flex-col md:gap-y-7 gap-y-2 justify-center">
              Olá, eu sou
              <span className="md:h-[70px] h-[43px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:170%] animate-[gradient_5s_ease-in-out_infinite]">
                Maycon Douglas
              </span>
              Desenvolvedor Web
            </h1>
          </div>

          <div>
            <p className="text-[#666] md:w-[500px] w-[300px] text-center">
              Sou um estudante de Front-End dedicado e apaixonado por criar
              experiências digitais incríveis. Estou sempre em busca de
              aprimorar minhas habilidades e aprender novas técnicas para me
              destacar nessa área em constante evolução.
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button>CONTATO</Button>
            <Button>BAIXAR CV</Button>
          </div>
        </div>
      </Section>

      <Section id="about">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-5">
            <Title>Sobre mim</Title>

            <p className="max-w-[700px]">
              Meu nome é Maycon Douglas, tenho 16 anos e resido em Boa Vista,
              Roraima, Minha paixão pela tecnologia me levou a dominar
              tecnologias como Next.js, React, Tailwind CSS, Styled-Components e
              Typescript. Atualmente, estou buscando minha primeira oportunidade
              de estágio, onde espero aplicar meu conhecimento e contribuir para
              projetos inovadores.
            </p>
          </div>
        </div>
      </Section>

      <Section id="projects">
        <div className="flex flex-col gap-y-5">
          <Title>Projetos</Title>

          <p>Em andamento</p>
        </div>
      </Section>

      <Section id="skills">
        <div className="flex flex-col gap-y-5">
          <Title>Habilidades</Title>

          <p>Em andamento</p>
        </div>
      </Section>

      <Section id="contact">
        <div className="flex flex-col gap-y-5">
          <Title>Contato</Title>

          <p>Em andamento</p>
        </div>
      </Section>
    </>
  );
}
