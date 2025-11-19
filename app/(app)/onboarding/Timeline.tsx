interface TimelineProps {
  currentStep: number
}

export function Timeline({ currentStep }: TimelineProps) {
  const totalSteps = 6

  return (
    <div style={{ display: 'flex', justifyContent: 'center', color: 'black' }}>
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber === currentStep
        return <span key={stepNumber} style={{ margin: '0 5px' }}>{isActive ? '[●]' : '[○]'}</span>
      })}
    </div>
  )
}
