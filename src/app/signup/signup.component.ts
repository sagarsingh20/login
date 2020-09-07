import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 
  //password icon
  hide = true;
  constructor(public router: Router) { }

  ngOnInit() {
    
  }
  signupForm=new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,15}')]),
    cpassword: new FormControl('',[Validators.required])
  }
    // ,{ 
  //   : this.passwvalidatorsord.bind(this)
    
  // }
  )
  // password(formGroup: FormGroup) {
  //   const { value: password } = formGroup.get('password');
  //   const { value: cpassword } = formGroup.get('cpassword');
  //   return password === cpassword ? null : { passwordNotMatch: true };
  // }

  sign(){
   console.log(this.signupForm.value);
   
    this.router.navigate(['/login'])
  }
  
}
