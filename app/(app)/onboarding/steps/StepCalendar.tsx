'use client'

import { useState, useEffect } from 'react'

interface StepCalendarProps {
  onChange?: (data: { googleCalendarEnabled: boolean; outlookCalendarEnabled: boolean }) => void
  onValidationChange?: (isValid: boolean) => void
}

export function StepCalendar({ onChange, onValidationChange }: StepCalendarProps) {
  const [googleCalendarEnabled, setGoogleCalendarEnabled] = useState(false)
  const [outlookCalendarEnabled, setOutlookCalendarEnabled] = useState(false)

  const handleToggleGoogle = () => {
    setGoogleCalendarEnabled(!googleCalendarEnabled)
  }

  const handleToggleOutlook = () => {
    setOutlookCalendarEnabled(!outlookCalendarEnabled)
  }

  // Validation : au moins un agenda activé
  const isValid = googleCalendarEnabled || outlookCalendarEnabled

  useEffect(() => {
    if (onChange) {
      onChange({
        googleCalendarEnabled,
        outlookCalendarEnabled,
      })
    }
  }, [googleCalendarEnabled, outlookCalendarEnabled, onChange])

  useEffect(() => {
    if (onValidationChange) {
      onValidationChange(isValid)
    }
  }, [isValid, onValidationChange])

  return (
    <div style={{ color: 'black' }}>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={handleToggleGoogle}
          style={{
            color: googleCalendarEnabled ? 'green' : 'black',
            padding: '10px 20px',
            fontSize: '16px',
            border: '1px solid gray',
            borderRadius: '4px',
            backgroundColor: googleCalendarEnabled ? '#e8f5e9' : 'white',
          }}
        >
          {googleCalendarEnabled ? '✓ Google Calendar : Activé' : 'Activer Google Calendar'}
        </button>
      </div>

      <div>
        <button
          onClick={handleToggleOutlook}
          style={{
            color: outlookCalendarEnabled ? 'green' : 'black',
            padding: '10px 20px',
            fontSize: '16px',
            border: '1px solid gray',
            borderRadius: '4px',
            backgroundColor: outlookCalendarEnabled ? '#e8f5e9' : 'white',
          }}
        >
          {outlookCalendarEnabled ? '✓ Outlook Calendar : Activé' : 'Activer Outlook Calendar'}
        </button>
      </div>

      {!isValid && (
        <p style={{ color: 'gray', marginTop: '15px', fontSize: '14px' }}>
          Veuillez activer au moins un agenda pour continuer.
        </p>
      )}
    </div>
  )
}
