# Decisao Arquitetural

## Contexto

O projeto da SBSI comeca como uma landing page e, neste repositorio, o escopo atual e exclusivamente frontend.

A estrutura inicial precisa ser simples para o MVP, mas organizada o suficiente para permitir crescimento da interface sem virar uma arvore de arquivos pouco previsivel.

## Decisao

A arquitetura adotada e de aplicacao frontend unica na raiz do repositorio, organizada por modulos de experiencia e areas compartilhadas.

Isso significa que:

- a aplicacao vive diretamente em `src/`;
- a documentacao e decisoes ficam em `docs/`;
- a identidade visual e outros recursos estáticos ficam em `public/`;
- o codigo e organizado por modulos de produto, e nao apenas por tipo tecnico de arquivo.

## Motivacoes

- reduzir atrito de onboarding;
- deixar claro que este repositorio nao carrega backend;
- facilitar evolucao da landing page para outras telas frontend;
- manter separacao previsivel entre modulos, layout e recursos compartilhados.

## Estrutura escolhida

Os modulos representam areas da experiencia do produto, como `home`, `about`, `schedule`, `submissions` e `organization`. Nenhum modulo nasce pronto no repositorio: cada pessoa desenvolvedora cria a pasta do seu modulo seguindo `docs/coding-standards.md`.

Recursos reutilizaveis ficam em `shared`, sem depender de um modulo especifico.

## Consequencias

### Beneficios

- estrutura mais direta para o time;
- menor ambiguidade sobre onde cada parte do frontend mora;
- setup local mais simples;
- menos manutencao de pastas e servicos que nao fazem parte do escopo atual.

### Trade-offs

- qualquer backend futuro precisara nascer separado deste setup;
- se o projeto crescer bastante, algumas convencoes podem precisar ser refinadas;
- a organizacao por modulos exige disciplina para continuar clara.

## O que nao foi escolhido agora

Nao foi mantida uma estrutura fullstack no mesmo repositorio, porque isso adicionava ruido operacional e de documentacao para um projeto que hoje so precisa da camada de interface.

Tambem nao foi escolhida uma estrutura totalmente flat, porque isso dificultaria a manutencao conforme novas secoes e componentes surgirem.
