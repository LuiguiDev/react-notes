import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../consts'

interface Props {
  onChange: (language: string) => void
}

export const LanguageSelector: React.FC<Props> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Select aria-aria-label='Select language' onChange={handleChange}>
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}