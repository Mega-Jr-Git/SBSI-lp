# Shared

`shared` contem componentes, layouts e utilitarios reutilizaveis.

## Pastas

- `components`: componentes visuais reutilizaveis.
- `layout`: estrutura global da pagina, como header e footer.
- `utils`: funcoes utilitarias reutilizaveis.

## Regra principal

Arquivos em `shared` nao devem conter regra especifica de um modulo de negocio.

Se algo pertence apenas a uma secao, coloque dentro de `src/modules/<secao>/`.
Se algo sera usado por varias secoes, pode ir para `src/shared`.
