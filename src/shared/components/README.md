# Components

Esta pasta contem componentes visuais reutilizaveis.

## Componentes atuais

- `SectionPlaceholder.tsx`: estrutura temporaria para secoes simples, com
  eyebrow, titulo e paragrafo.

## Quando criar um componente aqui

Crie componentes em `shared/components` quando eles forem usados por mais de uma
secao.

Exemplos:

- botao reutilizavel;
- card de pessoa;
- item de agenda;
- container comum;
- badge ou etiqueta visual.

Se o componente sera usado por apenas uma secao, mantenha dentro do modulo da
propria secao (`src/modules/<secao>/`), nunca aqui.

## `SectionPlaceholder`

Use `SectionPlaceholder` enquanto a secao ainda e um esqueleto. Ele ajuda a
manter alinhamento, tipografia e espacamento consistentes.

Exemplo:

```tsx
<SectionPlaceholder
  id="local"
  eyebrow="Local"
  title="Lorem ipsum dolor sit amet"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
/>
```

Quando uma secao ganhar layout proprio, substitua o placeholder por markup
especifico no modulo da secao, seguindo `docs/coding-standards.md`.
