import { Component, OnInit } from '@angular/core';
import { home } from '../home.model'
  import { from } from 'rxjs';
@Component({
  selector: 'app-mform',
  templateUrl: './mform.component.html',
  styleUrls: ['./mform.component.css']
})
export class MformComponent implements OnInit {
home = new home()
dataarray=[];

  constructor() { }

  ngOnInit(): void {
    this.dataarray.push(this.home)
  }
  addForm(){
    this.home=new home()
    this.dataarray.push(this.home);
  }
  removeForm(index){
this.dataarray.splice(index)
  }
  onSubmit(){
    console.log(this.dataarray)
  }
}
