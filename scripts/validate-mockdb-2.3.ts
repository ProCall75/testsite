import * as fs from 'fs'
import * as path from 'path'

const ROOT = path.resolve(process.cwd(), 'lib/mockdb')
const dataDir = path.join(ROOT, 'data')
const collectionsDir = path.join(ROOT, 'collections')
const schemaFile = path.join(ROOT, 'schema.ts')
const idsFile = path.join(dataDir, 'ids.ts')

// --- TABLES / COLLECTIONS ---

const expectedCollections = [
  'clients',
  'subscriptions',
  'products',
  'clientProducts',
  'teamMembers',
  'receptionConfigs',
  'receptionDetails',
  'receptionServices',
  'receptionIntegrations',
  'receptionTeamMembers',
  'receptionTeamMemberSkills',
  'receptionTeamMemberAvailabilities',
  'receptionTeamMemberStats',
]

// mapping collection → fichier
const collectionToFile: Record<string, string> = {
  clients: 'client.ts',
  subscriptions: 'subscription.ts',
  products: 'product.ts',
  clientProducts: 'client-product.ts',
  teamMembers: 'team-member.ts',
  receptionConfigs: 'reception-config.ts',
  receptionDetails: 'reception-details.ts',
  receptionServices: 'reception-service.ts',
  receptionIntegrations: 'reception-integration.ts',
  receptionTeamMembers: 'reception-team-member.ts',
  receptionTeamMemberSkills: 'reception-team-member-skill.ts',
  receptionTeamMemberAvailabilities: 'reception-team-member-availability.ts',
  receptionTeamMemberStats: 'reception-team-member-stats.ts',
}

function fail(msg: string) {
  console.error('❌ ' + msg)
  process.exit(1)
}

function ok(msg: string) {
  console.log('✔ ' + msg)
}

// --- 1. Vérifier dossiers ---

if (!fs.existsSync(dataDir)) fail('Manque dossier /lib/mockdb/data')
if (!fs.existsSync(collectionsDir)) fail('Manque dossier /lib/mockdb/collections')
ok('Dossiers présents')

// --- 2. Vérifier ids.ts ---

if (!fs.existsSync(idsFile)) fail('Manque fichier /data/ids.ts')
const idsContent = fs.readFileSync(idsFile, 'utf8')
if (!/export const [A-Z_]+ =/.test(idsContent)) {
  fail('ids.ts ne contient aucune constante exportée')
}
ok('ids.ts présent et valide')

// --- 3. Vérifier fichiers /data ---

expectedCollections.forEach(collection => {
  const file = collectionToFile[collection]
  const full = path.join(dataDir, file)
  if (!fs.existsSync(full)) fail(`Manque fichier data: ${file}`)
})
ok('Tous les fichiers data présents')

// --- 4. Vérification structure des fichiers data ---

expectedCollections.forEach(collection => {
  const file = collectionToFile[collection]
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8')

  // export const <collection>:
  if (!new RegExp(`export const ${collection}\\s*:`).test(content)) {
    fail(`Fichier ${file} n'exporte pas correctement const ${collection}: Type[]`)
  }

  // Vérif tableau bracket
  if (!content.includes('[') || !content.includes(']')) {
    fail(`Fichier ${file} ne contient pas de tableau []`)
  }

  // Vérif absence de fonction
  if (/function\s*\(|=>/.test(content)) {
    fail(`Fichier ${file} contient une fonction (interdit)`)
  }
})

ok('Structure des fichiers data correcte')

// --- 5. Vérifier schema.ts ---

if (!fs.existsSync(schemaFile)) fail('Manque schema.ts')
const schemaContent = fs.readFileSync(schemaFile, 'utf8')

// MUST reference either data.<collection> OR ...data
expectedCollections.forEach(collection => {
  const direct = `${collection}: data.${collection}`
  const spread = `...data`
  if (!schemaContent.includes(direct) && !schemaContent.includes(spread)) {
    fail(`schema.ts ne référence pas ${collection}`)
  }
})

ok('schema.ts référence bien toutes les collections')

// --- 6. Vérification relations (regex, pas eval) ---

function extractObjects(content: string): any[] {
  const matches = content.match(/\{[\s\S]*?\}/g)
  if (!matches) return []
  return matches.map(m => m)
}

function getObjects(filename: string) {
  const content = fs.readFileSync(filename, 'utf8')
  return extractObjects(content)
}

const team = getObjects(path.join(dataDir, 'team-member.ts'))
const services = getObjects(path.join(dataDir, 'reception-service.ts'))
const skills = getObjects(path.join(dataDir, 'reception-team-member-skill.ts'))
const avail = getObjects(path.join(dataDir, 'reception-team-member-availability.ts'))
const stats = getObjects(path.join(dataDir, 'reception-team-member-stats.ts'))

function hasId(objs: string[], id: string) {
  return objs.some(o => o.includes(`id: '${id}'`) || o.includes(`teamMemberId: '${id}'`) )
}

// Skills
skills.forEach(s => {
  const tm = s.match(/teamMemberId:\s*'([^']+)'/)
  const sv = s.match(/serviceId:\s*'([^']+)'/)

  if (tm && !team.find(o => o.includes(`id: '${tm[1]}'`))) {
    fail(`skill teamMemberId ${tm[1]} introuvable dans team-members`)
  }
  if (sv && !services.find(o => o.includes(`id: '${sv[1]}'`))) {
    fail(`skill serviceId ${sv[1]} introuvable dans services`)
  }
})
ok('Relations skills OK')

// Availability
avail.forEach(a => {
  const tm = a.match(/teamMemberId:\s*'([^']+)'/)
  if (tm && !team.find(o => o.includes(`id: '${tm[1]}'`))) {
    fail(`availability teamMemberId ${tm[1]} introuvable`)
  }
})
ok('Relations availability OK')

// Stats
stats.forEach(s => {
  const tm = s.match(/teamMemberId:\s*'([^']+)'/)
  if (tm && !team.find(o => o.includes(`id: '${tm[1]}'`))) {
    fail(`stats teamMemberId ${tm[1]} introuvable`)
  }
})
ok('Relations stats OK')

console.log('\n🎉 VALIDATION COMPLÈTE : MOCK DB 2.3 OK')
process.exit(0)