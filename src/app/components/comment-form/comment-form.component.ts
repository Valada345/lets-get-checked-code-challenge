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

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      text: [this.initialText, Validators.required],
      userName: ['Name', Validators.required],
    });
  }

  onSubmit(): void {
    console.log('Submit: ', this.form.value);
    this.handleCommentSubmit.emit(this.form.value);
  }
}
