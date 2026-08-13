# Tracks Call

Módulo responsável exclusivamente pelo hero e pela listagem de chamadas para
as trilhas da landing page.

As páginas detalhadas de cada chamada ficam em `src/modules/calls/`, uma
subpasta por trilha.

## Arquivo principal

- `TracksCallSection.tsx`

## O que colocar aqui

Use este módulo para listar as trilhas disponíveis para submissão de artigos,
incluindo:

- nome da trilha;
- data de submissão;
- link para mais informações.

## Estrutura

A seção utiliza um grid responsivo com cards, cada card representando uma trilha.
Cada card exibe o título, período de submissão e um botão "Ver mais" com link
para a chamada ou recurso correspondente.

## Onde a seção aparece

Esta seção é registrada em `src/app/App.tsx` como:

```tsx
<TracksCallSection />
```

O id da seção é `chamada-trilhas`, então links de âncora devem apontar para
`#chamada-trilhas`.
