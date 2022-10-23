import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
  constructor(private fb2:FormBuilder, 
    private auth:AuthenticationService, 
    private router:Router) { }

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
      //send obj to db and submit
      this.auth.signUp(this.signUpForm.value)
        .subscribe({
          next:(res => {
            alert(res.message);
            this.signUpForm.reset();
            this.router.navigate(['login']);
          })
          ,error:(err => {
            alert(err?.error.message);
          })
        })
    } else {
      //throw error using toaster with required field
      ValidateForm.validateFormFields(this.signUpForm)
      alert("All fields are required.")
    }
  }
}