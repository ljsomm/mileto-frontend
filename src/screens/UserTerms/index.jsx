import { useEffect, useState } from "react";
import "./styles.css";

const Terms = ({ title }) => {
  useEffect(() => {
    document.title = `Mileto - ${title}`;
  }, [title]);

  return (
    <div className="main-terms-text">
      <h1 className="term-type">Termos de uso</h1>

      <h2 className="term-name">
        Quais informações estão presentes neste documento?
      </h2>

      <p className="term-paragraph">
        Neste Termo de Uso, o usuário do serviço Mileto encontrará informações
        sobre: o funcionamento do serviço e as regras aplicáveis a ele; o
        arcabouço legal relacionado à prestação do serviço; as responsabilidades
        do usuário ao utilizar o serviço; as responsabilidades da administração
        pública ao prover o serviço; informações para contato, caso exista
        alguma dúvida ou seja necessário atualizar informações; e o foro
        responsável por eventuais reclamações caso questões deste Termo de Uso
        tenham sido violadas.
      </p>

      <p className="term-paragraph">
        Além disso, na Política de Privacidade, o usuário do serviço Mileto
        encontrará informações sobre: qual o tratamento dos dados pessoais
        realizados, de forma automatizada ou não, e a sua finalidade; os dados
        pessoais dos usuários necessários para a prestação do serviço; a forma
        como eles são coletados; se há o compartilhamento de dados com
        terceiros; e quais as medidas de segurança implementadas para proteger
        os dados.{" "}
      </p>

      <h2 className="term-name">
        Aceitação do Termo de Uso e Política de Privacidade
      </h2>

      <p className="term-paragraph">
        Ao utilizar os serviços, o usuário confirma que leu e compreendeu os
        Termos e Políticas aplicáveis ao serviço Mileto e concorda em ficar
        vinculado a eles.
      </p>

      <h2 className="term-name">Definições</h2>

      <p className="term-paragraph">
        Para melhor compreensão deste documento, neste Termo de Uso e Política
        de Privacidade, consideram-se:
      </p>

      <p className="term-paragraph">
        Dado pessoal: informação relacionada a pessoa natural identificada ou
        identificável.
      </p>

      <p className="term-paragraph">
        Titular: pessoa natural a quem se referem os dados pessoais que são
        objeto de tratamento.
      </p>

      <p className="term-paragraph">
        Controlador: pessoa natural ou jurídica, de direito público ou privado,
        a quem competem as decisões referentes ao tratamento de dados pessoais.
      </p>

      <p className="term-paragraph">
        Operador: pessoa natural ou jurídica, de direito público ou privado, que
        realiza o tratamento de dados pessoais em nome do controlador.
      </p>

      <p className="term-paragraph">
        Encarregado: pessoa indicada pelo controlador e operador para atuar como
        canal de comunicação entre o controlador, os titulares dos dados e a
        Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <p className="term-paragraph">
        Agentes de tratamento: o controlador e o operador.
      </p>

      <p className="term-paragraph">
        Tratamento: toda operação realizada com dados pessoais, como as que se
        referem a coleta, produção, recepção, classificação, utilização, acesso,
        reprodução, transmissão, distribuição, processamento, arquivamento,
        armazenamento, eliminação, avaliação ou controle da informação,
        modificação, comunicação, transferência, difusão ou extração.
      </p>

      <p className="term-paragraph">
        Uso compartilhado de dados: comunicação, difusão, transferência
        internacional, interconexão de dados pessoais ou tratamento
        compartilhado de bancos de dados pessoais por órgãos e entidades
        públicos no cumprimento de suas competências legais, ou entre esses e
        entes privados, reciprocamente, com autorização específica, para uma ou
        mais modalidades de tratamento permitidas por esses entes públicos, ou
        entres privados.
      </p>

      <p className="term-paragraph">
        Autoridade nacional: órgão da administração pública responsável por
        zelar, implementar e fiscalizar o cumprimento desta Lei em todo o
        território nacional.{" "}
      </p>

      <h2 className="term-name">Descrição do serviço</h2>

      <p className="term-paragraph">
        Com a finalidade de contribuir com o ensino à distância, diversidade e
        inclusão educacional, a Mileto implementou uma plataforma de cursos com
        fins de formação educacional. Por meio da plataforma Mileto, os usuários
        poderão criar e consumir cursos de qualidade.
      </p>

      <h2 className="term-name">Agentes de tratamento</h2>

      <p className="term-paragraph">
        A quem compete as decisões referentes ao tratamento de dados pessoais
        realizado no serviço Mileto (Controlador)?
      </p>

      <p className="term-paragraph">
        A Lei Geral de Proteção de Dados define como controlador, em seu artigo
        5º:
      </p>

      <p className="term-paragraph">
        Art. 5º, VI – controlador: pessoa natural ou jurídica, de direito
        público ou privado, a quem competem as decisões referentes ao tratamento
        de dados pessoais;
      </p>

      <p className="term-paragraph">
        Para o serviço Mileto, as decisões referentes ao tratamento de dados
        pessoais são de responsabilidade do Gabriel.
      </p>

      <p className="term-paragraph">Endereço: Rua dos Limoeiros.</p>

      <p className="term-paragraph">E-mail: gabriel@gmail.com.</p>

      <p className="term-paragraph">Telefone: 13981******.</p>

      <h2 className="term-name">
        Quem realiza o tratamento de dados (Operador)?
      </h2>

      <p className="term-paragraph">
        A Lei Geral de Proteção de Dados define como operador, em seu artigo 5º:
      </p>

      <p className="term-paragraph">
        Art. 5º, VII - operador: pessoa natural ou jurídica, de direito público
        ou privado, que realiza o tratamento de dados pessoais em nome do
        controlador.
      </p>

      <p className="term-paragraph">
        Para o serviço Mileto, quem realiza o tratamento de dados pessoais em
        nome do controlador é o operador . Endereço: .
      </p>

      <h2 className="term-name">
        Quem é o responsável por atuar como canal de comunicação entre o
        controlador, os titulares dos dados e a Autoridade Nacional de Proteção
        de Dados (Encarregado)?
      </h2>

      <p className="term-paragraph">
        A Lei Geral de Proteção de Dados define como encarregado, em seu artigo
        5º:
      </p>

      <p className="term-paragraph">
        Art. 5º, VIII – pessoa indicada pelo controlador e operador para atuar
        como canal de comunicação entre o controlador, os titulares dos dados e
        a Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <p className="term-paragraph">
        Para o serviço Mileto, que é responsável por atuar como canal de
        comunicação entre o controlador, os titulares dos dados e a Autoridade
        Nacional de Proteção de Dados é o encarregado Gabriel.
      </p>

      <p className="term-paragraph">E-mail: gabriel@gmail.com.</p>

      <h2 className="term-name">
        Quais são as leis e normativos aplicáveis a esse serviço?
      </h2>

      <p className="term-paragraph">
        -Lei nº 12.965, de 23 de abril de 2014 - Marco Civil da Internet –
        Estabelece princípios, garantias, direitos e deveres para o uso da
        Internet no Brasil.
      </p>

      <p className="term-paragraph">
        -Lei nº 12.527, de 18 de novembro de 2011 - Lei de Acesso à Informação –
        Regula o acesso a informações previsto na Constituição Federal.
      </p>

      <p className="term-paragraph">
        -Lei nº 13.460, de 26 de junho de 2017 - Dispõe sobre participação,
        proteção e defesa dos direitos do usuário dos serviços públicos da
        administração pública.
      </p>

      <p className="term-paragraph">
        -Lei nº 13.709, de 14 de agosto de 2018 - Dispõe sobre o tratamento de
        dados pessoais, inclusive nos meios digitais, por pessoa natural ou por
        pessoa jurídica de direito público ou privado, com o objetivo de
        proteger os direitos fundamentais de liberdade e de privacidade e o
        livre desenvolvimento da personalidade da pessoa natural.
      </p>

      <p className="term-paragraph">
        -Lei nº 12.737, de 30 de novembro de 2012 - Dispõe sobre a tipificação
        criminal de delitos informáticos; altera o Decreto-Lei nº 2.848, de 7 de
        dezembro de 1940 - Código Penal; e dá outras providências.
      </p>

      <h2 className="term-name">
        Quais são os direitos do usuário do serviço?
      </h2>

      <p className="term-paragraph">
        O usuário do serviço possui os seguintes direitos, conferidos pela Lei
        de Proteção de Dados Pessoais:
      </p>

      <p className="term-paragraph">
        - Direito de confirmação e acesso (Art. 18, I e II): é o direito do
        usuário de obter do serviço a confirmação de que os dados pessoais que
        lhe digam respeito são ou não objeto de tratamento e, se for esse o
        caso, o direito de acessar os seus dados pessoais.
      </p>

      <p className="term-paragraph">
        - Direito de retificação (Art. 18, III): é o direito de solicitar a
        correção de dados incompletos, inexatos ou desatualizados.
      </p>

      <p className="term-paragraph">
        - Direito à limitação do tratamento dos dados (Art. 18, IV): é o direito
        do usuário de limitar o tratamento de seus dados pessoais, podendo
        exigir a eliminação de dados desnecessários, excessivos ou tratados em
        desconformidade com o disposto na Lei Geral de Proteção de Dados.
      </p>

      <p className="term-paragraph">
        - Direito de oposição (Art. 18, § 2º): é o direito do usuário de, a
        qualquer momento, se opor ao tratamento de dados por motivos
        relacionados com a sua situação particular, com fundamento em uma das
        hipóteses de dispensa de consentimento ou em caso de descumprimento ao
        disposto na Lei Geral de Proteção de Dados.
      </p>

      <p className="term-paragraph">
        - Direito de portabilidade dos dados (Art. 18, V): é o direito do
        usuário de realizar a portabilidade dos dados a outro fornecedor de
        serviço ou produto, mediante requisição expressa, de acordo com a
        regulamentação da autoridade nacional, observados os segredos comercial
        e industrial.
      </p>

      <p className="term-paragraph">
        - Direito de não ser submetido a decisões automatizadas (Art. 20, LGPD):
        o titular dos dados tem direito a solicitar a revisão de decisões
        tomadas unicamente com base em tratamento automatizado de dados pessoais
        que afetem seus interesses, incluídas as decisões destinadas a definir o
        seu perfil pessoal, profissional, de consumo e de crédito ou os aspectos
        de sua personalidade.{" "}
      </p>

      <h2 className="term-name">
        Quais são as obrigações dos usuários que utilizam o serviço?
      </h2>

      <p className="term-paragraph">
        O usuário se responsabiliza pela precisão e veracidade dos dados
        informados e reconhece que a inconsistência destes poderá implicar a
        impossibilidade de se utilizar o serviço Mileto.
      </p>

      <p className="term-paragraph">
        Durante a utilização do serviço, a fim de resguardar e de proteger os
        direitos de terceiros, o usuário se compromete a fornecer somente seus
        dados pessoais, e não os de terceiros.
      </p>

      <p className="term-paragraph">
        O login e senha só poderão ser utilizados pelo usuário cadastrado. Ele
        se compromete em manter o sigilo da senha, que é pessoal e
        intransferível, não sendo possível, em qualquer hipótese, a alegação de
        uso indevido, após o ato de compartilhamento.
      </p>

      <p className="term-paragraph">
        O usuário do serviço é responsável pela atualização das suas informações
        pessoais e consequências na omissão ou erros nas informações pessoais
        cadastradas.
      </p>

      <p className="term-paragraph">
        O Usuário é responsável pela reparação de todos e quaisquer danos,
        diretos ou indiretos (inclusive decorrentes de violação de quaisquer
        direitos de outros usuários, de terceiros, inclusive direitos de
        propriedade intelectual, de sigilo e de personalidade), que sejam
        causados à Administração Pública, a qualquer outro Usuário, ou, ainda, a
        qualquer terceiro, inclusive em virtude do descumprimento do disposto
        nestes Termos de Uso e Política de Privacidade ou de qualquer ato
        praticado a partir de seu acesso ao serviço.
      </p>

      <h1 className="term-type">Política de Privacidade</h1>

      <p className="term-paragraph">
        Esta Política de Privacidade foi elaborada em conformidade com a Lei
        Federal n. 12.965 de 23 de abril de 2014 (Marco Civil da Internet) e com
        a Lei Federal n. 13.709, de 14 de agosto de 2018 (Lei de Proteção de
        Dados Pessoais).
      </p>

      <p className="term-paragraph">
        Esta Política de Privacidade poderá ser atualizada em decorrência de
        eventual atualização normativa, razão pela qual se convida o usuário a
        consultar periodicamente esta seção.
      </p>

      <p className="term-paragraph">
        O site se compromete a cumprir as normas previstas na Lei Geral de
        Proteção de Dados (LGPD), e respeitar os princípios dispostos no Art.
        6º:
      </p>

      <p className="term-paragraph">
        I - finalidade: realização do tratamento para propósitos legítimos,
        específicos, explícitos e informados ao titular, sem possibilidade de
        tratamento posterior de forma incompatível com essas finalidades;
      </p>

      <p className="term-paragraph">
        II - adequação: compatibilidade do tratamento com as finalidades
        informadas ao titular, de acordo com o contexto do tratamento;
      </p>

      <p className="term-paragraph">
        III - necessidade: limitação do tratamento ao mínimo necessário para a
        realização de suas finalidades, com abrangência dos dados pertinentes,
        proporcionais e não excessivos em relação às finalidades do tratamento
        de dados;
      </p>

      <p className="term-paragraph">
        IV - livre acesso: garantia, aos titulares, de consulta facilitada e
        gratuita sobre a forma e a duração do tratamento, bem como sobre a
        integralidade de seus dados pessoais;
      </p>

      <p className="term-paragraph">
        V - qualidade dos dados: garantia, aos titulares, de exatidão, clareza,
        relevância e atualização dos dados, de acordo com a necessidade e para o
        cumprimento da finalidade de seu tratamento;
      </p>

      <p className="term-paragraph">
        VI - transparência: garantia, aos titulares, de informações claras,
        precisas e facilmente acessíveis sobre a realização do tratamento e os
        respectivos agentes de tratamento, observados os segredos comercial e
        industrial;
      </p>

      <p className="term-paragraph">
        VII - segurança: utilização de medidas técnicas e administrativas aptas
        a proteger os dados pessoais de acessos não autorizados e de situações
        acidentais ou ilícitas de destruição, perda, alteração, comunicação ou
        difusão;
      </p>

      <p className="term-paragraph">
        VIII - prevenção: adoção de medidas para prevenir a ocorrência de danos
        em virtude do tratamento de dados pessoais;
      </p>

      <p className="term-paragraph">
        IX - não discriminação: impossibilidade de realização do tratamento para
        fins discriminatórios ilícitos ou abusivos;
      </p>

      <p className="term-paragraph">
        X - responsabilização e prestação de contas: demonstração, pelo agente,
        da adoção de medidas eficazes e capazes de comprovar a observância e o
        cumprimento das normas de proteção de dados pessoais e, inclusive, da
        eficácia dessas medidas.
      </p>

      <h2 className="term-name">
        Quais dados pessoais são tratados pelo serviço?
      </h2>

      <p className="term-paragraph">
        A utilização, pelo usuário, de determinadas funcionalidades do serviço
        dependerá do tratamento dos seguintes dados pessoais:
      </p>

      <p className="term-paragraph">-Nome completo</p>

      <p className="term-paragraph">-Nome social</p>

      <p className="term-paragraph">-Data de nascimento</p>

      <p className="term-paragraph">-Sexo</p>

      <p className="term-paragraph">-Número de inscrição no CPF</p>

      <p className="term-paragraph">-Endereço de e-mail</p>

      <h2 className="term-name">Como os dados são coletados?</h2>

      <p className="term-paragraph">Nome completo : Informado pelo usuário</p>

      <p className="term-paragraph">Nome social : Informado pelo usuário</p>

      <p className="term-paragraph">
        Data de nascimento : Informado pelo usuário
      </p>

      <p className="term-paragraph">Sexo : Informado pelo usuário</p>

      <p className="term-paragraph">
        Número de inscrição no CPF : Informado pelo usuário
      </p>

      <p className="term-paragraph">
        Endereço de e-mail : Informado pelo usuário
      </p>

      <h2 className="term-name">Para que fim utilizamos seus dados?</h2>

      <p className="term-paragraph">
        Nome completo : identificação do usuário dentro do serviço
      </p>

      <p className="term-paragraph">
        Nome social : identificação do usuário dentro do serviço
      </p>

      <p className="term-paragraph">
        Data de nascimento : identificação do usuário dentro do serviço
      </p>

      <p className="term-paragraph">
        Sexo : necessário para melhorar e personalizar a experiência do usuário
      </p>

      <p className="term-paragraph">
        Número de inscrição no CPF : identificação do usuário
      </p>

      <p className="term-paragraph">
        Endereço de e-mail : manter o usuário logado
      </p>

      <h2 className="term-name">
        Qual o tratamento realizado com os dados pessoais?
      </h2>

      <p className="term-paragraph">Nome completo : ACESSO</p>

      <p className="term-paragraph">Nome social : AVALIAÇÃO</p>

      <p className="term-paragraph">Data de nascimento : CLASSIFICAÇÃO</p>

      <p className="term-paragraph">Sexo : AVALIAÇÃO</p>

      <p className="term-paragraph">Número de inscrição no CPF : ACESSO</p>

      <p className="term-paragraph">Endereço de e-mail : COMUNICAÇÃO</p>

      <p className="term-paragraph">
        Os dados pessoais do usuário não são compartilhados com terceiros em
        nenhuma hipótese.
      </p>

      <h2 className="term-name">
        Segurança no tratamento dos dados pessoais do usuário
      </h2>

      <p className="term-paragraph">
        O serviço Mileto se compromete a aplicar as medidas técnicas e
        organizativas aptas a proteger os dados pessoais de acessos não
        autorizados e de situações de destruição, perda, alteração, comunicação
        ou difusão de tais dados.
      </p>

      <p className="term-paragraph">
        Para a garantia da segurança, serão adotadas soluções que levem em
        consideração: as técnicas adequadas; os custos de aplicação; a natureza,
        o âmbito, o contexto e as finalidades do tratamento; e os riscos para os
        direitos e liberdades do usuário.
      </p>

      <p className="term-paragraph">
        O site utiliza criptografia para que os dados sejam transmitidos de
        forma segura e confidencial, de maneira que a transmissão dos dados
        entre o servidor e o usuário, e em retroalimentação, ocorra de maneira
        totalmente cifrada ou encriptada.
      </p>

      <p className="term-paragraph">
        No entanto, o site se exime de responsabilidade por culpa exclusiva de
        terceiro, como em caso de ataque de hackers ou crackers, ou culpa
        exclusiva do usuário, como no caso em que ele mesmo transfere seus dados
        a terceiro. O serviço Mileto se compromete, ainda, a comunicar o usuário
        em prazo adequado caso ocorra algum tipo de violação da segurança de
        seus dados pessoais que possa lhe causar um alto risco para seus
        direitos e liberdades pessoais.
      </p>

      <p className="term-paragraph">
        A violação de dados pessoais é uma violação de segurança que provoque,
        de modo acidental ou ilícito, a destruição, a perda, a alteração, a
        divulgação ou o acesso não autorizado a dados pessoais transmitidos,
        conservados ou sujeitos a qualquer outro tipo de tratamento.
      </p>

      <p className="term-paragraph">
        Por fim, o site se compromete a tratar os dados pessoais do usuário com
        confidencialidade, dentro dos limites legais.
      </p>

      <h2 className="term-name">O serviço Mileto utiliza cookies? </h2>

      <p className="term-paragraph">
        Cookies são pequenos arquivos de texto enviados pelo site ao computador
        do usuário e que nele ficam armazenados, com informações relacionadas à
        navegação do site.
      </p>

      <p className="term-paragraph">
        Por meio dos cookies, pequenas quantidades de informação são armazenadas
        pelo navegador do usuário para que nosso servidor possa lê-las
        posteriormente. Podem ser armazenados, por exemplo, dados sobre o
        dispositivo utilizado pelo usuário, bem como seu local e horário de
        acesso ao site.
      </p>

      <p className="term-paragraph">
        É importante ressaltar que nem todo cookie contém dados pessoais do
        usuário, já que determinados tipos de cookies podem ser utilizados
        somente para que o serviço funcione corretamente.{" "}
      </p>

      <p className="term-paragraph">
        As informações eventualmente armazenadas em cookies também são
        consideradas dados pessoais e todas as regras previstas nesta Política
        de Privacidade também são aplicáveis a eles.
      </p>

      <h2 className="term-name">Este Termo de Uso pode ser alterado? </h2>

      <p className="term-paragraph">
        A presente versão desta Política de Privacidade foi atualizada pela
        última vez em: 19/03/2022
      </p>

      <p className="term-paragraph">
        O editor se reserva o direito de modificar, a qualquer momento o site as
        presentes normas, especialmente para adaptá-las às evoluções do serviço
        Mileto, seja pela disponibilização de novas funcionalidades, seja pela
        supressão ou modificação daquelas já existentes.
      </p>

      <p className="term-paragraph">
        O usuário será explicitamente notificado em caso de alteração deste
        Termo de Uso.
      </p>

      <h2 className="term-name">
        Qual o foro aplicável caso o usuário queira realizar alguma reclamação?
      </h2>

      <p className="term-paragraph">
        Este Termo será regido pela legislação brasileira. Qualquer reclamação
        ou controvérsia com base neste Termo será dirimida exclusivamente pela
        comarca Comarca de Santos-SP.
      </p>

      <p className="term-paragraph">
        Sem prejuízo de qualquer outra via de recurso administrativo ou
        judicial, todos os titulares de dados têm direito a apresentar
        reclamação à Autoridade Nacional de Proteção de Dados.{" "}
      </p>
    </div>
  );
};

export default Terms;
