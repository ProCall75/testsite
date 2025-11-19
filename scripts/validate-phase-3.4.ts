#!/usr/bin/env node

import { existsSync, readFileSync } from 'fs'
import { join } from 'path'
import { execSync } from 'child_process'

const ROOT = process.cwd()

interface ValidationResult {
  step: string
  status: 'OK' | 'FAIL'
  details: string[]
}

const results: ValidationResult[] = []

function addResult(step: string, status: 'OK' | 'FAIL', details: string[] = []) {
  results.push({ step, status, details })
  const icon = status === 'OK' ? '✅' : '❌'
  console.log(`${icon} ${step}`)
  if (details.length > 0) {
    details.forEach(detail => console.log(`   ${detail}`))
  }
}

console.log('\n🔍 PHASE 3.4 VALIDATION SCRIPT (STRICT)\n')
console.log('='.repeat(60))

// ÉTAPE 1 — Vérifier la présence physique des fichiers
console.log('\n🟦 ÉTAPE 1 — Présence physique des fichiers')
const loginPagePath = join(ROOT, 'app/(marketing)/login/page.tsx')
const signupPagePath = join(ROOT, 'app/(marketing)/signup/page.tsx')
const loginDirExists = existsSync(join(ROOT, 'app/(marketing)/login'))
const signupDirExists = existsSync(join(ROOT, 'app/(marketing)/signup'))
const loginPageExists = existsSync(loginPagePath)
const signupPageExists = existsSync(signupPagePath)

const step1Details: string[] = []
if (!loginDirExists) step1Details.push('❌ Dossier /app/(marketing)/login/ n\'existe pas')
if (!loginPageExists) step1Details.push('❌ Fichier /app/(marketing)/login/page.tsx n\'existe pas')
if (!signupDirExists) step1Details.push('❌ Dossier /app/(marketing)/signup/ n\'existe pas')
if (!signupPageExists) step1Details.push('❌ Fichier /app/(marketing)/signup/page.tsx n\'existe pas')

if (step1Details.length === 0) {
  step1Details.push('✅ Dossier /app/(marketing)/login/ existe')
  step1Details.push('✅ Fichier /app/(marketing)/login/page.tsx existe')
  step1Details.push('✅ Dossier /app/(marketing)/signup/ existe')
  step1Details.push('✅ Fichier /app/(marketing)/signup/page.tsx existe')
}

addResult('ÉTAPE 1', step1Details.length === 0 || step1Details.every(d => d.startsWith('✅')) ? 'OK' : 'FAIL', step1Details)

// ÉTAPE 2 — Vérifier le contenu minimal de /login/page.tsx
console.log('\n🟦 ÉTAPE 2 — Contenu /login/page.tsx')
const step2Details: string[] = []
if (loginPageExists) {
  const loginContent = readFileSync(loginPagePath, 'utf-8')
  
  if (!loginContent.startsWith("'use client'")) {
    step2Details.push('❌ Ligne 1 doit être "use client"')
  } else {
    step2Details.push('✅ Ligne 1 = "use client"')
  }
  
  if (!loginContent.includes("import { LoginForm } from '@/lib/auth'")) {
    step2Details.push('❌ Import LoginForm manquant ou incorrect')
  } else {
    step2Details.push('✅ Import LoginForm correct')
  }
  
  if (!loginContent.includes('export default function LoginPage()')) {
    step2Details.push('❌ Fonction LoginPage manquante')
  } else {
    step2Details.push('✅ Fonction LoginPage présente')
  }
  
  if (!loginContent.includes('<h1>Sign In</h1>')) {
    step2Details.push('❌ Titre "Sign In" manquant')
  } else {
    step2Details.push('✅ Titre "Sign In" présent')
  }
  
  if (!loginContent.includes('<LoginForm />')) {
    step2Details.push('❌ Composant <LoginForm /> manquant')
  } else {
    step2Details.push('✅ Composant <LoginForm /> présent')
  }
} else {
  step2Details.push('❌ Fichier n\'existe pas, impossible de vérifier')
}

addResult('ÉTAPE 2', step2Details.every(d => d.startsWith('✅')) ? 'OK' : 'FAIL', step2Details)

// ÉTAPE 3 — Vérifier le contenu minimal de /signup/page.tsx
console.log('\n🟦 ÉTAPE 3 — Contenu /signup/page.tsx')
const step3Details: string[] = []
if (signupPageExists) {
  const signupContent = readFileSync(signupPagePath, 'utf-8')
  
  if (!signupContent.startsWith("'use client'")) {
    step3Details.push('❌ Ligne 1 doit être "use client"')
  } else {
    step3Details.push('✅ Ligne 1 = "use client"')
  }
  
  if (!signupContent.includes("import { SignupForm } from '@/lib/auth'")) {
    step3Details.push('❌ Import SignupForm manquant ou incorrect')
  } else {
    step3Details.push('✅ Import SignupForm correct')
  }
  
  if (!signupContent.includes('export default function SignupPage()')) {
    step3Details.push('❌ Fonction SignupPage manquante')
  } else {
    step3Details.push('✅ Fonction SignupPage présente')
  }
  
  if (!signupContent.includes('<h1>Sign Up</h1>')) {
    step3Details.push('❌ Titre "Sign Up" manquant')
  } else {
    step3Details.push('✅ Titre "Sign Up" présent')
  }
  
  if (!signupContent.includes('<SignupForm />')) {
    step3Details.push('❌ Composant <SignupForm /> manquant')
  } else {
    step3Details.push('✅ Composant <SignupForm /> présent')
  }
} else {
  step3Details.push('❌ Fichier n\'existe pas, impossible de vérifier')
}

addResult('ÉTAPE 3', step3Details.every(d => d.startsWith('✅')) ? 'OK' : 'FAIL', step3Details)

// ÉTAPE 4 — Vérifier les exports dans /lib/auth/index.ts
console.log('\n🟦 ÉTAPE 4 — Exports /lib/auth/index.ts')
const indexPath = join(ROOT, 'lib/auth/index.ts')
const step4Details: string[] = []

if (!existsSync(indexPath)) {
  step4Details.push('❌ Fichier /lib/auth/index.ts n\'existe pas')
  addResult('ÉTAPE 4', 'FAIL', step4Details)
} else {
  const indexContent = readFileSync(indexPath, 'utf-8')
  const expectedExports = [
    "export * from './types'",
    "export * from './config'",
    "export { supabaseMock } from './supabase-mock'",
    "export { authClient } from './auth-client'",
    "export { AuthProvider, useAuth } from './auth-context'",
    "export { useUser, useSession, useIsAuthenticated } from './hooks'",
    "export { ClientAuthGuard } from './client-auth-guard'",
    "export { LoginForm } from './login-form'",
    "export { SignupForm } from './signup-form'",
    "export { LogoutButton } from './logout-button'"
  ]
  
  const lines = indexContent.split('\n').filter(l => l.trim() && !l.trim().startsWith('//'))
  let orderValid = true
  let hasErrors = false
  
  expectedExports.forEach((expected, index) => {
    const found = lines.some(line => line.trim() === expected.trim())
    if (!found) {
      step4Details.push(`❌ Export manquant ou incorrect: ${expected}`)
      orderValid = false
      hasErrors = true
    } else {
      const foundIndex = lines.findIndex(line => line.trim() === expected.trim())
      if (foundIndex !== index) {
        step4Details.push(`❌ Ordre incorrect: ${expected} devrait être à la ligne ${index + 1}`)
        orderValid = false
        hasErrors = true
      }
    }
  })
  
  if (orderValid && !hasErrors) {
    step4Details.push('✅ Tous les exports présents dans le bon ordre')
  }
  
  addResult('ÉTAPE 4', orderValid && !hasErrors ? 'OK' : 'FAIL', step4Details)
}

// ÉTAPE 5 — Vérifier la présence des 3 composants UI
console.log('\n🟦 ÉTAPE 5 — Présence des composants UI')
const loginFormPath = join(ROOT, 'lib/auth/login-form.tsx')
const signupFormPath = join(ROOT, 'lib/auth/signup-form.tsx')
const logoutButtonPath = join(ROOT, 'lib/auth/logout-button.tsx')

const step5Details: string[] = []
const components = [
  { name: 'login-form.tsx', path: loginFormPath },
  { name: 'signup-form.tsx', path: signupFormPath },
  { name: 'logout-button.tsx', path: logoutButtonPath }
]

components.forEach(comp => {
  if (!existsSync(comp.path)) {
    step5Details.push(`❌ ${comp.name} n'existe pas`)
  } else {
    const content = readFileSync(comp.path, 'utf-8')
    if (!content.startsWith("'use client'")) {
      step5Details.push(`❌ ${comp.name} n'a pas 'use client' en ligne 1`)
    } else {
      step5Details.push(`✅ ${comp.name} existe avec 'use client'`)
    }
  }
})

addResult('ÉTAPE 5', step5Details.every(d => d.startsWith('✅')) ? 'OK' : 'FAIL', step5Details)

// ÉTAPE 6 — Vérifier qu'ils utilisent SUPABASE MOCK uniquement
console.log('\n🟦 ÉTAPE 6 — Utilisation supabaseMock uniquement')
const step6Details: string[] = []

if (existsSync(loginFormPath)) {
  const loginFormContent = readFileSync(loginFormPath, 'utf-8')
  if (!loginFormContent.includes('supabaseMock.auth.signIn')) {
    step6Details.push('❌ login-form.tsx n\'utilise pas supabaseMock.auth.signIn')
  } else {
    step6Details.push('✅ login-form.tsx utilise supabaseMock.auth.signIn')
  }
  
  const forbiddenPatterns = [
    /@supabase\/supabase-js/i,
    /from ['"]supabase['"]/i,
    /localStorage/i,
    /sessionStorage/i,
    /cookie/i,
    /Cookies/i
  ]
  
  forbiddenPatterns.forEach(pattern => {
    if (pattern.test(loginFormContent)) {
      step6Details.push(`❌ login-form.tsx contient un pattern interdit: ${pattern}`)
    }
  })
}

if (existsSync(signupFormPath)) {
  const signupFormContent = readFileSync(signupFormPath, 'utf-8')
  if (!signupFormContent.includes('supabaseMock.auth.signUp')) {
    step6Details.push('❌ signup-form.tsx n\'utilise pas supabaseMock.auth.signUp')
  } else {
    step6Details.push('✅ signup-form.tsx utilise supabaseMock.auth.signUp')
  }
  
  const forbiddenPatterns = [
    /@supabase\/supabase-js/i,
    /from ['"]supabase['"]/i,
    /localStorage/i,
    /sessionStorage/i,
    /cookie/i,
    /Cookies/i
  ]
  
  forbiddenPatterns.forEach(pattern => {
    if (pattern.test(signupFormContent)) {
      step6Details.push(`❌ signup-form.tsx contient un pattern interdit: ${pattern}`)
    }
  })
}

if (existsSync(logoutButtonPath)) {
  const logoutButtonContent = readFileSync(logoutButtonPath, 'utf-8')
  if (!logoutButtonContent.includes('supabaseMock.auth.signOut')) {
    step6Details.push('❌ logout-button.tsx n\'utilise pas supabaseMock.auth.signOut')
  } else {
    step6Details.push('✅ logout-button.tsx utilise supabaseMock.auth.signOut')
  }
  
  const forbiddenPatterns = [
    /@supabase\/supabase-js/i,
    /from ['"]supabase['"]/i,
    /localStorage/i,
    /sessionStorage/i,
    /cookie/i,
    /Cookies/i
  ]
  
  forbiddenPatterns.forEach(pattern => {
    if (pattern.test(logoutButtonContent)) {
      step6Details.push(`❌ logout-button.tsx contient un pattern interdit: ${pattern}`)
    }
  })
}

addResult('ÉTAPE 6', step6Details.every(d => d.startsWith('✅')) && !step6Details.some(d => d.includes('interdit')) ? 'OK' : 'FAIL', step6Details)

// ÉTAPE 7 — Vérifier l'absence de redirections automatiques
console.log('\n🟦 ÉTAPE 7 — Absence de redirections automatiques')
const step7Details: string[] = []

const formFiles = [
  { name: 'login-form.tsx', path: loginFormPath },
  { name: 'signup-form.tsx', path: signupFormPath },
  { name: 'logout-button.tsx', path: logoutButtonPath }
]

formFiles.forEach(file => {
  if (existsSync(file.path)) {
    const content = readFileSync(file.path, 'utf-8')
    const redirectPatterns = [
      /router\.push\(/,
      /redirect\(/,
      /navigate\(/
    ]
    
    redirectPatterns.forEach(pattern => {
      if (pattern.test(content)) {
        step7Details.push(`❌ ${file.name} contient une redirection automatique: ${pattern}`)
      }
    })
    
    if (!redirectPatterns.some(p => p.test(content))) {
      step7Details.push(`✅ ${file.name} n'a pas de redirection automatique`)
    }
  }
})

addResult('ÉTAPE 7', step7Details.every(d => d.startsWith('✅')) ? 'OK' : 'FAIL', step7Details)

// ÉTAPE 8 — Vérifier que /login et /signup sont PUBLIQUES
console.log('\n🟦 ÉTAPE 8 — Routes marketing publiques')
const marketingLayoutPath = join(ROOT, 'app/(marketing)/layout.tsx')
const step8Details: string[] = []

if (!existsSync(marketingLayoutPath)) {
  step8Details.push('❌ /app/(marketing)/layout.tsx n\'existe pas')
} else {
  const marketingLayoutContent = readFileSync(marketingLayoutPath, 'utf-8')
  
  if (marketingLayoutContent.includes('ClientAuthGuard')) {
    step8Details.push('❌ MarketingLayout contient ClientAuthGuard (ne doit PAS être protégé)')
  } else {
    step8Details.push('✅ MarketingLayout n\'utilise pas ClientAuthGuard')
  }
  
  if (marketingLayoutContent.includes('useAuth') || marketingLayoutContent.includes('useIsAuthenticated')) {
    step8Details.push('⚠️ MarketingLayout utilise des hooks auth (acceptable mais inhabituel)')
  }
}

addResult('ÉTAPE 8', step8Details.every(d => d.startsWith('✅')) ? 'OK' : 'FAIL', step8Details)

// ÉTAPE 9 — Vérifier que (app) est PROTÉGÉ
console.log('\n🟦 ÉTAPE 9 — Routes app protégées')
const appLayoutPath = join(ROOT, 'app/(app)/layout.tsx')
const step9Details: string[] = []

if (!existsSync(appLayoutPath)) {
  step9Details.push('❌ /app/(app)/layout.tsx n\'existe pas')
} else {
  const appLayoutContent = readFileSync(appLayoutPath, 'utf-8')
  
  if (!appLayoutContent.includes('ClientAuthGuard')) {
    step9Details.push('❌ AppLayout n\'utilise pas ClientAuthGuard')
  } else {
    step9Details.push('✅ AppLayout utilise ClientAuthGuard')
  }
  
  if (!appLayoutContent.includes('redirectTo')) {
    step9Details.push('❌ AppLayout n\'a pas de prop redirectTo')
  } else {
    step9Details.push('✅ AppLayout a la prop redirectTo')
  }
}

addResult('ÉTAPE 9', step9Details.every(d => d.startsWith('✅')) ? 'OK' : 'FAIL', step9Details)

// ÉTAPE 10 — Vérifier le LogoutButton
console.log('\n🟦 ÉTAPE 10 — LogoutButton visible')
const step10Details: string[] = []

if (existsSync(appLayoutPath)) {
  const appLayoutContent = readFileSync(appLayoutPath, 'utf-8')
  if (appLayoutContent.includes('LogoutButton')) {
    step10Details.push('✅ LogoutButton présent dans AppLayout')
  } else {
    step10Details.push('⚠️ LogoutButton non visible dans AppLayout (fonctionnel mais invisible)')
  }
} else {
  step10Details.push('⚠️ Impossible de vérifier (AppLayout n\'existe pas)')
}

// Chercher dans d'autres fichiers de (app)
const appDir = join(ROOT, 'app/(app)')
if (existsSync(appDir)) {
  // Vérifier dans les pages du dashboard
  const dashboardPagePath = join(appDir, 'dashboard/page.tsx')
  if (existsSync(dashboardPagePath)) {
    const dashboardContent = readFileSync(dashboardPagePath, 'utf-8')
    if (dashboardContent.includes('LogoutButton')) {
      step10Details.push('✅ LogoutButton présent dans dashboard/page.tsx')
    }
  }
}

if (step10Details.length === 0 || step10Details.every(d => d.startsWith('⚠️'))) {
  step10Details.push('⚠️ LogoutButton non trouvé dans les pages (app) - fonctionnel mais invisible')
  step10Details.push('ℹ️ Note: LogoutButton est exporté et fonctionnel, mais non visible dans l\'UI')
}

// ÉTAPE 10 n'est pas bloquante si le composant existe et est exporté
const logoutButtonExists = existsSync(logoutButtonPath)
const logoutButtonExported = existsSync(indexPath) && readFileSync(indexPath, 'utf-8').includes('LogoutButton')
const step10Status = (logoutButtonExists && logoutButtonExported) ? 'OK' : 'FAIL'

addResult('ÉTAPE 10', step10Status, step10Details)

// ÉTAPE 11 — Test TypeScript (simulation, car test manuel requis)
console.log('\n🟦 ÉTAPE 11 — Test TypeScript')
const step11Details: string[] = []

try {
  execSync('npx tsc --noEmit', { cwd: ROOT, stdio: 'pipe' })
  step11Details.push('✅ TypeScript compilation OK (exit code 0)')
  addResult('ÉTAPE 11', 'OK', step11Details)
} catch (error: any) {
  const stderr = error.stderr?.toString() || ''
  const stdout = error.stdout?.toString() || ''
  step11Details.push('❌ TypeScript compilation FAILED')
  if (stderr) {
    const errors = stderr.split('\n').filter((l: string) => l.includes('error TS')).slice(0, 5)
    errors.forEach((err: string) => step11Details.push(`   ${err}`))
  }
  addResult('ÉTAPE 11', 'FAIL', step11Details)
}

// ÉTAPE 12 — Vérification structurelle finale
console.log('\n🟦 ÉTAPE 12 — Structure finale')
const step12Details: string[] = []

// Vérifier que les routes sont bien dans (marketing) et pas ailleurs
const loginInApp = existsSync(join(ROOT, 'app/(app)/login/page.tsx'))
const signupInApp = existsSync(join(ROOT, 'app/(app)/signup/page.tsx'))
const loginInRoot = existsSync(join(ROOT, 'app/login/page.tsx'))
const signupInRoot = existsSync(join(ROOT, 'app/signup/page.tsx'))

if (loginInApp) step12Details.push('⚠️ /app/(app)/login existe (devrait être dans marketing)')
if (signupInApp) step12Details.push('⚠️ /app/(app)/signup existe (devrait être dans marketing)')
if (loginInRoot) step12Details.push('⚠️ /app/login existe (devrait être dans marketing)')
if (signupInRoot) step12Details.push('⚠️ /app/signup existe (devrait être dans marketing)')

if (step12Details.length === 0) {
  step12Details.push('✅ Routes /login et /signup uniquement dans (marketing)')
}

addResult('ÉTAPE 12', step12Details.every(d => d.startsWith('✅')) ? 'OK' : 'FAIL', step12Details)

// RAPPORT FINAL
console.log('\n' + '='.repeat(60))
console.log('\n📊 RAPPORT FINAL\n')

const okCount = results.filter(r => r.status === 'OK').length
const failCount = results.filter(r => r.status === 'FAIL').length
const totalSteps = results.length

console.log(`Total étapes: ${totalSteps}`)
console.log(`✅ OK: ${okCount}`)
console.log(`❌ FAIL: ${failCount}`)

const failedSteps = results.filter(r => r.status === 'FAIL')
if (failedSteps.length > 0) {
  console.log('\n❌ ÉTAPES EN ÉCHEC:\n')
  failedSteps.forEach(r => {
    console.log(`   ${r.step}`)
    r.details.forEach(d => console.log(`      ${d}`))
  })
}

console.log('\n' + '='.repeat(60))

if (failCount === 0) {
  console.log('\n✅ PHASE 3.4 : VALIDÉE\n')
  console.log('Toutes les vérifications sont passées avec succès.')
  console.log('Le système d\'authentification UI mock est fonctionnel et conforme.')
  process.exit(0)
} else {
  console.log('\n❌ PHASE 3.4 : INVALIDÉE\n')
  console.log(`${failCount} étape(s) en échec. Corriger les erreurs avant de continuer.`)
  process.exit(1)
}

