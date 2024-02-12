import { Student } from 'src/app/types/api-types';

export type StudentModel = Pick<Student, 'name' | 'student_id' | 'subject'> & {
  scores: {
    learning_objective: string;
    score: string;
    gradeStatus: string;
  }[];
};

export function getScoreStatus(score: string): string {
  score = String(score).toLowerCase();
  switch (score) {
    case 'excellent':
    case 'a':
    case '8':
      return 'Excellent';

    case 'very poor':
    case 'f':
    case '1':
      return 'Fail';

    default:
      return '';
  }
}
