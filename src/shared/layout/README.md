# Layout

Esta pasta contem componentes de layout geral da pagina.

## Componentes

- `SiteHeader.tsx`: header fixo com logo, navegacao desktop e menu mobile.
- `SiteFooter.tsx`: footer com logo centralizada, links temporarios e texto de copyright.

## Header

O `SiteHeader` usa `site-header.content.ts` com os textos em `pt` e `en`,
lidos via `useLocale()` do módulo compartilhado de i18n.

Enquanto um item nao tiver `targetId`, ele aparece no menu mas nao navega para
nenhuma secao. Isso e util para manter texto lorem ipsum no esqueleto.

Para ativar uma ancora, adicione `targetId` com o `id` da secao:

```ts
{ label: "Programacao", targetId: "programacao" }
```

Exemplo completo, depois que os modulos existirem:

```ts
const navItems = [
  { label: "Sobre", targetId: "sobre" },
  { label: "Programacao", targetId: "programacao" },
];
```

O valor de `targetId` precisa existir como `id` em alguma secao renderizada em
`src/app/App.tsx`.

## Footer

O `SiteFooter` contem textos temporarios e links de exemplo para manter a
estrutura visual pronta para edicao.

Altere os textos em `footerLinks` e no paragrafo final. A logo do footer e
configurada no `footerLogoUrl`.

## O que nao colocar aqui

Nao coloque conteudo especifico de uma secao no layout global. Por exemplo,
textos de programacao devem ficar em `src/modules/schedule`, nao em
`SiteHeader.tsx` ou `SiteFooter.tsx`.
