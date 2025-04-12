export default function About() {
  return (
    <section
      className="min-h-screen text-white flex flex-col md:flex-row items-center justify-center px-6 sm:px-16 py-8 sm:py-12 gap-10"
      id="about"
    >
      <div className="max-w-2xl text-center md:text-left">
        <h3 className="text-purple-400 text-lg sm:text-sm font-semibold mb-2">
          Por que Athon Networks?
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Construindo juntos o{" "}
          <span className="text-gray-500 line-through">melhor</span>{" "}
          Espetacular.
        </h2>
        <p className="text-gray-300 mt-4 text-sm sm:text-base">
          A Athon Networks oferece soluções tecnológicas inovadoras para empresas e provedores de internet, transformando desafios em oportunidades. Fundada por especialistas em conectividade, a empresa vai além da infraestrutura, focando em redes seguras e estáveis.
          <br />
          <br />
          Com uma abordagem técnica e personalizada, atende desde pequenas empresas a grandes provedores, oferecendo serviços como documentação de redes, monitoramento, segurança cibernética, engenharia de roteamento, virtualização e treinamentos.
          <br />
          <br />
          Com uma equipe qualificada e atualizada, a Athon Networks se posiciona como parceira estratégica para garantir que a tecnologia seja uma ferramenta essencial no crescimento dos seus clientes.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-center font-semibold text-xl sm:text-3xl mb-4">
          Empresas Parceiras
        </p>
        <div className="flex justify-center">
          <img
            src="./Logos.png"
            alt="Empresas Parceiras"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
