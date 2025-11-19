'use client'

interface OpeningHours {
  monday: { open: string | null; close: string | null }
  tuesday: { open: string | null; close: string | null }
  wednesday: { open: string | null; close: string | null }
  thursday: { open: string | null; close: string | null }
  friday: { open: string | null; close: string | null }
  saturday: { open: string | null; close: string | null }
  sunday: { open: string | null; close: string | null }
}

interface Service {
  serviceName: string
  durationMinutes: number
  priceEur: number
}

interface StepSummaryProps {
  formData: {
    step1: {
      ownerName: string
      salonName: string
      email: string
      phone: string
      address: string
      city: string
      postalCode: string
      country: string
    }
    step2: {
      openingHours: OpeningHours
    }
    step3: {
      services: Service[]
    }
    step4: {
      googleCalendarEnabled: boolean
      outlookCalendarEnabled: boolean
    }
    step5: {
      smsEnabled: boolean
      whatsappEnabled: boolean
      telegramEnabled: boolean
    }
  }
  onActivate: () => void
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

export function StepSummary({ formData, onActivate }: StepSummaryProps) {
  const { step1, step2, step3, step4, step5 } = formData

  const getOpenDays = () => {
    return days.filter((day) => {
      const hours = step2.openingHours[day.key]
      return hours.open !== null && hours.close !== null
    })
  }

  const openDays = getOpenDays()

  return (
    <div style={{ color: 'black' }}>
      {/* Résumé Identité */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: 'black', marginBottom: '15px' }}>Identité</h3>
        <div>
          <p style={{ color: 'black' }}>
            <strong>Propriétaire :</strong> {step1.ownerName}
          </p>
          <p style={{ color: 'black' }}>
            <strong>Salon :</strong> {step1.salonName}
          </p>
          <p style={{ color: 'black' }}>
            <strong>Email :</strong> {step1.email}
          </p>
          <p style={{ color: 'black' }}>
            <strong>Téléphone :</strong> {step1.phone}
          </p>
        </div>
      </div>

      {/* Résumé Horaires */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: 'black', marginBottom: '15px' }}>Horaires</h3>
        {openDays.length === 0 ? (
          <p style={{ color: 'black' }}>Aucun jour ouvert</p>
        ) : (
          <div>
            {openDays.map((day) => {
              const hours = step2.openingHours[day.key]
              return (
                <p key={day.key} style={{ color: 'black' }}>
                  {day.label} : {hours.open} - {hours.close}
                </p>
              )
            })}
          </div>
        )}
      </div>

      {/* Résumé Services */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: 'black', marginBottom: '15px' }}>Services</h3>
        {step3.services.length === 0 ? (
          <p style={{ color: 'black' }}>Aucun service</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {step3.services.map((service, index) => (
              <li key={index} style={{ color: 'black', marginBottom: '10px' }}>
                {service.serviceName} - {service.durationMinutes} min - {service.priceEur}€
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Résumé Agendas */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: 'black', marginBottom: '15px' }}>Agendas</h3>
        <div>
          {step4.googleCalendarEnabled && (
            <p style={{ color: 'black' }}>Google Calendar : Activé</p>
          )}
          {step4.outlookCalendarEnabled && (
            <p style={{ color: 'black' }}>Outlook Calendar : Activé</p>
          )}
          {!step4.googleCalendarEnabled && !step4.outlookCalendarEnabled && (
            <p style={{ color: 'black' }}>Aucun agenda activé</p>
          )}
        </div>
      </div>

      {/* Résumé Communication */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: 'black', marginBottom: '15px' }}>Communication</h3>
        <div>
          {step5.smsEnabled && <p style={{ color: 'black' }}>SMS : Activé</p>}
          {step5.whatsappEnabled && <p style={{ color: 'black' }}>WhatsApp : Activé</p>}
          {step5.telegramEnabled && <p style={{ color: 'black' }}>Telegram : Activé</p>}
          {!step5.smsEnabled && !step5.whatsappEnabled && !step5.telegramEnabled && (
            <p style={{ color: 'black' }}>Aucun canal activé</p>
          )}
        </div>
      </div>

      {/* CTA Activation */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <button
          onClick={onActivate}
          style={{
            color: 'black',
            padding: '15px 30px',
            fontSize: '16px',
            border: '1px solid black',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
        >
          Activer mon assistant
        </button>
      </div>
    </div>
  )
}
