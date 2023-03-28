import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  arrayData:any = [
    {title: 'Angular', level: 'beginner'},
    {title: 'React', level: 'intermediate'},
    {title: 'Vue', level: 'advanced'}
  ];
  ngOnInit() {
    this.form = this.formBuilder.group({
      lessons: this.formBuilder.array([])
    });

    this.arrayData.forEach((data: { title: any; level: any; }) => {
      const lessonForm = this.formBuilder.group({
        title: [data.title, Validators.required],
        level: [data.level, Validators.required]
      });
      this.lessons.push(lessonForm);
    });
  }
  
  get lessons() {
    return this.form.controls['lessons'] as FormArray;
  }
  
  addLesson() {
    const lessonForm = this.formBuilder.group({
      title: ['', Validators.required],
      level: ['', Validators.required]
    });
  
    this.lessons.push(lessonForm);
  }
  
  deleteLesson(index: number) {
    this.lessons.removeAt(index);
  }

  saveLesson() {
    console.log(this.form.value);
  }
  
}
