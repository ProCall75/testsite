#!/usr/bin/env node
/**
 * Script de validation anti-hardcode
 * Détecte les valeurs de couleur hardcodées dans les fichiers du projet
 */

import fs from 'fs'
import path from 'path'

// Patterns à rechercher
const HARDCODE_PATTERNS = [
  /rgba?\([^)]+\)/g,  // rgba() ou rgb()
  /#[0-9A-Fa-f]{3,6}/g,  // Hex colors
  /hsl\([^)]+\)/g,  // HSL hardcodé (pas hsl(var(--...)))
]

// Exceptions acceptables (ex: logos Google, etc.)
const ACCEPTABLE_HARDCODES = [
  '#4285F4',  // Google Blue
  '#34A853',  // Google Green
  '#FBBC05',  // Google Yellow
  '#EA4335',  // Google Red
]

interface HardcodeMatch {
  file: string
  line: number
  content: string
  pattern: string
}

const errors: HardcodeMatch[] = []

function shouldIgnoreFile(filePath: string): boolean {
  const ignorePatterns = [
    'node_modules',
    '.next',
    'dist',
    'build',
    '.config.ts',
    '.config.js',
    'scripts',
    'lib/constants',
  ]
  return ignorePatterns.some(pattern => filePath.includes(pattern))
}

function scanFile(filePath: string): HardcodeMatch[] {
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  const matches: HardcodeMatch[] = []
  const isGlobalsCss = filePath.includes('globals.css')

  lines.forEach((line, index) => {
    // Ignorer les commentaires
    if (line.trim().startsWith('//') || line.trim().startsWith('/*')) {
      return
    }

    HARDCODE_PATTERNS.forEach(pattern => {
      const lineMatches = line.match(pattern)
      if (lineMatches) {
        lineMatches.forEach(match => {
          // Vérifier si c'est une exception acceptable
          if (ACCEPTABLE_HARDCODES.includes(match)) {
            return
          }
          
          // Ignorer hsl(var(--...)) qui sont corrects
          if (match.includes('hsl(var(--')) {
            return
          }
          
          // Dans globals.css, ignorer les définitions de variables CSS (--variable: hsl(...))
          if (isGlobalsCss && line.match(/^\s*--[\w-]+:\s/)) {
            return
          }
          
          // Ignorer les valeurs neutres (blanc/noir/gris avec opacité) - utilitaires décoratifs
          const neutralColorPattern = /hsl\(0\s+0%\s+(\d+)%\s*\/\s*[\d.]+\)/
          if (match.match(neutralColorPattern) || match.match(/hsl\(0\s+0%\s+100%\s*\/\s*[\d.]+\)/) || match.match(/hsl\(0\s+0%\s+0%\s*\/\s*[\d.]+\)/)) {
            return
          }
          
          // Ignorer les valeurs dans les gradients SVG (définitions de gradients acceptables)
          if (line.includes('linearGradient') || line.includes('radialGradient') || line.includes('stopColor')) {
            return
          }
          
          // Ignorer les valeurs dans les commentaires CSS
          const commentMatch = line.match(/\/\*.*?\*\//)
          if (commentMatch && commentMatch[0].includes(match)) {
            return
          }

          matches.push({
            file: filePath,
            line: index + 1,
            content: line.trim(),
            pattern: match,
          })
        })
      }
    })
  })

  return matches
}

function getAllFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      if (!shouldIgnoreFile(filePath)) {
        getAllFiles(filePath, fileList)
      }
    } else if (/\.(ts|tsx|css)$/.test(file) && !shouldIgnoreFile(filePath)) {
      fileList.push(filePath)
    }
  })

  return fileList
}

// Scanner tous les fichiers pertinents
const files = getAllFiles(process.cwd())

files.forEach(file => {
  const matches = scanFile(file)
  errors.push(...matches)
})

// Afficher les résultats
if (errors.length === 0) {
  console.log('✅ Aucune valeur hardcodée détectée')
  process.exit(0)
} else {
  console.error(`\n❌ ${errors.length} valeur(s) hardcodée(s) détectée(s):\n`)
  
  const groupedByFile = errors.reduce((acc, error) => {
    if (!acc[error.file]) {
      acc[error.file] = []
    }
    acc[error.file].push(error)
    return acc
  }, {} as Record<string, HardcodeMatch[]>)

  Object.entries(groupedByFile).forEach(([file, fileErrors]) => {
    console.error(`📄 ${file}:`)
    fileErrors.forEach(error => {
      console.error(`  Ligne ${error.line}: ${error.pattern}`)
      console.error(`    ${error.content.substring(0, 100)}${error.content.length > 100 ? '...' : ''}`)
    })
    console.error('')
  })

  console.error('💡 Remplacez ces valeurs par des variables CSS (hsl(var(--token)))')
  process.exit(1)
}

