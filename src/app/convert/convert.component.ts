import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements  OnInit,OnDestroy{

  convertSubscription!:Subscription
  newArray:any[]=[]
  result:number=0
  response={}
  from:number=0
  to:number=0
constructor(private _currency:CurrencyService){
}
  ngOnDestroy(): void {
this.convertSubscription.unsubscribe()  }
  ngOnInit(): void {
   this.convert()
}
 
convertForm:FormGroup= new FormGroup({
  amount:new FormControl(''),
  from: new FormControl(''),
  to: new FormControl('')
})

convert(){
  this.convertSubscription=this._currency.convert().subscribe({
    next:(res)=>{
      this.response=res.data
      this.newArray=Object.entries(res.data)
    },
    error:(err)=>{console.log(err)
    }
    
  })
}
convertNow(form:FormGroup){
  console.log(form.value)

  // console.log(form.value.from,this.);
this.newArray.map(el=>{
  if(el[0]==form.value.from){console.log(el[1]);
  this.from=el[1];}
  if(el[0]==form.value.to){console.log(el[1]);
    this.to=el[1]
  }
})
  

 
    this.result = Number(
      ((this.to / this.from * form.value.amount).toFixed(2)
    ))

console.log(this.result);


}
}
