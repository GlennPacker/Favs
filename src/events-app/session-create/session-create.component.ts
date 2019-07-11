import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ISession} from '../shared/ISession';

@Component({
  styleUrls: ['./session-create.component.css'],
  templateUrl: './session-create.component.html',
})

export class SessionCreateComponent implements OnInit {
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  newSessionForm: FormGroup;

  ngOnInit(): void {
    this.name = new FormControl('', [Validators.required]);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      this.restrictedWords
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  private restrictedWords(control: FormControl): { [key: string]: any; } {
    return control.value.includes('foo') ? {restrictedWords: 'foo' } : null;
  }

  saveSession(formData) {
    const session: ISession = {
      name: formData.name,
      duration: +formData.duration,
      level: formData.level,
      abstract: formData.abstract,
      presenter: formData.presenter,
      voters: [],
      id: undefined
    }
    console.log(session);
  }
}
