import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;
 
 
  user: User = new User();
  
  constructor(private formBuilder: FormBuilder,
              private userService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      username: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', [Validators.required]],
      number:  ['', [Validators.required]],
      street:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      pincode:  ['', [Validators.required]],});
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
 
  changeCity(e: | any) {
    this.registerForm.get('city').setValue(e.target.value, {
     onlySelf: true
    })
  }

  UserAddress(): void {
    this.submitted = false;
    this.user= new User();
  }

  
  onSubmit() {
    alert("welcome");
    this.submitted = true;
    this.user=this.registerForm.value;
    // stop the process here if form is invalid
  /*  if (this.registerForm.invalid) {
        return;
    }*/
    alert("hello");
    this.save();
  }

  save() {
    alert("ts");
    this.userService.saveUser(this.user)
    .subscribe(data => console.log(data), error => console.log(error));
    this.user= new User();
    // this.address=new Address();

    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/login']);
  }

}
