#!/bin/bash

# Phase 4 — Vérification Systématique des Résidus Design
# Script de vérification exhaustive basé sur l'arborescence réelle du dépôt

set -e
set -o pipefail

echo "=== PHASE 4 — VÉRIFICATION SYSTÉMATIQUE DES RÉSIDUS DESIGN ==="
echo ""
echo "Date: $(date)"
echo "Branche: $(git branch --show-current 2>/dev/null || echo 'N/A')"
echo ""

# ============================================================================
# 1. RECONSTITUER LA RÉFÉRENCE (Arbo Cible)
# ============================================================================

echo "1. RECONSTITUTION DE L'ARBO CIBLE"
echo "-----------------------------------"

# Fichiers autorisés selon PHASE2-AUDIT-FINAL.md
declare -a AUTHORIZED_FILES=(
  "app/layout.tsx"
  "app/globals.css"
  "app/(marketing)/page.tsx"
  "app/(marketing)/inscription/page.tsx"
  "app/(marketing)/demo-vocale/page.tsx"
  "app/(marketing)/offre/page.tsx"
  "app/(marketing)/paiement/page.tsx"
  "app/(marketing)/tableau-de-bord-apercu/page.tsx"
  "app/(marketing)/tarifs/page.tsx"
  "app/(marketing)/layout.tsx"
  "app/(app)/onboarding/page.tsx"
  "app/(app)/tableau-de-bord/page.tsx"
  "app/(app)/layout.tsx"
  "hooks/use-outside-click.tsx"
  "lib/types/index.ts"
  "lib/utils/utils.ts"
  "lib/utils/index.ts"
  "next.config.js"
  "tailwind.config.ts"
  "tsconfig.json"
  "vitest.config.ts"
  "postcss.config.js"
  "package.json"
  ".eslintrc.json"
)

# Fichiers de documentation/config autorisés
declare -a DOC_FILES=(
  ".gitignore"
  "README.md"
  "PHASE2-AUDIT-FINAL.md"
  "PHASE3-AUDIT-DEPENDENCIES.md"
  "PHASE4-BILAN-NETTOYAGE.md"
  "PHASE4-FINAL-CLEAN-REPORT.md"
  "PHASE4-VERIFICATION-SYSTEMATIQUE.sh"
  "macro-to-do.md.md"
  "next-env.d.ts"
  "package-lock.json"
  "cursorrules"
)

echo "✅ Arbo cible chargée : ${#AUTHORIZED_FILES[@]} fichiers autorisés + ${#DOC_FILES[@]} fichiers documentation"
echo ""

# ============================================================================
# 2. PARCOURIR L'INTÉGRALITÉ DU PROJET
# ============================================================================

echo "2. SCAN COMPLET DE L'ARBORESCENCE ACTUELLE"
echo "--------------------------------------------"

# Créer la liste de tous les fichiers
TEMP_ARBO=$(mktemp)
find . -type f \
  -not -path "./node_modules/*" \
  -not -path "./.next/*" \
  -not -path "./.git/*" \
  -not -path "./.cursor/*" \
  | sed 's|^\./||' \
  | sort > "$TEMP_ARBO"

TOTAL_FILES=$(wc -l < "$TEMP_ARBO")
echo "📁 Total fichiers trouvés : $TOTAL_FILES"
echo ""

# ============================================================================
# 3. COMPARER ARBO ACTUELLE VS ARBO CIBLE
# ============================================================================

echo "3. IDENTIFICATION DES FICHIERS NON AUTORISÉS"
echo "----------------------------------------------"

UNKNOWN_FILES=()
UNKNOWN_COUNT=0

while IFS= read -r file; do
  IS_AUTHORIZED=false
  
  # Vérifier dans fichiers autorisés
  for auth_file in "${AUTHORIZED_FILES[@]}"; do
    if [[ "$file" == "$auth_file" ]]; then
      IS_AUTHORIZED=true
      break
    fi
  done
  
  # Vérifier dans fichiers documentation
  if [[ "$IS_AUTHORIZED" == false ]]; then
    for doc_file in "${DOC_FILES[@]}"; do
      if [[ "$file" == "$doc_file" ]] || [[ "$file" == "$doc_file"/* ]]; then
        IS_AUTHORIZED=true
        break
      fi
    done
  fi
  
  # Vérifier fichiers générés/ignorés (next-env.d.ts, *.tsbuildinfo, etc.)
  if [[ "$IS_AUTHORIZED" == false ]]; then
    if [[ "$file" =~ ^(next-env\.d\.ts|.*\.tsbuildinfo|.*\.example|.*\.shims\.d\.ts)$ ]]; then
      IS_AUTHORIZED=true  # Marqué pour suppression mais autorisé dans .gitignore
    fi
  fi
  
  if [[ "$IS_AUTHORIZED" == false ]]; then
    UNKNOWN_FILES+=("$file")
    ((UNKNOWN_COUNT++))
  fi
done < "$TEMP_ARBO"

if [[ $UNKNOWN_COUNT -eq 0 ]]; then
  echo "✅ Aucun fichier non autorisé trouvé"
else
  echo "⚠️  $UNKNOWN_COUNT fichier(s) non autorisé(s) trouvé(s) :"
  for file in "${UNKNOWN_FILES[@]}"; do
    echo "   ❌ $file"
  done
fi
echo ""

# ============================================================================
# 4. VÉRIFIER LES DÉPENDANCES
# ============================================================================

echo "4. VÉRIFICATION DES DÉPENDANCES"
echo "--------------------------------"

# Packages autorisés selon PHASE3-AUDIT-DEPENDENCIES.md
declare -a AUTHORIZED_DEPS=(
  "next"
  "react"
  "react-dom"
)

declare -a AUTHORIZED_DEV_DEPS=(
  "@eslint/eslintrc"
  "@types/node"
  "@types/react"
  "@types/react-dom"
  "@vitest/coverage-v8"
  "autoprefixer"
  "eslint"
  "eslint-config-next"
  "eslint-plugin-import"
  "postcss"
  "tailwindcss"
  "typescript"
  "vitest"
)

if [[ -f "package.json" ]]; then
  echo "📦 Analyse de package.json..."
  
  # Extraire les dépendances actuelles
  DEPS=$(node -e "const pkg = require('./package.json'); console.log(Object.keys(pkg.dependencies || {}).join('\n'))" 2>/dev/null || echo "")
  DEV_DEPS=$(node -e "const pkg = require('./package.json'); console.log(Object.keys(pkg.devDependencies || {}).join('\n'))" 2>/dev/null || echo "")
  
  UNAUTHORIZED_PACKAGES=()
  
  # Vérifier dependencies
  while IFS= read -r dep; do
    [[ -z "$dep" ]] && continue
    IS_AUTHORIZED=false
    for auth_dep in "${AUTHORIZED_DEPS[@]}"; do
      if [[ "$dep" == "$auth_dep" ]]; then
        IS_AUTHORIZED=true
        break
      fi
    done
    if [[ "$IS_AUTHORIZED" == false ]]; then
      UNAUTHORIZED_PACKAGES+=("$dep (dependency)")
    fi
  done <<< "$DEPS"
  
  # Vérifier devDependencies
  while IFS= read -r dep; do
    [[ -z "$dep" ]] && continue
    IS_AUTHORIZED=false
    for auth_dep in "${AUTHORIZED_DEV_DEPS[@]}"; do
      if [[ "$dep" == "$auth_dep" ]]; then
        IS_AUTHORIZED=true
        break
      fi
    done
    if [[ "$IS_AUTHORIZED" == false ]]; then
      UNAUTHORIZED_PACKAGES+=("$dep (devDependency)")
    fi
  done <<< "$DEV_DEPS"
  
  if [[ ${#UNAUTHORIZED_PACKAGES[@]} -eq 0 ]]; then
    echo "✅ Toutes les dépendances sont autorisées"
  else
    echo "⚠️  ${#UNAUTHORIZED_PACKAGES[@]} package(s) non autorisé(s) :"
    for pkg in "${UNAUTHORIZED_PACKAGES[@]}"; do
      echo "   ❌ $pkg"
    done
  fi
else
  echo "❌ package.json introuvable"
fi

# Nettoyer les dépendances orphelines
if [[ -f "package.json" ]]; then
  echo "🧹 Nettoyage des dépendances (npm prune && npm dedupe)..."
  if npm prune && npm dedupe; then
    echo "   ✅ Nettoyage terminé"
  else
    echo "   ⚠️  Nettoyage terminé avec avertissements"
  fi
fi
echo ""

# ============================================================================
# 5. VÉRIFIER LES CONFIGS ET CSS
# ============================================================================

echo "5. VÉRIFICATION DES RÉSIDUS DESIGN DANS LES FICHIERS"
echo "-----------------------------------------------------"

# Mots-clés design à rechercher
declare -a DESIGN_KEYWORDS=(
  "@/components"
  "@/ui"
  "@/shared"
  "@/layout"
  "@/sections"
  "@radix-ui"
  "framer-motion"
  "magicui"
  "clsx"
  "tailwind-merge"
  "storybook"
  "glass"
  "glow"
  "orb"
  "hero"
  "mockup"
  "pricing"
  "offer"
  "benefit"
  "navbar"
  "footer"
)

RESIDUS_FOUND=0
RESIDUS_FILES=()

while IFS= read -r file; do
  if [[ -f "$file" ]]; then
    # Rechercher les mots-clés design
    MATCHES=$(grep -iE "$(IFS='|'; echo "${DESIGN_KEYWORDS[*]}")" "$file" 2>/dev/null | head -5 || true)
    
    if [[ -n "$MATCHES" ]]; then
      RESIDUS_FILES+=("$file")
      ((RESIDUS_FOUND++))
    fi
  fi
done < "$TEMP_ARBO"

if [[ $RESIDUS_FOUND -eq 0 ]]; then
  echo "✅ Aucun résidu design trouvé dans les fichiers autorisés"
else
  echo "⚠️  $RESIDUS_FOUND fichier(s) contient(ennent) des résidus design :"
  for file in "${RESIDUS_FILES[@]}"; do
    echo "   ⚠️  $file"
    grep -iE "$(IFS='|'; echo "${DESIGN_KEYWORDS[*]}")" "$file" 2>/dev/null | head -3 | sed 's/^/      /' || true
  done
fi
echo ""

# ============================================================================
# 6. VÉRIFIER LES FICHIERS D'EXEMPLE/BUILD
# ============================================================================

echo "6. IDENTIFICATION DES FICHIERS D'EXEMPLE/BUILD"
echo "-----------------------------------------------"

BUILD_FILES=()
while IFS= read -r file; do
  if [[ "$file" =~ \.(example|tsbuildinfo|shims\.d\.ts)$ ]]; then
    BUILD_FILES+=("$file")
  fi
done < "$TEMP_ARBO"

if [[ ${#BUILD_FILES[@]} -eq 0 ]]; then
  echo "✅ Aucun fichier d'exemple/build trouvé"
else
  echo "⚠️  ${#BUILD_FILES[@]} fichier(s) d'exemple/build à supprimer :"
  for file in "${BUILD_FILES[@]}"; do
    echo "   ❌ $file"
  done
fi
echo ""

# ============================================================================
# 7. VÉRIFIER LES DOSSIERS RÉSIDUELS
# ============================================================================

echo "7. VÉRIFICATION DES DOSSIERS RÉSIDUELS"
echo "--------------------------------------"

declare -a FORBIDDEN_DIRS=(
  "components"
  "stories"
  "System"
  ".storybook"
  "registry"
  "scripts"
)

RESIDUAL_DIRS=()

for dir in "${FORBIDDEN_DIRS[@]}"; do
  if [[ -d "$dir" ]]; then
    RESIDUAL_DIRS+=("$dir")
  fi
done

if [[ ${#RESIDUAL_DIRS[@]} -eq 0 ]]; then
  echo "✅ Aucun dossier résiduel trouvé"
else
  echo "⚠️  ${#RESIDUAL_DIRS[@]} dossier(s) résiduel(s) à supprimer :"
  for dir in "${RESIDUAL_DIRS[@]}"; do
    echo "   ❌ $dir/"
  done
fi
echo ""

# ============================================================================
# 8. VALIDATION FINALE
# ============================================================================

echo "8. VALIDATION FINALE"
echo "--------------------"

echo "🔍 Exécution des vérifications..."
echo ""

# Type-check
echo "📝 Type-check..."
if npm run type-check > /tmp/type-check.log 2>&1; then
  echo "   ✅ Type-check : OK"
else
  echo "   ❌ Type-check : ÉCHEC"
  echo "   Voir /tmp/type-check.log pour détails"
fi

# Lint
echo "📝 Lint..."
if npm run lint > /tmp/lint.log 2>&1; then
  echo "   ✅ Lint : OK"
else
  echo "   ❌ Lint : ÉCHEC"
  echo "   Voir /tmp/lint.log pour détails"
fi

# Build
echo "📝 Build..."
if npm run build > /tmp/build.log 2>&1; then
  echo "   ✅ Build : OK"
else
  echo "   ❌ Build : ÉCHEC"
  echo "   Voir /tmp/build.log pour détails"
fi

echo ""

# ============================================================================
# 9. RAPPORT FINAL
# ============================================================================

echo "9. GÉNÉRATION DU RAPPORT"
echo "-------------------------"

REPORT_FILE="PHASE4-VERIFICATION-RAPPORT-$(date +%Y%m%d-%H%M%S).md"

cat > "$REPORT_FILE" << EOF
# Phase 4 — Rapport de Vérification Systématique

**Date** : $(date)  
**Branche** : $(git branch --show-current 2>/dev/null || echo 'N/A')  
**Statut** : ⏳ Vérification effectuée

---

## Résultats de la Vérification

### 1. Fichiers Non Autorisés

EOF

if [[ $UNKNOWN_COUNT -eq 0 ]]; then
  echo "✅ **Aucun fichier non autorisé trouvé**" >> "$REPORT_FILE"
else
  echo "⚠️  **$UNKNOWN_COUNT fichier(s) non autorisé(s)** :" >> "$REPORT_FILE"
  echo "" >> "$REPORT_FILE"
  for file in "${UNKNOWN_FILES[@]}"; do
    echo "- \`$file\`" >> "$REPORT_FILE"
  done
fi

cat >> "$REPORT_FILE" << EOF

### 2. Dépendances Non Autorisées

EOF

if [[ ${#UNAUTHORIZED_PACKAGES[@]} -eq 0 ]]; then
  echo "✅ **Toutes les dépendances sont autorisées**" >> "$REPORT_FILE"
else
  echo "⚠️  **${#UNAUTHORIZED_PACKAGES[@]} package(s) non autorisé(s)** :" >> "$REPORT_FILE"
  echo "" >> "$REPORT_FILE"
  for pkg in "${UNAUTHORIZED_PACKAGES[@]}"; do
    echo "- \`$pkg\`" >> "$REPORT_FILE"
  done
fi

cat >> "$REPORT_FILE" << EOF

### 3. Résidus Design dans les Fichiers

EOF

if [[ $RESIDUS_FOUND -eq 0 ]]; then
  echo "✅ **Aucun résidu design trouvé**" >> "$REPORT_FILE"
else
  echo "⚠️  **$RESIDUS_FOUND fichier(s) contient(ennent) des résidus** :" >> "$REPORT_FILE"
  echo "" >> "$REPORT_FILE"
  for file in "${RESIDUS_FILES[@]}"; do
    echo "- \`$file\`" >> "$REPORT_FILE"
  done
fi

cat >> "$REPORT_FILE" << EOF

### 4. Fichiers d'Exemple/Build

EOF

if [[ ${#BUILD_FILES[@]} -eq 0 ]]; then
  echo "✅ **Aucun fichier d'exemple/build trouvé**" >> "$REPORT_FILE"
else
  echo "⚠️  **${#BUILD_FILES[@]} fichier(s) à supprimer** :" >> "$REPORT_FILE"
  echo "" >> "$REPORT_FILE"
  for file in "${BUILD_FILES[@]}"; do
    echo "- \`$file\`" >> "$REPORT_FILE"
  done
fi

cat >> "$REPORT_FILE" << EOF

### 5. Dossiers Résiduels

EOF

if [[ ${#RESIDUAL_DIRS[@]} -eq 0 ]]; then
  echo "✅ **Aucun dossier résiduel trouvé**" >> "$REPORT_FILE"
else
  echo "⚠️  **${#RESIDUAL_DIRS[@]} dossier(s) à supprimer** :" >> "$REPORT_FILE"
  echo "" >> "$REPORT_FILE"
  for dir in "${RESIDUAL_DIRS[@]}"; do
    echo "- \`$dir/\`" >> "$REPORT_FILE"
  done
fi

cat >> "$REPORT_FILE" << EOF

### 6. Validation Finale

- **Type-check** : $(grep -q "error" /tmp/type-check.log 2>/dev/null && echo "❌ ÉCHEC" || echo "✅ OK")
- **Lint** : $(grep -q "error\|warning" /tmp/lint.log 2>/dev/null && echo "❌ ÉCHEC" || echo "✅ OK")
- **Build** : $(grep -q "error\|failed" /tmp/build.log 2>/dev/null && echo "❌ ÉCHEC" || echo "✅ OK")

---

## Actions Recommandées

1. Supprimer les fichiers non autorisés identifiés
2. Supprimer les packages non autorisés
3. Nettoyer les résidus design dans les fichiers
4. Supprimer les fichiers d'exemple/build
5. Supprimer les dossiers résiduels

---

**Rapport généré** : \`$REPORT_FILE\`
EOF

echo "✅ Rapport généré : $REPORT_FILE"
echo ""

# Nettoyage
rm -f "$TEMP_ARBO"

echo "=== VÉRIFICATION TERMINÉE ==="
echo ""
echo "📊 Résumé :"
echo "   - Fichiers non autorisés : $UNKNOWN_COUNT"
echo "   - Packages non autorisés : ${#UNAUTHORIZED_PACKAGES[@]}"
echo "   - Résidus design : $RESIDUS_FOUND"
echo "   - Fichiers d'exemple/build : ${#BUILD_FILES[@]}"
echo "   - Dossiers résiduels : ${#RESIDUAL_DIRS[@]}"
echo ""
echo "📄 Rapport complet : $REPORT_FILE"

