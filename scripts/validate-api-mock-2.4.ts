import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'

const API_DIR = path.resolve(process.cwd(), 'lib/api/mock')

const API_FILES = {
  'client-context.ts': 'client-context.ts',
  'reception.ts': 'reception.ts',
  'pro.ts': 'pro.ts',
  'index.ts': 'index.ts',
}

function fail(msg: string) {
  console.error('❌ ' + msg)
  process.exit(1)
}

function ok(msg: string) {
  console.log('✔ ' + msg)
}

function warn(msg: string) {
  console.log('⚠ ' + msg)
}

// 1. Vérifier existence des fichiers
console.log('\n📁 Vérification des fichiers...\n')

if (!fs.existsSync(API_DIR)) {
  fail(`Dossier ${API_DIR} manquant`)
}

for (const file of Object.values(API_FILES)) {
  const filePath = path.join(API_DIR, file)
  if (!fs.existsSync(filePath)) {
    fail(`Fichier manquant: ${file}`)
  }
}

ok('Tous les fichiers présents')

// 2. Vérifier ordre strict des imports
console.log('\n📦 Vérification ordre des imports...\n')

function checkImportOrder(filePath: string, fileName: string) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split('\n')

  let mockDBLine = -1
  let domainTypeLine = -1
  let internalFuncLine = -1

  lines.forEach((line, idx) => {
    if (line.includes("from '@/lib/mockdb/schema'")) {
      mockDBLine = idx
    }
    if (line.includes("from '@/lib/domain'")) {
      domainTypeLine = idx
    }
    if (line.includes("from './")) {
      internalFuncLine = idx
    }
  })

  if (mockDBLine !== -1 && domainTypeLine !== -1 && mockDBLine > domainTypeLine) {
    fail(`${fileName}: mockDB doit être importé avant les types domain`)
  }

  if (domainTypeLine !== -1 && internalFuncLine !== -1 && domainTypeLine > internalFuncLine) {
    fail(`${fileName}: types domain doivent être importés avant les fonctions internes`)
  }

  if (mockDBLine !== -1 && internalFuncLine !== -1 && mockDBLine > internalFuncLine) {
    fail(`${fileName}: mockDB doit être importé avant les fonctions internes`)
  }
}

for (const [key, file] of Object.entries(API_FILES)) {
  if (key !== 'index.ts') {
    checkImportOrder(path.join(API_DIR, file), file)
  }
}

ok('Ordre des imports respecté')

// 3. Vérifier ordre strict des champs dans objets retournés
console.log('\n🔤 Vérification ordre des champs...\n')

function checkFieldOrder(filePath: string, fileName: string) {
  const content = fs.readFileSync(filePath, 'utf8')

  if (fileName === 'client-context.ts') {
    const returnMatch = content.match(/return\s*\{([\s\S]+?)\}/)
    if (returnMatch) {
      const fields = returnMatch[1]
      const expectedOrder = ['client', 'subscriptions', 'clientProducts', 'reception', 'pros']
      const fieldOrder = expectedOrder.map((field) => {
        const regex = new RegExp(`\\b${field}\\s*:`, 'g')
        const match = fields.match(regex)
        return match ? fields.indexOf(match[0]) : -1
      })

      for (let i = 0; i < fieldOrder.length - 1; i++) {
        if (fieldOrder[i] !== -1 && fieldOrder[i + 1] !== -1 && fieldOrder[i] > fieldOrder[i + 1]) {
          fail(`${fileName}: ordre des champs incorrect dans ClientContext (attendu: ${expectedOrder.join(', ')})`)
        }
      }
    }
  }

  if (fileName === 'reception.ts') {
    const returnMatch = content.match(/return\s*\{([\s\S]+?)\}/)
    if (returnMatch) {
      const fields = returnMatch[1]
      const expectedOrder = ['details', 'config', 'integrations', 'services']
      const fieldOrder = expectedOrder.map((field) => {
        const regex = new RegExp(`\\b${field}\\s*:`, 'g')
        const match = fields.match(regex)
        return match ? fields.indexOf(match[0]) : -1
      })

      for (let i = 0; i < fieldOrder.length - 1; i++) {
        if (fieldOrder[i] !== -1 && fieldOrder[i + 1] !== -1 && fieldOrder[i] > fieldOrder[i + 1]) {
          fail(`${fileName}: ordre des champs incorrect dans Reception (attendu: ${expectedOrder.join(', ')})`)
        }
      }
    }
  }

  if (fileName === 'pro.ts') {
    const returnMatch = content.match(/return\s*\{([\s\S]+?)\}/)
    const pushMatch = content.match(/pros\.push\(\s*\{([\s\S]+?)\}\s*\)/)
    const matches = [returnMatch, pushMatch].filter(Boolean)

    for (const match of matches) {
      if (match) {
        const fields = match[1]
        const expectedOrder = ['member', 'reception', 'stats', 'skills', 'availability']
        const fieldOrder = expectedOrder.map((field) => {
          const regex = new RegExp(`\\b${field}\\s*:`, 'g')
          const fieldMatch = fields.match(regex)
          return fieldMatch ? fields.indexOf(fieldMatch[0]) : -1
        })

        for (let i = 0; i < fieldOrder.length - 1; i++) {
          if (fieldOrder[i] !== -1 && fieldOrder[i + 1] !== -1 && fieldOrder[i] > fieldOrder[i + 1]) {
            fail(`${fileName}: ordre des champs incorrect dans Pro (attendu: ${expectedOrder.join(', ')})`)
          }
        }
      }
    }
  }
}

for (const [key, file] of Object.entries(API_FILES)) {
  if (key !== 'index.ts') {
    checkFieldOrder(path.join(API_DIR, file), file)
  }
}

ok('Ordre des champs respecté')

// 4. Vérifier zéro ! (non-null assertion)
console.log('\n🚫 Vérification absence de non-null assertion...\n')

for (const [key, file] of Object.entries(API_FILES)) {
  if (key !== 'index.ts') {
    const content = fs.readFileSync(path.join(API_DIR, file), 'utf8')
    // Détecter les non-null assertions TypeScript: variable! ou object.property! (sans espace avant !)
    // Pattern: identifiant suivi directement de ! (pas d'espace), mais pas dans if (! ou !==
    const nonNullPattern = /[a-zA-Z_$][a-zA-Z0-9_$]*(?:\.[a-zA-Z_$][a-zA-Z0-9_$]*)*!/g
    const matches = content.match(nonNullPattern)
    if (matches) {
      // Vérifier que ce n'est pas dans un contexte légitime (if (!, !==, etc.)
      const lines = content.split('\n')
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        const lineMatches = line.match(nonNullPattern)
        if (lineMatches && !line.match(/if\s*\(/) && !line.match(/!==/)) {
          fail(`${file}: ligne ${i + 1} contient une non-null assertion (!) - interdit: ${line.trim()}`)
        }
      }
    }
  }
}

ok('Aucun ! (non-null assertion) détecté')

// 5. Vérifier throw uniquement pour client absent
console.log('\n⚡ Vérification gestion des erreurs...\n')

const clientContextPath = path.join(API_DIR, 'client-context.ts')
const clientContextContent = fs.readFileSync(clientContextPath, 'utf8')
const throwMatches = clientContextContent.match(/throw\s+new\s+Error/g)
if (!throwMatches || throwMatches.length !== 1) {
  fail('client-context.ts doit contenir exactement 1 throw (pour client absent)')
}
if (!clientContextContent.includes('client manquant')) {
  fail('client-context.ts: le throw doit mentionner "client manquant"')
}

for (const [key, file] of Object.entries(API_FILES)) {
  if (key !== 'client-context.ts' && key !== 'index.ts') {
    const content = fs.readFileSync(path.join(API_DIR, file), 'utf8')
    const throwMatches = content.match(/throw\s+new\s+Error/g)
    if (throwMatches && throwMatches.length > 0) {
      fail(`${file}: ne doit pas contenir de throw (sauf client-context.ts)`)
    }
  }
}

ok('Throw uniquement pour client absent')

// 6. Vérifier absence de spread d'objet
console.log('\n📊 Vérification absence de spread...\n')

for (const [key, file] of Object.entries(API_FILES)) {
  if (key !== 'index.ts') {
    const content = fs.readFileSync(path.join(API_DIR, file), 'utf8')
    const spreadMatches = content.match(/\.\.\.[a-zA-Z]/g)
    if (spreadMatches && spreadMatches.length > 0) {
      fail(`${file}: contient des spread d'objet (...) - interdit`)
    }
  }
}

ok('Aucun spread d\'objet détecté')

// 7. Vérifier types de retour
console.log('\n📝 Vérification types de retour...\n')

const clientContextContent2 = fs.readFileSync(path.join(API_DIR, 'client-context.ts'), 'utf8')
if (!clientContextContent2.includes('getClientContext(): ClientContext')) {
  fail('client-context.ts: getClientContext() doit retourner ClientContext')
}

const receptionContent = fs.readFileSync(path.join(API_DIR, 'reception.ts'), 'utf8')
if (!receptionContent.includes('getReception(): Reception')) {
  fail('reception.ts: getReception() doit retourner Reception')
}

const proContent = fs.readFileSync(path.join(API_DIR, 'pro.ts'), 'utf8')
if (!proContent.includes('getPros(): Pro[]')) {
  fail('pro.ts: getPros() doit retourner Pro[]')
}
if (!proContent.includes('getProById(teamMemberId: string): Pro | null')) {
  fail('pro.ts: getProById() doit retourner Pro | null')
}

ok('Types de retour corrects')

// 8. Vérifier getPros() retourne TOUS les teamMembers
console.log('\n👥 Vérification getPros()...\n')

if (!proContent.includes('for (const member of mockDB.teamMembers)')) {
  fail('pro.ts: getPros() doit boucler sur TOUS les teamMembers (pas de filtrage)')
}

ok('getPros() retourne tous les teamMembers')

// 9. Vérifier getProById() utilise teamMemberId tel quel
console.log('\n🔍 Vérification getProById()...\n')

if (!proContent.includes('mockDB.teamMembers.find((m) => m.id === teamMemberId)')) {
  warn('getProById() devrait chercher directement dans mockDB.teamMembers (optimisation)')
}

if (proContent.includes('teamMemberId.trim') || proContent.includes('teamMemberId.toLowerCase')) {
  fail('pro.ts: getProById() ne doit pas modifier teamMemberId (pas de trim/toLowerCase)')
}

ok('getProById() utilise teamMemberId tel quel')

// 10. Vérifier null-safety
console.log('\n🛡️ Vérification null-safety...\n')

const allContent = Object.entries(API_FILES)
  .filter(([key]) => key !== 'index.ts')
  .map(([_, file]) => fs.readFileSync(path.join(API_DIR, file), 'utf8'))
  .join('\n')

if (!allContent.includes('?? []') && !allContent.includes('?? null') && !allContent.includes('?? {')) {
  warn('Aucune utilisation de null-safety détectée (?? [] ou ?? null ou ?? {})')
} else {
  ok('Null-safety utilisée (?? [], ?? null, valeurs par défaut)')
}

// 11. Vérifier compilation TypeScript
console.log('\n🔨 Vérification compilation TypeScript...\n')

try {
  execSync('npx tsc --noEmit --project tsconfig.json', {
    cwd: process.cwd(),
    stdio: 'pipe',
  })
  ok('Compilation TypeScript valide')
} catch (error: any) {
  const output = error.stdout?.toString() || error.stderr?.toString() || error.message
  fail(`Erreur de compilation TypeScript:\n${output}`)
}

// 12. Vérifier exports dans index.ts
console.log('\n📤 Vérification exports index.ts...\n')

const indexContent = fs.readFileSync(path.join(API_DIR, 'index.ts'), 'utf8')

if (!indexContent.includes("export { getClientContext } from './client-context'")) {
  fail('index.ts: doit exporter getClientContext')
}

if (!indexContent.includes("export { getPros, getProById } from './pro'")) {
  fail('index.ts: doit exporter getPros et getProById')
}

if (!indexContent.includes("export { getReception } from './reception'")) {
  fail('index.ts: doit exporter getReception')
}

ok('Exports index.ts corrects')

console.log('\n🎉 VALIDATION COMPLÈTE : API MOCK 2.4 OK\n')
process.exit(0)

