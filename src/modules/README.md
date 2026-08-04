# Modules

Esta pasta contem os modulos (secoes) da landing page.

## Módulos ativos

Abaixo estão listados os módulos de seção já implementados no projeto:

- `home`: Seção inicial (Hero) com as informações primárias do evento e countdown.
- `about`: Informações institucionais sobre o SBSI.
- `tracks-call`: secao de chamada de trabalhos.
- `location`: Apresenta o local físico do evento (UFMS, Campo Grande), oferecendo rotas de navegação direta, busca de hotéis e um mapa interativo integrado.

## Padrao obrigatorio

Antes de criar um modulo, leia `docs/coding-standards.md` na raiz do
repositorio. Ele define:

- estrutura de pastas e nomenclatura de arquivos;
- como registrar o modulo em `src/app/App.tsx`;
- convencoes de CSS (tokens de cor, sem comentarios de debug, sem nesting);
- convencoes de TSX;
- regras de acessibilidade para modais, botoes de icone e imagens.

Nenhum PR de modulo novo deve ser aberto sem seguir esse documento.
