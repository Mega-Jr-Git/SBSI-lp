# Padrao de Codigo

## Objetivo

Este repositorio nasce sem nenhum modulo pronto de proposito. Cada secao da
landing page (home, sobre, programacao, submissao de trabalhos, organizacao,
patrocinadores etc.) deve ser criada do zero por quem for implementa-la,
seguindo as regras abaixo. O objetivo e que todo modulo criado por pessoas
diferentes do time pareca ter sido escrito pela mesma pessoa.

Estas regras nao sao sugestao: PRs que fugirem delas devem ser corrigidos
antes do merge.

## 1. Estrutura de um modulo

Cada secao da landing page vive em `src/modules/<slug-em-kebab-case>/`.

```txt
src/modules/<slug>/
|-- <Slug>Section.tsx     # componente principal, obrigatorio
|-- <slug>.css             # estilos do modulo, obrigatorio se houver estilo proprio
|-- README.md               # obrigatorio, descreve a responsabilidade do modulo
|-- <slug>.data.ts          # opcional, dados estaticos (arrays, mocks)
|-- Outros componentes.tsx  # opcional, sub-componentes usados so por este modulo
`-- assets/                 # opcional, imagens/svgs usados so por este modulo
```

Regras de nome:

- a pasta usa `kebab-case` (ex: `work-calls`, `past-editions`);
- o arquivo CSS tem exatamente o mesmo nome da pasta (`work-calls/work-calls.css`,
  nunca `workcalls.css` ou `WorkCalls.css`);
- o componente principal e `PascalCase` do nome do modulo + sufixo `Section`
  (`work-calls` -> `WorkCallsSection.tsx`, `past-editions` -> `PastEditionsSection.tsx`);
- sub-componentes usados por varios modulos NAO ficam dentro de um modulo —
  vao para `src/shared/components` (ver `src/shared/README.md`).

## 2. Registrar o modulo na pagina

1. Importe o componente em `src/app/App.tsx`:

```tsx
import LocationSection from "../modules/location/LocationSection";
```

2. Adicione dentro de `<main className="page-content">`, na ordem visual
   desejada.

3. Atualize a lista de modulos ativos em `src/modules/README.md`.

4. Atualize a lista de ids de secao no `README.md` da raiz.

`App.tsx` deve apenas compor a pagina — nunca conter regra de layout ou logica
especifica de uma secao.

## 3. Convencoes de CSS

- **Nunca hardcode cor.** Use sempre um token definido em `src/styles/globals.css`
  (`var(--nome-do-token)`). Se a cor que voce precisa nao existe ainda, crie o
  token em `globals.css` — nao escreva o hex direto no CSS do modulo.
- **Sem comentarios de debug ou comentarios genericos no CSS.** Nenhum CSS do
  projeto deve conter `/* Fallback ... */`, `/* Force ... */`, `/* Using X */`
  ou qualquer comentario que so descreva o que a proxima linha ja diz. Se uma
  regra virou obsoleta, apague-a — nao deixe duas regras para o mesmo seletor.
- **Uma linha em branco entre regras.** Nao deixe blocos de espaco em branco
  duplicado nem linhas com espaco sobrando no final.
- **Sem CSS nesting (`&`).** Repita o seletor completo dentro de cada bloco
  `@media`, como o resto do projeto faz. Isso mantem os arquivos buscaveis por
  `grep` do nome da classe.
- **Nomes de classe prefixados pelo slug do modulo**, estilo BEM: bloco
  principal `.slug-section`, blocos internos podem ter nomes proprios desde
  que comecem com o slug (`.work-calls-card`, `.work-calls-modal`), e
  elementos usam `__` (`.work-calls-card__link`).

## 4. Convencoes de TSX

- `return (` sempre com espaco antes do parenteses — nunca `return(`.
- Um componente por arquivo.
- Props tipadas explicitamente com `type <Nome>Props = { ... }` logo acima do
  componente.
- Links externos sempre com `target="_blank" rel="noopener noreferrer"`.

## 5. Acessibilidade

Estas regras se aplicam a qualquer modulo que use os padroes abaixo:

- **Modal/dialogo**: o container do modal precisa de `role="dialog"`,
  `aria-modal="true"` e `aria-labelledby` apontando para o `id` do titulo
  visivel do modal. O modal precisa fechar ao pressionar `Esc`.
- **Botao so com icone** (ex: `✕`, `→` sem texto visivel de contexto): sempre
  `aria-label` descrevendo a acao.
- **Imagens**: `alt` descritivo, nunca vazio quando a imagem carrega
  informacao (ex: nome do patrocinador/instituicao).

## 6. Internacionalizacao

Texto visivel nunca fica hardcoded no JSX em um unico idioma.
Cada modulo deve entregar `<slug>.content.ts` com os textos em `pt`
e `en`, lidos via `useLocale()` do modulo compartilhado de i18n.

Consulte `src/shared/i18n/README.md` para instrucoes detalhadas de uso.

## 7. Antes de abrir o PR

```bash
npm run build
```

Confira tambem no navegador:

- desktop e mobile;
- navbar e footer;
- rolagem/ancora ate a nova secao;
- teclado: tab ate os elementos interativos do modulo e, se houver modal,
  fechamento com `Esc`.
*