import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService  {
  // body = {
  //   key: 'fca_live_nqkCyjxHvwVKLSfK8KRAwMVTypi0fBjx1pUdiP87',
  //   date_from: "2021-12-31",
  //   date_to: "2022-12-31"


  // }
  constructor(private _hhtp: HttpClient) { }
  headers=new HttpHeaders({
    apikey:environment.apikey, 
  })
  currenciesTable(): Observable<any> {
    return this._hhtp.get(`https://api.freecurrencyapi.com/v1/currencies`,{headers:this.headers})
  }
  convert():Observable<any>
  {
    return this._hhtp.get(`https://api.freecurrencyapi.com/v1/latest`,{headers:this.headers})
  }
  convertByDate(date:any):Observable<any>{
    return this._hhtp.get(`https://api.freecurrencyapi.com/v1/historical?date_from=${date}`,{headers:this.headers})

  }


}
