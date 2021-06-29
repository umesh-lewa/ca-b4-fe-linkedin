import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    title = 'LinkedIn';
    login:any;
    constructor(private fb:FormBuilder, private titleService: Title,private mainServ:MainService){
      this.mainServ.redirectToCognito('signup');
      this.titleService.setTitle('Register | LinkedIn'); 
      this.login=this.fb.group({
        email:new FormControl("",Validators.required),
        password:new FormControl("",Validators.required),
        //text:new FormControl("",Validators.required),
        //password1:new FormControl("",Validators.required),
        //text1:new FormControl("",Validators.required)
      })
    }

  
    save(){
      if(this.login.valid)
      {
      this.login=[...this.login,...this.login.value];
      this.login=this.fb.group({
        email:new FormControl("",Validators.required),
        password:new FormControl("",Validators.required),
        //text:new FormControl("",Validators.required),
        //password1:new FormControl("",Validators.required),
        //text1:new FormControl("",Validators.required)
      }) 
  }
  }

  ngOnInit(): void {
  }
}