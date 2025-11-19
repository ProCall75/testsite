'use client'

import { useState, useEffect } from 'react'

interface StepIdentityProps {
  onChange?: (data: {
    ownerName: string
    salonName: string
    email: string
    phone: string
    address: string
    city: string
    postalCode: string
    country: string
  }) => void
  onValidationChange?: (isValid: boolean) => void
}

export function StepIdentity({ onChange, onValidationChange }: StepIdentityProps) {
  const [ownerName, setOwnerName] = useState('')
  const [salonName, setSalonName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')

  // Validation : tous les champs obligatoires doivent être remplis
  const isValid = ownerName.trim() !== '' && salonName.trim() !== '' && email.trim() !== '' && phone.trim() !== ''

  useEffect(() => {
    if (onChange) {
      onChange({
        ownerName,
        salonName,
        email,
        phone,
        address,
        city,
        postalCode,
        country,
      })
    }
  }, [ownerName, salonName, email, phone, address, city, postalCode, country, onChange])

  useEffect(() => {
    if (onValidationChange) {
      onValidationChange(isValid)
    }
  }, [isValid, onValidationChange])

  return (
    <div style={{ color: 'black' }}>
      <div>
        <label style={{ color: 'black' }}>
          Nom du propriétaire (obligatoire)
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            style={{ color: 'black', display: 'block', width: '100%', marginTop: '5px' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '15px' }}>
        <label style={{ color: 'black' }}>
          Nom du salon (obligatoire)
          <input
            type="text"
            value={salonName}
            onChange={(e) => setSalonName(e.target.value)}
            style={{ color: 'black', display: 'block', width: '100%', marginTop: '5px' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '15px' }}>
        <label style={{ color: 'black' }}>
          Email (obligatoire)
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ color: 'black', display: 'block', width: '100%', marginTop: '5px' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '15px' }}>
        <label style={{ color: 'black' }}>
          Téléphone (obligatoire)
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ color: 'black', display: 'block', width: '100%', marginTop: '5px' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '15px' }}>
        <label style={{ color: 'black' }}>
          Adresse (optionnel)
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ color: 'black', display: 'block', width: '100%', marginTop: '5px' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '15px' }}>
        <label style={{ color: 'black' }}>
          Ville (optionnel)
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ color: 'black', display: 'block', width: '100%', marginTop: '5px' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '15px' }}>
        <label style={{ color: 'black' }}>
          Code postal (optionnel)
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            style={{ color: 'black', display: 'block', width: '100%', marginTop: '5px' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '15px' }}>
        <label style={{ color: 'black' }}>
          Pays (optionnel)
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={{ color: 'black', display: 'block', width: '100%', marginTop: '5px' }}
          />
        </label>
      </div>
    </div>
  )
}
