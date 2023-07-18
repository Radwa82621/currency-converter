import { Component, OnInit } from '@angular/core';
import { CurrencyComponent } from '../currency/currency.component';
import { CurrencyService } from '../currency.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-convert-by-date',
  templateUrl: './convert-by-date.component.html',
  styleUrls: ['./convert-by-date.component.css']
})
export class ConvertByDateComponent implements OnInit{

  newArray:[string, unknown][]=[]
  codes:[string, unknown][]=[]
  day:[string, unknown][]=[]
  finalArray:[string, number][]=[]
  result:number=0
  amount:number=0
  fromForm:number=0
  toForm:number=0
  from:number=0
to:number=0  
  date:any
  constructor(private _currency:CurrencyService)
  {}

  converBYDatetForm:FormGroup= new FormGroup({
    amount:new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
    date:new FormControl('')
  })
  ngOnInit(): void {
    this.getCodes()
  }
getCodes(){
  
  this._currency.convertByDate('2023-1-1').subscribe(
    {
      next:(res)=>{
        console.log(res);
        
        this.newArray=Object.entries(res.data)
        let response:any=this.newArray[1][1]
        this.codes=Object.entries(response)
        

        
      },
      error:(err)=>console.log(err)
      
    }
  )
}
convertByDate(form:FormGroup){




  this._currency.convertByDate(`${form.value.date}`).subscribe(
    {
      next:(res)=>{
     
       
        this.day=Object.entries(res.data)
        let x:any =this.day[0][1]
        this.finalArray=Object.entries(x)
        this.finalArray.map(el=>{
          if(el[0]==form.value.from){
            this.from=el[1];}
            if(el[0]==form.value.to){
              this.to=el[1]
            }
        })

        this.result = Number(
          ((this.to / this.from * form.value.amount).toFixed(2)
        ))
        
        

        
      }
    
    
    }) 
  }

}
