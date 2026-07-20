# Tracks Call

Módulo responsável pela seção de chamada para as trilhas da landing page.

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
Cada card exibe o título, período de submissão e um botão "Ver mais" com link externo.

## Onde a seção aparece

Esta seção é registrada em `src/app/App.tsx` como:

```tsx
<TracksCallSection />
```

O id da seção é `chamada-trilhas`, então links de âncora devem apontar para
`#chamada-trilhas`.