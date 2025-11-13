# Phase 5 — Arborescence Complète du Projet

**Date** : 2025-11-13  
**Branche** : `rebuild`  
**Commit Hash** : `29bf8f4`  
**Méthode** : `find . -type f` + `tree -a`

---

## ARBORESCENCE COMPLÈTE — TOUS LES FICHIERS

### RACINE DU PROJET

```
.
├── .cursor/
│   └── notepad/
│       └── alfredsite.json
├── .eslintrc.json
├── .git/
├── .gitignore
├── .next/
├── app/
├── cursorrules/
├── hooks/
├── lib/
├── macro-to-do.md.md
├── next-env.d.ts
├── next.config.js
├── node_modules/
├── package-lock.json
├── package.json
├── PHASE5-BLOC3-RAPPORT.md
├── PHASE5-BLOC4-RAPPORT.md
├── PHASE5-BLOC5-RAPPORT.md
├── PHASE5-ETAT-INITIAL.md
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.tsbuildinfo
└── vitest.config.ts
```

---

## DOSSIER APP/ — CODE SOURCE

```
app/
├── (app)/
│   ├── layout.tsx
│   ├── onboarding/
│   │   └── page.tsx
│   └── tableau-de-bord/
│       └── page.tsx
├── (marketing)/
│   ├── demo-vocale/
│   │   └── page.tsx
│   ├── inscription/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── offre/
│   │   └── page.tsx
│   ├── page.tsx
│   ├── paiement/
│   │   └── page.tsx
│   ├── tableau-de-bord-apercu/
│   │   └── page.tsx
│   └── tarifs/
│       └── page.tsx
├── globals.css
└── layout.tsx
```

**Total fichiers dans app/** : 13 fichiers

---

## DOSSIER HOOKS/

```
hooks/
└── use-outside-click.tsx
```

**Total fichiers dans hooks/** : 1 fichier

---

## DOSSIER LIB/

```
lib/
├── types/
│   └── index.ts
└── utils/
    ├── index.ts
    └── utils.ts
```

**Total fichiers dans lib/** : 3 fichiers

---

## DOSSIER CURSORRULES/

```
cursorrules/
├── core.global.mdc
├── cursor.rules.contextual.realignement.mdc
└── cursor.rules.todo.directive.mdc
```

**Total fichiers dans cursorrules/** : 3 fichiers

---

## DOSSIER .NEXT/ — BUILD COMPLET

### .NEXT/ — RACINE

```
.next/
├── BUILD_ID
├── app-build-manifest.json
├── app-path-routes-manifest.json
├── build-manifest.json
├── cache/
├── export-marker.json
├── images-manifest.json
├── next-minimal-server.js.nft.json
├── next-server.js.nft.json
├── package.json
├── prerender-manifest.json
├── react-loadable-manifest.json
├── required-server-files.json
├── routes-manifest.json
├── server/
├── static/
├── trace
└── types/
```

---

### .NEXT/CACHE/ — CACHE COMPLET

```
.next/cache/
├── .tsbuildinfo
├── eslint/
│   └── .cache_orwmy7
├── swc/
│   └── plugins/
│       └── v7_macos_aarch64_0.106.15/
└── webpack/
    ├── client-development/
    │   ├── 0.pack.gz
    │   ├── 1.pack.gz
    │   ├── 2.pack.gz
    │   ├── 3.pack.gz
    │   ├── 4.pack.gz
    │   ├── 5.pack.gz
    │   ├── 6.pack.gz
    │   ├── 7.pack.gz
    │   ├── 8.pack.gz
    │   ├── 9.pack.gz
    │   ├── 10.pack.gz
    │   ├── 11.pack.gz
    │   ├── 12.pack.gz
    │   ├── 13.pack.gz
    │   ├── 14.pack.gz
    │   ├── index.pack.gz
    │   └── index.pack.gz.old
    ├── client-development-fallback/
    │   ├── 0.pack.gz
    │   ├── 1.pack.gz
    │   └── index.pack.gz.old
    ├── client-production/
    │   ├── 0.pack
    │   ├── 1.pack
    │   ├── 2.pack
    │   ├── 3.pack
    │   ├── 4.pack
    │   ├── 5.pack
    │   ├── 6.pack
    │   ├── 7.pack
    │   ├── 8.pack
    │   ├── 9.pack
    │   ├── 10.pack
    │   ├── 11.pack
    │   ├── 12.pack
    │   ├── 13.pack
    │   ├── 14.pack
    │   ├── 15.pack
    │   ├── 16.pack
    │   ├── 17.pack
    │   ├── 18.pack
    │   ├── index.pack
    │   └── index.pack.old
    ├── edge-server-production/
    │   ├── 0.pack
    │   └── index.pack
    ├── server-development/
    │   ├── 0.pack.gz
    │   ├── 1.pack.gz
    │   ├── 2.pack.gz
    │   ├── 3.pack.gz
    │   ├── 4.pack.gz
    │   ├── 5.pack.gz
    │   ├── 6.pack.gz
    │   ├── 7.pack.gz
    │   ├── 8.pack.gz
    │   ├── 9.pack.gz
    │   ├── 10.pack.gz
    │   ├── index.pack.gz
    │   └── index.pack.gz.old
    └── server-production/
        ├── 0.pack
        ├── 1.pack
        ├── 2.pack
        ├── 3.pack
        ├── 4.pack
        ├── 5.pack
        ├── 6.pack
        ├── 7.pack
        ├── 8.pack
        ├── 9.pack
        ├── 10.pack
        ├── index.pack
        └── index.pack.old
```

---

### .NEXT/SERVER/ — SERVEUR COMPLET

```
.next/server/
├── app/
│   ├── app-paths-manifest.json
│   ├── (app)/
│   │   ├── onboarding/
│   │   │   ├── page.js
│   │   │   ├── page.js.nft.json
│   │   │   └── page_client-reference-manifest.js
│   │   └── tableau-de-bord/
│   │       ├── page.js
│   │       ├── page.js.nft.json
│   │       └── page_client-reference-manifest.js
│   ├── (marketing)/
│   │   ├── demo-vocale/
│   │   │   ├── page.js
│   │   │   ├── page.js.nft.json
│   │   │   └── page_client-reference-manifest.js
│   │   ├── inscription/
│   │   │   ├── page.js
│   │   │   ├── page.js.nft.json
│   │   │   └── page_client-reference-manifest.js
│   │   ├── offre/
│   │   │   ├── page.js
│   │   │   ├── page.js.nft.json
│   │   │   └── page_client-reference-manifest.js
│   │   ├── page.js
│   │   ├── page.js.nft.json
│   │   ├── page_client-reference-manifest.js
│   │   ├── paiement/
│   │   │   ├── page.js
│   │   │   ├── page.js.nft.json
│   │   │   └── page_client-reference-manifest.js
│   │   ├── tableau-de-bord-apercu/
│   │   │   ├── page.js
│   │   │   ├── page.js.nft.json
│   │   │   └── page_client-reference-manifest.js
│   │   └── tarifs/
│   │       ├── page.js
│   │       ├── page.js.nft.json
│   │       └── page_client-reference-manifest.js
│   ├── _not-found/
│   │   ├── page.js
│   │   ├── page.js.nft.json
│   │   ├── page_client-reference-manifest.js
│   │   ├── _not-found.html
│   │   ├── _not-found.meta
│   │   └── _not-found.rsc
│   ├── demo-vocale.html
│   ├── demo-vocale.meta
│   ├── demo-vocale.rsc
│   ├── index.html
│   ├── index.meta
│   ├── index.rsc
│   ├── inscription.html
│   ├── inscription.meta
│   ├── inscription.rsc
│   ├── offre.html
│   ├── offre.meta
│   ├── offre.rsc
│   ├── onboarding.html
│   ├── onboarding.meta
│   ├── onboarding.rsc
│   ├── paiement.html
│   ├── paiement.meta
│   ├── paiement.rsc
│   ├── tableau-de-bord-apercu.html
│   ├── tableau-de-bord-apercu.meta
│   ├── tableau-de-bord-apercu.rsc
│   ├── tableau-de-bord.html
│   ├── tableau-de-bord.meta
│   ├── tableau-de-bord.rsc
│   ├── tarifs.html
│   ├── tarifs.meta
│   └── tarifs.rsc
├── chunks/
│   ├── 682.js
│   ├── 819.js
│   └── font-manifest.json
├── font-manifest.json
├── functions-config-manifest.json
├── interception-route-rewrite-manifest.js
├── middleware-build-manifest.js
├── middleware-manifest.json
├── middleware-react-loadable-manifest.js
├── next-font-manifest.js
├── next-font-manifest.json
├── pages/
│   ├── 404.html
│   ├── 500.html
│   ├── _app.js
│   ├── _app.js.nft.json
│   ├── _document.js
│   ├── _document.js.nft.json
│   ├── _error.js
│   └── _error.js.nft.json
├── pages-manifest.json
├── server-reference-manifest.js
├── server-reference-manifest.json
└── webpack-runtime.js
```

**Routes générées dans .next/server/app/** :
- `(app)/onboarding/page.js`
- `(app)/tableau-de-bord/page.js`
- `(marketing)/demo-vocale/page.js`
- `(marketing)/inscription/page.js`
- `(marketing)/offre/page.js`
- `(marketing)/page.js`
- `(marketing)/paiement/page.js`
- `(marketing)/tableau-de-bord-apercu/page.js`
- `(marketing)/tarifs/page.js`
- `_not-found/page.js`

**Pages HTML générées dans .next/server/app/** :
- `demo-vocale.html`
- `index.html`
- `inscription.html`
- `offre.html`
- `onboarding.html`
- `paiement.html`
- `tableau-de-bord-apercu.html`
- `tableau-de-bord.html`
- `tarifs.html`
- `_not-found.html`

**Pages fallback dans .next/server/pages/** :
- `404.html`
- `500.html`
- `_app.js`
- `_document.js`
- `_error.js`

---

### .NEXT/STATIC/ — ASSETS STATIQUES COMPLETS

```
.next/static/
├── B4XxQA9Z99kC9MaKxvKa7/
│   ├── _buildManifest.js
│   └── _ssgManifest.js
├── chunks/
│   ├── 117-9ebde826fc851acc.js
│   ├── app/
│   │   ├── (app)/
│   │   │   ├── layout-4f0679a80b23e116.js
│   │   │   ├── onboarding/
│   │   │   │   └── page-64630feaad3c2d32.js
│   │   │   └── tableau-de-bord/
│   │   │       └── page-53c1bcfc80c7a4eb.js
│   │   ├── (marketing)/
│   │   │   ├── demo-vocale/
│   │   │   │   └── page-70860f66a23a0e7b.js
│   │   │   ├── inscription/
│   │   │   │   └── page-1267afb00b00ffe2.js
│   │   │   ├── layout-9dae30e5d97697ca.js
│   │   │   ├── offre/
│   │   │   │   └── page-09f5d014d7cfdb6d.js
│   │   │   ├── page-c4789eb12eb8c3d6.js
│   │   │   ├── paiement/
│   │   │   │   └── page-96e17ad411f21ca0.js
│   │   │   ├── tableau-de-bord-apercu/
│   │   │   │   └── page-26fd9c63b09c3acf.js
│   │   │   └── tarifs/
│   │   │       └── page-8f38be1b6a9c4bc2.js
│   │   ├── _not-found/
│   │   │   └── page-b0518778400d0e10.js
│   │   └── layout-02640adcabd14eba.js
│   ├── fd9d1056-4313c8a7022cf435.js
│   ├── framework-f66176bb897dc684.js
│   ├── main-4c1062ee9e64d81c.js
│   ├── main-app-63ffdebcb4111b40.js
│   ├── pages/
│   │   ├── _app-72b849fbd24ac258.js
│   │   └── _error-7ba65e1336b92748.js
│   ├── polyfills-42372ed130431b0a.js
│   └── webpack-c8441f2d519541e3.js
└── css/
    └── e2f4a04894272ed0.css
```

**Chunks App Router dans .next/static/chunks/app/** :
- `layout-02640adcabd14eba.js` → `app/layout.tsx`
- `(app)/layout-4f0679a80b23e116.js` → `app/(app)/layout.tsx`
- `(app)/onboarding/page-64630feaad3c2d32.js` → `app/(app)/onboarding/page.tsx`
- `(app)/tableau-de-bord/page-53c1bcfc80c7a4eb.js` → `app/(app)/tableau-de-bord/page.tsx`
- `(marketing)/layout-9dae30e5d97697ca.js` → `app/(marketing)/layout.tsx`
- `(marketing)/page-c4789eb12eb8c3d6.js` → `app/(marketing)/page.tsx`
- `(marketing)/demo-vocale/page-70860f66a23a0e7b.js` → `app/(marketing)/demo-vocale/page.tsx`
- `(marketing)/inscription/page-1267afb00b00ffe2.js` → `app/(marketing)/inscription/page.tsx`
- `(marketing)/offre/page-09f5d014d7cfdb6d.js` → `app/(marketing)/offre/page.tsx`
- `(marketing)/paiement/page-96e17ad411f21ca0.js` → `app/(marketing)/paiement/page.tsx`
- `(marketing)/tableau-de-bord-apercu/page-26fd9c63b09c3acf.js` → `app/(marketing)/tableau-de-bord-apercu/page.tsx`
- `(marketing)/tarifs/page-8f38be1b6a9c4bc2.js` → `app/(marketing)/tarifs/page.tsx`
- `_not-found/page-b0518778400d0e10.js` → Page 404 automatique

**Chunks Pages Router (fallbacks) dans .next/static/chunks/pages/** :
- `_app-72b849fbd24ac258.js` → Fallback système
- `_error-7ba65e1336b92748.js` → Fallback système

**Chunks partagés dans .next/static/chunks/** :
- `117-9ebde826fc851acc.js`
- `fd9d1056-4313c8a7022cf435.js`
- `framework-f66176bb897dc684.js`
- `main-4c1062ee9e64d81c.js`
- `main-app-63ffdebcb4111b40.js`
- `polyfills-42372ed130431b0a.js`
- `webpack-c8441f2d519541e3.js`

---

### .NEXT/TYPES/ — TYPES GÉNÉRÉS COMPLETS

```
.next/types/
├── app/
│   ├── (app)/
│   │   ├── layout.ts
│   │   ├── onboarding/
│   │   │   └── page.ts
│   │   └── tableau-de-bord/
│   │       └── page.ts
│   ├── (marketing)/
│   │   ├── demo-vocale/
│   │   │   └── page.ts
│   │   ├── inscription/
│   │   │   └── page.ts
│   │   ├── layout.ts
│   │   ├── offre/
│   │   │   └── page.ts
│   │   ├── page.ts
│   │   ├── paiement/
│   │   │   └── page.ts
│   │   ├── tableau-de-bord-apercu/
│   │   │   └── page.ts
│   │   └── tarifs/
│   │       └── page.ts
│   └── layout.ts
└── package.json
```

**Total fichiers types générés** : 13 fichiers `.ts` + 1 `package.json`

---

## LISTE EXHAUSTIVE TOUS LES FICHIERS (find . -type f)

### FICHIERS RACINE

```
./.cursor/notepad/alfredsite.json
./.eslintrc.json
./.gitignore
./macro-to-do.md.md
./next-env.d.ts
./next.config.js
./package-lock.json
./package.json
./PHASE5-BLOC3-RAPPORT.md
./PHASE5-BLOC4-RAPPORT.md
./PHASE5-BLOC5-RAPPORT.md
./PHASE5-ETAT-INITIAL.md
./postcss.config.js
./README.md
./tailwind.config.ts
./tsconfig.json
./tsconfig.tsbuildinfo
./vitest.config.ts
```

### FICHIERS APP/

```
./app/(app)/layout.tsx
./app/(app)/onboarding/page.tsx
./app/(app)/tableau-de-bord/page.tsx
./app/(marketing)/demo-vocale/page.tsx
./app/(marketing)/inscription/page.tsx
./app/(marketing)/layout.tsx
./app/(marketing)/offre/page.tsx
./app/(marketing)/page.tsx
./app/(marketing)/paiement/page.tsx
./app/(marketing)/tableau-de-bord-apercu/page.tsx
./app/(marketing)/tarifs/page.tsx
./app/globals.css
./app/layout.tsx
```

### FICHIERS HOOKS/

```
./hooks/use-outside-click.tsx
```

### FICHIERS LIB/

```
./lib/types/index.ts
./lib/utils/index.ts
./lib/utils/utils.ts
```

### FICHIERS CURSORRULES/

```
./cursorrules/core.global.mdc
./cursorrules/cursor.rules.contextual.realignement.mdc
./cursorrules/cursor.rules.todo.directive.mdc
```

### FICHIERS .NEXT/ — MANIFESTS

```
./.next/BUILD_ID
./.next/app-build-manifest.json
./.next/app-path-routes-manifest.json
./.next/build-manifest.json
./.next/export-marker.json
./.next/images-manifest.json
./.next/next-minimal-server.js.nft.json
./.next/next-server.js.nft.json
./.next/package.json
./.next/prerender-manifest.json
./.next/react-loadable-manifest.json
./.next/required-server-files.json
./.next/routes-manifest.json
./.next/trace
```

### FICHIERS .NEXT/CACHE/

```
./.next/cache/.tsbuildinfo
./.next/cache/eslint/.cache_orwmy7
./.next/cache/webpack/client-development-fallback/0.pack.gz
./.next/cache/webpack/client-development-fallback/1.pack.gz
./.next/cache/webpack/client-development-fallback/index.pack.gz.old
./.next/cache/webpack/client-development/0.pack.gz
./.next/cache/webpack/client-development/1.pack.gz
./.next/cache/webpack/client-development/10.pack.gz
./.next/cache/webpack/client-development/11.pack.gz
./.next/cache/webpack/client-development/12.pack.gz
./.next/cache/webpack/client-development/13.pack.gz
./.next/cache/webpack/client-development/14.pack.gz
./.next/cache/webpack/client-development/2.pack.gz
./.next/cache/webpack/client-development/3.pack.gz
./.next/cache/webpack/client-development/4.pack.gz
./.next/cache/webpack/client-development/5.pack.gz
./.next/cache/webpack/client-development/6.pack.gz
./.next/cache/webpack/client-development/7.pack.gz
./.next/cache/webpack/client-development/8.pack.gz
./.next/cache/webpack/client-development/9.pack.gz
./.next/cache/webpack/client-development/index.pack.gz
./.next/cache/webpack/client-development/index.pack.gz.old
./.next/cache/webpack/client-production/0.pack
./.next/cache/webpack/client-production/1.pack
./.next/cache/webpack/client-production/10.pack
./.next/cache/webpack/client-production/11.pack
./.next/cache/webpack/client-production/12.pack
./.next/cache/webpack/client-production/13.pack
./.next/cache/webpack/client-production/14.pack
./.next/cache/webpack/client-production/15.pack
./.next/cache/webpack/client-production/16.pack
./.next/cache/webpack/client-production/17.pack
./.next/cache/webpack/client-production/18.pack
./.next/cache/webpack/client-production/2.pack
./.next/cache/webpack/client-production/3.pack
./.next/cache/webpack/client-production/4.pack
./.next/cache/webpack/client-production/5.pack
./.next/cache/webpack/client-production/6.pack
./.next/cache/webpack/client-production/7.pack
./.next/cache/webpack/client-production/8.pack
./.next/cache/webpack/client-production/9.pack
./.next/cache/webpack/client-production/index.pack
./.next/cache/webpack/client-production/index.pack.old
./.next/cache/webpack/edge-server-production/0.pack
./.next/cache/webpack/edge-server-production/index.pack
./.next/cache/webpack/server-development/0.pack.gz
./.next/cache/webpack/server-development/1.pack.gz
./.next/cache/webpack/server-development/10.pack.gz
./.next/cache/webpack/server-development/2.pack.gz
./.next/cache/webpack/server-development/3.pack.gz
./.next/cache/webpack/server-development/4.pack.gz
./.next/cache/webpack/server-development/5.pack.gz
./.next/cache/webpack/server-development/6.pack.gz
./.next/cache/webpack/server-development/7.pack.gz
./.next/cache/webpack/server-development/8.pack.gz
./.next/cache/webpack/server-development/9.pack.gz
./.next/cache/webpack/server-development/index.pack.gz
./.next/cache/webpack/server-development/index.pack.gz.old
./.next/cache/webpack/server-production/0.pack
./.next/cache/webpack/server-production/1.pack
./.next/cache/webpack/server-production/10.pack
./.next/cache/webpack/server-production/2.pack
./.next/cache/webpack/server-production/3.pack
./.next/cache/webpack/server-production/4.pack
./.next/cache/webpack/server-production/5.pack
./.next/cache/webpack/server-production/6.pack
./.next/cache/webpack/server-production/7.pack
./.next/cache/webpack/server-production/8.pack
./.next/cache/webpack/server-production/9.pack
./.next/cache/webpack/server-production/index.pack
./.next/cache/webpack/server-production/index.pack.old
```

### FICHIERS .NEXT/SERVER/APP/

```
./.next/server/app/app-paths-manifest.json
./.next/server/app/(app)/onboarding/page.js
./.next/server/app/(app)/onboarding/page.js.nft.json
./.next/server/app/(app)/onboarding/page_client-reference-manifest.js
./.next/server/app/(app)/tableau-de-bord/page.js
./.next/server/app/(app)/tableau-de-bord/page.js.nft.json
./.next/server/app/(app)/tableau-de-bord/page_client-reference-manifest.js
./.next/server/app/(marketing)/demo-vocale/page.js
./.next/server/app/(marketing)/demo-vocale/page.js.nft.json
./.next/server/app/(marketing)/demo-vocale/page_client-reference-manifest.js
./.next/server/app/(marketing)/inscription/page.js
./.next/server/app/(marketing)/inscription/page.js.nft.json
./.next/server/app/(marketing)/inscription/page_client-reference-manifest.js
./.next/server/app/(marketing)/offre/page.js
./.next/server/app/(marketing)/offre/page.js.nft.json
./.next/server/app/(marketing)/offre/page_client-reference-manifest.js
./.next/server/app/(marketing)/page.js
./.next/server/app/(marketing)/page.js.nft.json
./.next/server/app/(marketing)/page_client-reference-manifest.js
./.next/server/app/(marketing)/paiement/page.js
./.next/server/app/(marketing)/paiement/page.js.nft.json
./.next/server/app/(marketing)/paiement/page_client-reference-manifest.js
./.next/server/app/(marketing)/tableau-de-bord-apercu/page.js
./.next/server/app/(marketing)/tableau-de-bord-apercu/page.js.nft.json
./.next/server/app/(marketing)/tableau-de-bord-apercu/page_client-reference-manifest.js
./.next/server/app/(marketing)/tarifs/page.js
./.next/server/app/(marketing)/tarifs/page.js.nft.json
./.next/server/app/(marketing)/tarifs/page_client-reference-manifest.js
./.next/server/app/_not-found/page.js
./.next/server/app/_not-found/page.js.nft.json
./.next/server/app/_not-found/page_client-reference-manifest.js
./.next/server/app/_not-found.html
./.next/server/app/_not-found.meta
./.next/server/app/_not-found.rsc
./.next/server/app/demo-vocale.html
./.next/server/app/demo-vocale.meta
./.next/server/app/demo-vocale.rsc
./.next/server/app/index.html
./.next/server/app/index.meta
./.next/server/app/index.rsc
./.next/server/app/inscription.html
./.next/server/app/inscription.meta
./.next/server/app/inscription.rsc
./.next/server/app/offre.html
./.next/server/app/offre.meta
./.next/server/app/offre.rsc
./.next/server/app/onboarding.html
./.next/server/app/onboarding.meta
./.next/server/app/onboarding.rsc
./.next/server/app/paiement.html
./.next/server/app/paiement.meta
./.next/server/app/paiement.rsc
./.next/server/app/tableau-de-bord-apercu.html
./.next/server/app/tableau-de-bord-apercu.meta
./.next/server/app/tableau-de-bord-apercu.rsc
./.next/server/app/tableau-de-bord.html
./.next/server/app/tableau-de-bord.meta
./.next/server/app/tableau-de-bord.rsc
./.next/server/app/tarifs.html
./.next/server/app/tarifs.meta
./.next/server/app/tarifs.rsc
```

### FICHIERS .NEXT/SERVER/CHUNKS/

```
./.next/server/chunks/682.js
./.next/server/chunks/819.js
./.next/server/chunks/font-manifest.json
```

### FICHIERS .NEXT/SERVER/ — MANIFESTS SERVEUR

```
./.next/server/font-manifest.json
./.next/server/functions-config-manifest.json
./.next/server/interception-route-rewrite-manifest.js
./.next/server/middleware-build-manifest.js
./.next/server/middleware-manifest.json
./.next/server/middleware-react-loadable-manifest.js
./.next/server/next-font-manifest.js
./.next/server/next-font-manifest.json
./.next/server/pages-manifest.json
./.next/server/server-reference-manifest.js
./.next/server/server-reference-manifest.json
./.next/server/webpack-runtime.js
```

### FICHIERS .NEXT/SERVER/PAGES/ — FALLBACKS PAGES ROUTER

```
./.next/server/pages/404.html
./.next/server/pages/500.html
./.next/server/pages/_app.js
./.next/server/pages/_app.js.nft.json
./.next/server/pages/_document.js
./.next/server/pages/_document.js.nft.json
./.next/server/pages/_error.js
./.next/server/pages/_error.js.nft.json
```

### FICHIERS .NEXT/STATIC/CHUNKS/APP/

```
./.next/static/chunks/app/(app)/layout-4f0679a80b23e116.js
./.next/static/chunks/app/(app)/onboarding/page-64630feaad3c2d32.js
./.next/static/chunks/app/(app)/tableau-de-bord/page-53c1bcfc80c7a4eb.js
./.next/static/chunks/app/(marketing)/demo-vocale/page-70860f66a23a0e7b.js
./.next/static/chunks/app/(marketing)/inscription/page-1267afb00b00ffe2.js
./.next/static/chunks/app/(marketing)/layout-9dae30e5d97697ca.js
./.next/static/chunks/app/(marketing)/offre/page-09f5d014d7cfdb6d.js
./.next/static/chunks/app/(marketing)/page-c4789eb12eb8c3d6.js
./.next/static/chunks/app/(marketing)/paiement/page-96e17ad411f21ca0.js
./.next/static/chunks/app/(marketing)/tableau-de-bord-apercu/page-26fd9c63b09c3acf.js
./.next/static/chunks/app/(marketing)/tarifs/page-8f38be1b6a9c4bc2.js
./.next/static/chunks/app/_not-found/page-b0518778400d0e10.js
./.next/static/chunks/app/layout-02640adcabd14eba.js
```

### FICHIERS .NEXT/STATIC/CHUNKS/PAGES/ — FALLBACKS

```
./.next/static/chunks/pages/_app-72b849fbd24ac258.js
./.next/static/chunks/pages/_error-7ba65e1336b92748.js
```

### FICHIERS .NEXT/STATIC/CHUNKS/ — PARTAGÉS

```
./.next/static/chunks/117-9ebde826fc851acc.js
./.next/static/chunks/fd9d1056-4313c8a7022cf435.js
./.next/static/chunks/framework-f66176bb897dc684.js
./.next/static/chunks/main-4c1062ee9e64d81c.js
./.next/static/chunks/main-app-63ffdebcb4111b40.js
./.next/static/chunks/polyfills-42372ed130431b0a.js
./.next/static/chunks/webpack-c8441f2d519541e3.js
```

### FICHIERS .NEXT/STATIC/ — AUTRES

```
./.next/static/B4XxQA9Z99kC9MaKxvKa7/_buildManifest.js
./.next/static/B4XxQA9Z99kC9MaKxvKa7/_ssgManifest.js
./.next/static/css/e2f4a04894272ed0.css
```

### FICHIERS .NEXT/TYPES/

```
./.next/types/app/(app)/layout.ts
./.next/types/app/(app)/onboarding/page.ts
./.next/types/app/(app)/tableau-de-bord/page.ts
./.next/types/app/(marketing)/demo-vocale/page.ts
./.next/types/app/(marketing)/inscription/page.ts
./.next/types/app/(marketing)/layout.ts
./.next/types/app/(marketing)/offre/page.ts
./.next/types/app/(marketing)/page.ts
./.next/types/app/(marketing)/paiement/page.ts
./.next/types/app/(marketing)/tableau-de-bord-apercu/page.ts
./.next/types/app/(marketing)/tarifs/page.ts
./.next/types/app/layout.ts
./.next/types/package.json
```

---

## COMPTAGE TOTAL

**Fichiers code source (hors .next, node_modules, .git)** :
- `app/` : 13 fichiers
- `hooks/` : 1 fichier
- `lib/` : 3 fichiers
- `cursorrules/` : 3 fichiers
- Racine : 17 fichiers
- **Total code source** : 37 fichiers

**Fichiers .next/** :
- Manifests racine : 13 fichiers
- Cache : 70+ fichiers
- Server : 80+ fichiers
- Static/chunks : 20+ fichiers
- Types : 14 fichiers
- **Total .next/** : ~200+ fichiers

**Total fichiers projet (hors node_modules, .git)** : ~240+ fichiers

---

**Document généré le** : 2025-11-13  
**Méthode** : `find . -type f` + `tree -a`  
**Statut** : ✅ **ARBORESCENCE COMPLÈTE** — Aucune omission

