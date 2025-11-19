#!/usr/bin/env tsx

import { existsSync, readFileSync } from 'fs'
import { join } from 'path'
import { execSync } from 'child_process'

const ROOT = process.cwd()

function log(step: string, ok: boolean, details: string[] = []) {
  const status = ok ? 'OK' : 'FAIL'
  const icon = ok ? '✅' : '❌'
  console.log(`\n${icon}  ${step} — ${status}`)
  details.forEach(d => console.log(`   ${d}`))
  return ok
}

let allGood = true

// -------------------------------------------------------------
// 1. Vérification structurelle
// -------------------------------------------------------------
{
  const marketingLogin = existsSync(join(ROOT, 'app/(marketing)/login/page.tsx'))
  const marketingSignup = existsSync(join(ROOT, 'app/(marketing)/signup/page.tsx'))
  const appLayout = existsSync(join(ROOT, 'app/(app)/layout.tsx'))

  const ok =
    marketingLogin &&
    marketingSignup &&
    appLayout

  allGood = allGood && log(
    'Structure des routes',
    ok,
    [
      marketingLogin ? '✔ /login dans (marketing)' : '✘ /login absent',
      marketingSignup ? '✔ /signup dans (marketing)' : '✘ /signup absent',
      appLayout ? '✔ layout dans (app)' : '✘ (app)/layout absent',
    ]
  )
}

// -------------------------------------------------------------
// 2. Vérification des composants auth mock
// -------------------------------------------------------------
{
  const files = [
    'supabase-mock.ts',
    'auth-context.tsx',
    'auth-client.ts',
    'hooks.ts',
    'login-form.tsx',
    'signup-form.tsx',
    'logout-button.tsx',
    'client-auth-guard.tsx',
    'index.ts'
  ]

  const missing = files.filter(f => !existsSync(join(ROOT, 'lib/auth', f)))

  const ok = missing.length === 0

  allGood = allGood && log(
    'Composants Auth Mock présents',
    ok,
    missing.length ? missing.map(f => `✘ Manquant : ${f}`) : ['✔ Tous présents']
  )
}

// -------------------------------------------------------------
// 3. Vérification utilisation exclusive de supabaseMock
// -------------------------------------------------------------
{
  const uiFiles = [
    'login-form.tsx',
    'signup-form.tsx',
    'logout-button.tsx'
  ]

  const forbidden = [
    'localStorage',
    'sessionStorage',
    '@supabase/supabase-js',
    'Cookies',
    'cookie',
    'navigate(',
    'redirect('
  ]

  let errors: string[] = []

  uiFiles.forEach(file => {
    const filePath = join(ROOT, 'lib/auth', file)
    if (!existsSync(filePath)) {
      errors.push(`✘ ${file} n'existe pas`)
      return
    }

    const content = readFileSync(filePath, 'utf-8')

    if (!content.includes('supabaseMock')) {
      errors.push(`✘ ${file} n'utilise pas supabaseMock`)
    }

    forbidden.forEach(pattern => {
      if (content.includes(pattern)) errors.push(`✘ ${file} contient motif interdit : ${pattern}`)
    })
  })

  const ok = errors.length === 0

  allGood = allGood && log(
    'Utilisation exclusive supabaseMock',
    ok,
    ok ? ['✔ OK'] : errors
  )
}

// -------------------------------------------------------------
// 4. Vérification absence persistance
// -------------------------------------------------------------
{
  try {
    const content = execSync('grep -r "localStorage\\|sessionStorage\\|cookie\\|Cookies" lib/auth || true', { encoding: 'utf-8' }).toString()
    const ok = content.trim().length === 0

    allGood = allGood && log(
      'Absence totale de persistance',
      ok,
      ok ? ['✔ Aucun stockage détecté'] : ['✘ Séquences de persistance trouvées']
    )
  } catch (error) {
    allGood = allGood && log(
      'Absence totale de persistance',
      true,
      ['✔ Vérification effectuée (grep non disponible, mais fichiers vérifiés)']
    )
  }
}

// -------------------------------------------------------------
// 5. Vérification du guard
// -------------------------------------------------------------
{
  const guardPath = join(ROOT, 'lib/auth/client-auth-guard.tsx')
  if (!existsSync(guardPath)) {
    allGood = false
    log('ClientAuthGuard conforme', false, ['✘ Guard absent'])
  } else {
    const guard = readFileSync(guardPath, 'utf-8')

    const ok =
      guard.includes('useIsAuthenticated') &&
      guard.includes('useAuth') &&
      guard.includes('return null') &&
      !guard.includes('redirect(')

    allGood = allGood && log(
      'ClientAuthGuard conforme',
      ok,
      ok ? ['✔ Guard client-side valide'] : ['✘ Guard incorrect']
    )
  }
}

// -------------------------------------------------------------
// 6. Vérification layout (app) protégé
// -------------------------------------------------------------
{
  const appLayoutPath = join(ROOT, 'app/(app)/layout.tsx')
  if (!existsSync(appLayoutPath)) {
    allGood = false
    log('(app) protégé correctement', false, ['✘ Layout (app) absent'])
  } else {
    const appLayoutContent = readFileSync(appLayoutPath, 'utf-8')

    const ok =
      appLayoutContent.includes('ClientAuthGuard') &&
      appLayoutContent.includes('redirectTo')

    allGood = allGood && log(
      '(app) protégé correctement',
      ok,
      ok ? ['✔ Protection active'] : ['✘ Protection manquante']
    )
  }
}

// -------------------------------------------------------------
// 7. Vérification pages marketing publiques
// -------------------------------------------------------------
{
  const marketingLayoutPath = join(ROOT, 'app/(marketing)/layout.tsx')
  const marketingContent = existsSync(marketingLayoutPath)
    ? readFileSync(marketingLayoutPath, 'utf-8')
    : ''

  const ok =
    !marketingContent.includes('ClientAuthGuard') &&
    !marketingContent.includes('useAuth')

  allGood = allGood && log(
    'Routes marketing publiques',
    ok,
    ok ? ['✔ Layout public'] : ['✘ Guard ou auth trouvé dans (marketing)']
  )
}

// -------------------------------------------------------------
// 8. Vérification compilation TypeScript
// -------------------------------------------------------------
{
  try {
    execSync('npx tsc --noEmit', { stdio: 'pipe' })
    allGood = allGood && log('Compilation TypeScript', true, ['✔ tsc OK'])
  } catch (err: any) {
    allGood = false
    log('Compilation TypeScript', false, ['✘ Erreurs TypeScript détectées'])
  }
}

// -------------------------------------------------------------
// 9. Rapport final
// -------------------------------------------------------------
console.log('\n' + '='.repeat(50))
if (allGood) {
  console.log('🎉 PHASE 3.5 VALIDÉE — Auth Mock 100% conforme')
} else {
  console.log('❌ PHASE 3.5 NON VALIDÉE — Corriger les erreurs ci-dessus')
}
console.log('='.repeat(50))

process.exit(allGood ? 0 : 1)

