import SocialIcons from './SocialIcons/SocialIcons';

export default function Profile() {
  return (
    <>
      <div className="flex w-full h-full items-center max-sm:flex-col max-sm:justify-center">
        <div
          className="flex justify-center decoration-black 
        font-oleo text-7xl w-1/2 border-b-2 border-black max-sm:border-0 max-sm:text-3xl max-sm:mb-4"
        >
          Vinicius Luna
        </div>
        <div
          className="flex justify-center border-2 border-black 
          w-3/6 h-2/4 bg-white mr-10 p-4 font-taviraj text-lg max-sm:mr-0 max-sm:h-auto max-sm:text-base max-sm:w-5/6 xl:p-16"
        >
          <div className="flex flex-col">
            <span className="max-sm:mb-3">
              Olá, sou Vinicius, um estudante de Análise e Desenvolvimento de
              Sistemas com 20 anos de idade e uma paixão por tecnologia. Como
              desenvolvedor full stack, tenho experiência sólida em
              JavaScript/TypeScript, Node.js e Vue.js, além de habilidades em
              bancos de dados SQL e Docker.
            </span>
            <div className="mt-auto">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
