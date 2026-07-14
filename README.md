# SBSI Frontend

Repositorio do frontend da SBSI.

Este projeto e uma landing page em React, TypeScript e Vite. A estrutura foi
pensada para um MVP rapido, com secoes bem separadas para facilitar o trabalho
de pessoas desenvolvedoras iniciantes.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Docker Compose para desenvolvimento local

## Como rodar

### Local

Use este caminho quando quiser desenvolver diretamente na maquina.

```bash
npm install
npm run dev
```

O Vite mostra no terminal o endereco local, normalmente:

```txt
http://localhost:5173/
```

### Docker

Use este caminho quando quiser rodar o projeto em container.

```bash
make build
make up
```

O `make up` imprime o link no terminal. Por padrao, a aplicacao sobe em:

```txt
http://localhost:5174/
```

O container usa a `5173` internamente, mas a porta publicada no host fica em
`5174` por padrao para evitar conflito com outros frontends Vite.

Se a porta `5174` ja estiver em uso, rode em outra porta:

```bash
make up FRONTEND_PORT=5180
```

Depois acesse:

```txt
http://localhost:5180/
```

Comandos uteis:

```bash
make help            # Lista comandos disponiveis
make logs            # Acompanha logs do container
make down            # Para e remove o container
make clean           # Remove container, volumes e orfaos
```

## Estrutura principal

```txt
.
|-- docs/                  # Decisoes, configuracao e padrao de codigo do projeto
|-- id-visual/              # Assets da identidade visual (criada quando existirem)
|-- src/
|   |-- app/               # Composicao principal da pagina
|   |-- modules/           # Secoes ativas da landing page (comeca vazio)
|   |-- shared/            # Componentes e layouts reutilizaveis
|   `-- styles/            # Estilos globais e tokens visuais
|-- Dockerfile
|-- docker-compose.yml
|-- Makefile
|-- package.json
`-- vite.config.ts
```

## Onde editar cada coisa

- `src/app/App.tsx`: define a ordem das secoes na pagina.
- `src/modules/*`: cada pasta representa uma secao ativa da landing page.
- `src/shared/layout/SiteHeader.tsx`: navbar minimalista atual.
- `src/shared/layout/SiteFooter.tsx`: footer minimalista atual.
- `src/shared/components/SectionPlaceholder.tsx`: base temporaria usada pelas secoes simples.
- `src/styles/globals.css`: estilos globais da pagina, navbar e footer.

## Secoes atuais

Nenhuma secao foi criada ainda. Este repositorio comeca so com o esqueleto —
cada secao (home, sobre, programacao, submissao de trabalhos, organizacao,
patrocinadores etc.) e criada do zero pelo time seguindo o passo a passo
abaixo.

## Como criar uma nova secao

1. Crie uma pasta em `src/modules`.

Exemplo:

```txt
src/modules/location/
```

2. Crie o componente da secao.

Exemplo em `src/modules/location/LocationSection.tsx`:

```tsx
import SectionPlaceholder from "../../shared/components/SectionPlaceholder";

export default function LocationSection() {
  return (
    <SectionPlaceholder id="local" />
  );
}
```

3. Crie um `README.md` dentro da pasta da secao explicando a responsabilidade do modulo.

Exemplo:

```md
# Local

Modulo reservado para informacoes de local, endereco, mapa e orientacoes de chegada.
```

4. Registre a secao em `src/app/App.tsx`.

Importe o componente:

```tsx
import LocationSection from "../modules/location/LocationSection";
```

Adicione na ordem desejada dentro de `<main className="page-content">`:

```tsx
<HomeSection />
<AboutSection />
<LocationSection />
<ScheduleSection />
```

5. Siga **`docs/coding-standards.md`** para nomenclatura de arquivos,
   convencoes de CSS, TSX e acessibilidade. Esse documento e obrigatorio para
   todo modulo novo.

## Padrao para secoes

Para secoes simples, use `SectionPlaceholder`. Ele ja aplica:

- altura base da secao;
- estrutura vazia para evoluir o layout;
- consistencia visual com a pagina branca atual.

Quando a secao ficar mais complexa, o modulo pode ganhar componentes proprios
dentro da mesma pasta. Evite colocar regra especifica de uma secao em
`src/shared`.

## Identidade visual

Os assets de identidade visual ficam em `id-visual/` — crie a pasta quando os
primeiros assets existirem. Ate la, os componentes principais dependem mais de
`src/styles/globals.css` do que de imagens.

## Checklist antes de abrir PR

```bash
npm run build
```

Tambem confira no navegador:

- desktop;
- mobile;
- navbar;
- footer;
- rolagem entre secoes;
- as regras de `docs/coding-standards.md`.
