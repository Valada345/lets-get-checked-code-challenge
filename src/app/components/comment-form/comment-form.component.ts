import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  @Input() submitLabel: string = '';
  @Input() cancelButton: boolean = false;
  @Input() initialText: string = '';

  @Output() handleCommentSubmit = new EventEmitter<{
    userName: string;
    text: string;
  }>();

  @Output() handleCancel = new EventEmitter<void>();

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      text: [this.initialText, Validators.required],
      userName: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.handleCommentSubmit.emit(this.form.value);
    this.form.reset();
  }
}
