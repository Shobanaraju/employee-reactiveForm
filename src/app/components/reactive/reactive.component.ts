import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,AbstractControl, FormGroup, Validators } from '@angular/forms';
import { RegClass } from 'src/app/interfaces/reg-class';
import { RegServiceService } from 'src/app/services/reg-service.service';
import { pwdValidator } from 'src/app/Validators/pwdValidator';
// import { RegClass } from '../interface/reg-class';
// import { RegServiceService } from '../services/reg-service.service';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  reactiveForm!:FormGroup

  show = false
  regValues: RegClass=new RegClass()
  rValues!:RegClass

  constructor(private _service : RegServiceService,private formBuilder: FormBuilder ){

  }



  ngOnInit(){
  this.reactiveForm = this.formBuilder.group({
    fullname :new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    address:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    number:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    confPassword: new FormControl('', [Validators.required])},
    { validators: pwdValidator });


    console.log('Form status:', this.reactiveForm.status);
    console.log('Form errors:', this.reactiveForm.errors);



  }

  
  addValues(){

    
    if(this.reactiveForm.valid){
    console.log(this.reactiveForm.value)
    this._service.postReg(this.reactiveForm.value).subscribe((response)=>{

      console.log(response)

      this.regValues = response

      this.show=true

    })
  }else{
    console.log("Form not valid")
    this.show=false
  }

}

}

