#!/usr/bin/env tsx

import { execSync } from 'child_process'
import { readFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const RESULTS: Record<string, 'OK' | 'FAIL'> = {}

function checkTypeScript(): void {
  console.log('1. Checking TypeScript compilation...')
  try {
    const output = execSync('npx tsc --noEmit', { 
      encoding: 'utf-8',
      stdio: 'pipe',
      cwd: ROOT 
    })
    const exitCode = 0
    if (exitCode === 0 && output.trim() === '') {
      RESULTS.TYPECHECK = 'OK'
      console.log('   ✅ TypeScript: OK')
    } else {
      RESULTS.TYPECHECK = 'FAIL'
      console.log('   ❌ TypeScript: FAIL')
      console.log('   Output:', output)
    }
  } catch (error: any) {
    RESULTS.TYPECHECK = 'FAIL'
    console.log('   ❌ TypeScript: FAIL')
    if (error.stdout) console.log('   Stdout:', error.stdout)
    if (error.stderr) console.log('   Stderr:', error.stderr)
  }
}

function checkClientAuthGuard(): void {
  console.log('\n2. Checking ClientAuthGuard constraints...')
  const filePath = join(ROOT, 'lib/auth/client-auth-guard.tsx')
  
  if (!existsSync(filePath)) {
    RESULTS.CLIENTAUTHGUARD = 'FAIL'
    console.log('   ❌ ClientAuthGuard: FAIL (file not found)')
    return
  }

  const content = readFileSync(filePath, 'utf-8')
  let isValid = true

  // Check UI elements (JSX tags)
  const uiPatterns = [
    /<div/,
    /<span/,
    /<p[^r]/,
    /<button/,
    /<h[1-6]/,
    /<label/,
    /<input/,
    /<form/,
  ]
  
  for (const pattern of uiPatterns) {
    if (pattern.test(content)) {
      console.log(`   ❌ Found UI element: ${pattern}`)
      isValid = false
    }
  }
  
  // Check for visible text content in JSX (not in strings/comments)
  // Look for text nodes: >text< or {text} patterns that aren't variables
  const jsxTextPattern = />\s*([A-Z][a-z]+[^<{]*)\s*</g
  let match
  while ((match = jsxTextPattern.exec(content)) !== null) {
    const text = match[1].trim()
    // Exclude common technical terms
    if (text.length > 2 && 
        !text.match(/^(null|undefined|loading|children|redirectTo)$/i) &&
        !text.match(/^[A-Z][a-zA-Z]*$/) && // PascalCase components
        !text.includes('{') && !text.includes('}')) {
      console.log(`   ❌ Found potential UI text in JSX: "${text}"`)
      isValid = false
    }
  }

  // Check business logic keywords
  const businessLogicPatterns = [
    /signup/i,
    /login/i,
    /dashboard/i,
    /onboarding/i,
    /settings/i,
  ]
  
  for (const pattern of businessLogicPatterns) {
    if (pattern.test(content)) {
      console.log(`   ❌ Found business logic keyword: ${pattern}`)
      isValid = false
    }
  }

  // Check redirectTo is required (no ? and no =)
  if (!/redirectTo:\s*string[^?=]/.test(content)) {
    console.log('   ❌ redirectTo is not strictly required')
    isValid = false
  }

  // Check imports
  if (!/import.*useAuth.*from\s+['"]\.\/auth-context['"]/.test(content)) {
    console.log('   ❌ useAuth not imported from ./auth-context')
    isValid = false
  }
  
  if (!/import.*useIsAuthenticated.*from\s+['"]\.\/hooks['"]/.test(content)) {
    console.log('   ❌ useIsAuthenticated not imported from ./hooks')
    isValid = false
  }

  if (/import.*supabaseMock/.test(content)) {
    console.log('   ❌ Direct import of supabaseMock found')
    isValid = false
  }

  if (/middleware|server/.test(content)) {
    console.log('   ❌ Found middleware or server import')
    isValid = false
  }

  RESULTS.CLIENTAUTHGUARD = isValid ? 'OK' : 'FAIL'
  console.log(`   ${isValid ? '✅' : '❌'} ClientAuthGuard: ${RESULTS.CLIENTAUTHGUARD}`)
}

function checkMarketingLayout(): void {
  console.log('\n3. Checking (marketing) is NOT protected...')
  const marketingDir = join(ROOT, 'app/(marketing)')
  
  if (!existsSync(marketingDir)) {
    RESULTS['LAYOUT(MARKETING)'] = 'FAIL'
    console.log('   ❌ Layout(Marketing): FAIL (directory not found)')
    return
  }

  let isValid = true

  function checkFiles(dir: string): void {
    const files = readdirSync(dir, { withFileTypes: true })
    
    for (const file of files) {
      const filePath = join(dir, file.name)
      
      if (file.isDirectory()) {
        checkFiles(filePath)
      } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
        const content = readFileSync(filePath, 'utf-8')
        
        if (/ClientAuthGuard/.test(content)) {
          console.log(`   ❌ Found ClientAuthGuard in ${filePath}`)
          isValid = false
        }
        
        if (/useAuth|useIsAuthenticated|useUser|useSession/.test(content)) {
          console.log(`   ❌ Found auth hooks in ${filePath}`)
          isValid = false
        }
        
        if (/router\.push|redirect/.test(content)) {
          console.log(`   ❌ Found redirect in ${filePath}`)
          isValid = false
        }
      }
    }
  }

  checkFiles(marketingDir)
  RESULTS['LAYOUT(MARKETING)'] = isValid ? 'OK' : 'FAIL'
  console.log(`   ${isValid ? '✅' : '❌'} Layout(Marketing): ${RESULTS['LAYOUT(MARKETING)']}`)
}

function checkAppLayout(): void {
  console.log('\n4. Checking (app) is protected...')
  const filePath = join(ROOT, 'app/(app)/layout.tsx')
  
  if (!existsSync(filePath)) {
    RESULTS['LAYOUT(APP)'] = 'FAIL'
    console.log('   ❌ Layout(App): FAIL (file not found)')
    return
  }

  const content = readFileSync(filePath, 'utf-8')
  let isValid = true

  // Check ClientAuthGuard is imported
  if (!/import.*ClientAuthGuard.*from\s+['"]@\/lib\/auth['"]/.test(content)) {
    console.log('   ❌ ClientAuthGuard not imported from @/lib/auth')
    isValid = false
  }

  // Check ClientAuthGuard is used exactly once
  const matches = content.match(/<ClientAuthGuard/g)
  if (!matches || matches.length !== 1) {
    console.log(`   ❌ ClientAuthGuard used ${matches?.length || 0} times (expected 1)`)
    isValid = false
  }

  // Check children is inside guard
  if (!/<ClientAuthGuard[^>]*>[\s\S]*{children}[\s\S]*<\/ClientAuthGuard>/.test(content)) {
    console.log('   ❌ children not inside ClientAuthGuard')
    isValid = false
  }

  // Check redirectTo is non-empty string
  const redirectMatch = content.match(/redirectTo\s*=\s*{?([^}]+)}?/)
  if (!redirectMatch) {
    console.log('   ❌ redirectTo not found')
    isValid = false
  } else {
    const redirectValue = redirectMatch[1].trim().replace(/['"]/g, '')
    if (redirectValue === '' || redirectValue.includes('//') || redirectValue.includes('TODO')) {
      console.log(`   ❌ redirectTo is empty or placeholder: "${redirectValue}"`)
      isValid = false
    }
  }

  RESULTS['LAYOUT(APP)'] = isValid ? 'OK' : 'FAIL'
  console.log(`   ${isValid ? '✅' : '❌'} Layout(App): ${RESULTS['LAYOUT(APP)']}`)
}

function checkNoMiddleware(): void {
  console.log('\n5. Checking no middleware exists...')
  let isValid = true

  // Check middleware.ts
  if (existsSync(join(ROOT, 'middleware.ts'))) {
    console.log('   ❌ middleware.ts found')
    isValid = false
  }

  // Check for middleware exports
  try {
    const grepOutput = execSync('grep -r "export.*function.*middleware" app lib --include="*.ts" --include="*.tsx" 2>/dev/null || true', {
      encoding: 'utf-8',
      cwd: ROOT
    })
    if (grepOutput.trim()) {
      console.log('   ❌ Found middleware export')
      console.log('   ', grepOutput.trim())
      isValid = false
    }
  } catch {}

  // Check for NextResponse.redirect
  try {
    const grepOutput = execSync('grep -r "NextResponse.redirect" app lib --include="*.ts" --include="*.tsx" 2>/dev/null || true', {
      encoding: 'utf-8',
      cwd: ROOT
    })
    if (grepOutput.trim()) {
      console.log('   ❌ Found NextResponse.redirect')
      isValid = false
    }
  } catch {}

  // Check for NextRequest
  try {
    const grepOutput = execSync('grep -r "NextRequest" app lib --include="*.ts" --include="*.tsx" 2>/dev/null || true', {
      encoding: 'utf-8',
      cwd: ROOT
    })
    if (grepOutput.trim()) {
      console.log('   ❌ Found NextRequest')
      isValid = false
    }
  } catch {}

  RESULTS.NO_MIDDLEWARE = isValid ? 'OK' : 'FAIL'
  console.log(`   ${isValid ? '✅' : '❌'} No Middleware: ${RESULTS.NO_MIDDLEWARE}`)
}

function checkNoPersistence(): void {
  console.log('\n6. Checking no persistence...')
  const authDir = join(ROOT, 'lib/auth')
  
  if (!existsSync(authDir)) {
    RESULTS.NO_PERSISTENCE = 'FAIL'
    console.log('   ❌ No Persistence: FAIL (lib/auth not found)')
    return
  }

  let isValid = true

  function checkFiles(dir: string): void {
    const files = readdirSync(dir, { withFileTypes: true })
    
    for (const file of files) {
      const filePath = join(dir, file.name)
      
      if (file.isDirectory()) {
        checkFiles(filePath)
      } else if (file.name.endsWith('.ts') || file.name.endsWith('.tsx')) {
        const content = readFileSync(filePath, 'utf-8')
        
        const persistencePatterns = [
          /localStorage/,
          /sessionStorage/,
          /\bcookie\b/i,
          /\bCookies\b/,
          /document\.cookie/,
        ]
        
        for (const pattern of persistencePatterns) {
          if (pattern.test(content)) {
            console.log(`   ❌ Found persistence in ${filePath}: ${pattern}`)
            isValid = false
          }
        }
      }
    }
  }

  checkFiles(authDir)
  RESULTS.NO_PERSISTENCE = isValid ? 'OK' : 'FAIL'
  console.log(`   ${isValid ? '✅' : '❌'} No Persistence: ${RESULTS.NO_PERSISTENCE}`)
}

function checkClientAuthGuardUsage(): void {
  console.log('\n7. Checking ClientAuthGuard usage...')
  let isValid = true

  try {
    const grepOutput = execSync('grep -r "ClientAuthGuard" app --include="*.tsx" --include="*.ts" 2>/dev/null || true', {
      encoding: 'utf-8',
      cwd: ROOT
    })
    
    const lines = grepOutput.trim().split('\n').filter(l => l.trim())
    const appLayoutPath = join(ROOT, 'app/(app)/layout.tsx')
    
    for (const line of lines) {
      const filePath = line.split(':')[0]
      const absolutePath = join(ROOT, filePath)
      
      if (absolutePath !== appLayoutPath) {
        console.log(`   ❌ ClientAuthGuard used in ${filePath} (should only be in (app)/layout.tsx)`)
        isValid = false
      }
    }
  } catch {}

  RESULTS['GUARD_USAGE'] = isValid ? 'OK' : 'FAIL'
  console.log(`   ${isValid ? '✅' : '❌'} Guard Usage: ${RESULTS['GUARD_USAGE']}`)
}

function checkExportsStructure(): void {
  console.log('\n8. Checking exports structure...')
  const filePath = join(ROOT, 'lib/auth/index.ts')
  
  if (!existsSync(filePath)) {
    RESULTS.EXPORTS_STRUCTURE = 'FAIL'
    console.log('   ❌ Exports Structure: FAIL (file not found)')
    return
  }

  const content = readFileSync(filePath, 'utf-8')
  const lines = content.split('\n').filter(l => l.trim() && !l.trim().startsWith('//'))
  
  let isValid = true
  let foundTypes = false
  let foundConfig = false
  let foundSupabaseMock = false
  let foundAuthClient = false
  let foundAuthContext = false
  let foundHooks = false
  let foundGuard = false
  let order = []

  for (const line of lines) {
    if (line.includes("from './types'") || line.includes('from "./types"')) {
      foundTypes = true
      order.push('types')
    } else if (line.includes("from './config'") || line.includes('from "./config"')) {
      foundConfig = true
      order.push('config')
    } else if (line.includes('supabaseMock')) {
      foundSupabaseMock = true
      order.push('supabaseMock')
    } else if (line.includes('authClient')) {
      foundAuthClient = true
      order.push('authClient')
    } else if (line.includes('AuthProvider') || line.includes('useAuth')) {
      foundAuthContext = true
      order.push('authContext')
    } else if (line.includes('useUser') || line.includes('useSession') || line.includes('useIsAuthenticated')) {
      foundHooks = true
      order.push('hooks')
    } else if (line.includes('ClientAuthGuard')) {
      foundGuard = true
      order.push('guard')
    }
  }

  const expectedOrder = ['types', 'config', 'supabaseMock', 'authClient', 'authContext', 'hooks', 'guard']
  
  if (JSON.stringify(order) !== JSON.stringify(expectedOrder)) {
    console.log(`   ❌ Wrong export order. Expected: ${expectedOrder.join(' → ')}, Got: ${order.join(' → ')}`)
    isValid = false
  }

  if (!foundGuard) {
    console.log('   ❌ ClientAuthGuard not exported')
    isValid = false
  }

  RESULTS.EXPORTS_STRUCTURE = isValid ? 'OK' : 'FAIL'
  console.log(`   ${isValid ? '✅' : '❌'} Exports Structure: ${RESULTS.EXPORTS_STRUCTURE}`)
}

function checkNoAnticipation(): void {
  console.log('\n9. Checking no Phase 3.4 anticipation...')
  const authDir = join(ROOT, 'lib/auth')
  
  if (!existsSync(authDir)) {
    RESULTS.NO_ANTICIPATION = 'FAIL'
    console.log('   ❌ No Anticipation: FAIL (lib/auth not found)')
    return
  }

  let isValid = true

  function checkFiles(dir: string): void {
    const files = readdirSync(dir, { withFileTypes: true })
    
    for (const file of files) {
      const filePath = join(dir, file.name)
      
      // Exclude supabase-mock.ts (Phase 3.1) and auth-client.ts (Phase 3.2)
      if (file.name === 'supabase-mock.ts' || file.name === 'auth-client.ts') {
        continue
      }
      
      if (file.isDirectory()) {
        checkFiles(filePath)
      } else if (file.name.endsWith('.ts') || file.name.endsWith('.tsx')) {
        const content = readFileSync(filePath, 'utf-8')
        
        const anticipationPatterns = [
          /\bsignIn\b/i,
          /\bsignUp\b/i,
          /\blogout\b/i,
          /\bpassword\b/i,
          /\bform\b/i,
          /\binput\b/i,
          /\bbutton\b/i,
        ]
        
        for (const pattern of anticipationPatterns) {
          if (pattern.test(content)) {
            // Allow in comments
            const lines = content.split('\n')
            for (let i = 0; i < lines.length; i++) {
              const line = lines[i].trim()
              if (pattern.test(line) && !line.startsWith('//')) {
                // Check if it's part of a function call or implementation (not just a type/interface)
                if (line.includes('(') || line.includes('=>') || line.includes('function')) {
                  console.log(`   ❌ Found Phase 3.4 anticipation in ${filePath}: ${pattern} (line ${i + 1})`)
                  console.log(`      ${line}`)
                  isValid = false
                }
              }
            }
          }
        }
        
        // Check for form files
        if (file.name.includes('form.tsx') || file.name.includes('form.ts')) {
          console.log(`   ❌ Found form file: ${filePath}`)
          isValid = false
        }
      }
    }
  }

  checkFiles(authDir)
  RESULTS.NO_ANTICIPATION = isValid ? 'OK' : 'FAIL'
  console.log(`   ${isValid ? '✅' : '❌'} No Anticipation: ${RESULTS.NO_ANTICIPATION}`)
}

function printReport(): void {
  console.log('\n' + '='.repeat(50))
  console.log('PHASE 3.3 VALIDATION REPORT')
  console.log('='.repeat(50))
  console.log(`TYPECHECK: ${RESULTS.TYPECHECK || 'FAIL'}`)
  console.log(`CLIENTAUTHGUARD: ${RESULTS.CLIENTAUTHGUARD || 'FAIL'}`)
  console.log(`LAYOUT(APP): ${RESULTS['LAYOUT(APP)'] || 'FAIL'}`)
  console.log(`LAYOUT(MARKETING): ${RESULTS['LAYOUT(MARKETING)'] || 'FAIL'}`)
  console.log(`NO_MIDDLEWARE: ${RESULTS.NO_MIDDLEWARE || 'FAIL'}`)
  console.log(`NO_PERSISTENCE: ${RESULTS.NO_PERSISTENCE || 'FAIL'}`)
  console.log(`GUARD_USAGE: ${RESULTS['GUARD_USAGE'] || 'FAIL'}`)
  console.log(`EXPORTS_STRUCTURE: ${RESULTS.EXPORTS_STRUCTURE || 'FAIL'}`)
  console.log(`NO_ANTICIPATION: ${RESULTS.NO_ANTICIPATION || 'FAIL'}`)
  
  const allOk = Object.values(RESULTS).every(v => v === 'OK')
  const status = allOk ? 'VALID' : 'INVALID'
  console.log(`\nPHASE 3.3 STATUS: ${status}`)
  console.log('='.repeat(50))
  
  if (!allOk) {
    process.exit(1)
  }
}

// Run all checks
checkTypeScript()
checkClientAuthGuard()
checkMarketingLayout()
checkAppLayout()
checkNoMiddleware()
checkNoPersistence()
checkClientAuthGuardUsage()
checkExportsStructure()
checkNoAnticipation()
printReport()

