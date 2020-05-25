import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent  {

  value:any;
  user:any=[
    {name:'Sandeep',Age:24,gender:'Male'},
    {name:'Vinod',Age:24,gender:'Male'},
    {name:'Ugam',Age:24,gender:'Male'},
    {name:'Nikit',Age:24,gender:'Male'}

  ];
  constructor(){
  }
Submit(data){

  // this.value=data;
  alert(JSON.stringify(data))
console.log(data)
}

}
