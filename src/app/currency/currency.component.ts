import { Component } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  currencies:any[]=[];
  codes:any[]=[];
  constructor(private _currency:CurrencyService){

    this.currency()
  }

currency(){
  this._currency.currenciesTable().subscribe({
    next:(res)=>{console.log(res);
      this.currencies = Object.values(res.data);
    
    console.log(this.currencies);},
    error:(err)=>console.log(err)
    
    

  })
}
}