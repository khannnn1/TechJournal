window.TJ = window.TJ || { edicoes: {} };
window.TJ.edicoes["2026-11-18"] = {
  "data": "2026-11-18",
  "numero": 15,
  "resumo": "A Nvidia divulgou resultado recorde de US$ 115,8 bilhões, disse que Jensen Huang não volta ao comando e anunciou que parou de enviar chips H200 à China. Uma falha crítica no Java (Java4Shell) e outra no Apache Roller, já explorada, pedem atualização imediata, e o Waymo suspendeu corridas em rodovias nos EUA. No mercado, a Anthropic detalhou a participação de Amazon e Google antes do IPO, o Google liberou de graça o agente Tasks em seis países e GTA VI chega ao PS5 e ao Xbox amanhã.",
  "boas": 1,
  "neutras": 17,
  "mas": 8,
  "itens": [
    {
      "id": "n1",
      "secao": "Destaques",
      "titulo": "Nvidia bate recorde de receita e diz que não pretende trazer Jensen Huang de volta",
      "linhaFina": "Receita de US$ 115,8 bilhões supera a previsão; o conselho diz que não pretende reintegrar Huang e busca novo CEO.",
      "texto": "Na teleconferência do terceiro trimestre fiscal, a Nvidia informou receita de US$ 115,8 bilhões, acima dos cerca de US$ 109 bilhões esperados por analistas. O presidente do conselho, Harvey Jones, afirmou que o conselho aceitou por unanimidade a renúncia de Huang e não pretende reintegrá-lo. A empresa busca um novo CEO, interno ou externo, e Colette Kress segue como interina. O ex-CEO havia dito no X que voltaria se o conselho assim decidisse.",
      "fonte": {
        "nome": "Wired",
        "url": "https://www.wired.com/story/nvidias-board-has-no-plans-to-reinstate-jensen-huang/"
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
      "titulo": "Nvidia deixa de vender chips H200 para a China",
      "linhaFina": "A Nvidia não envia mais chips Hopper licenciados à China; o Jefferies estima perda de até US$ 62 bilhões.",
      "texto": "Colette Kress disse na teleconferência que a empresa não envia mais chips Hopper licenciados ao mercado chinês. A venda havia sido negociada por Huang com o governo Trump, com tarifa de 25% paga aos EUA. Na segunda-feira, novas regras americanas também passaram a barrar chips avançados em data centers estrangeiros que atendem clientes chineses remotamente. O banco Jefferies estima que isso possa reduzir de US$ 44 bilhões a US$ 62 bilhões da receita de data centers no ano que vem, enquanto a Nvidia diz que a demanda acumulada compensa o efeito.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/17/nvidia-is-abandoning-china-after-jensen-huangs-ouster/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 3,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 2,
        "risco": 1
      }
    },
    {
      "id": "n3",
      "secao": "Destaques",
      "titulo": "Amazon e Google ficarão com quase 30% da Anthropic após o IPO",
      "linhaFina": "Documentos do IPO mostram Amazon com 14,7% e Google com 13,7%; grupo de empresas compra US$ 26 bilhões em ações.",
      "texto": "Segundo documentos divulgados pela Anthropic, a Amazon terá 14,7% da empresa, em ações sem direito a voto, e a participação do Google será de 13,7%. A Amazon ainda guarda bilhões em notas conversíveis e, se convertesse tudo agora, chegaria a 23,8%. Um grupo de empresas, entre elas Google, Nvidia, Microsoft e AMD, concordou em comprar US$ 26 bilhões em ações sem voto, sendo US$ 10 bilhões de Google e de Nvidia cada. A oferta deve ser concluída nesta quarta, segundo o Olhar Digital, que aponta dúvidas do mercado sobre o retorno dos investimentos em IA.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/17/amazon-and-google-will-together-own-nearly-30-of-anthropic-after-its-ipo/"
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
      "id": "n4",
      "secao": "Destaques",
      "titulo": "Java4Shell: falha crítica no OpenJDK permite execução remota de código sem autenticação",
      "linhaFina": "A CVE-2026-114938 permite execução remota sem login no OpenJDK 17.0.6 ou superior; a Oracle já publicou correção.",
      "texto": "A vulnerabilidade, CVE-2026-114938, está no decodificador Base64 acelerado por hardware do Java e afeta o OpenJDK 17.0.6 e versões posteriores, incluindo Oracle Java SE, Amazon Corretto, Temurin e Red Hat OpenJDK. Os pesquisadores da Calif, que a divulgaram, deram nota 9,2 de 10; a Oracle classificou como 8,1. Aplicações como Jenkins, Jira, Confluence e Keycloak podem ser alvo. A Oracle publicou correção em 17 de novembro; como paliativo, os pesquisadores sugerem desligar o recurso com `-XX:-UseBASE64Intrinsics`.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/critical-java4shell-flaw-allows-rce-attacks-on-major-java-applications/"
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
      "id": "n5",
      "secao": "Destaques",
      "titulo": "Waymo suspende corridas em rodovias em todo o país após ordem do DMV da Califórnia",
      "linhaFina": "Após ordem do DMV da Califórnia, a Waymo parou as corridas em rodovias em todos os mercados, sem prazo.",
      "texto": "O DMV californiano restringiu as operações em rodovias em 11 de novembro, mas só tornou a medida pública na terça. O órgão cita veículos que entraram em zonas de obra ativas, como na US-101 perto de Burlingame, e considera o risco iminente para a segurança. A Waymo cumpriu a ordem e também parou as corridas em rodovias nos outros mercados onde opera. A restrição vale até a empresa provar que adotou medidas corretivas eficazes.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/17/waymo-suspends-freeway-rides-nationwide-after-california-dmv-order/"
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
      "id": "n6",
      "secao": "Destaques",
      "titulo": "GTA VI chega nesta quinta ao PS5 e ao Xbox Series X|S",
      "linhaFina": "O jogo da Rockstar sai amanhã para PS5 e Xbox Series X|S, e as primeiras análises já circulam.",
      "texto": "O jogo da Rockstar sai em 19 de novembro, mais de uma década depois de GTA V, que vendeu mais de 230 milhões de cópias. As análises começaram a sair nesta quarta, e a crítica do The Verge o chama de à altura da expectativa. Em paralelo, funcionários da Rockstar votam sobre sindicalização, segundo a cobertura do veículo.",
      "fonte": {
        "nome": "The Verge",
        "url": "https://www.theverge.com/entertainment/1035847/grand-theft-auto-6-launch-review-news"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 0,
        "risco": 0
      }
    },
    {
      "id": "n7",
      "secao": "Inteligência artificial",
      "titulo": "Google libera de graça o Gemini Tasks, agente que liga para lojas e faz compras",
      "linhaFina": "O agente que liga para lojas e compra chega de graça a seis países; as ligações valem só nos EUA.",
      "texto": "O recurso, antes restrito a assinantes, chega gratuitamente a centenas de milhões de usuários em Estados Unidos, Canadá, Austrália, Índia, Japão e Coreia do Sul, junto do modelo Gemini 4 Hydrogen. Ele pode agendar serviços por telefone, pagar com o Google Pay e entrar em sites quando o usuário autoriza. As funções de ligação e compra ficam, por ora, só nos EUA, e o Brasil não está na lista.",
      "fonte": {
        "nome": "Canaltech",
        "url": "https://canaltech.com.br/inteligencia-artificial/google-libera-agente-de-ia-gratuito-que-faz-ligacoes-e-compras-por-voce/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 1,
        "risco": 0
      }
    },
    {
      "id": "n8",
      "secao": "Inteligência artificial",
      "titulo": "Google passa a guardar conversas temporárias do Gemini por cerca de dois meses",
      "linhaFina": "O prazo dos chats temporários sobe de 72 horas para cerca de dois meses; o Google cita segurança.",
      "texto": "O prazo para chats temporários e para conversas com histórico desativado sobe de 72 horas para aproximadamente dois meses, com liberação global nas próximas semanas. O Google justifica a mudança com segurança e proteção dos serviços e não explicou o que motivou a decisão. Para comparação, a OpenAI diz guardar chats temporários por até 30 dias, e a Anthropic mantém chats anônimos do Claude por 30 dias por padrão.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/17/google-to-keep-gemini-chats-for-two-months-up-from-72-hours-even-with-history-off/"
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
      "id": "n9",
      "secao": "Inteligência artificial",
      "titulo": "Microsoft apresenta sete modelos de IA próprios da linha MAI",
      "linhaFina": "Na Ignite, a empresa apresenta sete modelos MAI; o desempenho de 98% do GPT-6.1 Sol é número da própria Microsoft.",
      "texto": "Anunciada na conferência Ignite, a família inclui modelos para programação, cibersegurança, imagem e voz. O MAI Code 2, voltado a tarefas do GitHub Copilot, teria 98% do desempenho do GPT-6.1 Sol por 40% do preço, números da própria Microsoft que não foram verificados de forma independente. A empresa não informou quando o Copilot passará a usar os modelos e anunciou o MAI Licensed Weights para quem quiser adaptá-los no Azure.",
      "fonte": {
        "nome": "Tecnoblog",
        "url": "https://tecnoblog.net/noticias/microsoft-amplia-linha-propria-de-ia-com-sete-novos-modelos/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 2,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n10",
      "secao": "Segurança e privacidade",
      "titulo": "Falha crítica no Apache Roller já é explorada em ataques",
      "linhaFina": "A CVE-2026-129448 permite execução remota sem login nas versões 4.0.0 a 6.1.4 e já é explorada; corrigida na 6.1.6.",
      "texto": "A Apache corrigiu a CVE-2026-129448, uma desserialização insegura no endpoint XML-RPC que permite execução remota de código sem login em versões 4.0.0 a 6.1.4. A fundação confirma exploração ativa, mas não disse quem ataca nem quantos servidores foram afetados. A correção está na versão 6.1.6; quem não puder atualizar deve desativar o mapeamento do servlet XML-RPC.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/apache-warns-of-roller-rce-vulnerability-exploited-in-attacks/"
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
      "titulo": "Supercomputador Fugaku, do Japão, fica fora do ar após invasão",
      "linhaFina": "Invasor usou o painel público de status para chegar a servidores internos; o sistema está desligado desde 14 de novembro.",
      "texto": "O centro Riken informou que, entre 10 e 13 de novembro, um invasor explorou o painel público de status do Fugaku para chegar a servidores internos e instalar malware voltado a dados de usuários. O sistema foi desligado em 14 de novembro, as chaves de acesso foram desativadas e os usuários devem trocar credenciais guardadas lá. O método exato de invasão e a autoria ainda não foram determinados, e não há confirmação de roubo de resultados de pesquisa.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/japan-takes-fugaku-supercomputer-offlline-after-cyberattack/"
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
      "id": "n12",
      "secao": "Segurança e privacidade",
      "titulo": "Chaves vazadas em imagens do Docker Hub são exploradas em segundos",
      "linhaFina": "Em estudo com 300 imagens-isca, a primeira chave da AWS foi usada 7,86 segundos após a publicação.",
      "texto": "Pesquisadores da Stony Brook publicaram 300 imagens-isca em oito registros ao longo de quatro meses. A primeira chamada de API com uma chave da AWS aconteceu 7,86 segundos após a publicação, a mediana foi de cerca de 51 segundos, e as 100 chaves da AWS foram usadas em até 15 minutos. Chaves de OpenAI e Anthropic também foram sequestradas para esgotar o saldo das contas de teste. O estudo foi apresentado na conferência ACM CCS.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/cloud-keys-leaked-in-docker-hub-images-are-stolen-within-seconds/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 3,
        "risco": 1
      }
    },
    {
      "id": "n13",
      "secao": "Segurança e privacidade",
      "titulo": "Pesquisadores assumem a conta do modelo de voz Kokoro no Hugging Face",
      "linhaFina": "A falta de verificação de titularidade permitiu assumir a conta de um modelo com quase 13 milhões de downloads mensais.",
      "texto": "A plataforma não verificava a titularidade da conta, o que permitiu a tomada do perfil de um modelo com quase 13 milhões de downloads mensais, usado em ferramentas de Google, Nvidia, Intel, AMD e AWS. Na demonstração, os pesquisadores alteraram só os pesos para que o áudio dissesse algo diferente do texto, sem mexer em código, o que escapa de antivírus. O projeto está sem atualizações desde abril de 2025.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/researchers-hijack-hugging-face-account-for-popular-kokoro-ai-model/"
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
      "id": "n14",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "dbt v2 chega à disponibilidade geral e ganha testes unitários locais",
      "linhaFina": "O novo motor chega à disponibilidade geral com execuções 30% a 40% mais rápidas, segundo a própria dbt Labs.",
      "texto": "A empresa diz que mais de 14 mil projetos já rodam no novo motor toda semana, com execuções 30% a 40% mais rápidas; os números são da própria dbt Labs. O dbt v2 está disponível para Redshift, Databricks, BigQuery, Snowflake e DuckDB, e em beta para ClickHouse e Spark. Os testes unitários locais, em alpha, rodam em DuckDB sem consultar o data warehouse, e o modo de testes em lote teria cortado 40% do tempo e 65% das consultas em testes internos.",
      "fonte": {
        "nome": "dbt Labs",
        "url": "https://www.getdbt.com/blog/whats-new-in-dbt-november-2026"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 3,
        "confirmacao": 2,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n15",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "Towards Data Science: agente \"pastor\" centraliza vários agentes de programação",
      "linhaFina": "O autor relata ganho de 30% com um agente coordenador de vários agentes de código; é experiência pessoal.",
      "texto": "O autor descreve conversar com um único agente coordenador, em vez de alternar entre sessões de agentes de código para ver quem aguarda resposta. Ele relata ganho de eficiência de mais de 30% em dois meses, e afirma que os indicadores visuais das IDEs erram em pelo menos um terço das vezes. É uma experiência pessoal, sem medição independente.",
      "fonte": {
        "nome": "Towards Data Science",
        "url": "https://towardsdatascience.com/how-to-improve-coding-agent-efficiency-by-30-with-an-orchestrator/"
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
      "secao": "Mercado e empresas",
      "titulo": "SEC abre investigação civil sobre a Nvidia, diz o Wall Street Journal",
      "linhaFina": "O Wall Street Journal diz que a SEC apura se as divulgações enganaram investidores; não há confirmação oficial.",
      "texto": "Segundo o jornal, a apuração avalia se as divulgações da empresa enganaram investidores. O caso se soma à investigação do Departamento de Comércio sobre a Megaspeed, empresa ligada à pessoa citada na saída de Huang, e às cobranças do Congresso. As ações da Nvidia caíram mais de 10% desde a saída do executivo, segundo o TechCrunch. A informação ainda não foi confirmada oficialmente.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/17/sec-reportedly-investigating-nvidia-amid-huang-exit/"
      },
      "selo": "fonte única",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 3,
        "novidade": 3,
        "confirmacao": 1,
        "relevancia": 2,
        "risco": 2
      }
    },
    {
      "id": "n17",
      "secao": "Mercado e empresas",
      "titulo": "Nvidia detalha quando garante empréstimos de data centers de clientes",
      "linhaFina": "A garantia de empréstimo só vale depois que o cliente levantar o capital; a maior chega a US$ 105 bilhões.",
      "texto": "Nos comentários do diretor financeiro, a empresa esclareceu que garantir um empréstimo não significa financiá-lo: a garantia só vale depois que o cliente levantar o capital necessário para a obra e a instalação dos equipamentos. A maior garantia é de US$ 105 bilhões para um campus da OpenAI em Ohio, reduzida de US$ 250 bilhões, segundo relatos. Com a saída de Huang, investidores questionam se o ritmo de apoio a clientes continuará o mesmo.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/18/nvidia-clarifies-when-it-will-and-wont-keep-financing-neoclouds/"
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
      "titulo": "Microsoft anuncia o Windows Server 2028 com segurança reforçada",
      "linhaFina": "Sistema chega com Server Core endurecido por padrão e NVMe nativo; o bloqueio de NTLM ainda está em desenvolvimento.",
      "texto": "Apresentado na Ignite, o sistema vem com Server Core endurecido por padrão e uma linha de base de segurança que o administrador pode flexibilizar. Traz gerenciamento via Intune, NVMe nativo por padrão, suporte a NVMe sobre TCP e RDMA e a possibilidade de iniciar a partir de ReFS. Itens como bloqueio de NTLM ainda estão em desenvolvimento.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/microsoft/microsoft-announces-windows-server-2028-with-hardened-security/"
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
      "id": "n19",
      "secao": "Boas notícias",
      "titulo": "Líder do Scattered Spider é condenado a seis anos de prisão nos EUA",
      "linhaFina": "Tyler Buchanan foi sentenciado por roubar mais de US$ 11,6 milhões em criptomoedas e invadir uma dúzia de empresas.",
      "texto": "O britânico Tyler Buchanan, de 24 anos, foi sentenciado por roubar mais de US$ 11,6 milhões em criptomoedas e conspirar para invadir uma dúzia de empresas, com phishing por SMS e troca de chip. Ele havia sido extraditado em 2025.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/british-scattered-spider-hacker-sentenced-to-6-years-in-prison/"
      },
      "selo": "confirmado",
      "tom": "boa",
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
      "secao": "Más notícias e riscos",
      "titulo": "Tor lança atualização de emergência diante de ataque DDoS em andamento",
      "linhaFina": "A versão 0.4.9.17 corrige falhas, entre elas uma de defesa contra DDoS em IPv6; operadores devem atualizar.",
      "texto": "O Projeto Tor publicou a versão 0.4.9.17 do software de relays, com correções de segurança, uma delas importante para a defesa contra negação de serviço no tratamento de IPv6. Segundo o projeto, uma enxurrada de circuitos de clientes sobrecarregou os relays e afetou a maioria dos operadores. Não há informação sobre autoria ou início do ataque, e novas versões são esperadas em breve. Operadores devem atualizar.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/tor-releases-emergency-update-amid-ongoing-ddos-attack/"
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
      "id": "n21",
      "secao": "Tendências",
      "titulo": "Reddit perde 13% da audiência em um ano com os resumos de IA do Google",
      "linhaFina": "Similarweb aponta queda de 13% por causa dos resumos de IA; o Reddit diz que os visitantes únicos subiram 16%.",
      "texto": "O levantamento da Similarweb atribui a queda à menor necessidade de clicar em links quando a IA entrega resumos. Em carta a acionistas, o Reddit afirma que os visitantes únicos subiram 16% no mesmo período. A medição é anterior à exigência de login que a plataforma passou a fazer.",
      "fonte": {
        "nome": "Tecnoblog",
        "url": "https://tecnoblog.net/noticias/na-era-da-ia-audiencia-do-reddit-despenca-13/"
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
      "id": "n22",
      "secao": "Tendências",
      "titulo": "Meta apresenta o Direct, app de mensagens independente do Instagram",
      "linhaFina": "Funciona sem conta no Instagram e está em teste na Turquia e na Tailândia, só para maiores de 13 anos.",
      "texto": "O aplicativo funciona sem conta no Instagram, restringe mensagens a contatos e inclui desenhos, figurinhas e efeitos de voz. É proibido para menores de 13 anos, com verificação de idade, e por ora está em teste na Turquia e na Tailândia, para Android e iOS.",
      "fonte": {
        "nome": "Tecnoblog",
        "url": "https://tecnoblog.net/noticias/meta-anuncia-novo-app-de-mensagens-direct-e-baseado-nas-dms-do-instagram/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 3,
        "confirmacao": 3,
        "relevancia": 0,
        "risco": 0
      }
    },
    {
      "id": "n23",
      "secao": "Tendências",
      "titulo": "Germ DM, alternativa ao Signal sem número de telefone, chega ao Android",
      "linhaFina": "O mensageiro sem número de telefone, que já existia no iPhone desde 2023, chega ao Android.",
      "texto": "O mensageiro, criado por uma equipe de três pessoas que inclui um ex-engenheiro da Apple do iMessage, usa \"cartões descartáveis\" como identidades separadas, compartilhados por QR code ou link. O app já existia no iPhone desde 2023 e não pede número de telefone.",
      "fonte": {
        "nome": "Wired",
        "url": "https://www.wired.com/story/germ-dm-is-now-available-on-android/"
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
      "secao": "Tendências",
      "titulo": "Sony exige atualização do PS5 para rodar GTA VI",
      "linhaFina": "A atualização 14.23, de 1,3 GB, passa a ser obrigatória para jogar e busca barrar o desbloqueio do console.",
      "texto": "A versão 14.23, de 1,3 GB, passa a ser obrigatória para acessar o jogo e busca impedir que o desbloqueio do console, explorado por hackers há dois meses, comprometa o lançamento. A informação vem de comunicado da Sony nas redes sociais, segundo o Canaltech, que lembra que a empresa planeja uma biblioteca 100% digital a partir de 2028.",
      "fonte": {
        "nome": "Canaltech",
        "url": "https://canaltech.com.br/games/sony-avisa-gta-6-nao-vai-abrir-no-ps5-sem-atualizacao-antipirataria-de-13-gb/"
      },
      "selo": "confirmado",
      "tom": "neutra",
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
      "id": "n25",
      "secao": "Para ficar de olho",
      "titulo": "OpenAI lança GPT-6.2 Astra e Sol; primeiras críticas de usuários ainda sem detalhes",
      "linhaFina": "A OpenAI diz que os modelos rendem mais em programação e uso de computador; não há testes independentes.",
      "texto": "A OpenAI anunciou os modelos como melhores em produtividade profissional, programação, uso de computador e eficiência, com custo menor, no ChatGPT Work, no Codex e na API. Detalhes técnicos e testes independentes ainda não estão disponíveis. O TabNews relata queixas de usuários, como tarefas encerradas cedo demais e interfaces repetitivas, sem verificação.",
      "fonte": {
        "nome": "OpenAI",
        "url": "https://openai.com/index/introducing-gpt-6-2-astra-sol"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 3,
        "novidade": 3,
        "confirmacao": 1,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n26",
      "secao": "Para ficar de olho",
      "titulo": "Rede sigilosa da NSA fica fora do ar; agência diz que foi manutenção",
      "linhaFina": "A NSA diz que foi manutenção de rotina, sem indício de ciberataque; não está claro se o serviço voltou.",
      "texto": "A NSANet, usada para troca interna de informações sigilosas, ficou degradada na terça-feira. A agência afirma que foi durante manutenção de rotina, sem indícios de ciberataque, e que redes de reserva garantem as comunicações urgentes. Ainda é um alerta sem detalhes, e não está claro se o serviço voltou.",
      "fonte": {
        "nome": "TabNews",
        "url": "https://www.tabnews.com.br/NewsletterOficial/rede-de-comunicacoes-sigilosas-da-agencia-de-seguranca-nacional-dos-eua-sai-do-ar-nesta-terca-feira"
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
    }
  ]
};
