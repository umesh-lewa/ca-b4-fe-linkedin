import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    title = 'LinkedIn';
    login:any;
    constructor(private fb:FormBuilder){
      this.login=this.fb.group({
        email:new FormControl("",Validators.required),
        password:new FormControl("",Validators.required),
        text:new FormControl("",Validators.required),
        submit:new FormControl("",Validators.required)
      })
    }
  
    save(){
      console.log(this.login.valid);
      if(this.login.valid)
      {
      this.login=[...this.login,...this.login.value];
      this.login=this.fb.group({
        email:new FormControl("",Validators.required),
        password:new FormControl("",Validators.required),
        text:new FormControl("",Validators.required),
        submit:new FormControl("",Validators.required)
      }) 
  }
  }

  ngOnInit(): void {
  }
}