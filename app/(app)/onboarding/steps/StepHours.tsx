'use client'

import { useState, useEffect } from 'react'

interface OpeningHours {
  monday: { open: string | null; close: string | null }
  tuesday: { open: string | null; close: string | null }
  wednesday: { open: string | null; close: string | null }
  thursday: { open: string | null; close: string | null }
  friday: { open: string | null; close: string | null }
  saturday: { open: string | null; close: string | null }
  sunday: { open: string | null; close: string | null }
}

interface StepHoursProps {
  onChange?: (data: OpeningHours) => void
  onValidationChange?: (isValid: boolean) => void
}

const days = [
  { key: 'monday', label: 'Lundi' },
  { key: 'tuesday', label: 'Mardi' },
  { key: 'wednesday', label: 'Mercredi' },
  { key: 'thursday', label: 'Jeudi' },
  { key: 'friday', label: 'Vendredi' },
  { key: 'saturday', label: 'Samedi' },
  { key: 'sunday', label: 'Dimanche' },
] as const

export function StepHours({ onChange, onValidationChange }: StepHoursProps) {
  const [openingHours, setOpeningHours] = useState<OpeningHours>({
    monday: { open: '09:00', close: '18:00' },
    tuesday: { open: '09:00', close: '18:00' },
    wednesday: { open: '09:00', close: '18:00' },
    thursday: { open: '09:00', close: '18:00' },
    friday: { open: '09:00', close: '18:00' },
    saturday: { open: '09:00', close: '18:00' },
    sunday: { open: '09:00', close: '18:00' },
  })

  const updateDay = (day: keyof OpeningHours, field: 'open' | 'close', value: string) => {
    setOpeningHours((prev) => {
      const newValue = { ...prev[day] }
      
      // Si l'input est vide, mettre null
      if (value.trim() === '') {
        newValue[field] = null
      } else {
        newValue[field] = value
      }
      
      return {
        ...prev,
        [day]: newValue,
      }
    })
  }

  const markAsClosed = (day: keyof OpeningHours) => {
    setOpeningHours((prev) => ({
      ...prev,
      [day]: { open: null, close: null },
    }))
  }

  const openDay = (day: keyof OpeningHours) => {
    setOpeningHours((prev) => ({
      ...prev,
      [day]: { open: '09:00', close: '18:00' },
    }))
  }

  useEffect(() => {
    if (onChange) {
      onChange(openingHours)
    }
  }, [openingHours, onChange])

  useEffect(() => {
    if (onValidationChange) {
      // Validation : aucune contrainte (0-7 jours ouverts acceptables)
      onValidationChange(true)
    }
  }, [onValidationChange])

  return (
    <div style={{ color: 'black' }}>
      {days.map((day) => {
        const isClosed = openingHours[day.key].open === null && openingHours[day.key].close === null

        return (
          <div key={day.key} style={{ marginTop: '15px' }}>
            <label style={{ color: 'black' }}>
              {day.label}
            </label>
            {isClosed ? (
              <div style={{ marginTop: '5px' }}>
                <span style={{ color: 'black' }}>Fermé</span>
                <button
                  onClick={() => openDay(day.key)}
                  style={{ color: 'black', backgroundColor: 'transparent', border: '1px solid black', marginLeft: '10px', padding: '5px 10px' }}
                >
                  Ouvrir
                </button>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                  <input
                    type="time"
                    value={openingHours[day.key].open || ''}
                    onChange={(e) => updateDay(day.key, 'open', e.target.value)}
                    placeholder="Ouverture"
                    style={{ color: 'black', backgroundColor: 'transparent', border: '1px solid black', flex: 1, padding: '5px' }}
                  />
                  <span style={{ color: 'black', alignSelf: 'center' }}>-</span>
                  <input
                    type="time"
                    value={openingHours[day.key].close || ''}
                    onChange={(e) => updateDay(day.key, 'close', e.target.value)}
                    placeholder="Fermeture"
                    style={{ color: 'black', backgroundColor: 'transparent', border: '1px solid black', flex: 1, padding: '5px' }}
                  />
                </div>
                <button
                  onClick={() => markAsClosed(day.key)}
                  style={{ color: 'black', backgroundColor: 'transparent', border: '1px solid black', marginTop: '5px', padding: '5px 10px' }}
                >
                  Marquer comme fermé
                </button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
