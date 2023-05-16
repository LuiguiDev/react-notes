import './App.css'
import { useTranslator } from './Hooks/useTranslator'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AUTO_LANGUAGE } from './consts'
import { LanguageSelector, TextBox } from './Components/LanguageSelector'

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
          <LanguageSelector onChange={setFromLanguage} />
        </Col>

        <Col>
          <button
            onClick={interchangeLanguages}
            disabled={fromLanguage === AUTO_LANGUAGE}
          >
            Switch
          </button>
        </Col>
        
        <Col>
          <LanguageSelector onChange={setToLanguage} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
