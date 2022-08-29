import create from "zustand";

const questionStore = create((set) => ({
  correct: 0,
  index: 0,
  setCorrect: () => set((state) => ({ correct: state.correct + 1 })),
  next: () =>
    set((state) => ({
      index:
        state.index + 1 > state.questions.length
          ? state.questions.length
          : state.index + 1,
    })),
  questions: [
    {
      question: "What is the capital of France?",
      answers: [
        { answer: "Paris", correct: true },
        { answer: "London", correct: false },
        { answer: "Dublin", correct: false },
        { answer: "New York", correct: false },
      ],
    },
    {
      question: "Which is the largest country in the world?",
      answers: [
        { answer: "China", correct: false },
        { answer: "Brazil", correct: false },
        { answer: "Russia", correct: true },
        { answer: "India", correct: false },
      ],
    },
    {
      question: "How many continents are there in the world?",
      answers: [
        { answer: "8", correct: false },
        { answer: "5", correct: false },
        { answer: "3", correct: false },
        { answer: "6", correct: true },
      ],
    },
  ],
}));

export default questionStore;
