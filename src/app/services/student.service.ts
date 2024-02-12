import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { handleError } from '../shared/util/throw-error';
import { ResponseList } from '../types/api-types';
import {
  StudentModel,
  getScoreStatus,
} from '../features/student/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public constructor(private http: HttpClient) {}
  public API_URL = environment.API_URL;

  public getStudentsInformationFromExcelSheet(
    data: FormData
  ): Observable<ResponseList<StudentModel>> {
    return this.http
      .post<ResponseList<StudentModel>>(`${this.API_URL}/upload`, data)
      .pipe(
        catchError(handleError),
        map((response) => ({
          ...response,
          data: response.data?.map((student) => ({
            ...student,
            scores: student.scores.map((learningObjective) => ({
              ...learningObjective,
              gradeStatus: getScoreStatus(learningObjective.score),
            })),
          })),
        })),
        shareReplay(1)
      );
  }
}
