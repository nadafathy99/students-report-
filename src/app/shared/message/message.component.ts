import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, MessagesModule],
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  @Input() closable = true;
  @Input({ required: true }) detail = '';
  @Input({ required: true }) type = 'success';

  public message!: Message[];

  ngOnInit(): void {
    this.message = this.getMessage();
  }

  public getMessage(): Message[] {
    switch (this.type.toLowerCase()) {
      case 'info':
        return [
          { severity: 'info', summary: 'Info', detail: `${this.detail}` },
        ];
      case 'warn':
        return [
          { severity: 'warn', summary: 'Warning', detail: `${this.detail}` },
        ];
      case 'error':
        return [
          { severity: 'error', summary: 'Error', detail: `${this.detail}` },
        ];
      default:
        return [
          { severity: 'success', summary: 'Success', detail: `${this.detail}` },
        ];
    }
  }
}
