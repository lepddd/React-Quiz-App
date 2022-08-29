import Container from './Components/Container'
import Box from './Components/Box'
import Title from './Components/Title'
import Question from './Components/Question'
import Answer from './Components/Answer'

function App() {

  return (
    <Container>
      <Box>
        <Title current={1} total={3}></Title>
        <Question question={'What is a capital of France?'}></Question>
      </Box>
      <Box>
        <Answer answer={'Paris'}></Answer>
        <Answer answer={'Paris'}></Answer>
        <Answer answer={'Paris'}></Answer>
        <Answer answer={'Paris'}></Answer>
      </Box>
    </Container>    
  )
}

export default App
