# i18n

Sistema de internacionalizacao compartilhado usado por todos os modulos do projeto.

Suporte atualmente a `"pt"` (portugues) e `"en"` (ingles), com portugues como idioma padrao.

## Provider

O componente `<LocaleProvider>` deve envolver a aplicacao para que os hooks de idioma funcionem.

Ja esta aplicado em `src/app/App.tsx`. Nao e necessario fazer nada se voce esta criando um modulo novo.

## Hook `useLocale`

Retorna um objeto com `locale` e `setLocale`:

```tsx
import { useLocale } from "../../shared/i18n/useLocale";

function MyComponent() {
  const { locale, setLocale } = useLocale()
  // locale  → "pt" | "en"
  // setLocale → funcao para alternar o idioma
}
```

## Arquivo de conteudo

Cada modulo deve criar um `<slug>.content.ts` exportando os textos nos dois idiomas:

```tsx
export const myModuleContent = {
  pt: {
    title: "Titulo em portugues",
    description: "Descricao em portugues",
  },
  en: {
    title: "Title in English",
    description: "Description in English",
  },
}
```

### Como usar no componente

```tsx
import { useLocale } from "../../shared/i18n/useLocale";
import { myModuleContent } from "./my-module.content";

export default function MyModuleSection() {
  const { locale } = useLocale()
  const content = myModuleContent[locale]

  return (
    <section>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </section>
  );
}
```