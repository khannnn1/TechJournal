# Licenças das fontes do TechJournal

Todas as fontes abaixo usam a **SIL Open Font License, Version 1.1 (OFL)**, que permite usar, copiar e redistribuir, inclusive em sites, desde que o aviso de copyright e a licença acompanhem os arquivos. O texto completo de cada licença está nos arquivos `OFL-*.txt` desta pasta, copiados de `ofl/<família>/OFL.txt` do repositório [google/fonts](https://github.com/google/fonts) (conferido em 2026-10-29: cada um contém "SIL OPEN FONT LICENSE Version 1.1").

Os arquivos `.woff2` foram baixados uma única vez, em 2026-10-29, do serviço Google Fonts (`fonts.gstatic.com`), subconjunto **latin** (cobre o português). O repositório google/fonts no GitHub só traz TTF; o serviço entrega o mesmo desenho já em woff2, e nada foi instalado nem convertido localmente. O site não faz nenhuma requisição externa: as fontes são carregadas por `@font-face` com caminho relativo, em `estilo.css`.

Combinação em uso (escolhida em 2026-10-29): nome do jornal em Rye, títulos em Bodoni Moda, texto em Libre Caslon Text.

| Família | Uso | Copyright | Licença | Arquivos nesta pasta | Texto da licença |
|---|---|---|---|---|---|
| Rye | nome do jornal | © 2011 Sorkin Type Co (www.sorkintype.com); nome reservado "Rye" | OFL 1.1 | `rye-400.woff2` | `OFL-rye.txt` |
| Bodoni Moda | títulos | © 2020 The Bodoni Moda Project Authors (https://github.com/indestructible-type/Bodoni) | OFL 1.1 | `bodoni-moda-700.woff2` | `OFL-bodonimoda.txt` |
| Libre Caslon Text | texto corrido | © 2018 The Libre Caslon Text Project Authors (https://github.com/thundernixon/Libre-Caslon) | OFL 1.1 | `libre-caslon-text-400.woff2`, `libre-caslon-text-400-italic.woff2`, `libre-caslon-text-700.woff2` | `OFL-librecaslontext.txt` |

Observações:
- As fontes não são vendidas isoladamente nem renomeadas; os nomes reservados continuam os originais.
- Os arquivos são o subconjunto latin servido pelo Google Fonts (versões mais recentes na data do download).
- As outras fontes baixadas para a comparação (Abril Fatface, Playfair Display, Old Standard TT e UnifrakturCook) foram removidas junto com a página de prévia.
