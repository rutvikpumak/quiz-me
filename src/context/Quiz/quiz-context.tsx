import { createContext, useContext, useReducer } from "react";
import { initialState, quizReducer } from "../../reducer/quizReducer";
import { QuizContextType } from "../../types/quizcontext.types";

const QuizContext = createContext<QuizContextType>({} as QuizContextType);

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
