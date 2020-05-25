import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
employeeForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fname:new FormControl(),
      lname:new FormControl,
      pnumber:new FormControl
    })
  }
onSubmit():void{
fullName:''
age:''
salary:''
console.log(this.employeeForm.value)
}
}

