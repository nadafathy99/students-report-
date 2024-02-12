import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
  standalone: true,
  imports: [FileUploadModule, ReactiveFormsModule],
})
export class UploaderComponent {
  @Input({ required: true }) acceptedFileTypes = '';
  @Output() selcetedFile = new EventEmitter<File>();

  public selectedFile!: File;

  onSelect(event: any, fileUploader: any): void {
    this.selcetedFile.emit(event.currentFiles[0]);
    fileUploader.clear();
  }
}
