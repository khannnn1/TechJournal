window.TJ = window.TJ || { edicoes: {} };
window.TJ.edicoes["2026-11-21"] = {
  "data": "2026-11-21",
  "numero": 18,
  "resumo": "A sexta-feira (20) foi de queda forte nas bolsas dos EUA: o Nasdaq zerou os ganhos de 2026, com Anthropic e Nvidia entre as maiores baixas, e a crise em torno de Jensen Huang ganhou novos detalhes. Na IA, uma prova da hipótese de Riemann gerada com ajuda do Claude, verificada em Lean, movimenta matemáticos, e a Thinking Machines lançou um modelo aberto que roda em laptop. Na segurança, a GnuPG corrigiu uma falha crítica na biblioteca GPGME, e há novos relatos de invasão ao banco de dados policial NCIC, do FBI.",
  "boas": 1,
  "neutras": 13,
  "mas": 6,
  "itens": [
    {
      "id": "n1",
      "secao": "Destaques",
      "titulo": "Nasdaq apaga os ganhos de 2026 e S&P 500 e Dow entram em correção",
      "linhaFina": "O Nasdaq caiu 5,3%, a Anthropic recuou 9% um dia após o IPO e a Nvidia despencou cerca de 14%.",
      "texto": "O Nasdaq caiu 5,3% na sexta-feira, o S&P 500 perdeu 3,7% e o Dow, 1,9%, segundo a NBC News. A Anthropic recuou 9% um dia depois do IPO, e a Nvidia despencou cerca de 14% após reportagem da Reuters sobre reguladores investigando possíveis irregularidades contábeis na empresa. Analistas citados falam em \"reprecificação da IA\", com desaceleração da construção de data centers e menos fontes de financiamento para projetos do setor.",
      "fonte": {
        "nome": "NBC News",
        "url": "https://www.nbcnews.com/business/markets/anthropic-shares-markets-selloff-nasdaq-rcna610394"
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
      "id": "n2",
      "secao": "Destaques",
      "titulo": "Conselho da Nvidia afastou Jensen Huang principalmente por \"mentiras\", diz a Wired",
      "linhaFina": "Fontes anônimas dizem à Wired que a falta de transparência pesou mais que o caso extraconjugal; a empresa não confirmou.",
      "texto": "Duas pessoas ligadas às discussões do conselho afirmam à Wired que o principal motivo da saída de Huang foi a falta de transparência ao longo de um ano, e não apenas o caso extraconjugal com Alice Huang, acusada de ser agente de inteligência chinesa. A China nega a acusação sobre espionagem, e o representante de Huang diz apenas que ele deixou os cargos voluntariamente. O texto cita ainda convocação do diretor jurídico da Nvidia a Washington e ações de acionistas; as informações dos bastidores vêm de fontes anônimas e não foram confirmadas pela empresa.",
      "fonte": {
        "nome": "Wired",
        "url": "https://www.wired.com/story/jensen-huangs-lying-alarmed-nvidia-board-ahead-of-his-resignation/"
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
      "id": "n3",
      "secao": "Destaques",
      "titulo": "IA teria resolvido a hipótese de Riemann, e um humano também",
      "linhaFina": "A prova escrita em Lean com o Claude compila, mas ninguém a explica ainda; outra, sem IA, não foi verificada.",
      "texto": "O matemático Levent Alpöge, da Anthropic, publicou uma solução da hipótese de Riemann, de 1859, desenvolvida com o Claude e escrita em Lean, linguagem que permite verificação formal. Participantes de um chat de matemáticos, incluindo Andrew Sutherland, do MIT, confirmaram que o código compila, mas a comunidade ainda não consegue explicar o argumento em termos humanos. Em paralelo, um pós-doutorando de Stanford, Alessandro Masullo, divulgou uma prova da forma geral da hipótese escrita sem IA, que ainda não foi verificada.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/20/ai-claimed-a-solution-to-the-167-year-old-riemann-hypothesis-and-a-human-did-too/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 4,
      "criterios": {
        "impacto": 3,
        "novidade": 3,
        "confirmacao": 2,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n4",
      "secao": "Destaques",
      "titulo": "GnuPG corrige falha crítica na biblioteca GPGME",
      "linhaFina": "A GPGME 2.3.1 corrige um double free que pode vazar dados; execução remota não está descartada.",
      "texto": "A GPGME 2.3.1 corrige uma falha de liberação dupla de memória (double free), acionada por uma chave OpenPGP com identificador de usuário muito longo. O aviso oficial diz que o erro pode ser usado para extrair dados de aplicações e que execução remota de código não pode ser descartada, e recomenda atualização imediata, inclusive do Gpg4win. A divulgação foi antecipada de 25 para 20 de novembro porque o GitLab precisou atualizar antes.",
      "fonte": {
        "nome": "GnuPG Announce",
        "url": "https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html"
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
      "id": "n5",
      "secao": "Destaques",
      "titulo": "Semana de apagões reacende debate sobre IA e correções de segurança",
      "linhaFina": "A Wired não vê ataque coordenado por IA nos apagões, mas pesquisadores citam pressão para corrigir falhas sem validar.",
      "texto": "Em sua newsletter, a Wired afirma que não há prova de ataque coordenado por IA nas falhas recentes, de Outlook e Apple a bancos americanos, United Airlines e a rede sigilosa da NSA, e que cada caso tem explicação rotineira, como atualização defeituosa. Pesquisadores avaliam, porém, que a descoberta de vulnerabilidades por IA e a exploração mais rápida pressionam as equipes a aplicar correções sem tempo de validação. O CEO da Cloudflare, Matthew Prince, prevê dois anos de turbulência antes de a IA ajudar os defensores.",
      "fonte": {
        "nome": "Wired",
        "url": "https://www.wired.com/story/brace-yourself-for-years-of-outage-chaos/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 1,
        "confirmacao": 2,
        "relevancia": 2,
        "risco": 1
      }
    },
    {
      "id": "n6",
      "secao": "Destaques",
      "titulo": "FBI investiga suposta nova invasão ao banco de dados policial NCIC",
      "linhaFina": "O FBI apura acesso indevido ao banco policial NCIC; não há confirmação do órgão nem dados sobre vazamento.",
      "texto": "Segundo a CNN, citada pelo BleepingComputer, o FBI apura um acesso indevido ao National Crime Information Center, base usada por polícias dos EUA em abordagens e investigações. Não se sabe quando ocorreu, como os invasores entraram nem se houve vazamento de dados, e o FBI não confirmou o caso. Seria a segunda invasão em dois meses, depois do ataque atribuído ao grupo ShinyHunters.",
      "fonte": {
        "nome": "BleepingComputer",
        "url": "https://www.bleepingcomputer.com/news/security/fbi-reportedly-hacked-again-this-time-targeting-nationwide-police-database/"
      },
      "selo": "fonte única",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 1,
        "relevancia": 1,
        "risco": 2
      }
    },
    {
      "id": "n7",
      "secao": "Inteligência artificial",
      "titulo": "Thinking Machines lança o Inkling 2 Mini, modelo aberto que roda em laptop",
      "linhaFina": "O modelo aberto de 26,4 bilhões de parâmetros ocupa cerca de 20 GB; os resultados são da própria empresa.",
      "texto": "O modelo tem 26,4 bilhões de parâmetros em arquitetura de mistura de especialistas e repete três vezes as camadas intermediárias para raciocinar com menos tokens. Ocupa cerca de 20 GB e tem pesos abertos. A empresa diz que ele lidera os modelos abertos com menos de 100 bilhões de parâmetros em testes de programação como o DeepSWE v1.1 (48,2%); os números são da própria empresa e não foram verificados por terceiros.",
      "fonte": {
        "nome": "Thinking Machines Lab",
        "url": "https://thinkingmachines.ai/news/inkling-2-mini/"
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
      "id": "n8",
      "secao": "Inteligência artificial",
      "titulo": "METR atualiza o gráfico de \"horizonte de tempo\" da IA",
      "linhaFina": "Com tarefas mais longas, a METR vê crescimento exponencial em algumas capacidades, mas a IA falha em tarefas de julgamento.",
      "texto": "A organização de avaliação METR incluiu tarefas mais longas e abertas e concluiu que algumas capacidades seguem crescendo de forma exponencial. Em tarefas que exigem julgamento, como criar avaliações de IA úteis para a pesquisa da própria METR, os modelos ficaram abaixo dos humanos: nenhuma das avaliações criadas pela IA foi considerada útil. O resultado importa porque esse tipo de tarefa é central para a automação da pesquisa em IA.",
      "fonte": {
        "nome": "MIT Technology Review",
        "url": "https://www.technologyreview.com/2026/11/20/1149399/the-most-misunderstood-graph-in-ai-just-got-a-major-update/"
      },
      "selo": "confirmado",
      "tom": "neutra",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 3,
        "risco": 0
      }
    },
    {
      "id": "n9",
      "secao": "Segurança e privacidade",
      "titulo": "Empresa de transcrição usada por polícias deixou dados expostos na internet",
      "linhaFina": "Um servidor S3 aberto expôs transcrições de interrogatórios e material de câmeras corporais; a empresa só agiu após a imprensa.",
      "texto": "A Tigerfish, de San Francisco, manteve em um servidor S3 aberto transcrições de interrogatórios policiais, material de câmeras corporais e faturas de clientes como delegacias e promotorias. O pesquisador Anurag Sen achou os dados em outubro e avisou a empresa, que não respondeu; o problema só foi resolvido depois do contato do TechCrunch. O caso mostra como configurações simples podem expor dados sensíveis.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/20/a-transcription-firm-used-by-police-prosecutors-and-tech-giants-exposed-customer-data-online/"
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
      "id": "n10",
      "secao": "Segurança e privacidade",
      "titulo": "Cofundador da RansomwareHelp é indiciado por fraude eletrônica",
      "linhaFina": "O CTO é acusado de pagar os criminosos pela chave e cobrar mais das vítimas, após infiltração do FBI.",
      "texto": "O diretor de tecnologia da empresa da Flórida, que prometia recuperar dados sequestrados por ransomware com \"ferramentas criptográficas avançadas\", é acusado de pagar os criminosos pela chave de descriptografia e cobrar dos clientes um valor maior. A denúncia foi apresentada em Rhode Island após uma operação de infiltração do FBI. Para vítimas de ransomware, o caso é um alerta sobre serviços de recuperação que prometem 100% de sucesso.",
      "fonte": {
        "nome": "Krebs on Security",
        "url": "https://krebsonsecurity.com/2026/11/cto-of-ransomwarehelp-indicted-for-wire-fraud/"
      },
      "selo": "confirmado",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 3,
        "relevancia": 1,
        "risco": 1
      }
    },
    {
      "id": "n11",
      "secao": "Segurança e privacidade",
      "titulo": "Teste de comunidade: servidor novo recebe o primeiro ataque em poucos minutos",
      "linhaFina": "Três servidores novos receberam entre 900 e 1.550 tentativas de login em uma hora; o teste é pequeno.",
      "texto": "Um autor do TabNews criou três VPS novos (Hetzner, Vultr e Linode) com login por senha ligado e mediu as tentativas por uma hora: cada servidor recebeu entre 900 e 1.550 tentativas, de 400 a 550 IPs diferentes. O usuário \"root\" apareceu em cerca de 4 de cada 10 tentativas. É um experimento pequeno, com um servidor por provedor, e não deve ser tratado como estatística geral.",
      "fonte": {
        "nome": "TabNews",
        "url": "https://www.tabnews.com.br/nocthost/medi-quanto-tempo-um-vps-novo-demora-para-ser-atacado-5-minutos"
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
      "id": "n12",
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "Relatório anual travava o Trino: o que mudou no script Python",
      "linhaFina": "Dividir a consulta em doze, uma por mês, e resumir no banco resolveu a falha com 144 milhões de linhas.",
      "texto": "Um desenvolvedor relata que um script que consultava 12 milhões de linhas por mês falhou ao pedir 144 milhões de uma vez. A solução foi dividir a consulta em doze, uma por mês, e deixar de trazer tudo para o pandas com `SELECT *` e `fetchall()`, resumindo os dados no próprio banco. É um relato de comunidade, útil como boa prática para quem trabalha com grandes volumes.",
      "fonte": {
        "nome": "TabNews",
        "url": "https://www.tabnews.com.br/DanielCamucatto/meu-relatorio-anual-travava-o-trino-144-milhoes-de-linhas-e-o-que-mudou-no-script-python"
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
      "secao": "Dados, BI e desenvolvimento",
      "titulo": "Towards Data Science explica regressão censurada e truncada",
      "linhaFina": "Com dados simulados, o autor mostra que a regressão comum erra nos dois casos e implementa modelos Tobit em Python.",
      "texto": "O artigo mostra, com uma pesquisa salarial simulada, que limitar salários a US$ 100 mil (censura) e excluir quem ganha mais (truncamento) são problemas estatísticos diferentes. Segundo o texto, a regressão comum (OLS) subestima o efeito real nos dois casos, e o autor implementa modelos Tobit e de verossimilhança truncada do zero em Python. Serve como material didático, sem novidade de produto.",
      "fonte": {
        "nome": "Towards Data Science",
        "url": "https://towardsdatascience.com/censored-vs-truncated-regression-in-python-explained/"
      },
      "selo": "confirmado",
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
      "id": "n14",
      "secao": "Mercado e empresas",
      "titulo": "Bending Spoons compra o Mailchimp por US$ 3,68 bilhões",
      "linhaFina": "A Intuit vende por bem menos que os cerca de US$ 12 bilhões pagos em 2021 e foca em IA.",
      "texto": "A Intuit havia pago cerca de US$ 12 bilhões pela empresa de e-mail marketing em 2021 e vende agora com grande prejuízo. A Intuit diz à Reuters que vai focar em ferramentas de IA para pequenas empresas e usar o dinheiro para recomprar ações. Cerca de 10% do valor é pago em novas ações da Bending Spoons, e não em dinheiro.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/20/bending-spoons-buys-mailchimp-for-3-68-billion/"
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
      "id": "n15",
      "secao": "Mercado e empresas",
      "titulo": "YouTube se prepara para pagar US$ 3 bilhões em acordo sobre vício em redes sociais",
      "linhaFina": "O acordo em princípio, segundo a Bloomberg, evitaria processos de distritos escolares; o Google não confirmou os valores.",
      "texto": "Segundo a Bloomberg, citada pelo The Verge, o acordo \"em princípio\" com milhares de distritos escolares dos EUA também exigiria novas proteções para adolescentes. Ele evitaria uma onda de processos contra YouTube, Meta, Snap e TikTok; o próximo julgamento do tipo está marcado para fevereiro de 2027. Os valores vêm de fontes da Bloomberg e não foram confirmados pelo Google.",
      "fonte": {
        "nome": "The Verge",
        "url": "https://www.theverge.com/streaming/1039096/youtube-social-media-addiction-school-districts-settlement"
      },
      "selo": "fonte única",
      "tom": "neutra",
      "peso": 2,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 1,
        "relevancia": 1,
        "risco": 0
      }
    },
    {
      "id": "n16",
      "secao": "Boas notícias",
      "titulo": "Samsung ganha bloqueio de apps individual com o One UI 9.5",
      "linhaFina": "O App Lock tranca apps com a biometria do celular e protege notificações; está em beta no Galaxy S26.",
      "texto": "O App Lock tranca aplicativos com a mesma biometria, PIN, senha ou padrão do celular e também protege notificações e widgets dos apps bloqueados. Estreou no programa beta da linha Galaxy S26 e deve chegar depois aos demais aparelhos compatíveis, segundo o SamMobile, citado pelo Tecnoblog. Não há data oficial para a versão final.",
      "fonte": {
        "nome": "Tecnoblog",
        "url": "https://tecnoblog.net/noticias/samsung-agora-permite-bloquear-apps-individualmente-nos-celulares/"
      },
      "selo": "fonte única",
      "tom": "boa",
      "peso": 2,
      "criterios": {
        "impacto": 1,
        "novidade": 2,
        "confirmacao": 1,
        "relevancia": 1,
        "risco": 0
      }
    },
    {
      "id": "n17",
      "secao": "Tendências",
      "titulo": "Especialistas alertam para \"honey traps\" contra pessoas do setor de IA",
      "linhaFina": "Segundo especialistas, executivos do setor de IA são o caminho mais curto até segredos de chips e modelos.",
      "texto": "Após o caso Jensen Huang, especialistas ouvidos pelo TechCrunch dizem que segredos valiosos hoje estão em empresas de chips, modelos e infraestrutura, e que o executivo é o caminho mais curto até eles. Segundo eles, a abordagem costuma vir como investidor, cliente, recrutador ou consultoria, e muitas vezes se baseia em amizade, não em romance. O Wall Street Journal teria relatado que a OpenAI passou a alertar funcionários sobre aproximações suspeitas; esse ponto vem de terceiros e não foi confirmado pela empresa.",
      "fonte": {
        "nome": "TechCrunch",
        "url": "https://techcrunch.com/2026/11/20/experts-warn-nearly-everyone-in-ai-is-susceptible-to-a-honey-trap-scheme-right-now/"
      },
      "selo": "fonte única",
      "tom": "ma",
      "peso": 3,
      "criterios": {
        "impacto": 2,
        "novidade": 2,
        "confirmacao": 1,
        "relevancia": 3,
        "risco": 2
      }
    },
    {
      "id": "n18",
      "secao": "Tendências",
      "titulo": "Comissão de especialistas pede regras para scroll infinito e autoplay",
      "linhaFina": "Relatório da Lancet Psychiatry quer tratar o uso problemático da internet como saúde pública e responsabilizar as empresas.",
      "texto": "Relatório publicado na The Lancet Psychiatry defende tratar o uso problemático da internet como questão de saúde pública e atribuir parte da responsabilidade às empresas de tecnologia. A proposta olha para o desenho dos produtos, e não só para o tempo de tela. O documento reúne pesquisas já publicadas, sem estudo novo, e uma pesquisadora ouvida pelo Olhar Digital lembra que as evidências ainda têm limitações.",
      "fonte": {
        "nome": "Olhar Digital",
        "url": "https://olhardigital.com.br/2026/11/21/internet-e-redes-sociais/scroll-infinito-e-autoplay-entram-no-debate-sobre-saude-publica/"
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
      "id": "n19",
      "secao": "Para ficar de olho",
      "titulo": "WhatsApp começa a liberar grupos de até 1.500 pessoas",
      "linhaFina": "O limite sobe de 1.024 para 1.500 participantes, de forma gradual, no Android e no iOS.",
      "texto": "O limite sobe de 1.024 para 1.500 participantes, inclusive em grupos dentro de comunidades, e os grupos existentes serão ampliados automaticamente. A liberação é gradual no Android e no iOS, sem previsão de quando chegará a todos, segundo o WABetaInfo, citado pelo Canaltech.",
      "fonte": {
        "nome": "Canaltech",
        "url": "https://canaltech.com.br/apps/whatsapp-libera-grupos-com-quase-50-mais-pessoas-veja-o-novo-limite/"
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
    },
    {
      "id": "n20",
      "secao": "Para ficar de olho",
      "titulo": "Funcionários do Internet Archive votam para formar sindicato",
      "linhaFina": "Mais de 80 dos 124 funcionários elegíveis votaram pelo sindicato CWA e aguardam reconhecimento do fundador.",
      "texto": "Mais de 80 dos 124 funcionários elegíveis nos EUA votaram a favor de se filiar ao sindicato CWA. Agora aguardam reconhecimento voluntário do fundador, Brewster Kahle, que não respondeu à Wired; se não houver, a certificação será decidida em votação conduzida pela agência trabalhista NLRB. Entre os objetivos do grupo estão aumentos salariais.",
      "fonte": {
        "nome": "Wired",
        "url": "https://www.wired.com/story/internet-archive-staffers-are-unionizing/"
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
    }
  ]
};
