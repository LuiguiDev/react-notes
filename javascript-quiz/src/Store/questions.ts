import { create } from "zustand";
import { type Question } from "../types";

interface State {
  questions: Question[]
  currentQuestion: number
  getQuestionsFn: (limit: number) => void
}

export const useQuestionsStore = create<State>((set) => {
  // we have to return an object wich is the global state and the methods to refresh the states
  return {
    questions: [],
    currentQuestion: 0,

    getQuestionsFn: async (limit:number) => {
      console.log('hola')
    }
  }
})