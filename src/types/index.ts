export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  difficulty: Difficulty;
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  score: number;
  isCompleted: boolean;
}

export interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export interface QuizSectionProps {
  questions: QuizQuestion[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export type Difficulty = 'easy' | 'medium' | 'hard';