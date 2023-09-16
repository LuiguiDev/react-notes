export interface Question {
  id: number,
  question: string,
  code: string,
  answers: string[],
  correctAnswer: number,
  selectedAnswer?: number,
  selectedIsCorrect?: boolean
}