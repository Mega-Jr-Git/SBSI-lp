# App

Esta pasta contem a composicao principal da aplicacao frontend.

## Arquivo principal

- `App.tsx`: monta a pagina com header, secoes e footer.

## Como adicionar uma secao na pagina

1. Crie o modulo em `src/modules/<nome-da-secao>/` seguindo
   `docs/coding-standards.md`.
2. Importe o componente em `App.tsx`.
3. Adicione o componente dentro de `<main className="page-content">`, na ordem
   em que ele deve aparecer na landing page.

Exemplo:

```tsx
import HomeSection from "../modules/home/HomeSection";
import AboutSection from "../modules/about/AboutSection";
import LocationSection from "../modules/location/LocationSection";

export default function App() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main className="page-content">
        <HomeSection />
        <AboutSection />
        <LocationSection />
      </main>

      <SiteFooter />
    </div>
  );
}
```

## Regra de organizacao

`App.tsx` deve apenas compor a pagina. Evite colocar conteudo grande, regras de
layout especificas ou logica de uma secao diretamente aqui. Esse codigo deve
ficar dentro do modulo da propria secao.
