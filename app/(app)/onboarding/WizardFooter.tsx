interface WizardFooterProps {
  stepIndex: number
  onBack: () => void
  onNext: () => void
  isNextDisabled: boolean
}

export function WizardFooter({ stepIndex, onBack, onNext, isNextDisabled }: WizardFooterProps) {
  const isBackDisabled = stepIndex === 1

  return (
    <div style={{ color: 'black' }}>
      <button onClick={onBack} disabled={isBackDisabled} style={{ color: 'black' }}>
        Back
      </button>
      <button onClick={onNext} disabled={isNextDisabled} style={{ color: 'black' }}>
        Next
      </button>
    </div>
  )
}

