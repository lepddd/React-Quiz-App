import "./App.css";
import Container from "./Components/Container";
import Box from "./Components/Box";
import Title from "./Components/Title";
import Question from "./Components/Question";
import questionStore from "./Store/questionStore";

function App() {
  const setCorrect = questionStore((state) => state.setCorrect);
  const setQuestion = questionStore((state) => state.next);
  const { index, correct, questions } = questionStore((state) => ({
    index: state.index,
    correct: state.correct,
    questions: state.questions,
  }));

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setCorrect();
    }
    console.log(index);
    setQuestion();
  };

  return (
    <Container>
      {index < questions.length ? (
        <>
          <Box>
            <Title current={index + 1} total={questions.length} />
            <Question question={questions[index].question} />
          </Box>
          <Box>
            {questions[index].answers.map((answer, index) => (
              <button onClick={() => handleClick(answer.correct)} key={index}>
                {answer.answer}
              </button>
            ))}
          </Box>
        </>
      ) : (
        <Box>
          Your score is {correct} out of {questions.length}
        </Box>
      )}
    </Container>
  );
}

export default App;
