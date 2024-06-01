export default function Profile() {
  return (
    <>
      <div className="flex w-full h-full items-center max-sm:flex-col max-sm:justify-center">
        <div className="flex justify-center decoration-black font-oleo text-7xl w-1/2 border-b-2 border-black max-sm:border-0 max-sm:text-4xl">
          Vinicius Luna
        </div>
        <div className="flex justify-center border-2 border-black w-3/6 h-2/4 bg-white mr-10 p-4 font-taviraj text-lg max-sm:mr-0 max-sm:h-auto">
          <div>
            <span>
              Olá, sou Vinicius, um estudante de Análise e Desenvolvimento de
              Sistemas com 20 anos de idade e uma paixão por tecnologia. Como
              desenvolvedor full stack, tenho experiência sólida em
              JavaScript/TypeScript, Node.js e Vue.js, além de habilidades em
              bancos de dados SQL e Docker.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
