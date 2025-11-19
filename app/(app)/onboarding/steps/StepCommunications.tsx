'use client'

import { useState, useEffect } from 'react'

interface StepCommunicationsProps {
  onChange?: (data: {
    smsEnabled: boolean
    whatsappEnabled: boolean
    telegramEnabled: boolean
  }) => void
  onValidationChange?: (isValid: boolean) => void
}

export function StepCommunications({ onChange, onValidationChange }: StepCommunicationsProps) {
  const [smsEnabled, setSmsEnabled] = useState(false)
  const [whatsappEnabled, setWhatsappEnabled] = useState(false)
  const [telegramEnabled, setTelegramEnabled] = useState(false)

  // Validation : au moins un canal activé
  const isValid = smsEnabled || whatsappEnabled || telegramEnabled

  useEffect(() => {
    if (onChange) {
      onChange({
        smsEnabled,
        whatsappEnabled,
        telegramEnabled,
      })
    }
  }, [smsEnabled, whatsappEnabled, telegramEnabled, onChange])

  useEffect(() => {
    if (onValidationChange) {
      onValidationChange(isValid)
    }
  }, [isValid, onValidationChange])

  return (
    <div style={{ color: 'black' }}>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
          <input
            type="checkbox"
            checked={smsEnabled}
            onChange={(e) => setSmsEnabled(e.target.checked)}
            style={{ marginRight: '10px' }}
          />
          <span>SMS</span>
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
          <input
            type="checkbox"
            checked={whatsappEnabled}
            onChange={(e) => setWhatsappEnabled(e.target.checked)}
            style={{ marginRight: '10px' }}
          />
          <span>WhatsApp</span>
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
          <input
            type="checkbox"
            checked={telegramEnabled}
            onChange={(e) => setTelegramEnabled(e.target.checked)}
            style={{ marginRight: '10px' }}
          />
          <span>Telegram</span>
        </label>
      </div>

      {!isValid && (
        <p style={{ color: 'gray', marginTop: '15px', fontSize: '14px' }}>
          Veuillez activer au moins un canal de communication pour continuer.
        </p>
      )}
    </div>
  )
}
