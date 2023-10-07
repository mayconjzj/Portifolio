import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { Title } from '@/components/Title';

export default function Home() {
  return (
    <>
      <Section id="home">
        <div className="flex flex-col items-center justify-center gap-y-10">
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
        <Title>Sobre mim</Title>

        <p>
          Meu nome é Maycon Douglas, tenho 16 anos e resido em Boa Vista,
          Roraima, Minha paixão pela tecnologia me levou a dominar tecnologias
          como Next.js, React, Tailwind CSS, Styled-Components e Typescript.
          Atualmente, estou buscando minha primeira oportunidade de estágio,
          onde espero aplicar meu conhecimento e contribuir para projetos
          inovadores.
        </p>
      </Section>

      <Section id="projects">
        <Title>Projetos</Title>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          dicta temporibus et dignissimos perspiciatis praesentium, excepturi
          expedita, neque ad sed earum natus ab labore repellendus enim?
          Asperiores repudiandae dolore sed?
        </p>
      </Section>

      <Section id="skills">
        <Title>Habilidades</Title>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel non eius
          ducimus facilis, sapiente eaque est repellat nisi incidunt recusandae
          rem animi. Tenetur cum vitae sunt aliquid. Fuga, magni enim.
        </p>
      </Section>

      <Section id="contact">
        <Title>Contato</Title>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          necessitatibus corrupti voluptatem eius dolores numquam vel provident
          omnis ducimus nisi perferendis quis, facilis ipsa, alias eaque
          reprehenderit ex nostrum enim!
        </p>
      </Section>
    </>
  );
}
