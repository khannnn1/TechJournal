window.TJ = window.TJ || { edicoes: {} };
window.TJ.edicoes["2026-11-22"] = {
  "data": "2026-11-22",
  "numero": 19,
  "resumo": "Domingo de poucas publicações, dominado por segurança: a Microsoft admitiu uma falha explorada no Entra Connect Health, a Rackspace avisou clientes de um acesso a segredos de Kubernetes, e o FBI e o USDA aparecem como novos alvos de invasões. Na Nvidia, a crise ganhou um novo capítulo com a SEC apurando a contabilidade da empresa, e os grandes bancos dos EUA passaram a responsabilizar clientes pelos erros de agentes de IA. Em IA e privacidade, testes com tokens-isca indicam que prompts vazam em provedores de inferência, e o Google lançou um painel para o usuário ver e apagar o que o Gemini guarda sobre ele.",
  "boas": 1,
  "neutras": 10,
  "mas": 7,
  "itens": [
    {
      "id": "n1",
      "secao": "Destaques",
      "titulo": "SEC investiga a contabilidade da Nvidia, e as ações caem 13%",
      "linhaFina": "Duas fontes anônimas dizem à Reuters que a SEC apura os balanços; as ações caíram 13%.",
      "texto": "A SEC, órgão regulador do mercado de capitais dos EUA, apura possíveis irregularidades nos balanços da Nvidia, segundo duas fontes anônimas ouvidas pela Reuters e relatadas pelo Olhar Digital. A SEC se recusou a comentar e a Nvidia não respondeu de imediato. As ações caíram cerca de 13% na sexta-feira depois da divulgação. O próprio texto lembra que investigações desse tipo não provam irregularidade e muitas terminam sem punição.",
      "fonte": {
        "nome": "Olhar Digital",
        "url": "https://olhardigital.com.br/2026/11/22/pro/contabilidade-da-nvidia-e-alvo-de-investigacao-nos-estados-unidos/"
      },
      "selo": "fonte única",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 3,
        "novidade": 3,
        "confirmacao": 1,
        "relevancia": 3,
        "risco": 2
      }
    },
    {
      "id": "n2",
      "secao": "Destaques",
      "titulo": "Microsoft confirma que falha no Entra Connect Health foi explorada para obter dados de tenants",
      "linhaFina": "A falha deu acesso de leitura a metadados de tenants; a correção saiu em 19 de novembro.",
      "texto": "A Microsoft avisou administradores de que uma vulnerabilidade na API do Entra Connect Health, presente desde 23 de julho e descoberta em 9 de novembro, permitiu acesso de leitura a metadados dos tenants. Os dados incluem e-mails de contatos técnicos e administradores, IDs e nomes de tenants e o estado da sincronização de diretório. Segundo a empresa, não houve alteração de configuração nem exposição de senhas ou tokens, e a correção do lado do servidor foi aplicada em 19 de novembro. A Microsoft não disse quem explorou a falha nem quantos tenants foram afetados, e recomenda atenção a phishing direcionado a esses administradores.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/microsoft-entra-connect-health-flaw-exploited-to-steal-tenant-data/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 4,
      "criterios": {
        "impacto": 3,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 3
      }
    },
    {
      "id": "n3",
      "secao": "Destaques",
      "titulo": "Grandes bancos dos EUA passam a barrar agentes de IA e a culpar o cliente por erros",
      "linhaFina": "O Wells Fargo muda os termos na terça, e outros grandes bancos também restringem agentes de IA.",
      "texto": "O Wells Fargo atualiza seus termos na terça-feira para dizer que o uso de qualquer agente de IA é \"por conta e risco\" do cliente. Em outubro, o JPMorgan Chase já havia proibido agentes de terceiros que entram com as credenciais do usuário, e Bank of America, Citibank e PNC emitiram avisos ou mudaram termos. A Wired também registra que a Amazon bloqueou compras do agente Muse, da Meta, e que a United barrou bots na compra de passagens. O recado é que agentes que agem em nome do usuário ainda não têm um arranjo claro de responsabilidade.",
      "fonte": {
        "nome": "Wired",
        "url": "https://www.wired.com/story/banks-are-cracking-down-on-ai-agents/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 4,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 3,
        "risco": 2
      }
    },
    {
      "id": "n4",
      "secao": "Destaques",
      "titulo": "FBI e Departamento de Agricultura dos EUA são apontados como alvos de novas invasões",
      "linhaFina": "O FBI investiga invasão ao banco policial NCIC, e o USDA teve um banco de pagamentos acessado.",
      "texto": "O FBI investiga uma invasão aparente ao NCIC, banco de dados policial usado para consultar mandados e pessoas desaparecidas, e o presidente Donald Trump comentou o caso em entrevista à Fox News. A NBC e a Reuters relataram que o USDA também foi invadido, com acesso conhecido a um banco de dados de pagamentos. Ex-autoridades ouvidas pela Reuters alertam que o acesso poderia servir de porta para dados mais sensíveis, como segurança alimentar. O alcance das duas invasões ainda não foi esclarecido.",
      "fonte": {
        "nome": "The Verge",
        "url": "https://www.theverge.com/tech/1039543/fbi-usda-hacked"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 3,
        "novidade": 2,
        "confirmacao": 2,
        "relevancia": 1,
        "risco": 2
      }
    },
    {
      "id": "n5",
      "secao": "Destaques",
      "titulo": "ONU encerra semana de negociação sem regras para armas autônomas",
      "linhaFina": "Genebra só decidiu começar a discutir opções; Cruz Vermelha e ONU pediam regras vinculantes em um ano.",
      "texto": "Diplomatas reunidos em Genebra saíram apenas com o compromisso de \"começar a discutir opções\" para regular os chamados robôs assassinos. A Cruz Vermelha, o secretário-geral da ONU e o papa Leão pediam regras vinculantes em um ano, e o acordo deu dois anos para propostas, com espaço para regras opcionais. Segundo a NPR, citada pelo Verge, Rússia, Israel e EUA foram os principais obstáculos. Drones e armas semiautônomas já aparecem em mortes de civis na Ucrânia, em Gaza e no Sudão.",
      "fonte": {
        "nome": "The Verge",
        "url": "https://www.theverge.com/tech/1039554/un-regulations-killer-robots"
      },
      "selo": "confirmado",
      "tom": "neutra",
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
      "id": "n6",
      "secao": "Destaques",
      "titulo": "OpenRouter retira três provedores após teste que expôs vazamento de prompts",
      "linhaFina": "Após teste da Dragos com prompts-isca, a plataforma removeu três provedores e 125 endpoints da retenção zero.",
      "texto": "A OpenRouter, plataforma que intermedia o acesso a modelos de IA, removeu três provedores e tirou 125 endpoints da lista de retenção zero de dados, depois de pesquisadores relatarem violações das políticas de privacidade. O teste citado é da Dragos: cerca de 2 milhões de prompts com credenciais-isca enviados entre julho e novembro, que mostraram indícios de comprometimento de dados em ao menos três provedores e revendedores retendo prompts de clientes. A Dragos também relata prompts de provedores dos EUA chegando a organizações chinesas, e esses números são da empresa e não foram verificados por terceiros. A OpenRouter afirma que não houve invasão da própria plataforma.",
      "fonte": {
        "nome": "OpenRouter",
        "url": "https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 5,
      "criterios": {
        "impacto": 3,
        "novidade": 3,
        "confirmacao": 2,
        "relevancia": 3,
        "risco": 3
      }
    },
    {
      "id": "n7",
      "secao": "Inteligência artificial",
      "titulo": "Pesquisador do Google diz ter achado sítio maia inédito com agentes de IA, mas o local já era conhecido",
      "linhaFina": "O sítio anunciado como inédito já havia sido publicado em periódico acadêmico mais de um ano antes.",
      "texto": "Em 10 de novembro, Pietro Miotti anunciou ter encontrado um sítio maia no México com 48 agentes de IA analisando dados públicos de lidar da NASA, e disse que o instituto de antropologia mexicano não tinha registro do local. Segundo o Olhar Digital, o sítio já havia sido publicado em um periódico acadêmico mais de um ano antes, o que um especialista da área teria notado logo. O caso é citado como exemplo de como resultados de IA sem revisão de especialistas geram ruído.",
      "fonte": {
        "nome": "Olhar Digital",
        "url": "https://olhardigital.com.br/2026/11/22/ciencia-e-espaco/agentes-de-ia-encontraram-um-sitio-maia-inedito-nao-veja-como-dados-sem-revisao-geram-ruido/"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 1,
        "confirmacao": 1,
        "relevancia": 2,
        "risco": 0
      }
    },
    {
      "id": "n8",
      "secao": "Inteligência artificial",
      "titulo": "Gemini ganha painel para ver e apagar o que a IA guarda sobre o usuário",
      "linhaFina": "O painel lista o que o Gemini usa para personalizar respostas, e cada item pode ser editado ou apagado.",
      "texto": "O Google lançou o \"Memory summary\", que no Brasil aparece como \"Fatos salvos na memória\" e lista o que o Gemini usa para personalizar respostas. A lista pode incluir localização, carreira, saúde e preferências, e também dados vindos de apps conectados à conta, como recibos no Gmail. Para o painel funcionar, é preciso ter ativadas as opções \"Manter histórico de atividades\" e \"Memória\", e cada item pode ser editado ou apagado.",
      "fonte": {
        "nome": "Canaltech",
        "url": "https://canaltech.com.br/inteligencia-artificial/veja-o-que-o-gemini-sabe-sobre-voce/"
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
      "id": "n9",
      "secao": "Segurança e privacidade",
      "titulo": "Rackspace avisa que invasores acessaram segredos de Kubernetes de clientes do Spot",
      "linhaFina": "Com credenciais vazadas, invasores leram Secrets do Kubernetes em 17 de novembro; a empresa girou chaves.",
      "texto": "A Rackspace informou clientes de que, em 17 de novembro, uma pessoa não autorizada usou credenciais vazadas para acessar partes da plataforma Rackspace Spot. Em algumas organizações, os invasores puderam criar pods, listar nós e volumes e ler Secrets do Kubernetes, que guardam senhas, tokens e chaves de API. A empresa diz ter revogado tokens e sessões, removido os pods não autorizados e girado chaves, e orienta os clientes a reemitir tokens e trocar credenciais armazenadas nos clusters. O aviso foi obtido pelo BleepingComputer.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/rackspace-spot-breach-let-hackers-access-customer-kubernetes-secrets/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 4,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 3
      }
    },
    {
      "id": "n10",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "Artigo propõe tratar agentes de IA como colegas juniores na ciência de dados",
      "linhaFina": "Artigo de opinião defende que o cientista de dados defina o problema e avalie modelos, e agentes executem.",
      "texto": "Um artigo no Towards Data Science argumenta que, com a IA fazendo grande parte da programação, o papel do cientista de dados sobe de nível. O autor defende que o profissional passe a definir o problema, avaliar modelos e cuidar da parceria com o negócio, e deixe a execução para os agentes. É uma opinião de autor, sem dados de pesquisa.",
      "fonte": {
        "nome": "Towards Data Science",
        "url": "https://towardsdatascience.com/how-ai-changes-the-four-types-of-analytics-for-data-scientists/"
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
      "id": "n11",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "Método usa o Claude Code para ensinar análise de cadeia de suprimentos",
      "linhaFina": "Estudos de caso curtos com código documentado ensinam logística, e o Claude Code adapta o código.",
      "texto": "Outro artigo do Towards Data Science apresenta estudos de caso curtos, cada um com contexto operacional, problema e código documentado. A ideia é que cientistas de dados aprendam o domínio de fábricas e armazéns, e que profissionais de logística que não programam peçam ao agente para adaptar o código. O exemplo detalhado é de planejamento de produção em uma fábrica.",
      "fonte": {
        "nome": "Towards Data Science",
        "url": "https://towardsdatascience.com/how-to-learn-supply-chain-analytics-in-2027-with-claude-code/"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 1,
        "confirmacao": 1,
        "relevancia": 2,
        "risco": 0
      }
    },
    {
      "id": "n12",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "Post do TabNews explica por que IDs grandes mudam sozinhos entre back-end e navegador",
      "linhaFina": "O JavaScript só guarda inteiros exatos até 2^53 − 1; o autor recomenda enviar IDs grandes como texto.",
      "texto": "Um post da comunidade descreve o bug clássico em que o back-end envia o ID 9007199254740993 e o navegador mostra 9007199254740992. O motivo é que o JavaScript guarda todo número do JSON como ponto flutuante e só representa inteiros com exatidão até 2^53 − 1. A recomendação do autor é enviar IDs grandes como texto, usar BigInt quando for preciso fazer conta e criar um teste de contrato com um valor acima desse limite.",
      "fonte": {
        "nome": "TabNews",
        "url": "https://www.tabnews.com.br/mindvsdrive/o-id-do-pedido-mudou-sozinho-json-numeros-grandes-e-o-limite-de-253"
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
      "id": "n13",
      "secao": "Mercado e empresas",
      "titulo": "Nvidia diz que deixará de vender o H200 na China, enquanto Musk e outros pedem a volta de Jensen Huang",
      "linhaFina": "Segundo a CEO interina, a Nvidia deixará de vender o H200 na China, e Musk pede a volta de Huang.",
      "texto": "Em episódio do podcast Equity, o TechCrunch relata que a CEO interina, Colette Kress, anunciou que a Nvidia não venderá mais o chip H200 na China, ao mesmo tempo em que o governo Trump fala em fechar o acesso remoto de empresas chinesas a chips instalados em data centers no Sudeste Asiático. Críticos estimam que cerca de 20% do negócio da Nvidia dependa da China de forma indireta, e o resultado trimestral da empresa superou as expectativas. Ao mesmo tempo, Elon Musk e outros circulam um abaixo-assinado pela volta de Huang, e a Nvidia diz que isso não vai acontecer. As afirmações vêm do podcast e dos participantes, e o texto não traz documento da empresa.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/21/a-tale-of-two-nvidias/"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 1,
        "relevancia": 3,
        "risco": 1
      }
    },
    {
      "id": "n14",
      "secao": "Mercado e empresas",
      "titulo": "Starlink já supera a TIM em banda larga fixa no Brasil, mas ainda é nicho",
      "linhaFina": "Com 936,8 mil acessos em agosto, a Starlink passa a TIM na banda larga fixa, mas tem só 1,7%.",
      "texto": "Segundo dados da Anatel citados em coluna do Canaltech, a Starlink chegou a 936,8 mil acessos de banda larga fixa em agosto, acima dos 929,9 mil da TIM, e a 994 mil em setembro. Isso equivale a 1,7% dos 58 milhões de acessos fixos do país, e a empresa concentra cerca de 86% do mercado de satélite, que responde por 2% da banda larga fixa. O colunista José Otero projeta que, até 2030, a fatia continuará pequena, com a fibra de pequenos provedores dominando.",
      "fonte": {
        "nome": "Canaltech",
        "url": "https://canaltech.com.br/telecom/starlink-no-brasil-lider-no-satelite-nicho-na-banda-larga-fixa/"
      },
      "selo": "fonte única",
      "tom": "neutra",
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
      "id": "n15",
      "secao": "Boas notícias",
      "titulo": "BepiColombo entra na órbita de Mercúrio",
      "linhaFina": "A ESA confirmou a captura orbital depois de horas sem contato, e a comunicação com a Terra voltou.",
      "texto": "A missão da Agência Espacial Europeia acionou quatro propulsores na sexta-feira (21) por cerca de 37 minutos para reduzir a velocidade e deixar a gravidade de Mercúrio capturar os dois orbitadores. Depois de algumas horas sem contato, a ESA confirmou que a captura orbital deu certo e que a comunicação com a Terra foi restabelecida.",
      "fonte": {
        "nome": "Olhar Digital",
        "url": "https://olhardigital.com.br/2026/11/21/ciencia-e-espaco/bepicolombo-faz-manobra-decisiva-para-entrar-na-orbita-de-mercurio/"
      },
      "selo": "confirmado",
      "tom": "boa",
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
      "id": "n16",
      "secao": "Más notícias e riscos",
      "titulo": "Botnet BADBOX volta com 40 bilhões de pedidos fraudulentos de anúncio por dia",
      "linhaFina": "Segundo a HUMAN, o malware em Android barato gera 40 bilhões de pedidos de anúncio por dia.",
      "texto": "A HUMAN, empresa de segurança, informou que a terceira versão do BADBOX, que infecta TV boxes, celulares e tablets Android baratos, chegou a cerca de 40 bilhões de pedidos de anúncio por dia, mais de 4% do tráfego de TV conectada que ela observa. O malware reproduz anúncios em vídeo em janelas ocultas e faz proxy de tráfego, mesmo depois de a versão anterior ter sido desmontada em 2025 e de o Google ter processado os operadores. Os números são da própria HUMAN e não foram verificados por terceiros.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/badbox-30-botnet-returns-with-record-breaking-40-billion-daily-ad-requests/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 2,
        "relevancia": 1,
        "risco": 2
      }
    },
    {
      "id": "n17",
      "secao": "Tendências",
      "titulo": "Vibe coding chega aos gadgets: usuários usam Claude Code e Codex para reprogramar TVs e câmeras",
      "linhaFina": "O Verge mostra usuários pedindo a modelos que reprogramem TVs e câmeras, como uma TV Xiaomi sem anúncios.",
      "texto": "Na newsletter The Stepback, o Verge descreve usuários que pedem a modelos de linguagem para alterar o software dos próprios aparelhos, como um desenvolvedor indiano que limpou a interface cheia de anúncios de uma TV Android da Xiaomi. A prática de modificar eletrônicos é antiga, mas agora ficou fácil e estimula fabricantes a lançar aparelhos mais abertos a desenvolvedores. A pergunta que o texto deixa em aberto é se o mundo físico está pronto para isso. É uma análise do autor.",
      "fonte": {
        "nome": "The Verge",
        "url": "https://www.theverge.com/column/1039139/vibe-coding-gadgets-tv-camera"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 1,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n18",
      "secao": "Para ficar de olho",
      "titulo": "Projeto no GitHub tenta recompilar o GTA VI da versão de Xbox para rodar no PC",
      "linhaFina": "O repositório promete recompilar o GTA VI de Xbox para PC, mas o jogo ainda não inicia.",
      "texto": "O repositório Leonida se descreve como uma recompilação estática da versão Xbox Series do jogo, que traduziria o código e os shaders para rodar no Windows com Vulkan. O README diz que o projeto não contém o jogo, chaves ou executável e que exige uma cópia do próprio usuário, sem quebrar proteções, e admite que o jogo ainda não inicia. O caso ainda é uma promessa de um único projeto, sem confirmação independente do que funciona.",
      "fonte": {
        "nome": "GitHub",
        "url": "https://github.com/ItsNotRexed/Leonida"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 1,
        "relevancia": 1,
        "risco": 0
      }
    }
  ]
};
