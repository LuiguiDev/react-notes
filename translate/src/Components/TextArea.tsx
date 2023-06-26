import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"

interface Props {
  type: SectionType,
  loading?: boolean,
  onChange: (value: string) => void,
  value: string
}

// When 
export const TextArea: React.FC<Props> = ({ type, loading, value, onChange }) => {
  const commonStyles = { border: '2px solid #eaeaea', height: '200px', width: '250px', resize: 'none'}

  const style = type === SectionType.From ? commonStyles : { ...commonStyles, backgroundColor: '#eaeaea' }

  const getPlaceholder = ({type, loading}: {type: SectionType, loading?: boolean}) => {
    if (type === SectionType.From) return 'Introducir texto'
    if (loading) return 'Cargando...'
    return 'Traducción'
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      placeholder={getPlaceholder({type, loading})}
      autoFocus={type === SectionType.From}
      style={style}
      value={value}
      onChange={handleChange} />
  )
}