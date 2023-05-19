import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../consts'
import { FromLanguageType, LanguageType } from '../types'

// two differents contracts for the same props upon on the string we pass as 'type'
type Props = 
  | {type: 'from', value: FromLanguageType, onChange: (language: FromLanguageType) => void}
  | {type: 'to', value: LanguageType, onChange: (language: LanguageType) => void}

export const LanguageSelector: React.FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as LanguageType)
  }

  return (
    <Form.Select aria-aria-label='Select language' onChange={handleChange} value={value}>
      {type === 'from' &&
        <option value="auto">Detectar idioma</option>
      }
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}