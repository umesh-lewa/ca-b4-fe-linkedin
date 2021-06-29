import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    title = 'LinkedIn';
    login:any;
    email="aditya@gmail.com";
    password="User@123"
    err=""
    constructor(private fb:FormBuilder, private titleService: Title, private router: Router,private mainServ:MainService){
      this.mainServ.redirectToCognito('login');
      this.titleService.setTitle('Login | LinkedIn'); 
      this.login=this.fb.group({
        email:new FormControl("",Validators.required),
        password:new FormControl("",Validators.required)
      })
    }
  
    save(){
      if(this.login.valid)
      {
      this.login=[...this.login,...this.login.value];
      this.login=this.fb.group({
        email:new FormControl("",Validators.required),
        password:new FormControl("",Validators.required)
      })
    }
  }
      doLogin(){
        this.err=""
        if (this.login.valid){
          if(this.email==this.login.value.email && this.password==this.login.value.password)
          {
            localStorage.setItem("loggedin","true");
            this.router.navigate(["/home"])
          }
          else{
            this.err="Invalid credentials!"
          }
        }
      }

  ngOnInit(): void {
  }

}
