'use client'

import { useState, useEffect } from 'react'

interface Service {
  serviceName: string
  durationMinutes: number
  priceEur: number
}

interface StepServicesProps {
  onChange?: (data: Service[]) => void
  onValidationChange?: (isValid: boolean) => void
}

export function StepServices({ onChange, onValidationChange }: StepServicesProps) {
  const [services, setServices] = useState<Service[]>([])
  const [serviceName, setServiceName] = useState('')
  const [durationMinutes, setDurationMinutes] = useState<number>(0)
  const [priceEur, setPriceEur] = useState<number>(0)

  const handleAddService = () => {
    if (serviceName.trim() !== '' && durationMinutes > 0 && priceEur >= 0) {
      setServices([
        ...services,
        {
          serviceName: serviceName.trim(),
          durationMinutes,
          priceEur,
        },
      ])
      // Reset form
      setServiceName('')
      setDurationMinutes(0)
      setPriceEur(0)
    }
  }

  const handleRemoveService = (index: number) => {
    setServices(services.filter((_, i) => i !== index))
  }

  // Validation : au moins 1 service obligatoire
  const isValid = services.length >= 1

  useEffect(() => {
    if (onChange) {
      onChange(services)
    }
  }, [services, onChange])

  useEffect(() => {
    if (onValidationChange) {
      onValidationChange(isValid)
    }
  }, [isValid, onValidationChange])

  return (
    <div style={{ color: 'black' }}>
      <div>
        <h3 style={{ color: 'black', marginBottom: '15px' }}>Ajouter un service</h3>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: 'black' }}>
            Nom du service
            <input
              type="text"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              style={{ color: 'black', display: 'block', width: '100%', marginTop: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: 'black' }}>
            Durée (minutes)
            <input
              type="number"
              value={durationMinutes || ''}
              onChange={(e) => setDurationMinutes(parseInt(e.target.value) || 0)}
              min="1"
              style={{ color: 'black', display: 'block', width: '100%', marginTop: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ color: 'black' }}>
            Prix (EUR)
            <input
              type="number"
              value={priceEur || ''}
              onChange={(e) => setPriceEur(parseFloat(e.target.value) || 0)}
              min="0"
              step="0.01"
              style={{ color: 'black', display: 'block', width: '100%', marginTop: '5px' }}
            />
          </label>
        </div>
        <button
          onClick={handleAddService}
          disabled={serviceName.trim() === '' || durationMinutes <= 0 || priceEur < 0}
          style={{ color: 'black', marginTop: '10px' }}
        >
          Ajouter un service
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ color: 'black', marginBottom: '15px' }}>Services ajoutés ({services.length})</h3>
        {services.length === 0 ? (
          <p style={{ color: 'gray' }}>Aucun service ajouté. Ajoutez au moins un service pour continuer.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {services.map((service, index) => (
              <li
                key={index}
                style={{
                  marginBottom: '10px',
                  padding: '10px',
                  border: '1px solid gray',
                  borderRadius: '4px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong>{service.serviceName}</strong> - {service.durationMinutes} min - {service.priceEur}€
                  </div>
                  <button
                    onClick={() => handleRemoveService(index)}
                    style={{ color: 'black', marginLeft: '10px' }}
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
