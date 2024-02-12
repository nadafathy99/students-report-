export interface Response<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface ResponseList<T> {
  success: boolean;
  data?: T[];
  message?: string;
}

export interface Student {
  student_id: number;
  name: string;
  subject: string;
  scores: {
    learning_objective: string;
    score: string;
  }[];
}
