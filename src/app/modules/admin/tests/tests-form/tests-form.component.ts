import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tests-form',
  templateUrl: './tests-form.component.html',
  styleUrls: ['./tests-form.component.scss']
})
export class TestsFormComponent {
  testForm!: FormGroup;
  
  constructor(private fb: FormBuilder){
    this.testForm = this.fb.group({
      name: new FormControl<string>('', [Validators.required]),
      category: new FormControl<string>('', [Validators.required]),
      description: new FormControl<string>('', [Validators.required]),
      price: new FormControl<number|null>(null, [Validators.required])
    })
  }


  submitTest(){
    console.log(this.testForm.value);
    
    this.testForm.reset();
  }
}
