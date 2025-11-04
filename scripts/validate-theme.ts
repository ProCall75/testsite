#!/usr/bin/env node
/**
 * Script de validation du thème
 * Vérifie la cohérence entre tailwind.config.ts et globals.css
 */

import fs from 'fs'
import path from 'path'

const errors: string[] = []
const warnings: string[] = []

// Lire les fichiers
const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.ts')
const globalsCssPath = path.join(process.cwd(), 'app', 'globals.css')

if (!fs.existsSync(tailwindConfigPath)) {
  console.error('❌ tailwind.config.ts not found')
  process.exit(1)
}

if (!fs.existsSync(globalsCssPath)) {
  console.error('❌ app/globals.css not found')
  process.exit(1)
}

const tailwindConfig = fs.readFileSync(tailwindConfigPath, 'utf-8')
const globalsCss = fs.readFileSync(globalsCssPath, 'utf-8')

// Extraire les variables CSS utilisées dans tailwind.config.ts
const tailwindVars = tailwindConfig.match(/var\(--([\w-]+)\)/g) || []
const tailwindVarNames = tailwindVars.map(v => v.replace(/var\(--|\)/g, ''))

// Extraire les variables CSS définies dans globals.css
const cssVarDefinitions = globalsCss.match(/--([\w-]+):\s*[^;]+;/g) || []
const cssVarNames = cssVarDefinitions.map(v => v.match(/--([\w-]+)/)?.[1]).filter(Boolean) as string[]

// Variables définies dynamiquement (ex: par Next.js fonts)
const DYNAMIC_VARS = ['font-fraunces', 'font-inter']

// Vérifier que chaque variable utilisée dans Tailwind existe dans globals.css
const missingVars = tailwindVarNames.filter(
  varName => !cssVarNames.includes(varName) && !DYNAMIC_VARS.includes(varName)
)
if (missingVars.length > 0) {
  errors.push(`Variables utilisées dans tailwind.config.ts mais absentes de globals.css: ${missingVars.join(', ')}`)
}

// Vérifier les valeurs hex hardcodées dans tailwind.config.ts
const hexValues = tailwindConfig.match(/#[0-9A-Fa-f]{3,6}/g)
if (hexValues) {
  warnings.push(`Valeurs hex trouvées dans tailwind.config.ts (devraient utiliser hsl(var(--...))): ${hexValues.join(', ')}`)
}

// Vérifier les valeurs rgba/rgb hardcodées dans globals.css (sauf dans les commentaires)
const rgbaValues = globalsCss.match(/rgba?\([^)]+\)/g)
if (rgbaValues) {
  const nonCommentRgba = rgbaValues.filter(rgba => {
    const index = globalsCss.indexOf(rgba)
    const beforeRgba = globalsCss.substring(Math.max(0, index - 100), index)
    return !beforeRgba.includes('/*') || beforeRgba.includes('*/')
  })
  if (nonCommentRgba.length > 0) {
    warnings.push(`${nonCommentRgba.length} valeurs rgba() trouvées dans globals.css (devraient utiliser hsl(var(--...)) si possible)`)
  }
}

// Afficher les résultats
if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ Validation réussie: tous les tokens sont correctement synchronisés')
  process.exit(0)
} else {
  if (errors.length > 0) {
    console.error('\n❌ Erreurs:')
    errors.forEach(e => console.error(`  - ${e}`))
  }
  if (warnings.length > 0) {
    console.warn('\n⚠️  Avertissements:')
    warnings.forEach(w => console.warn(`  - ${w}`))
  }
  process.exit(errors.length > 0 ? 1 : 0)
}

