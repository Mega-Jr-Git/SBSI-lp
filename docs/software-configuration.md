# Regras de Configuracao de Software

## Objetivo

Este documento define regras basicas de organizacao do repositorio para facilitar colaboracao, revisao e evolucao do frontend da SBSI.

## Branches principais

O projeto tera duas branches principais:

- `main`: contem versoes estaveis do projeto.
- `develop`: contem a integracao do trabalho em andamento do time.

## Branches de tarefa

Toda nova implementacao, ajuste ou correcao deve sair da branch `develop`.

Padrao recomendado:

```txt
feature/00/nome-da-task
fix/00/nome-da-task
docs/00/nome-da-task
chore/00/nome-da-task
```

## Quando usar cada prefixo

- `feature/`: novas funcionalidades de interface.
- `fix/`: correcoes de bugs.
- `docs/`: documentacao.
- `chore/`: ajustes tecnicos, tooling, setup e manutencao.

## Exemplos

```txt
feature/12/home-hero-section
feature/18/event-schedule-module
fix/07/header-scroll-state
docs/03/frontend-architecture
chore/01/docker-frontend-setup
```

## Regras de commit

Padrao recomendado:

```txt
tipo: descricao curta
```

Tipos sugeridos:

- `feat`
- `fix`
- `docs`
- `chore`
- `refactor`
- `style`

## Boas praticas

- fazer commits pequenos;
- evitar misturar documentacao, refactor e funcionalidade no mesmo commit;
- escrever mensagens diretas;
- preferir ingles tecnico nas mensagens de commit para manter consistencia.

## Padronizacao de codigo

As regras de nomenclatura, CSS e acessibilidade que todo modulo deve seguir
estao em `docs/coding-standards.md`. Nenhum PR deve ser aberto sem seguir
esse documento.
