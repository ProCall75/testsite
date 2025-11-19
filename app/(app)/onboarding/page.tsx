'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { StepIdentity } from './steps/StepIdentity'
import { StepHours } from './steps/StepHours'
import { StepServices } from './steps/StepServices'
import { StepCalendar } from './steps/StepCalendar'
import { StepCommunications } from './steps/StepCommunications'
import { StepSummary } from './steps/StepSummary'
import { Timeline } from './Timeline'
import { WizardFooter } from './WizardFooter'

const stepTitles = [
  'Identité du salon',
  'Horaires',
  'Services',
  'Agenda',
  'Communication',
  'Résumé',
]

const stepDescriptions = [
  "L'assistant doit pouvoir se présenter, identifier le salon et envoyer des notifications.",
  "L'IA doit connaître les plages horaires pour proposer des rendez-vous valides.",
  'Les services sont indispensables pour que l\'IA puisse proposer un rendez-vous.',
  'Synchronisation obligatoire pour éviter les doubles réservations.',
  "L'assistant doit pouvoir envoyer confirmations, rappels, relances.",
  "Vérifiez les informations avant d'activer votre assistant.",
]

export default function OnboardingPage() {
  const router = useRouter()
  const [stepIndex, setStepIndex] = useState(1)
  const [step1Valid, setStep1Valid] = useState(false)
  const [step3Valid, setStep3Valid] = useState(false)
  const [step4Valid, setStep4Valid] = useState(false)
  const [step5Valid, setStep5Valid] = useState(false)

  const [formData, setFormData] = useState({
    step1: {
      ownerName: '',
      salonName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
    },
    step2: {
      openingHours: {
        monday: { open: null as string | null, close: null as string | null },
        tuesday: { open: null as string | null, close: null as string | null },
        wednesday: { open: null as string | null, close: null as string | null },
        thursday: { open: null as string | null, close: null as string | null },
        friday: { open: null as string | null, close: null as string | null },
        saturday: { open: null as string | null, close: null as string | null },
        sunday: { open: null as string | null, close: null as string | null },
      },
    },
    step3: { services: [] as Array<{ serviceName: string; durationMinutes: number; priceEur: number }> },
    step4: { googleCalendarEnabled: false, outlookCalendarEnabled: false },
    step5: { smsEnabled: false, whatsappEnabled: false, telegramEnabled: false },
  })

  const handleNext = () => {
    if (stepIndex < 6) {
      setStepIndex(stepIndex + 1)
    }
  }

  const handleBack = () => {
    if (stepIndex > 1) {
      setStepIndex(stepIndex - 1)
    }
  }

  const handleActivate = () => {
    router.push('/dashboard')
  }

  const renderStep = () => {
    switch (stepIndex) {
      case 1:
        return (
          <StepIdentity
            onChange={(data) => setFormData((prev) => ({ ...prev, step1: data }))}
            onValidationChange={setStep1Valid}
          />
        )
      case 2:
        return (
          <StepHours
            onChange={(data) => setFormData((prev) => ({ ...prev, step2: { openingHours: data } }))}
          />
        )
      case 3:
        return (
          <StepServices
            onChange={(data) => setFormData((prev) => ({ ...prev, step3: { services: data } }))}
            onValidationChange={setStep3Valid}
          />
        )
      case 4:
        return (
          <StepCalendar
            onChange={(data) => setFormData((prev) => ({ ...prev, step4: data }))}
            onValidationChange={setStep4Valid}
          />
        )
      case 5:
        return (
          <StepCommunications
            onChange={(data) => setFormData((prev) => ({ ...prev, step5: data }))}
            onValidationChange={setStep5Valid}
          />
        )
      case 6:
        return <StepSummary formData={formData} onActivate={handleActivate} />
      default:
        return (
          <StepIdentity
            onChange={(data) => setFormData((prev) => ({ ...prev, step1: data }))}
            onValidationChange={setStep1Valid}
          />
        )
    }
  }

  // Validation par étape pour activer/désactiver Next
  // Step 1 : ownerName + salonName + email + phone remplis
  // Step 3 : au moins 1 service
  // Step 4 : au moins un agenda activé
  // Step 5 : au moins un canal de communication activé
  const isNextDisabled =
    (stepIndex === 1 && !step1Valid) ||
    (stepIndex === 3 && !step3Valid) ||
    (stepIndex === 4 && !step4Valid) ||
    (stepIndex === 5 && !step5Valid)
      ? true
      : false

  return (
    <div style={{ color: 'black' }}>
      {/* Titre du step */}
      <h1 style={{ textAlign: 'center', color: 'black' }}>{stepTitles[stepIndex - 1]}</h1>

      {/* Timeline */}
      <Timeline currentStep={stepIndex} />

      {/* Description */}
      <p style={{ textAlign: 'center', color: 'black' }}>{stepDescriptions[stepIndex - 1]}</p>

      {/* Zone de contenu */}
      {renderStep()}

      {/* Footer */}
      <WizardFooter
        stepIndex={stepIndex}
        onBack={handleBack}
        onNext={handleNext}
        isNextDisabled={isNextDisabled}
      />
    </div>
  )
}
