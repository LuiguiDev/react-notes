import './App.css'
import { useTranslator } from './Hooks/useTranslator'
import { Container, Row, Col, Form, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AUTO_LANGUAGE } from './consts'
import { LanguageSelector } from './Components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './Components/TextArea'

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
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
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

            <TextArea
              type={SectionType.To}
              value={result}
              onChange={setResult}
              loading={loading}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
