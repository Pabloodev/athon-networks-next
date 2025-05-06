import HeaderPolicy from "../ui/components/HeaderPolicy"

export default function Page() {
  return (
    <div>

      <HeaderPolicy />

      <div className="text-gray-300 p-10 lg:px-80 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl text-white">Política de Privacidade</h1>
          <p>*Última vez atualizado 05/05/2025*</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">1. INTRODUÇÃO</h2>
          <p>
            A Athon Networks oferece soluções tecnológicas inovadoras para empresas e provedores de internet, transformando desafios em oportunidades. Fundada por especialistas em conectividade, a empresa vai além da infraestrutura, focando em redes seguras e estáveis.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">2. FINALIDADE DESTA POLÍTICA</h2>
          <p>
            O objetivo desta Política de Privacidade é informar, de forma transparente e acessível, como lidamos com os dados pessoais coletados dos usuários de nosso site e clientes dos nossos serviços, garantindo o cumprimento da Lei Geral de Proteção de Dados (LGPD) e demais legislações aplicáveis.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">3. QUEM PODE UTILIZAR NOSSOS SERVIÇOS</h2>
          <p>
            Nossos serviços estão disponíveis apenas para pessoas maiores de 18 anos. Não coletamos intencionalmente dados pessoais de menores de idade. Caso identifiquemos que um menor nos forneceu dados, tomaremos as medidas para eliminá-los.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">4. COLETA DE DADOS PESSOAIS</h2>
          <p>
            Ao utilizar nosso site ou contratar nossos serviços, podemos coletar os seguintes dados pessoais:
          </p>
          <ul>
            <li className="list-disc">Nome completo, Endereço de email, CPF ou CNPJ.</li>
            <li className="list-disc">Informações de login na área do cliente.</li>
            <li className="list-disc">Endereço IP e informações de acesso ao site.</li>
            <li className="list-disc">Dados de pagamento limitados aos necessários para processar a transação.</li>
            <li className="list-disc">Histórico de tickets de suporte.</li>
          </ul>
          <p>Esses dados podem ser coletados diretamente (ex.: formulários de cadastro) ou automaticamente (ex.: cookies, logs de acesso).</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">5. POR QUE COLETAMOS SEUS DADOS</h2>
          <ul>
            <li className="list-disc">Fornecer e gerenciar os serviços contratados.</li>
            <li className="list-disc">Gerenciar sua conta na área do cliente.</li>
            <li className="list-disc">Processar pagamentos e cobranças.</li>
            <li className="list-disc">Responder solicitações e tickets de suporte.</li>
            <li className="list-disc">Cumprir obrigações legais e regulatórias.</li>
            <li className="list-disc">Melhorar nossos serviços, monitorando o uso do site e da área do cliente.</li>
            <li className="list-disc">Enviar comunicações importantes ou promocionais, sempre com opção de cancelamento.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">6. BASE LEGAL PARA O TRATAMENTO DE DADOS</h2>
          <ul>
            <li className="list-disc">Execução de contrato: para fornecer os serviços contratados.</li>
            <li className="list-disc">Cumprimento de obrigação legal: para obrigações fiscais e regulatórias.</li>
            <li className="list-disc" >Consentimento: para comunicações de marketing.</li>
            <li className="list-disc">Interesse legítimo: para melhorar a experiência do usuário, prevenir fraudes e garantir segurança.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">7. COMPARTILHAMENTO DE DADOS</h2>
          <p>Podemos compartilhar seus dados com:</p>
          <ul>
            <li className="list-disc">Fornecedores e parceiros necessários para a prestação dos serviços.</li>
            <li className="list-disc">Autoridades governamentais, quando exigido por lei ou ordem judicial.</li>
            <li className="list-disc">Prestadores de serviço de TI responsáveis pelo armazenamento seguro dos dados.</li>
          </ul>
          <p>Não vendemos seus dados pessoais para terceiros.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">8. COOKIES E TECNOLOGIAS DE RASTREAMENTO</h2>
          <p>
            Utilizamos cookies e tecnologias similares para:
          </p>
          <ul>
            <li className="list-disc">Lembrar suas preferências de acesso.</li>
            <li className="list-disc">Melhorar a performance e funcionalidades do site.</li>
            <li className="list-disc">Analisar o tráfego e comportamento de navegação.</li>
          </ul>
          <p>Você pode gerenciar as permissões de cookies no seu navegador.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">9. SEGURANÇA DOS DADOS</h2>
          <p>
            Adotamos medidas de segurança administrativas, técnicas e físicas para proteger seus dados pessoais contra acesso não autorizado, perda, alteração ou destruição. Nenhum sistema é 100% seguro, e incentivamos os usuários a proteger suas credenciais de acesso.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">10. RETENÇÃO DOS DADOS</h2>
          <p>
            Seus dados serão armazenados enquanto forem necessários para os fins descritos nesta política, ou para cumprir obrigações legais e regulatórias. Dados de contas inativas poderão ser mantidos por até 5 anos após o encerramento, conforme exigências legais.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">11. SEUS DIREITOS</h2>
          <ul>
            <li className="list-disc">Confirmar a existência de tratamento de seus dados.</li>
            <li className="list-disc">Acessar seus dados pessoais.</li>
            <li className="list-disc">Corrigir dados incompletos, inexatos ou desatualizados.</li>
            <li className="list-disc">Solicitar anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li className="list-disc">Solicitar a portabilidade dos dados.</li>
            <li className="list-disc">Revogar consentimento a qualquer momento.</li>
            <li className="list-disc">Solicitar informações sobre o compartilhamento de dados.</li>
          </ul>
          <p>Pedidos podem ser enviados para <span className="text-white font-semibold">contato@athonnetworks.com</span> e serão respondidos no prazo legal.</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">12. ALTERAÇÕES NA POLÍTICA</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos mudanças importantes através do site ou por e-mail, quando aplicável.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-white">13. CONTATO</h2>
          <p>
            Caso tenha dúvidas sobre esta Política ou sobre o tratamento de seus dados, entre em contato pelo e-mail <span className="text-white font-semibold">contato@athonnetworks.com</span> ou pelo telefone <span className="text-white font-semibold">(11) 93212-3875</span>.
          </p>
        </div>

      </div>

    </div>
  )
}
