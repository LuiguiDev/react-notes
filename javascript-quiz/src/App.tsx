import { Container, Stack, Typography } from '@mui/material'
import './App.css'
import { JavascriptLogo } from './svg/JavaScriptLogo'
import { Start } from './Components/Start'
import { useQuestionsStore } from './Store/questions'

function App() {
  const {questions} = useQuestionsStore()
  console.log(questions)

  return (
    <main>
      <Container maxWidth='sm'>
        <Stack direction='row' gap={2} alignItems={'center'} justifyContent={'center'} >
          <JavascriptLogo/>
          <Typography variant='h2'>
            Javascript Quiz
          </Typography>
        </Stack>

        <Start />

      </Container>
    </main>
  )
}

export default App