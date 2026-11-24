window.TJ = window.TJ || { edicoes: {} };
window.TJ.edicoes["2026-11-24"] = {
  "data": "2026-11-24",
  "numero": 21,
  "resumo": "A CrowdStrike anunciou a compra da Zscaler por US$ 43,9 bilhões em ações, e a Amazon pagará US$ 7,5 bilhões pela tecnologia de otimização da Decart. Na segurança, a Amazon relatou agentes de IA de hackers encontrando e explorando sozinhos uma falha inédita, a Microsoft alertou clientes sobre uma falha explorada na Azure API Management e a OpenRouter afastou três provedores de IA que deixaram vazar prompts. O retorno de Jensen Huang à Nvidia ganhou novos detalhes sobre a pressão de Trump e Vance, a Meta abandonou o prazo de 2030 para emissões líquidas zero e a Quad9 desligou seu DNS para usuários na França.",
  "boas": 1,
  "neutras": 19,
  "mas": 12,
  "itens": [
    {
      "id": "n1",
      "secao": "Destaques",
      "titulo": "CrowdStrike vai comprar a Zscaler por US$ 43,9 bilhões",
      "linhaFina": "A transação é toda em ações, depende de reguladores e deve ser concluída por volta de novembro de 2027.",
      "texto": "A CrowdStrike fechou acordo para adquirir a Zscaler em uma transação paga integralmente em ações. A ideia é unir a proteção de dispositivos da CrowdStrike à plataforma de confiança zero da Zscaler, que atende cerca de 8 mil empresas e exige autenticação a cada acesso a sistemas internos. As empresas dizem que a fusão ajudará clientes a adotar IA com segurança. O negócio depende de aprovação regulatória e deve ser concluído por volta de novembro de 2027.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/23/crowdstrike-to-acquire-zscaler-for-44-billion/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 4,
      "criterios": {
        "impacto": 3,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 1
      }
    },
    {
      "id": "n2",
      "secao": "Destaques",
      "titulo": "Agentes de IA de hackers acharam e exploraram uma falha inédita quase sem ajuda humana, diz a Amazon",
      "linhaFina": "Agentes no framework Cairn acharam e exploraram um zero-day sozinhos; a Amazon alerta para defesas mais lentas que o ataque.",
      "texto": "Segundo a inteligência de ameaças da Amazon, atacantes que escreviam em chinês simplificado deram a agentes rodando no Cairn, framework aberto de testes de invasão, uma lista de IPs e o objetivo de obter acesso ao shell. Os agentes encontraram e exploraram um zero-day em um aplicativo aberto de imagens médicas no servidor de uma universidade do leste da Ásia e depois foram usados para atacar outra rede. A Palo Alto Networks já havia relatado o uso do mesmo framework contra pelo menos 19 organizações. A Amazon alerta que esse ritmo encurta o tempo de resposta de equipes de defesa.",
      "fonte": {
        "nome": "Ars Technica",
        "url": "https://arstechnica.com/security/2026/11/amazon-says-hackers-ai-agents-found-and-exploited-0-day-with-little-human-input/"
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
      "titulo": "Falha na Azure API Management foi explorada para roubar credenciais de clientes",
      "linhaFina": "A falha atinge as camadas Classic; a correção não invalida credenciais já roubadas, e a Microsoft recomenda trocá-las.",
      "texto": "Em aviso enviado a clientes, a Microsoft informou que uma vulnerabilidade nas camadas Classic do Azure API Management permitia operações administrativas e acesso a segredos guardados no serviço, como chaves de assinatura e segredos de provedores de identidade. A empresa diz ter identificado o problema em 18 de novembro e fechado o caminho de acesso no dia seguinte, mas a correção não invalida credenciais que já tenham sido roubadas, por isso a recomendação é trocá-las. As camadas v2 não são afetadas. A falha foi associada a ataques contra empresas de energia norueguesas, como a Equinor.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/microsoft-azure-flaw-exploited-to-steal-customers-api-credentials/"
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
      "id": "n4",
      "secao": "Destaques",
      "titulo": "Trump e Vance pressionaram o conselho da Nvidia pela volta de Huang, segundo o Financial Times",
      "linhaFina": "Segundo o Financial Times, Trump falou ao conselho; a Nvidia segue investigada pelo FBI, pela SEC e pelo Congresso.",
      "texto": "Reportagem do Financial Times republicada pelo Ars Technica descreve uma ofensiva de aliados de Huang no Vale do Silício que envolveu Trump e o vice-presidente JD Vance, e afirma que o próprio Trump falou ao conselho em defesa do executivo. A reunião decisiva ocorreu no domingo à noite e excluiu até a CEO interina, Colette Kress. Mesmo depois de ganhar perto de US$ 1 trilhão em valor de mercado na segunda, a Nvidia vale cerca de um quinto menos que um mês atrás e segue sob investigação do FBI, da SEC e do Congresso.",
      "fonte": {
        "nome": "Ars Technica",
        "url": "https://arstechnica.com/tech-policy/2026/11/how-trump-and-silicon-valley-forced-nvidia-to-take-jensen-huang-back/"
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
      "id": "n5",
      "secao": "Destaques",
      "titulo": "OpenRouter afasta três provedores de IA depois de vazamento de prompts e segredos",
      "linhaFina": "Teste da Dragos com dois milhões de prompts flagrou vazamentos; Together AI, Phala e Novita foram removidas.",
      "texto": "A Dragos enviou dois milhões de prompts de teste com links rastreáveis e credenciais falsas pela OpenRouter e detectou que dados de pelo menos três provedores escaparam e foram usados contra sistemas controlados pela empresa. A OpenRouter, que diz não ter sofrido invasão própria, removeu Together AI, Phala e Novita, e a Atlas Cloud retirou voluntariamente seus modelos. A plataforma também suspendeu o selo de retenção zero de dados de 125 endpoints. Os provedores relatam causas diferentes, de credencial exposta por um agente de código a erro de roteamento, e recomendam trocar segredos enviados em prompts.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/openrouter-drops-ai-providers-over-leaked-prompts-and-secrets/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 4,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 3,
        "risco": 2
      }
    },
    {
      "id": "n6",
      "secao": "Destaques",
      "titulo": "Bancos de dados abertos expuseram mais de 3,5 bilhões de registros, entre senhas e documentos",
      "linhaFina": "Dois bancos sem proteção reuniam documentos de cidadãos chineses e 2 bilhões de credenciais; os donos não foram identificados.",
      "texto": "Dois bancos sem proteção, achados por pesquisadores diferentes, ficaram acessíveis na internet. Um, encontrado pela UpGuard, reunia mais de 1,5 bilhão de documentos, sobretudo de cidadãos chineses, com pelo menos 840 milhões de números de identidade distintos. O outro, localizado por Jeremiah Fowler, tinha cerca de 2 bilhões de credenciais, muitas ligadas a grandes plataformas dos EUA, além de perfis montados por malware. Os donos não foram identificados e a fidelidade completa dos dados não pôde ser confirmada pelos pesquisadores.",
      "fonte": {
        "nome": "Wired",
        "url": "https://www.wired.com/story/3-billion-usernames-passwords-and-documents-leaked-online/"
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
      "id": "n7",
      "secao": "Inteligência artificial",
      "titulo": "Anthropic lança o Claude Ship, com agente que aprova mudanças de código sozinho",
      "linhaFina": "O pacote reúne Code Review, PR Steward e Claude Approvals, para planos Team e Enterprise no GitHub.",
      "texto": "O pacote junta o Code Review, já disponível, a dois agentes em beta: o PR Steward, que corrige testes que falham, conflitos de merge e apontamentos da revisão, e o Claude Approvals, que aprova mudanças conforme uma política escrita em linguagem natural pela equipe no próprio repositório. A empresa recomenda começar a aprovação automática em modo apenas de observação e permite limites de gasto mensais. O recurso chega aos planos Team e Enterprise para repositórios no GitHub.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/"
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
      "id": "n8",
      "secao": "Inteligência artificial",
      "titulo": "OpenAI e Cisco lançam o Shirudo, escudo temporário para Linux sem correção",
      "linhaFina": "O runtime aberto usa eBPF para bloquear exploits sem reiniciar serviços; a implantação exige aprovação de um operador.",
      "texto": "O Shirudo é um runtime de código aberto que usa eBPF para aplicar \"escudos\", bloqueios pontuais que impedem a exploração de uma falha enquanto o patch não é instalado, sem reiniciar o serviço. Agentes de IA ajudam a investigar a vulnerabilidade e a gerar e validar o escudo, mas a implantação depende da aprovação de um operador, e os escudos são assinados digitalmente. Em teste controlado, um escudo gerado pelo Codex barrou um exploit contra o Elasticsearch em execução. O pesquisador Marcus Hutchins, ouvido pelo BleepingComputer, questiona se é prudente deixar agentes escreverem regras que afetam o kernel.",
      "fonte": {
        "nome": "OpenAI",
        "url": "https://openai.com/index/introducing-shirudo"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 3,
        "risco": 1
      }
    },
    {
      "id": "n9",
      "secao": "Inteligência artificial",
      "titulo": "Modo IA da busca do Google passa a usar dados do Drive e da Carteira",
      "linhaFina": "A conexão é opcional; com a carteira, a busca só lê as contas para acompanhar gastos e metas.",
      "texto": "O Google ampliou a Inteligência Pessoal do Modo IA, que já se conectava ao Gmail, à Agenda e ao Fotos, para incluir Google Drive, Google Wallet e o app Gemini. Com a carteira conectada, a busca poderá ajudar a acompanhar gastos e metas financeiras, apenas lendo as contas, sem mover dinheiro. A conexão é opcional e pode ser desligada, e um ícone de \"Personalização\" deve mostrar qual contexto foi usado em cada resposta.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/23/google-searchs-ai-mode-can-now-tap-into-drive-and-wallet-for-more-personalized-responses/"
      },
      "selo": "confirmado",
      "tom": "neutra",
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
      "id": "n10",
      "secao": "Inteligência artificial",
      "titulo": "DeepMind usa equipes de agentes Gemini 4 para baratear algoritmos quânticos",
      "linhaFina": "Resultados provados em Lean incluem rotina 290 vezes mais rápida; as simulações ainda exigem recursos além dos primeiros computadores.",
      "texto": "Times independentes de agentes buscaram melhorias em algoritmos quânticos conhecidos e provaram cada resultado no assistente de provas Lean, já que esses circuitos não podem ser testados em computadores atuais. Segundo a DeepMind, o custo de um cálculo ligado à fusão por confinamento inercial caiu 11,8 vezes, e uma rotina muito usada ficou 290 vezes mais rápida. A empresa reconhece que as simulações ainda exigiriam mais recursos do que os primeiros computadores quânticos com correção de erros devem oferecer. A biblioteca em Lean e as soluções verificadas foram abertas no GitHub.",
      "fonte": {
        "nome": "Google DeepMind",
        "url": "https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/"
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
      "id": "n11",
      "secao": "Segurança e privacidade",
      "titulo": "Chrome corrige falha crítica no componente Variations",
      "linhaFina": "A versão 158 corrige a CVE-2026-134401, de validação de entrada; a distribuição leva dias ou semanas.",
      "texto": "O Google liberou as versões 158.0.8127.88/.89 para Windows e Mac e 158.0.8127.88 para Linux, com uma única correção de segurança, classificada como crítica: a CVE-2026-134401, de validação inadequada de entrada no Variations, sistema usado para testar mudanças com grupos de usuários. A distribuição ocorre ao longo de dias ou semanas e os detalhes do bug seguem restritos. Resumos na comunidade TabNews falam em risco de execução remota de código fora da sandbox, cenário que o aviso oficial não detalha.",
      "fonte": {
        "nome": "Chrome Releases",
        "url": "https://chromereleases.googleblog.com/2026/11/stable-channel-update-for-desktop_01734282054.html"
      },
      "selo": "confirmado",
      "tom": "boa",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 1,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 2
      }
    },
    {
      "id": "n12",
      "secao": "Segurança e privacidade",
      "titulo": "Elétrica estatal da Coreia do Sul confirma vazamento de dados de 1,5 milhão de pessoas",
      "linhaFina": "Nomes, documentos, contas bancárias e números de cartão de 650.487 clientes foram expostos; serviços afetados foram suspensos.",
      "texto": "A KEPCO, principal empresa de energia sul-coreana, detectou em 20 de novembro acesso indevido à sua plataforma de contas de luz e ao sistema de compras. No caso de 650.487 clientes, foram expostos dados como nome, documento, telefone, endereço, contas bancárias e números de cartão. Também vazaram dados de 426.827 representantes de empresas, além de funcionários e prestadores. A empresa bloqueou acessos externos e suspendeu os serviços afetados.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/south-koreas-power-giant-kepco-confirms-data-breach-impacting-15-million/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 0,
        "risco": 2
      }
    },
    {
      "id": "n13",
      "secao": "Segurança e privacidade",
      "titulo": "LaLiga confirma roubo de dados de torcedores",
      "linhaFina": "O acesso ocorreu entre 14 e 16 de novembro numa plataforma para torcedores; nenhum grupo assumiu o ataque.",
      "texto": "A liga espanhola de futebol informou que um criminoso acessou, entre 14 e 16 de novembro, uma plataforma de serviços para torcedores e extraiu dados pessoais de usuários cadastrados na LaLiga e em alguns clubes. A organização diz que o ataque ficou restrito a essa plataforma, notificou a autoridade de proteção de dados e a polícia e está avisando clubes e usuários afetados. Nenhum grupo assumiu o ataque até a publicação.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/spanish-laliga-confirms-hackers-stole-soccer-fans-personal-data/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 0,
        "risco": 1
      }
    },
    {
      "id": "n14",
      "secao": "Segurança e privacidade",
      "titulo": "McDonald's Japão tem dados de localização de clientes expostos",
      "linhaFina": "Histórico de compras, IPs e localização do aparelho foram acessados; o número de vítimas não foi divulgado.",
      "texto": "A subsidiária japonesa confirmou que invasores acessaram o banco de dados do aplicativo oficial, com histórico de compras, endereços IP, localização do aparelho e identificadores internos. Segundo a empresa, nomes, e-mails, telefones, endereços e cartões não foram afetados, mas o número de vítimas e a data da detecção não foram divulgados. O caso se soma a uma onda de ataques a empresas japonesas, com 288 incidentes envolvendo dados pessoais contados por um pesquisador desde janeiro.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/mcdonalds-japan-data-breach-exposes-customer-location-information/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 0,
        "risco": 1
      }
    },
    {
      "id": "n15",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "Ladybird, navegador com motor próprio, chega à versão alfa",
      "linhaFina": "O navegador independente abre testes para macOS e Linux; o criador avisa que alguns sites não vão funcionar.",
      "texto": "Depois de mais de quatro anos de desenvolvimento, o navegador independente Ladybird abriu testes em alfa para macOS e Linux, com um motor criado do zero, algo raro num mercado dominado por Blink, Gecko e WebKit. O próprio criador, Andreas Kling, avisa que o navegador é modesto e que alguns sites não vão funcionar nesta fase. A versão para Windows fica para uma etapa posterior. O projeto é mantido por uma organização sem fins lucrativos.",
      "fonte": {
        "nome": "The Verge",
        "url": "https://www.theverge.com/tech/1040872/ladybird-indie-browser-engine-alpha-testing"
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
      "id": "n16",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "LibreOffice endurece as regras para código gerado por IA",
      "linhaFina": "Uso de modelos de linguagem exige autorização prévia e aviso nos commits; a IA fica vetada em certas áreas.",
      "texto": "A The Document Foundation passou a exigir autorização prévia para usar modelos de linguagem no projeto, aviso nos commits e capacidade do desenvolvedor de explicar todo o código gerado. A IA também fica proibida em mensagens de commit, comentários, relatórios de bugs e na comunicação entre colaboradores, além de vetada em certas partes do código. A suíte de escritório em si continua sem recursos de IA.",
      "fonte": {
        "nome": "Tecnoblog",
        "url": "https://tecnoblog.net/noticias/libreoffice-endurece-regras-para-codigo-gerado-por-ia-no-projeto/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n17",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "Ai2 lança benchmark que expõe limites do rastreamento de pontos em robôs",
      "linhaFina": "Rastreadores bem avaliados pontuam menos no novo teste; dados sintéticos melhoram o desempenho, segundo o próprio instituto.",
      "texto": "O RoboTrack reúne um conjunto de 307 vídeos anotados à mão de manipulação real e uma base sintética de treino, a RoboTrack-15M, gerada em simulação. Segundo o Ai2, rastreadores que vão bem em benchmarks atuais pontuam bem menos no novo teste, e treinar com os dados sintéticos melhora o desempenho em vídeos reais. A equipe também abriu dois modelos e os testou guiando uma pipeta em tarefas de laboratório. Os resultados são do próprio instituto.",
      "fonte": {
        "nome": "Hugging Face",
        "url": "https://huggingface.co/blog/allenai/robotrack"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 2,
        "relevancia": 2,
        "risco": 0
      }
    },
    {
      "id": "n18",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "Como planejar novas tentativas em sistemas com vários agentes antes de programar",
      "linhaFina": "Tutorial propõe desenhar o fluxo em Mermaid e separar falhas que merecem nova tentativa das que vão a humanos.",
      "texto": "Tutorial no Towards Data Science mostra como um supervisor e um agente de pesquisa podem entrar em ciclo infinito quando a ferramenta de busca falha e o agente não recebe o erro anterior. A proposta é desenhar antes o fluxo, com diagrama em Mermaid e classes de dados em Python, e marcar quais falhas valem nova tentativa e quais devem ir para revisão humana. É texto de um autor, de caráter didático.",
      "fonte": {
        "nome": "Towards Data Science",
        "url": "https://towardsdatascience.com/how-to-plan-retries-for-multi-agent-workflows-before-you-write-code/"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 0,
        "novidade": 1,
        "confirmacao": 1,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n19",
      "secao": "Mercado e empresas",
      "titulo": "Amazon paga US$ 7,5 bilhões por tecnologia e equipe da Decart",
      "linhaFina": "A Amazon leva o Decart Optimization Stack e a equipe enquanto se prepara para vender chips Trainium.",
      "texto": "A Amazon vai ficar com o Decart Optimization Stack, software que faz modelos de IA rodarem com mais eficiência em chips da Nvidia, da Amazon e do Google, além dos fundadores e pesquisadores da startup israelense. O valor foi informado pela Bloomberg, e a aquisição foi confirmada em post da Amazon. A compra vem quando a empresa se prepara para vender seus chips Trainium a clientes, em concorrência direta com a Nvidia.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/23/amazon-snaps-up-decarts-ai-optimization-tech-for-7-5b-as-it-prepares-to-sell-trainium-chips/"
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
      "id": "n20",
      "secao": "Mercado e empresas",
      "titulo": "Ações da Anthropic caem abaixo do preço do IPO",
      "linhaFina": "No pré-mercado, os papéis chegaram a romper os US$ 83 da oferta, longe dos US$ 111,50 da estreia.",
      "texto": "No pré-mercado desta terça (24), os papéis chegaram a romper os US$ 83 da oferta e eram negociados perto de US$ 83,39, queda de 5%, bem abaixo dos US$ 111,50 da abertura em 19 de novembro. A empresa não acompanhou a alta das ações de IA puxada pela volta de Huang à Nvidia. Analistas citam juros altos, o custo de data centers e a venda de ações por executivos, incluindo Dario e Daniela Amodei.",
      "fonte": {
        "nome": "Olhar Digital",
        "url": "https://olhardigital.com.br/2026/11/24/pro/acoes-da-anthropic-caem-abaixo-do-preco-de-estreia-na-nasdaq/"
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
      "id": "n21",
      "secao": "Mercado e empresas",
      "titulo": "Megaspeed, pivô do escândalo de Huang, deve entrar na lista de restrições dos EUA",
      "linhaFina": "Segundo o Semafor, com fontes anônimas, a empresa de Singapura entraria na Entity List; ela nega irregularidades.",
      "texto": "Segundo o Semafor, com base em fontes anônimas, o Departamento de Comércio incluirá na Entity List a Megaspeed, empresa de Singapura que foi comandada por Alice Huang e era uma das grandes compradoras de chips da Nvidia. Na prática, empresas americanas precisariam de licença especial para vender a ela. A companhia já é alvo de investigação criminal sobre suposto contrabando de chips para a China e nega irregularidades. O Departamento de Comércio não havia comentado.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/23/megaspeed-the-company-at-the-center-of-the-jensen-huang-scandal-appears-headed-for-a-u-s-blacklist/"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 1,
        "relevancia": 1,
        "risco": 1
      }
    },
    {
      "id": "n22",
      "secao": "Mercado e empresas",
      "titulo": "ASUS diz que PCs baratos voltarão a vir com 8 GB de RAM",
      "linhaFina": "Com a memória mais cara, notebooks de entrada devem perder RAM; a ASUS prevê vendas de PCs menores em 2027.",
      "texto": "Em reunião com acionistas, o co-CEO S.Y. Hsu disse que notebooks de entrada e intermediários que tinham 16 GB podem passar a ter metade disso por causa da alta no preço da memória. Segundo ele, os clientes adiaram compras quando a empresa tentou repassar o aumento, e a ASUS trabalha com a Microsoft para o Windows funcionar de forma aceitável com 8 GB. A empresa projeta queda de 10% a 15% nas vendas globais de PCs em 2027.",
      "fonte": {
        "nome": "Canaltech",
        "url": "https://canaltech.com.br/hardware/retrocesso-asus-diz-que-pcs-baratos-voltarao-a-ter-8-gb-de-ram-por-padrao/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 1,
        "risco": 2
      }
    },
    {
      "id": "n23",
      "secao": "Boas notícias",
      "titulo": "Kagi lança serviço de e-mail sem anúncios",
      "linhaFina": "O beta público traz 50 GB, aliases ilimitados e domínios próprios por US$ 99 ao ano, sem anúncios.",
      "texto": "A Kagi, que já oferece uma busca paga alternativa ao Google e o navegador Orion, abriu o beta público do Kagi Mail, prometendo nada de vigilância nem anúncios, padrões abertos e facilidade para sair do serviço. Ele traz 50 GB, calendário, aliases ilimitados e domínios próprios, com teste gratuito de 60 dias e preço de US$ 99 por ano. Contatos chegam no primeiro trimestre de 2027 e apps nativos para celular, só no terceiro.",
      "fonte": {
        "nome": "The Verge",
        "url": "https://www.theverge.com/tech/1041000/kagi-mail-email-google-gmail-alternative"
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
      "id": "n24",
      "secao": "Más notícias e riscos",
      "titulo": "Meta abandona o prazo de 2030 para zerar emissões líquidas",
      "linhaFina": "A empresa reavalia prazos sem novo calendário; o TechCrunch liga o recuo ao gás natural do data center Hyperion.",
      "texto": "No relatório de sustentabilidade de 2026, a Meta diz que está reavaliando prazos e metas intermediárias, incluindo 2030 para emissões líquidas zero, e não assume novo calendário. Um porta-voz afirmou que a empresa segue comprometida com o objetivo. O TechCrunch liga o recuo à aposta da empresa em gás natural para o data center Hyperion, na Louisiana, e avalia que a decisão pode encorajar concorrentes a fazer o mesmo.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/23/meta-throws-out-its-net-zero-goal-its-competitors-should-be-furious/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 0,
        "risco": 1
      }
    },
    {
      "id": "n25",
      "secao": "Más notícias e riscos",
      "titulo": "Quad9 desliga seu DNS para usuários na França",
      "linhaFina": "A fundação recusa usar o DNS como ferramenta de bloqueio exigida por tribunais franceses a pedido da beIN.",
      "texto": "Desde as 9h de Paris desta terça (24), todas as consultas de usuários franceses ao resolvedor Quad9 são recusadas. A fundação diz que tribunais franceses mantiveram exigências da beIN para bloquear domínios ligados à pirataria e aplicaram multas, e que se recusa a usar o DNS recursivo como ferramenta de bloqueio de conteúdo. Quem não souber da saída ficará sem resolução de nomes até trocar de provedor, possivelmente por opções menos focadas em privacidade.",
      "fonte": {
        "nome": "Quad9",
        "url": "https://quad9.net/news/blog/quad9-service-deactivation-in-france/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 1,
        "risco": 2
      }
    },
    {
      "id": "n26",
      "secao": "Tendências",
      "titulo": "Data centers passam a construir as próprias usinas a gás",
      "linhaFina": "Mais de 100 usinas fora da rede foram anunciadas nos EUA; riscos incluem mais emissões e contas mais caras.",
      "texto": "Para escapar da espera por conexão à rede elétrica, que pode chegar a uma década, desenvolvedores de data centers estão erguendo usinas a gás fora da rede. Segundo o MIT Technology Review, até outubro de 2026 havia mais de 100 dessas usinas anunciadas nos EUA. A publicação aponta como riscos o aumento das emissões e contas de luz potencialmente mais caras para os demais consumidores.",
      "fonte": {
        "nome": "MIT Technology Review",
        "url": "https://www.technologyreview.com/2026/11/24/1149669/the-download-data-centers-gas-ai-consciousness/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 2,
        "relevancia": 1,
        "risco": 1
      }
    },
    {
      "id": "n27",
      "secao": "Tendências",
      "titulo": "Chefe da busca do Google diz que usuários não querem só IA",
      "linhaFina": "Elizabeth Reid defende combinar web e IA, enquanto sites reclamam de cliques perdidos e o Cade investiga o Google.",
      "texto": "Elizabeth Reid, vice-presidente de busca do Google, afirmou em podcast que as pessoas continuam procurando opiniões, experiências e conteúdo aprofundado feito por humanos, e que o caminho é combinar web e IA. A fala ocorre em meio a queixas de sites que perderam cliques com os resumos de IA e a uma investigação do Cade sobre o uso de notícias pelo Google, que nega abuso.",
      "fonte": {
        "nome": "Tecnoblog",
        "url": "https://tecnoblog.net/noticias/vp-do-google-pessoas-nao-querem-apenas-ia-na-busca/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 1,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 0
      }
    },
    {
      "id": "n28",
      "secao": "Tendências",
      "titulo": "Uber, Nuro e Lucid começam testes sem motorista de segurança",
      "linhaFina": "Os SUVs Lucid Gravity rodam sem operador em quatro cidades; a estreia comercial ficou para o início de 2027.",
      "texto": "O trio tirou os operadores humanos dos SUVs Lucid Gravity em quatro cidades da região de São Francisco, antes de corridas restritas a funcionários. A estreia comercial no app da Uber ficou para o primeiro trimestre de 2027, um pouco depois da meta original, com Houston na sequência. A Uber se comprometeu a comprar pelo menos 35 mil veículos da Lucid nos próximos anos para disputar o mercado com Waymo e Zoox.",
      "fonte": {
        "nome": "The Verge",
        "url": "https://www.theverge.com/transportation/1040676/uber-nuro-lucid-driverless-robotaxi-testing-bay-area"
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
      "id": "n29",
      "secao": "Para ficar de olho",
      "titulo": "Jensen Huang deve depor no Congresso dos EUA nos dias 1º e 3 de dezembro",
      "linhaFina": "O Comitê Bancário do Senado marcou audiência para 3 de dezembro; comitês da Câmara o ouvem no dia 1º.",
      "texto": "O Comitê Bancário do Senado, responsável pela política de controle de exportações, marcou audiência pública com Huang para 3 de dezembro, segundo aviso no site do comitê. Antes disso, em 1º de dezembro, ele já havia aceitado comparecer a comitês da Câmara, incluindo o de Inteligência. As audiências devem tratar da relação com a suposta espiã chinesa e de possível envolvimento em contrabando de chips.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/23/jensen-huang-scheduled-to-testify-next-week-in-senate-following-reinstatement-as-nvidia-ceo/"
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
      "id": "n30",
      "secao": "Para ficar de olho",
      "titulo": "GrapheneOS acusa o Google de pressionar fabricantes contra parcerias",
      "linhaFina": "O projeto não apresentou documentos nem nomeou fabricantes; a Motorola confirmou suporte previsto no Signature 27.",
      "texto": "Os desenvolvedores do sistema baseado em Android afirmam que a área comercial do Google ameaça endurecer o licenciamento de seus serviços para fabricantes que firmem acordos com o projeto, e que desestimula o desbloqueio do bootloader. O grupo não apresentou documentos nem nomeou fabricantes, mas fala em procurar reguladores dos EUA. A Motorola já confirmou suporte previsto no Signature 27.",
      "fonte": {
        "nome": "Tecnoblog",
        "url": "https://tecnoblog.net/noticias/grapheneos-diz-que-google-ameaca-fabricantes-para-barrar-sistema/"
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
      "id": "n31",
      "secao": "Para ficar de olho",
      "titulo": "Coalizão cobra da União Europeia ação contra a Apple por navegadores no iOS",
      "linhaFina": "Mozilla, Vivaldi, Brave e outros dizem que nenhum navegador conseguiu motor próprio no iPhone sob a lei europeia.",
      "texto": "Mozilla, Vivaldi, Brave, Y Combinator, Shopify e outras organizações enviaram carta aberta a Ursula von der Leyen dizendo que, mais de dois anos e meio após a Lei dos Mercados Digitais entrar em vigor, nenhum navegador conseguiu trocar o WebKit por motor próprio no iPhone. O grupo pede que a Comissão Europeia abra um processo de fiscalização. A Apple não comentou e já defendeu suas regras por segurança e privacidade.",
      "fonte": {
        "nome": "Tecnoblog",
        "url": "https://tecnoblog.net/noticias/coalizao-pressiona-ue-contra-restricoes-da-apple-a-navegadores/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 1,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 0
      }
    },
    {
      "id": "n32",
      "secao": "Para ficar de olho",
      "titulo": "Kindle e Kindle Paperwhite de 10ª geração perdem suporte em 31 de dezembro",
      "linhaFina": "Os modelos de 2018 e 2019 deixam de receber atualizações e correções de segurança, mas continuam funcionando.",
      "texto": "A Amazon deixará de enviar atualizações de sistema e correções de segurança para os dois modelos, lançados em 2018 e 2019. Os aparelhos continuarão funcionando, e a loja de e-books segue acessível por enquanto.",
      "fonte": {
        "nome": "Canaltech",
        "url": "https://canaltech.com.br/e-reader/amazon-vai-aposentar-kindles-antigos-veja-se-o-seu-esta-na-lista/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 1,
        "confirmacao": 3,
        "relevancia": 0,
        "risco": 1
      }
    }
  ]
};
