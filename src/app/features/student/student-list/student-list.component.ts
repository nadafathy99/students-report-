import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UploaderComponent } from 'src/app/shared/uploader/uploader.component';
import { StudentService } from 'src/app/services/student.service';
import {
  BehaviorSubject,
  EMPTY,
  catchError,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { CardComponent } from 'src/app/shared/card/card.component';
import { MessageComponent } from 'src/app/shared/message/message.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    UploaderComponent,
    CardComponent,
    MessageComponent,
  ],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  private studentService = inject(StudentService);

  public errorMessagedetail = '';
  private studentsInfoSubject = new BehaviorSubject<FormData | null>(null);
  public studentInfoChanges = this.studentsInfoSubject.asObservable().pipe(
    switchMap((formData) =>
      formData
        ? this.studentService
            .getStudentsInformationFromExcelSheet(formData)
            .pipe(
              map((res) => res.data),
              tap(() => (this.errorMessagedetail = '')),
              catchError((err: string) => {
                this.errorMessagedetail = err;
                return EMPTY;
              })
            )
        : of(null)
    )
  );

  public uploadFile(selectedFile: File) {
    const formData = new FormData();
    formData.append('file', selectedFile);

    this.studentsInfoSubject.next(formData);
  }
}
