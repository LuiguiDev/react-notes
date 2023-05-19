import './App.css'
import { useTranslator } from './Hooks/useTranslator'
import { Container, Row, Col, Form, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AUTO_LANGUAGE } from './consts'
import { LanguageSelector } from './Components/LanguageSelector'
import { SectionType } from './types.d'

function App() {
  // Use hook useReducer
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useTranslator()

  return (
    <Container fluid>
      <h1>Nahuatl translate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector 
              type={SectionType.From}
              value= {fromLanguage}
              onChange={setFromLanguage} />
            <Form.Control
              as='textarea'
              placeholder='Introducir texto'
              autoFocus
              style={{height: '150px'}} />
          </Stack>
        </Col>

        <Col xs='auto'>
          <button
            onClick={interchangeLanguages}
            disabled={fromLanguage === AUTO_LANGUAGE}
          >
            Switch
          </button>
        </Col>
        
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value= {toLanguage}
              onChange={setToLanguage} />

            <Form.Control
              as='textarea'
              placeholder='Traducción'
              style={{height: '150px'}} />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
