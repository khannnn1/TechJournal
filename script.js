/* TechJournal: carrega manifest e edições por tags script (sem fetch) e monta a capa.
   Todo texto vem dos dados e entra no DOM com textContent; links só http:// ou https://.
   As vinhetas são desenhadas aqui (SVG criado com createElementNS) e escolhidas pelo nome da seção. */
(function () {
  'use strict';

  window.TJ = window.TJ || { edicoes: {} };
  window.TJ.edicoes = window.TJ.edicoes || {};

  var MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  var MESES_CURTOS = ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'];
  var DIAS = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
  var CRITERIOS = [['impacto', 'Impacto'], ['novidade', 'Novidade'], ['confirmacao', 'Confirmação'], ['relevancia', 'Relevância'], ['risco', 'Risco/urgência']];
  var TONS = { boa: 'Boa notícia', ma: 'Má notícia', neutra: 'Neutra' };
  var SELOS = { 'confirmado': 'Confirmado', 'rumor': 'Rumor', 'fonte única': 'Fonte única' };
  var REGEX_DATA = /^\d{4}-\d{2}-\d{2}$/;
  var NS = 'http://www.w3.org/2000/svg';
  var SEPIA = 'rgb(98,66,38)';

  var $ = function (id) { return document.getElementById(id); };
  var capa = $('capa');
  var fundo = $('fundo');
  var painel = $('painel');
  var painelConteudo = $('painel-conteudo');
  var ultimoFoco = null;
  var pedido = 0;
  var edicaoAtual = null;
  var itemAberto = null;
  var editor = false; /* modo editor: tecla E; começa desligado */

  /* ---------- utilidades ---------- */
  function criar(tag, classe, texto) {
    var e = document.createElement(tag);
    if (classe) { e.className = classe; }
    if (texto !== undefined && texto !== null) { e.textContent = String(texto); }
    return e;
  }

  function elemSvg(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    return e;
  }

  function linkSeguro(url) {
    return typeof url === 'string' && /^https?:\/\//i.test(url);
  }

  function carregarScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error('Não foi possível carregar ' + src)); };
      document.head.appendChild(s);
    });
  }

  function dataExtenso(iso) {
    var p = iso.split('-');
    var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    return DIAS[d.getDay()] + ', ' + Number(p[2]) + ' de ' + MESES[Number(p[1]) - 1] + ' de ' + p[0];
  }

  function dataCurta(iso) {
    var p = iso.split('-');
    return p[2] + '/' + p[1] + '/' + p[0];
  }

  function soma(item) {
    var c = item.criterios || {};
    return CRITERIOS.reduce(function (t, k) { return t + (Number(c[k[0]]) || 0); }, 0);
  }

  function risco(item) {
    return Number((item.criterios || {}).risco) || 0;
  }

  /* corta o texto em n caracteres, no fim de uma palavra, com reticências */
  function cortar(texto, n) {
    if (n >= texto.length) { return texto; }
    var corte = texto.slice(0, n);
    var espaco = corte.lastIndexOf(' ');
    if (espaco > 0) { corte = corte.slice(0, espaco); }
    return corte.replace(/[\s,;:.\-–—]+$/, '') + '…';
  }

  /* dateline em versalete: "Fonte · 29 out." */
  function dateline(item) {
    var partes = [];
    var f = item.fonte || {};
    if (f.nome) { partes.push(f.nome); }
    if (edicaoAtual && REGEX_DATA.test(edicaoAtual.data)) {
      var p = edicaoAtual.data.split('-');
      partes.push(Number(p[2]) + ' ' + MESES_CURTOS[Number(p[1]) - 1]);
    }
    return partes.join(' · ');
  }

  function carimbo(item) {
    if (item.selo === 'rumor') { return criar('span', 'carimbo', 'RUMOR'); }
    if (item.selo === 'fonte única') { return criar('span', 'carimbo', 'FONTE ÚNICA'); }
    return null;
  }

  /* modo editor: rótulo pequeno com o peso em cada item da capa */
  function etiquetaPeso(item) {
    return editor ? criar('span', 'etiqueta-peso', 'peso ' + item.peso) : null;
  }

  function comEtiqueta(e, item) {
    var et = etiquetaPeso(item);
    if (et) { e.appendChild(et); }
  }

  function marcarClicavel(e, item) {
    e.setAttribute('role', 'button');
    e.tabIndex = 0;
    e.addEventListener('click', function () { abrirPainel(item, e); });
    e.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); abrirPainel(item, e); }
    });
  }

  /* ---------- vinhetas (SVG estilo gravura, escolhidas pelo nome da seção) ---------- */
  function lin(x1, y1, x2, y2, w) {
    return ['line', { x1: x1, y1: y1, x2: x2, y2: y2, 'stroke-width': w || 0.6 }];
  }

  function pol(cx, cy, r, graus) {
    var a = graus * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }

  function radial(cx, cy, r1, r2, graus, w) {
    var a = pol(cx, cy, r1, graus);
    var b = pol(cx, cy, r2, graus);
    return lin(a[0].toFixed(1), a[1].toFixed(1), b[0].toFixed(1), b[1].toFixed(1), w);
  }

  var DESENHOS = {
    estrela: function () {
      var pts = [];
      var o = [];
      var i;
      for (i = 0; i < 16; i++) {
        var p = pol(24, 24, i % 2 ? 5.5 : 15, i * 22.5 - 90);
        pts.push(p[0].toFixed(1) + ' ' + p[1].toFixed(1));
      }
      o.push(['path', { d: 'M' + pts.join('L') + 'Z' }]);
      for (i = 0; i < 8; i++) { o.push(radial(24, 24, 7.5, 11, i * 45 - 67.5)); }
      o.push(['circle', { cx: 24, cy: 24, r: 2, fill: SEPIA }]);
      return o;
    },
    engrenagem: function () {
      var o = [['circle', { cx: 24, cy: 24, r: 10.5 }], ['circle', { cx: 24, cy: 24, r: 4 }]];
      var i;
      for (i = 0; i < 8; i++) {
        o.push(['rect', { x: 22, y: 9.5, width: 4, height: 4.5, transform: 'rotate(' + (i * 45) + ' 24 24)' }]);
        o.push(radial(24, 24, 5.5, 9.5, i * 45 + 22.5));
      }
      return o;
    },
    cadeado: function () {
      var o = [
        ['rect', { x: 15, y: 22, width: 18, height: 14 }],
        ['path', { d: 'M18.5 22V17a5.5 5.5 0 0 1 11 0V22' }],
        ['circle', { cx: 24, cy: 28, r: 2, fill: SEPIA }],
        lin(24, 29.5, 24, 33, 1)
      ];
      var i;
      for (i = 0; i < 5; i++) { o.push(lin(17 + 3 * i, 35, 20 + 3 * i, 32)); }
      return o;
    },
    grafico: function () {
      var o = [['path', { d: 'M11 36H37M11 36V12' }]];
      [[14, 28, 5, 8], [21, 22, 5, 14], [28, 15, 5, 21]].forEach(function (b) {
        o.push(['rect', { x: b[0], y: b[1], width: b[2], height: b[3] }]);
        for (var y = b[1] + 3; y < b[1] + b[3]; y += 3) { o.push(lin(b[0], y, b[0] + b[2], y - 3)); }
      });
      return o;
    },
    moedas: function () {
      var o = [];
      var i;
      for (i = 0; i < 3; i++) {
        var y = 33 - 6 * i;
        o.push(['path', { d: 'M13 ' + y + 'v4a11 4 0 0 0 22 0v-4' }]);
        for (var x = 16; x <= 32; x += 4) { o.push(lin(x, y + 2.5, x, y + 5.5)); }
      }
      o.push(['ellipse', { cx: 24, cy: 21, rx: 11, ry: 4 }]);
      o.push(['ellipse', { cx: 24, cy: 21, rx: 6, ry: 2 }]);
      return o;
    },
    sol: function () {
      var o = [['path', { d: 'M9 31H39' }], ['path', { d: 'M15.5 31a8.5 8.5 0 0 1 17 0' }]];
      var g;
      for (g = 180; g <= 360; g += 30) { o.push(radial(24, 31, 12, 16.5, g)); }
      o.push(lin(12, 34, 36, 34), lin(15, 37, 33, 37), lin(18, 40, 30, 40));
      for (var x = 18; x <= 30; x += 3) { o.push(lin(x, 28, x - 1.5, 31)); }
      return o;
    },
    tempestade: function () {
      return [
        ['path', { d: 'M14 27a5 5 0 0 1 3-8.5 8 8 0 0 1 14.5 1.5 4.5 4.5 0 0 1 .5 7H14Z' }],
        ['path', { d: 'M25.5 27.5L20.5 35H25.5L22 42', 'stroke-width': 1.2 }],
        lin(15, 31, 13.5, 34), lin(18.5, 31, 17, 34), lin(31, 31, 29.5, 34), lin(34.5, 31, 33, 34),
        lin(18, 22, 22, 20), lin(22, 22, 27, 19.5)
      ];
    },
    bussola: function () {
      var o = [['circle', { cx: 24, cy: 24, r: 12.5 }], ['path', { d: 'M24 9.5L27.5 24L24 38.5L20.5 24Z' }], ['path', { d: 'M9.5 24L24 20.5L38.5 24L24 27.5Z' }]];
      var i;
      for (i = 0; i < 4; i++) { o.push(radial(24, 24, 12.5, 15, i * 90 + 45, 1)); }
      for (i = 0; i < 5; i++) { o.push(lin(22.4 + i * 0.8, 12 + i * 2.4, 22.4 + i * 0.8, 21 - i * 0.3)); }
      o.push(['circle', { cx: 24, cy: 24, r: 1.6, fill: SEPIA }]);
      return o;
    },
    olho: function () {
      var o = [
        ['path', { d: 'M7 24Q24 10 41 24Q24 38 7 24Z' }],
        ['circle', { cx: 24, cy: 24, r: 6 }],
        ['circle', { cx: 24, cy: 24, r: 2.6, fill: SEPIA }]
      ];
      var i;
      for (i = 0; i < 6; i++) { o.push(radial(24, 24, 3.4, 5.8, i * 60 + 15)); }
      [[14, 20, 12, 17.5], [18.5, 17, 17.3, 14.2], [24, 15.6, 24, 12.6], [29.5, 17, 30.7, 14.2], [34, 20, 36, 17.5]].forEach(function (c) { o.push(lin(c[0], c[1], c[2], c[3])); });
      return o;
    },
    jornal: function () {
      var o = [['rect', { x: 13, y: 12, width: 22, height: 24 }], ['rect', { x: 16, y: 15, width: 16, height: 5 }]];
      var y;
      for (y = 24; y <= 33; y += 3) { o.push(lin(16, y, 32, y)); }
      return o;
    }
  };

  var MOLDURAS = {
    circulo: [['circle', { cx: 24, cy: 24, r: 22.2, 'stroke-width': 1.3 }], ['circle', { cx: 24, cy: 24, r: 19.8, 'stroke-width': 0.5 }]],
    ovalH: [['ellipse', { cx: 24, cy: 24, rx: 22.2, ry: 16.5, 'stroke-width': 1.3 }], ['ellipse', { cx: 24, cy: 24, rx: 19.8, ry: 14.1, 'stroke-width': 0.5 }]],
    ovalV: [['ellipse', { cx: 24, cy: 24, rx: 16.5, ry: 22.2, 'stroke-width': 1.3 }], ['ellipse', { cx: 24, cy: 24, rx: 14.1, ry: 19.8, 'stroke-width': 0.5 }]]
  };

  /* nome da seção (sem acento, minúsculo) -> desenho e moldura */
  var REGRAS_VINHETA = [
    [/destaque/, 'estrela', 'circulo'],
    [/inteligencia|\bia\b/, 'engrenagem', 'circulo'],
    [/seguranca|privacidade/, 'cadeado', 'ovalV'],
    [/dados|\bbi\b|desenvolvimento/, 'grafico', 'circulo'],
    [/mercado|empresa/, 'moedas', 'circulo'],
    [/boas/, 'sol', 'circulo'],
    [/mas noticias|risco/, 'tempestade', 'circulo'],
    [/tendencia/, 'bussola', 'circulo'],
    [/olho/, 'olho', 'ovalH']
  ];

  function semAcento(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function vinheta(secao, px, classe) {
    var nome = semAcento(secao);
    var desenho = 'jornal';
    var moldura = 'circulo';
    for (var i = 0; i < REGRAS_VINHETA.length; i++) {
      if (REGRAS_VINHETA[i][0].test(nome)) { desenho = REGRAS_VINHETA[i][1]; moldura = REGRAS_VINHETA[i][2]; break; }
    }
    var s = elemSvg('svg', { viewBox: '0 0 48 48', width: px, height: px, 'aria-hidden': 'true', focusable: 'false' });
    s.setAttribute('class', 'vinheta' + (classe ? ' ' + classe : ''));
    var g = elemSvg('g', { fill: 'none', stroke: SEPIA, 'stroke-width': 1, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
    MOLDURAS[moldura].concat(DESENHOS[desenho]()).forEach(function (d) { g.appendChild(elemSvg(d[0], d[1])); });
    s.appendChild(g);
    return s;
  }

  function divisor() {
    var d = criar('div', 'divisor');
    d.setAttribute('aria-hidden', 'true');
    var s = elemSvg('svg', { viewBox: '0 0 44 10', width: 44, height: 10, focusable: 'false' });
    var g = elemSvg('g', { fill: 'currentColor', stroke: 'currentColor', 'stroke-width': 0.8 });
    g.appendChild(elemSvg('path', { d: 'M22 1L26 5L22 9L18 5Z' }));
    g.appendChild(elemSvg('circle', { cx: 11, cy: 5, r: 1.5 }));
    g.appendChild(elemSvg('circle', { cx: 33, cy: 5, r: 1.5 }));
    g.appendChild(elemSvg('path', { d: 'M2 5H8M36 5H42', fill: 'none' }));
    s.appendChild(g);
    d.appendChild(s);
    return d;
  }

  /* ---------- painel da notícia ---------- */
  function abrirPainel(item, origem) {
    ultimoFoco = origem || null;
    itemAberto = item;
    montarPainel(item);
    fundo.hidden = false;
    painel.scrollTop = 0;
    $('fechar').focus();
  }

  /* o leitor vê só seção, título, linha fina, texto, carimbo (rumor / fonte única) e fonte;
     selo, tom, peso e critérios só aparecem no modo editor */
  function montarPainel(item) {
    painelConteudo.textContent = '';

    painelConteudo.appendChild(vinheta(item.secao, 58, 'vinheta-painel'));
    painelConteudo.appendChild(criar('span', 'rotulo', item.secao || ''));
    var h = criar('h2', null, item.titulo);
    h.id = 'painel-titulo';
    painelConteudo.appendChild(h);
    painelConteudo.appendChild(criar('p', 'fina', item.linhaFina));
    painelConteudo.appendChild(criar('p', 'texto', item.texto));

    var selo = carimbo(item);
    if (selo) {
      var linhaSelo = criar('p', 'meta');
      linhaSelo.appendChild(selo);
      painelConteudo.appendChild(linhaSelo);
    }

    if (editor) {
      var dados = criar('div', 'editor-dados');
      dados.appendChild(criar('p', 'meta', 'Modo editor · Selo: ' + (SELOS[item.selo] || String(item.selo || '')) +
        ' · Tom: ' + (TONS[item.tom] || 'Neutra') + ' · Peso: ' + item.peso));
      var c = item.criterios || {};
      var partes = CRITERIOS.map(function (k) { return k[1] + ' ' + (Number(c[k[0]]) || 0); });
      dados.appendChild(criar('p', 'criterios', 'Critérios (0 a 3): ' + partes.join(' · ') + ' · Soma ' + soma(item) + '/15'));
      painelConteudo.appendChild(dados);
    }

    var f = item.fonte || {};
    var linhaFonte = criar('p', 'fonte');
    linhaFonte.appendChild(criar('strong', null, 'Fonte: '));
    if (linkSeguro(f.url)) {
      var a = criar('a', null, f.nome || f.url);
      a.href = f.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      linhaFonte.appendChild(a);
    } else {
      linhaFonte.appendChild(document.createTextNode(f.nome || 'não informada'));
    }
    painelConteudo.appendChild(linhaFonte);
  }

  function fecharPainel() {
    if (fundo.hidden) { return; }
    fundo.hidden = true;
    itemAberto = null;
    if (ultimoFoco && document.body.contains(ultimoFoco)) { ultimoFoco.focus(); }
    ultimoFoco = null;
  }

  $('fechar').addEventListener('click', fecharPainel);
  fundo.addEventListener('click', function (ev) { if (ev.target === fundo) { fecharPainel(); } });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') { fecharPainel(); return; }
    if ((ev.key === 'e' || ev.key === 'E') && !ev.ctrlKey && !ev.metaKey && !ev.altKey && !ev.repeat) {
      var alvo = ev.target && ev.target.tagName;
      if (alvo === 'INPUT' || alvo === 'TEXTAREA' || alvo === 'SELECT' || (ev.target && ev.target.isContentEditable)) { return; }
      alternarEditor();
    }
  });

  /* ---------- modo editor (tecla E) ---------- */
  function alternarEditor() {
    editor = !editor;
    document.body.classList.toggle('modo-editor', editor);
    if (edicaoAtual) { render(edicaoAtual); }
    if (itemAberto && !fundo.hidden) { montarPainel(itemAberto); }
  }

  /* ---------- peças da capa ---------- */
  function linhaRotulo(item, px, comCarimbo) {
    var linha = criar('div', 'rotulo-linha');
    var rot = criar('span', 'rotulo', item.secao || '');
    var sel = comCarimbo ? carimbo(item) : null;
    if (sel) { rot.appendChild(sel); }
    linha.appendChild(rot);
    if (px) { linha.appendChild(vinheta(item.secao, px)); }
    return linha;
  }

  /* abertura da manchete: capitular + texto que se ajusta ao número de linhas disponível */
  function montarAbertura(texto) {
    texto = String(texto || '');
    var p = criar('p', 'abertura');
    p.appendChild(criar('span', 'capitular', texto.charAt(0)));
    p.appendChild(criar('span', 'corpo', texto.slice(1)));
    p._completo = texto.slice(1);
    return p;
  }

  function ajustarAbertura(p) {
    var corpo = p.querySelector('.corpo');
    var completo = p._completo;
    if (!corpo || completo === undefined) { return; }
    var linhas = Number(getComputedStyle(p).getPropertyValue('--linhas')) || 3;
    /* o <span> do corpo gera um retângulo por linha: dá para contar as linhas usadas */
    var cabe = function (txt) {
      corpo.textContent = txt;
      return corpo.getClientRects().length <= linhas;
    };
    if (cabe(completo)) { return; }
    var lo = 0;
    var hi = completo.length;
    while (lo < hi) {
      var meio = Math.ceil((lo + hi) / 2);
      if (cabe(cortar(completo, meio))) { lo = meio; } else { hi = meio - 1; }
    }
    corpo.textContent = cortar(completo, lo);
  }

  function ajustarAberturas() {
    var lista = capa.querySelectorAll('.abertura');
    for (var i = 0; i < lista.length; i++) { ajustarAbertura(lista[i]); }
  }

  function montarManchete(item) {
    var e = criar('article', 'noticia manchete');
    e.appendChild(linhaRotulo(item, 0, true));
    e.appendChild(criar('h2', 'titulo clamp3', item.titulo));
    e.appendChild(vinheta(item.secao, 50, 'vinheta-manchete'));
    e.appendChild(criar('p', 'fina clamp2', item.linhaFina));
    e.appendChild(montarAbertura(item.texto));
    comEtiqueta(e, item);
    marcarClicavel(e, item);
    return e;
  }

  function montarChamadas(itens) {
    var bloco = criar('div', 'chamadas');
    itens.forEach(function (item) {
      var e = criar('article', 'noticia chamada');
      e.appendChild(linhaRotulo(item, 20, true));
      e.appendChild(criar('h3', 'titulo clamp3', item.titulo));
      var fina = criar('p', 'fina clamp3');
      var dl = dateline(item);
      if (dl) {
        fina.appendChild(criar('span', 'dateline', dl));
        fina.appendChild(document.createTextNode(' — '));
      }
      fina.appendChild(document.createTextNode(item.linhaFina || ''));
      e.appendChild(fina);
      comEtiqueta(e, item);
      marcarClicavel(e, item);
      bloco.appendChild(e);
    });
    return bloco;
  }

  function montarAlerta(item) {
    var e = criar('article', 'noticia alerta');
    var rot = criar('div', 'alerta-rotulo');
    rot.appendChild(criar('span', 'alerta-nome', 'Alerta do dia'));
    rot.appendChild(criar('span', 'alerta-sec', item.secao || ''));
    e.appendChild(rot);
    var corpo = criar('div', 'alerta-corpo');
    var t = criar('h3', 'titulo clamp2', item.titulo);
    var sel = carimbo(item);
    if (sel) { t.appendChild(sel); }
    corpo.appendChild(t);
    corpo.appendChild(criar('p', 'fina clamp1', item.linhaFina));
    e.appendChild(corpo);
    comEtiqueta(e, item);
    marcarClicavel(e, item);
    return e;
  }

  /* altura estimada de um grupo de notícias numa coluna (rótulo de seção, título em até 2 linhas e uma linha fina) */
  function custoColuna(grupo) {
    var total = 0;
    var anterior = null;
    grupo.forEach(function (item, i) {
      total += Math.min(2, Math.ceil(String(item.titulo || '').length / 30)) * 15 + 16 + 6;
      if (i === 0 || item.secao !== anterior) { total += 20; }
      anterior = item.secao;
    });
    return total;
  }

  /* divide as notícias (na ordem) em até 3 colunas, minimizando a altura da mais alta */
  function dividirColunas(itens) {
    var n = itens.length;
    var melhor = null;
    function testa(cortes) {
      var grupos = [];
      var ini = 0;
      cortes.concat([n]).forEach(function (f) { grupos.push(itens.slice(ini, f)); ini = f; });
      var pior = Math.max.apply(null, grupos.map(custoColuna));
      if (!melhor || pior < melhor.pior) { melhor = { pior: pior, grupos: grupos }; }
    }
    if (n < 3) {
      for (var k = 1; k < n; k++) { testa([k]); }
      if (n === 1) { testa([]); }
      return melhor.grupos;
    }
    for (var i = 1; i < n - 1; i++) {
      for (var j = i + 1; j < n; j++) { testa([i, j]); }
    }
    return melhor.grupos;
  }

  function montarColunas(itens) {
    var bloco = criar('div', 'colunas');
    dividirColunas(itens).forEach(function (grupo) {
      var col = criar('div', 'coluna');
      var anterior = null;
      grupo.forEach(function (item) {
        var e = criar('article', 'noticia');
        if (item.secao !== anterior) { e.appendChild(linhaRotulo(item, 18, false)); }
        anterior = item.secao;
        var t = criar('h4', 'titulo clamp2', item.titulo);
        var sel = carimbo(item);
        if (sel) { t.appendChild(sel); }
        e.appendChild(t);
        e.appendChild(criar('p', 'fina clamp1', item.linhaFina));
        comEtiqueta(e, item);
        marcarClicavel(e, item);
        col.appendChild(e);
      });
      bloco.appendChild(col);
    });
    return bloco;
  }

  function caixaOrnada(titulo) {
    var caixa = criar('section', 'caixa');
    caixa.appendChild(criar('h2', null, titulo));
    return caixa;
  }

  function montarResumo(texto) {
    var caixa = caixaOrnada('Em resumo');
    caixa.appendChild(criar('p', null, texto));
    return caixa;
  }

  /* o termômetro conta o tom de todas as notícias da edição: boas, neutras e más */
  function montarTermometro(itens) {
    var caixa = caixaOrnada('Termômetro do dia');
    var total = itens.length;
    var b = itens.filter(function (x) { return x.tom === 'boa'; }).length;
    var m = itens.filter(function (x) { return x.tom === 'ma'; }).length;
    var n = total - b - m;
    if (total > 0) {
      var barra = criar('div', 'termometro-barra');
      barra.setAttribute('role', 'img');
      barra.setAttribute('aria-label', b + ' boas, ' + n + ' neutras e ' + m + ' más, em ' + total + ' notícias');
      [['termometro-boas', b], ['termometro-neutras', n], ['termometro-mas', m]].forEach(function (f) {
        if (!f[1]) { return; }
        var faixa = criar('div', f[0]);
        faixa.style.width = (100 * f[1] / total) + '%';
        barra.appendChild(faixa);
      });
      caixa.appendChild(barra);
    }
    var nums = criar('div', 'termometro-nums');
    nums.appendChild(criar('span', null, 'Boas: ' + b));
    nums.appendChild(criar('span', null, 'Neutras: ' + n));
    nums.appendChild(criar('span', null, 'Más: ' + m));
    caixa.appendChild(nums);
    caixa.appendChild(criar('p', 'termometro-legenda', total === 1 ? 'tom da 1 notícia da edição' : 'tom das ' + total + ' notícias da edição'));
    return caixa;
  }

  function montarBreves(itens) {
    var bloco = criar('section', 'breves');
    bloco.appendChild(criar('h2', null, 'Breves'));
    var ul = criar('ul');
    itens.forEach(function (item) {
      var li = criar('li');
      var e = criar('div', 'noticia');
      var et = etiquetaPeso(item);
      if (et) { e.appendChild(et); }
      e.appendChild(criar('span', 'titulo', item.titulo));
      var sel = carimbo(item);
      if (sel) { e.appendChild(sel); }
      marcarClicavel(e, item);
      li.appendChild(e);
      ul.appendChild(li);
    });
    bloco.appendChild(ul);
    return bloco;
  }

  /* o alerta é a notícia (fora a manchete) com maior nota em risco/urgência; só aparece com nota 2 ou 3 */
  function escolherAlerta(itens) {
    var melhor = null;
    itens.forEach(function (it) {
      if (risco(it) < 2) { return; }
      if (!melhor || risco(it) > risco(melhor) ||
          (risco(it) === risco(melhor) && (soma(it) > soma(melhor) || (soma(it) === soma(melhor) && it.peso > melhor.peso)))) {
        melhor = it;
      }
    });
    return melhor;
  }

  /* ---------- edição ---------- */
  function render(ed) {
    edicaoAtual = ed;
    capa.textContent = '';
    $('data-extenso').textContent = dataExtenso(ed.data);
    $('numero').textContent = 'Edição nº ' + ed.numero;
    document.title = 'TechJournal · ' + dataCurta(ed.data);

    var original = ed.itens || [];
    var ordenados = original.map(function (it, i) { return { item: it, i: i }; });
    ordenados.sort(function (a, b) {
      return (b.item.peso - a.item.peso) || (soma(b.item) - soma(a.item)) || (a.i - b.i);
    }).forEach(function (x, k) { ordenados[k] = x.item; });

    if (!ordenados.length) {
      capa.appendChild(criar('p', 'vazio', 'Esta edição não tem notícias.'));
      return;
    }

    var manchete = ordenados[0];
    var resto = ordenados.slice(1);
    var alerta = escolherAlerta(resto);
    if (alerta) { resto = resto.filter(function (x) { return x !== alerta; }); }
    var chamadas = resto.filter(function (x) { return x.peso >= 4; });
    /* as colunas recebem as notícias de peso 3 que couberem na tela: começa com todas e tira, uma a uma,
       a de menor soma (empate: a que vem depois no arquivo) até as colunas caberem; as tiradas vão para "Breves" */
    var peso3 = resto.filter(function (x) { return x.peso === 3; });
    var porNota = peso3.slice().sort(function (a, b) {
      return (soma(b) - soma(a)) || (original.indexOf(a) - original.indexOf(b));
    });
    var breves2 = resto.filter(function (x) { return x.peso <= 2; });

    function montarCapa(k) {
      var ficam = porNota.slice(0, k);
      var colunas = peso3.filter(function (x) { return ficam.indexOf(x) >= 0; })
        .sort(function (a, b) { return original.indexOf(a) - original.indexOf(b); });
      var breves = porNota.slice(k).concat(breves2);

      capa.textContent = '';
      var esq = criar('div', 'col-esq');
      var dir = criar('div', 'col-dir');

      esq.appendChild(montarManchete(manchete));
      if (chamadas.length) { esq.appendChild(divisor()); esq.appendChild(montarChamadas(chamadas)); }
      esq.appendChild(divisor());
      if (alerta) { esq.appendChild(montarAlerta(alerta)); }
      if (colunas.length) { esq.appendChild(montarColunas(colunas)); }

      dir.appendChild(montarResumo(ed.resumo));
      dir.appendChild(montarTermometro(original));
      if (breves.length) { dir.appendChild(montarBreves(breves)); }

      capa.appendChild(esq);
      capa.appendChild(dir);
      ajustarAberturas();
    }

    var k = peso3.length;
    montarCapa(k);
    while (k > 0 && estoura('.colunas', '.coluna .noticia')) { k--; montarCapa(k); }
  }

  /* o último item de um bloco passa do limite do bloco? (mede as caixas, não os carimbos girados) */
  function estoura(contSel, itemSel) {
    var cont = capa.querySelector(contSel);
    if (!cont) { return false; }
    var cs = getComputedStyle(cont);
    var limite = cont.getBoundingClientRect().bottom - parseFloat(cs.borderBottomWidth) - parseFloat(cs.paddingBottom);
    var itens = cont.querySelectorAll(itemSel);
    for (var i = 0; i < itens.length; i++) {
      if (itens[i].getBoundingClientRect().bottom > limite + 1) { return true; }
    }
    return false;
  }

  /* refaz a capa quando o tamanho da janela ou as fontes mudam (o que cabe nas colunas muda junto) */
  var refazendo = null;
  function refazerCapa() {
    clearTimeout(refazendo);
    refazendo = setTimeout(function () { if (edicaoAtual) { render(edicaoAtual); } }, 120);
  }

  function mostrarMensagem(texto) {
    capa.textContent = '';
    capa.appendChild(criar('p', 'vazio', texto));
  }

  /* ---------- barra lateral e navegação ---------- */
  function montarLateral(manifest) {
    var lista = $('lista-edicoes');
    lista.textContent = '';
    manifest.forEach(function (m) {
      if (!REGEX_DATA.test(String(m.data))) { return; }
      var li = criar('li');
      var a = criar('a');
      a.href = '#' + m.data;
      a.setAttribute('data-data', m.data);
      a.appendChild(criar('span', 'ed-data', dataCurta(m.data) + ' · nº ' + m.numero));
      a.appendChild(criar('span', 'ed-manchete', m.manchete));
      li.appendChild(a);
      lista.appendChild(li);
    });
  }

  function marcarAtiva(data) {
    var links = $('lista-edicoes').getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-data') === data) { links[i].setAttribute('aria-current', 'page'); }
      else { links[i].removeAttribute('aria-current'); }
    }
  }

  function carregarEdicao(data) {
    if (window.TJ.edicoes[data]) { return Promise.resolve(window.TJ.edicoes[data]); }
    return carregarScript('data/' + data + '.js').then(function () {
      if (!window.TJ.edicoes[data]) { throw new Error('Edição ' + data + ' sem dados.'); }
      return window.TJ.edicoes[data];
    });
  }

  function rotear() {
    var manifest = window.TJ.manifest || [];
    var hash = location.hash.replace(/^#/, '');
    var data = null;
    manifest.forEach(function (m) { if (m.data === hash && REGEX_DATA.test(hash)) { data = hash; } });
    if (!data && manifest.length && REGEX_DATA.test(String(manifest[0].data))) { data = manifest[0].data; }
    if (!data) { mostrarMensagem('Nenhuma edição disponível ainda.'); return; }

    fecharPainel();
    marcarAtiva(data);
    var meu = ++pedido;
    carregarEdicao(data).then(function (ed) {
      if (meu === pedido) { render(ed); }
    }).catch(function (erro) {
      if (meu === pedido) { mostrarMensagem(erro.message); }
    });
  }

  $('alternar').addEventListener('click', function () {
    var recolhida = document.body.classList.toggle('recolhida');
    this.setAttribute('aria-expanded', recolhida ? 'false' : 'true');
    refazerCapa();
  });

  window.addEventListener('hashchange', rotear);
  window.addEventListener('resize', refazerCapa);
  window.addEventListener('load', refazerCapa);
  if (document.fonts) {
    /* as fontes chegam depois da primeira montagem: refaz o ajuste quando terminam de carregar */
    if (document.fonts.addEventListener) { document.fonts.addEventListener('loadingdone', refazerCapa); }
    if (document.fonts.ready) { document.fonts.ready.then(refazerCapa); }
  }

  carregarScript('data/manifest.js').then(function () {
    montarLateral(window.TJ.manifest || []);
    rotear();
  }).catch(function () {
    mostrarMensagem('Nenhuma edição disponível ainda.');
  });
})();
