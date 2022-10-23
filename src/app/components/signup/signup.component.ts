import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  type : string = "password";
  isText : boolean = false;
  eyeIcon : string = "fa-eye-slash"
  signUpForm !: FormGroup;
  constructor(private fb2 : FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb2.group ({
      firstName: ['', Validators.required],
      lastName:  ['', Validators.required],
      email:     ['', Validators.required],
      userName:  ['', Validators.required],
      password:  ['', Validators.required],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
    this.isText ? this.type = "text" : this.type = "password"
  }

  onSignUp() {
    if(this.signUpForm.valid) {
      console.log(this.signUpForm.value)

      //send obj to db and submit
    } else {
      //throw error using toaster with required field
      ValidateForm.validateFormFields(this.signUpForm)
      alert("All fields are required.")
    }
  }
}