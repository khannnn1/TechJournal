window.TJ = window.TJ || { edicoes: {} };
window.TJ.edicoes["2026-11-19"] = {
  "data": "2026-11-19",
  "numero": 16,
  "resumo": "A Anthropic estreou na Nasdaq com ações a US$ 83, e o Google lançou o Gemini 4 Neon, modelo que chega ao app e à API. Duas falhas críticas no NGINX e outra no Drupal acendem o alerta de quem administra servidores, e o pacote Agent Framework, da Microsoft, foi adulterado no PyPI. Na Nvidia, o adiamento do relatório trimestral à SEC mantém o clima de incerteza após a saída de Jensen Huang.",
  "boas": 0,
  "neutras": 17,
  "mas": 10,
  "itens": [
    {
      "id": "n1",
      "secao": "Destaques",
      "titulo": "Anthropic estreia na Nasdaq com ações a US$ 83",
      "linhaFina": "Ações a US$ 83 começam a ser negociadas hoje na Nasdaq com o código ANT.",
      "texto": "A Anthropic fixou o preço da oferta em US$ 83 por ação, para 980 milhões de papéis, e começa a negociar nesta quinta (19) na Nasdaq com o código \"ANT\". Quase todas as ações (956,4 milhões) são da própria empresa, e o restante vem de acionistas vendedores; a liquidação está prevista para sexta (20). O Tecnoblog fala em valor de mercado de cerca de US$ 1,5 trilhão e em captação bruta de US$ 81,3 bilhões, e cita prejuízo operacional de US$ 567 milhões no terceiro trimestre, com receita perto de US$ 17 bilhões. O Verge trata a operação como a maior abertura de capital da história.",
      "fonte": {
        "nome": "Anthropic",
        "url": "https://www.anthropic.com/news/anthropic-prices-initial-public-offering"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 4,
      "criterios": {
        "impacto": 3,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n2",
      "secao": "Destaques",
      "titulo": "Duas falhas críticas no NGINX permitem execução remota de código",
      "linhaFina": "As CVE-2026-123007 e CVE-2026-123633 permitem execução remota sem login com HTTP/2 ligado; correções no NGINX 1.30.7 e 1.31.9.",
      "texto": "As falhas CVE-2026-123007 e CVE-2026-123633 afetam servidores NGINX com HTTP/2 ligado e receberam nota 9,2 na escala CVSS 4.0, segundo a Wiz. Uma delas existe em versões desde 2015 (1.9.5), e a Wiz demonstrou execução remota de código sem autenticação. A Xint mostrou que é possível combinar uma das falhas com um defeito do kernel Linux para escapar de um contêiner Docker e virar root. As correções estão no NGINX 1.30.7 (estável) e no 1.31.9 (principal); no NGINX Plus, nas versões 37.0.8.1 e 37.3.0.1. O NGINX atende mais de 225 milhões de sites, de acordo com a Wiz.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/critical-nginx-nginx2root-bugs-let-attackers-hijack-servers/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 5,
      "criterios": {
        "impacto": 3,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 3,
        "risco": 3
      }
    },
    {
      "id": "n3",
      "secao": "Destaques",
      "titulo": "Google lança o Gemini 4 Neon, modelo intermediário da família",
      "linhaFina": "Chega à API por US$ 3 e US$ 15 por milhão de tokens; o desempenho é do Google.",
      "texto": "O Google apresentou o Gemini 4 Neon, que chega à API do Gemini, ao Google AI Studio, ao Antigravity e ao app para assinantes dos planos Pro e Ultra. O preço é de US$ 3 por milhão de tokens de entrada e US$ 15 por milhão de saída, com janela de 1 milhão de tokens. O Google diz que o modelo ficou em 3º lugar geral no índice da Artificial Analysis; os números de desempenho são da própria empresa. No app, segundo o Canaltech, o Neon substitui o Argon e o antigo Pro, e quem usa o plano gratuito ou o AI Plus não tem acesso.",
      "fonte": {
        "nome": "Google DeepMind",
        "url": "https://deepmind.google/blog/introducing-gemini-4-neon/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n4",
      "secao": "Destaques",
      "titulo": "Pacote Agent Framework, da Microsoft, é adulterado no PyPI para roubar credenciais",
      "linhaFina": "As versões 1.26.1 e 1.26.2 do pacote oficial roubam credenciais de Azure, AWS, GitHub e OpenAI ao iniciar o Python.",
      "texto": "Atacantes publicaram em 17 de novembro as versões 1.26.1 e 1.26.2 do pacote oficial Microsoft Agent Framework, que tem cerca de 200 mil downloads por mês. O código malicioso roda na inicialização do Python mesmo sem importar o pacote e busca segredos de Azure, AWS, GitHub, Docker, Hugging Face e OpenAI. A segunda versão também tenta obter tokens OIDC do GitHub Actions. O caso foi documentado por Socket, Step Security e Ox Security, e mostra o risco de ataques à cadeia de suprimentos em ferramentas de agentes de IA.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/microsofts-agent-framework-pypi-package-compromised-to-steal-credentials/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 4,
      "criterios": {
        "impacto": 3,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 3,
        "risco": 2
      }
    },
    {
      "id": "n5",
      "secao": "Destaques",
      "titulo": "Nadella diz que ofereceu demissão voluntária a 60 mil funcionários por causa da reorganização com IA",
      "linhaFina": "O CEO diz que a oferta a 60 mil funcionários evitou demissões; a fala não foi confirmada.",
      "texto": "Em entrevista no DealBook Summit, do New York Times, o CEO da Microsoft explicou a oferta feita em outubro, que na prática convidava 60 mil pessoas a sair por conta própria em vez de uma nova leva de demissões. Segundo ele, a ideia não é trocar engenheiros por IA, e sim reorganizar as equipes para que todos usem IA e o trabalho passe a ser gerenciá-la. O objetivo, disse, era dar aos funcionários \"poder de escolha\". A fala é do próprio executivo e não foi confirmada por dados da empresa.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/18/microsoft-ceo-satya-nadella-explains-why-he-asked-60k-employees-to-quit/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 2,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n6",
      "secao": "Destaques",
      "titulo": "Nvidia adia o relatório trimestral à SEC sem dar motivo",
      "linhaFina": "A empresa vai protocolar o 10-Q \"nas próximas semanas\"; analistas ligam o atraso à investigação envolvendo Jensen Huang.",
      "texto": "Na teleconferência de resultados, a CEO interina Colette Kress disse que a empresa vai entregar o formulário 10-Q \"nas próximas semanas\", quando o normal é protocolá-lo no mesmo dia. Um analista do UBS perguntou sobre o atraso e, segundo o relato dele, a empresa ligou a demora à possibilidade de ter de divulgar mais informações sobre a investigação envolvendo Jensen Huang. O 10-Q traz seções sobre processos judiciais e fatores de risco, por isso o adiamento foi notado por analistas e investidores.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/18/nvidia-created-a-weird-bit-of-intrigue-by-not-filing-a-routine-sec-report/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 2,
        "relevancia": 2,
        "risco": 2
      }
    },
    {
      "id": "n7",
      "secao": "Inteligência artificial",
      "titulo": "Google cria \"conversas temporárias\" no Modo IA da Busca",
      "linhaFina": "Respostas da conversa temporária não entram no histórico nem nas recomendações, e a sessão fica desvinculada da conta.",
      "texto": "O Modo IA da Busca ganhou um ícone no canto superior direito que abre uma conversa temporária. Nela, as respostas não aparecem depois no histórico de pesquisa nem nas recomendações, e não são influenciadas por preferências passadas, pois a sessão fica desvinculada da conta. Não é preciso mudar configurações. O recurso aproxima o Modo IA do que o Gemini já oferece em chats temporários.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/18/googles-ai-feature-in-search-gets-its-own-incognito-mode/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 1,
        "risco": 0
      }
    },
    {
      "id": "n8",
      "secao": "Inteligência artificial",
      "titulo": "Citi diz que quem der acesso a agentes de IA responde sozinho por problemas, inclusive invasões",
      "linhaFina": "Citi, JPMorgan, Bank of America e PNC dizem que o cliente responde pelo que agentes de IA fizerem na conta.",
      "texto": "O Citi alterou o contrato de uso do banco online para avisar que clientes que autorizam ferramentas de IA de terceiros a acessar suas contas são responsáveis pelo que esses agentes fizerem. JPMorgan e Bank of America anunciaram regras parecidas no mês passado, e o PNC mudou seus termos nesta quarta (18). Na prática, os bancos dizem que não vão reverter transações feitas por assistentes automáticos, mesmo as não intencionais. Quem entrega credenciais bancárias a um agente de IA passa a assumir o risco integral.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 2
      }
    },
    {
      "id": "n9",
      "secao": "Inteligência artificial",
      "titulo": "Google libera o Genie 4 para assinantes do AI Ultra",
      "linhaFina": "A nova versão do Project Genie, com agente e galeria comunitária, chega aos assinantes elegíveis do AI Ultra.",
      "texto": "O Google DeepMind começou a liberar o Genie 4 em uma nova versão do Project Genie, para assinantes elegíveis do plano AI Ultra. A atualização inclui um agente do Project Genie e uma galeria comunitária. A empresa descreve a experiência como mais responsiva, social e interativa. O texto de lançamento não traz números de desempenho.",
      "fonte": {
        "nome": "Google DeepMind",
        "url": "https://deepmind.google/blog/genie-4-is-now-available/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 1,
        "risco": 0
      }
    },
    {
      "id": "n10",
      "secao": "Segurança e privacidade",
      "titulo": "Drupal corrige falha crítica que permite reinstalar o site e tomar o controle",
      "linhaFina": "A CVE-2026-132165 deixa anônimos reinstalarem o site; corrigida nas versões 10.6.22, 11.3.22 e 11.4.13.",
      "texto": "A falha CVE-2026-132165 foi encontrada pelo scanner de código aberto da Anthropic e deixa usuários anônimos explorarem o instalador para reinstalar o Drupal, o que pode levar a tomada do site ou execução remota de código. O Drupal avisa que exploits podem surgir rápido. As correções estão nas versões 10.6.22, 11.3.22 e 11.4.13. Quem não puder atualizar já deve bloquear o acesso a `/core/install.php` no servidor web.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/drupal-patches-critical-rce-flaw-warns-exploits-may-surface-quickly/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 4,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 3
      }
    },
    {
      "id": "n11",
      "secao": "Segurança e privacidade",
      "titulo": "Ruby publica correções para várias falhas em expressões regulares e conversão de caixa de texto",
      "linhaFina": "Falhas de memória em expressões regulares afetam várias versões; corrigidas no Ruby 4.0.10, 3.4.13 e 3.3.14.",
      "texto": "O aviso de segurança do Ruby lista falhas de memória (estouro de buffer, liberação dupla e leitura fora dos limites) em expressões regulares e na troca de maiúsculas e minúsculas de strings. Para algumas delas, o projeto diz conhecer provas de conceito que levam a execução remota de código em certos cenários. Afetam o Ruby 3.3.13 e anteriores, o 3.4.0 a 3.4.12 e o 4.0.0 a 4.0.9; as versões corrigidas são 4.0.10, 3.4.13 e 3.3.14. O Ruby 3.2 e anteriores chegaram ao fim da vida e não receberão correção.",
      "fonte": {
        "nome": "Ruby",
        "url": "https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 2
      }
    },
    {
      "id": "n12",
      "secao": "Segurança e privacidade",
      "titulo": "Ferramentas de invasão com IA, como a Artex, passam a ser usadas por criminosos",
      "linhaFina": "Criminosos usam frameworks de invasão com IA, como a Artex, que reduzem ataques de dias a horas, diz a Wired.",
      "texto": "A Wired relata que, desde o fim de agosto, empresas, órgãos públicos e bancos vêm sendo atacados com frameworks de testes de invasão movidos por modelos de linguagem. A Artex, escrita em Go e publicada no GitHub em julho por um desenvolvedor pseudônimo, é a mais citada. Segundo alertas de cerca de meia dúzia de empresas de segurança, as ferramentas não criam técnicas novas, mas reduzem de dias para horas o tempo de um ataque e dispensam habilidade técnica de quem as usa.",
      "fonte": {
        "nome": "Wired",
        "url": "https://www.wired.com/story/artex-ai-hacking-tools/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 1
      }
    },
    {
      "id": "n13",
      "secao": "Segurança e privacidade",
      "titulo": "Grupo de ransomware Gentlemen diz ter invadido a Nvidia; empresa nega indícios",
      "linhaFina": "O grupo não mostrou provas, e a Nvidia diz não haver sinal de invasão, só um incidente possível num parceiro.",
      "texto": "O grupo colocou a Nvidia em seu site de vazamentos e abriu uma contagem regressiva que termina em 28 de novembro, mas não mostrou provas. A Nvidia disse que investiga um incidente que pode ter afetado um parceiro terceirizado e que não há sinal de que seus sistemas ou redes tenham sido atingidos. A alegação do grupo não foi verificada.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/nvidia-investigating-gentlemen-ransomware-breach-claims/"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 1,
        "relevancia": 1,
        "risco": 2
      }
    },
    {
      "id": "n14",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "PHP 8.6 é lançado com aplicação parcial de funções e nova classe de duração",
      "linhaFina": "A versão traz aplicação parcial de funções, a classe TimeDuration, API de polling e a função clamp().",
      "texto": "O PHP 8.6.0 saiu em 19 de novembro. Entre as novidades estão a aplicação parcial de funções, que devolve uma closure com os argumentos restantes, a classe `\\Time\\Duration`, uma API de polling para multiplexação de E/S escalável (epoll, kqueue) e a função `clamp()`. O polling interessa a bibliotecas de loop de eventos, como ReactPHP e AMPHP.",
      "fonte": {
        "nome": "PHP",
        "url": "https://www.php.net/releases/8.6/en.php"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 1,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 0
      }
    },
    {
      "id": "n15",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "Towards Data Science propõe uma camada autônoma para supervisionar agentes de IA em escala",
      "linhaFina": "O autor propõe agentes de trabalho, um supervisor autônomo e humanos aprovando só mudanças de alto impacto; é opinião.",
      "texto": "O artigo argumenta que a revisão humana não acompanha agentes que tomam milhares de decisões por hora e propõe um modelo de três camadas: agentes de trabalho, um supervisor autônomo no meio e humanos no topo. O supervisor cuida de correções reversíveis, e as pessoas aprovam apenas mudanças de alto impacto. O texto é opinião do autor, apoiado em levantamento da Monte Carlo com a CDO Magazine.",
      "fonte": {
        "nome": "Towards Data Science",
        "url": "https://towardsdatascience.com/how-to-oversee-ai-agents-at-scale-with-a-three-tier-architecture/"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 1,
        "confirmacao": 1,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n16",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "Towards Data Science: o elo que falta na engenharia de analytics é a comunicação com o negócio",
      "linhaFina": "O autor defende traduzir granularidade, joins e testes para a linguagem do negócio, em um roteiro de quatro passos.",
      "texto": "O autor defende que um modelo de dados tecnicamente correto e bem documentado ainda pode ser mal interpretado por quem o usa, o que gera dúvidas sobre métricas desatualizadas e números que mudaram nos dashboards. Para ele, a documentação diz como algo funciona, e a comunicação deve dizer o que significa, quando confiar e como usar. O artigo propõe um roteiro de quatro passos para traduzir granularidade, joins, filtros e testes para a linguagem do negócio.",
      "fonte": {
        "nome": "Towards Data Science",
        "url": "https://towardsdatascience.com/analytics-engineerings-missing-layer-is-business-communication/"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 1,
        "confirmacao": 1,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n17",
      "secao": "Mercado e empresas",
      "titulo": "Estreia da Anthropic mostra o financiamento circular da IA",
      "linhaFina": "Amazon e Google são grandes acionistas e fornecedoras da Anthropic, e parte do dinheiro captado volta a elas.",
      "texto": "Segundo o prospecto, Amazon (14,7%) e Google (13,7%) somam cerca de US$ 308 bilhões em ações da Anthropic ao preço de US$ 83, e as duas são também grandes fornecedoras de infraestrutura da empresa. Nvidia, AMD, Microsoft, Broadcom, Micron e TSMC se juntaram ao Google em uma colocação privada de US$ 26 bilhões ao preço do IPO. Com exceção da TSMC, todas já têm parcerias bilionárias com a Anthropic. O resultado é que parte do dinheiro captado volta a fornecedores que também são acionistas.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/19/anthropics-ipo-puts-ais-circular-financing-boom-to-the-test/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 0
      }
    },
    {
      "id": "n18",
      "secao": "Mercado e empresas",
      "titulo": "Intel faz nova rodada de demissões, agora na área global de TI",
      "linhaFina": "A Intel não diz quantos saíram; terminou setembro com 81.100 funcionários, 4 mil a menos que no fim de 2025.",
      "texto": "A Intel confirmou o movimento por meio de um porta-voz, que falou em avaliação contínua da força de trabalho, mas não revelou o número de demitidos. O Business Insider e relatos de funcionários apontam que os cortes atingiram a divisão global de TI. A empresa terminou setembro com 81.100 funcionários, 4 mil a menos que no fim de 2025, de acordo com seus documentos financeiros. Os cortes seguem o plano de reestruturação do CEO Lip-Bu Tan.",
      "fonte": {
        "nome": "Canaltech",
        "url": "https://canaltech.com.br/hardware/em-crise-intel-inicia-nova-rodada-de-demissoes-para-cortar-custos/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 1,
        "risco": 1
      }
    },
    {
      "id": "n19",
      "secao": "Mercado e empresas",
      "titulo": "ANPD nega recurso do Discord e mantém lives suspensas no Brasil",
      "linhaFina": "A medida de agosto continua: Go Live e outras transmissões ficam suspensos até haver proteção a crianças.",
      "texto": "O Conselho Diretor da ANPD rejeitou por unanimidade, na quarta (18), o recurso do Discord e manteve a medida preventiva de agosto. A suspensão vale para o Go Live e outros recursos de transmissão de vídeo ao vivo; mensagens de texto, voz e chamadas individuais continuam funcionando. Para voltar, a plataforma precisa comprovar mecanismos de proteção a crianças, como verificação de idade e identificação de situações de risco.",
      "fonte": {
        "nome": "Tecnoblog",
        "url": "https://tecnoblog.net/noticias/anpd-nega-recurso-do-discord-e-mantem-lives-suspensas-no-brasil/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 1,
        "risco": 0
      }
    },
    {
      "id": "n20",
      "secao": "Boas notícias",
      "titulo": "Fígado humano é mantido vivo fora do corpo por sete semanas",
      "linhaFina": "Equipe de Sydney diz ter mantido um fígado doado por sete semanas; o resultado ainda não foi publicado.",
      "texto": "Pesquisadores de Sydney, liderados pelo cirurgião Carlo Pulitano, dizem ter mantido um fígado doado funcionando por sete semanas em um sistema automatizado de bombas e sensores, em condições normotérmicas (cerca de 37 °C). O recorde anterior, na Suíça, era de cerca de duas semanas. Segundo o pesquisador, a automação do sistema foi a chave. Os detalhes ainda aguardam publicação científica, e o resultado vem apenas da própria equipe.",
      "fonte": {
        "nome": "MIT Technology Review",
        "url": "https://www.technologyreview.com/2026/11/19/1148934/a-human-liver-has-been-kept-alive-outside-the-body-for-seven-weeks-setting-a-record/"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 1,
        "relevancia": 0,
        "risco": 0
      }
    },
    {
      "id": "n21",
      "secao": "Boas notícias",
      "titulo": "Sila fecha acordo com a Panasonic Energy para fornecer material de baterias de silício-carbono",
      "linhaFina": "O contrato, que pode passar de US$ 1 bilhão, prevê material de ânodo de silício-carbono; desempenho é dado da empresa.",
      "texto": "O contrato prevê o fornecimento de material de ânodo de silício-carbono, que, segundo a Sila, pesa um quinto do grafite atual e reduz o volume pela metade, o que permite mais autonomia em carros elétricos e recarga mais rápida. A empresa estima que o acordo pode passar de US$ 1 bilhão ao longo do tempo e diz que o volume de produção deve crescer ao menos dez vezes. Parte do financiamento da fábrica vem de um empréstimo de US$ 1,4 bilhão do Departamento de Defesa dos EUA. Os números de desempenho são da empresa.",
      "fonte": {
        "nome": "MIT Technology Review",
        "url": "https://www.technologyreview.com/2026/11/19/1148922/sila-panasonic-battery-deal/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 1,
        "risco": 0
      }
    },
    {
      "id": "n22",
      "secao": "Más notícias e riscos",
      "titulo": "Microsoft confirma falhas em aplicativos após o hotpatch de novembro do Windows 11",
      "linhaFina": "O hotpatch de novembro pode causar o erro 0xC0000099 em aplicativos; há paliativo no Registro para administradores.",
      "texto": "Em um alerta de serviço para administradores, a Microsoft informou que o hotpatch de novembro pode causar erros como \"ERROR_ALLOTTED_SPACE_EXCEEDED (0xC0000099)\" ao instalar, abrir ou usar aplicativos, inclusive o Office, no Windows 11 24H2 e posteriores. O problema envolve programas que carregam a DLL de 32 bits do Windows Installer (msi.dll). A Microsoft diz que quem instalou apenas a atualização de segurança padrão da Patch Tuesday não deve ser afetado, e publicou um paliativo que exige aumentar o valor `HotPatchTableSize` no Registro.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-confirms-app-installation-launch-issues-after-hotpatch/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 1,
        "risco": 2
      }
    },
    {
      "id": "n23",
      "secao": "Más notícias e riscos",
      "titulo": "Bug em driver da Nvidia grava até 30 GB por hora no SSD, segundo usuários",
      "linhaFina": "Usuários relatam até 30 GB por hora gravados com o PC parado, desde o driver 621.14; números não verificados.",
      "texto": "Relatos da comunidade apontam que um serviço em segundo plano do driver recria continuamente um arquivo de registro interno, o que gera gravação constante mesmo com o PC parado. O problema teria se agravado a partir do driver 621.14, de início de novembro, e continuaria na versão 621.24. Há quem meça mais de 3 GB em dez minutos e picos de 30 GB por hora, além de engasgos em jogos e vídeos. Os números vêm de relatos de usuários e não foram verificados.",
      "fonte": {
        "nome": "Canaltech",
        "url": "https://canaltech.com.br/hardware/bug-em-driver-da-nvidia-grava-ate-30-gb-por-hora-no-ssd-mesmo-com-pc-parado/"
      },
      "selo": "fonte única",
      "tom": "ma",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 1,
        "relevancia": 1,
        "risco": 1
      }
    },
    {
      "id": "n24",
      "secao": "Tendências",
      "titulo": "Google e Blue Origin vão lançar satélites de servidores de IA em 2029",
      "linhaFina": "A Blue Origin lançará satélites com TPUs do Google no primeiro trimestre de 2029, a bordo do New Glenn.",
      "texto": "A Blue Origin lançará, no primeiro trimestre de 2029, satélites com TPUs do Google a bordo do foguete New Glenn, no primeiro lançamento dedicado de grande porte do Projeto Suncatcher. Cada lote terá capacidade de computação de cerca de um rack de data center, em órbita síncrona com o Sol. O primeiro satélite do projeto foi lançado em outubro como carga compartilhada em um Falcon 9 e usou o modelo Gemma 4 para enviar um haicai à Terra.",
      "fonte": {
        "nome": "The Verge",
        "url": "https://www.theverge.com/tech/1037535/google-blue-origin-project-suncatcher-2029"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 1,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 1,
        "risco": 0
      }
    },
    {
      "id": "n25",
      "secao": "Tendências",
      "titulo": "Lançamento de GTA 6 testa a rede dos provedores de internet brasileiros",
      "linhaFina": "Vivo e TIM dizem monitorar a demanda em tempo real e estar preparadas para o jogo de 212 GB.",
      "texto": "Com 212 GB, o jogo já provocou picos de tráfego no exterior durante o pré-download. No Brasil, operadoras como Vivo e TIM disseram ao Tecnoblog que monitoram a demanda em tempo real e estão preparadas para a variação. O jogo estreou à 0h desta quinta (19) no PlayStation 5 e no Xbox Series X|S. Há ainda relatos de que alguns jogadores o acessaram antes ao mudar a região do console para a Nova Zelândia.",
      "fonte": {
        "nome": "Tecnoblog",
        "url": "https://tecnoblog.net/noticias/gta-6-pressiona-provedores-brasileiros-de-internet/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 0,
        "risco": 0
      }
    },
    {
      "id": "n26",
      "secao": "Tendências",
      "titulo": "JEDEC apresenta prévia da memória DDR6, com até 14,4 GT/s",
      "linhaFina": "A prévia promete cerca de 50% mais largura de banda, de 12,8 a 14,4 GT/s, para IA e nuvem.",
      "texto": "A especificação, ainda em desenvolvimento, promete cerca de 50% mais largura de banda e velocidade inicial de 12,8 GT/s, chegando a 14,4 GT/s ou mais, contra 9,2 GT/s dos módulos DDR5 para servidores. Os pentes encolhem de 133 mm para 74 mm, com suporte a chips de até 128 Gb. O foco é IA, nuvem e data centers, mas o padrão terá formatos para outros usos. A prévia chega num ano em que a demanda de data centers deixou a memória cara.",
      "fonte": {
        "nome": "Canaltech",
        "url": "https://canaltech.com.br/hardware/jedec-revela-previa-das-memoria-ddr6-com-ate-144-gts-e-modulos-mais-compactos/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 0
      }
    },
    {
      "id": "n27",
      "secao": "Para ficar de olho",
      "titulo": "Pesquisador promete prova de conceito de execução remota pré-autenticação no Rails em uma semana",
      "linhaFina": "Veria Labs diz que falha do Ruby permite execução remota no Rails e promete prova de conceito em uma semana.",
      "texto": "A Veria Labs publicou uma análise de uma falha de estouro de um byte no Ruby ligada à conversão de caracteres como \"ß\" em maiúsculas, presente desde o Ruby 2.4.0, e afirma que o problema pode levar a execução remota de código pré-autenticação em instalações padrão do Rails. A equipe diz que só vai divulgar a prova de conceito dentro de uma semana, para dar tempo de atualização. O alerta ainda não tem avaliação independente nem detalhes completos; vale conferir a versão do Ruby em uso (veja a correção na seção de segurança).",
      "fonte": {
        "nome": "Veria Labs",
        "url": "https://verialabs.com/ruby2shell/"
      },
      "selo": "fonte única",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 1,
        "relevancia": 3,
        "risco": 3
      }
    }
  ]
};
