import GenericTemplate from "@/components/Generictemplate/GenericTemplate";
import SocialIcons from "./SocialIcons/SocialIcons";

export default function Profile() {
  return (
    <>
      <GenericTemplate title="Vinicius Luna" padding={true}>
        <span>
          Olá, sou Vinicius, um estudante de Análise e Desenvolvimento de
          Sistemas com 20 anos de idade e uma paixão por tecnologia. Como
          desenvolvedor full stack, tenho experiência sólida em
          JavaScript/TypeScript, React.js, Node.js e Vue.js, além de habilidades
          em bancos de dados SQL e Docker.
        </span>
        <div className="max-sm:mb-3">
          <span className="font-bold">Soft Skills: </span>
          <span>
            Comunicação, Trabalho em equipe, Resolução de problemas,
            Adaptabilidade, Criatividade
          </span>
        </div>
        <div>
          <SocialIcons />
        </div>
      </GenericTemplate>
    </>
  );
}
