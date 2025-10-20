# Devfest Fortaleza 2025

Aplicação web do evento DevFest Fortaleza 2025, construída com Angular 16, PrimeNG e Bootstrap. O site apresenta informações do evento, programação, palestrantes e parceiros.

## Requisitos

- Node.js 18+ (recomendado LTS)
- Angular CLI 16.x (`npm i -g @angular/cli@16`)

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm start
# ou
ng serve
```

Acesse `http://localhost:4200/`. O servidor recarrega automaticamente ao salvar arquivos.

## Build de Produção

```bash
npm run build
# ou
ng build --configuration production
```

Os artefatos serão gerados em `dist/devfest2023` (ajustado pelo `angular.json`).

## Deploy (GitHub Pages)

Existem duas abordagens. Como o repositório contém `docs/CNAME`, recomenda-se servir a partir da pasta `docs/` na branch `master/main`:

1) Build direto para `docs/` (simples)

```bash
ng build --configuration production --output-path docs --base-href /
```

Depois, confirme no GitHub Pages que a origem é a pasta `docs/` da branch padrão.

2) Deploy via branch dedicada (gh-pages)

Você pode usar GitHub Actions ou a ferramenta `angular-cli-ghpages` (não instalada por padrão). Exemplo com a ferramenta:

```bash
npm i -D angular-cli-ghpages
ng build --configuration production --base-href /
npx angular-cli-ghpages --dir=dist/devfest2023
```

> Observação: mantenha `docs/CNAME` com o domínio correto (`fortaleza.devfest.com.br`).

## Estrutura (resumo)

- `src/app`:
  - `components/` — componentes reutilizáveis (ex.: navbar, footer)
  - `pages/` — páginas/sections (ex.: header, evento, palestrantes, programação)
  - `app-routing.module.ts` — rotas principais
  - `app.module.ts` — módulo raiz
- `src/assets/` — imagens e ícones
- `src/styles.scss` — estilos globais

## SEO e Metadados

- `src/index.html`:
  - `lang="pt-BR"`
  - `meta description`, Open Graph (og:*) e Twitter Card
  - favicon SVG e alternativo PNG
- Título dinâmico por rota:
  - Definição em `data.title` no `app-routing.module.ts`
  - Aplicação via Angular `Title` em `app.component.ts`

## Performance e Bundle

- Removido jQuery/Popper e padronizado `bootstrap.bundle.js`
- Evitadas duplicações de CSS (Bootstrap/PrimeNG centralizados em `angular.json`)
- Removido `MaterialModule` agregado; reintroduza módulos do Angular Material apenas se necessário
- Budgets de build ajustados (initial: 2MB/3MB; styles: 6KB/12KB)

## Scripts úteis

- `npm start` — servidor de desenvolvimento
- `npm run build` — build de produção

## Dicas

- Preencha dados reais de palestrantes e programação
- Adicione textos alternativos (`alt`) a todas as imagens
- Mantenha apenas dependências necessárias em `package.json`

## Suporte

Para ajuda com Angular CLI, use `ng help` ou consulte a documentação: https://angular.io/cli
