import { Injectable } from '@angular/core';
import { Clsbilling } from './models/classes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlokotoService {

  private valid_card_length = 16;
  billing:Clsbilling = new Clsbilling();
  
  constructor(private http: HttpClient) { }
    
  IsBillingFormValid() {
    return (this.billing.cardNumber && this.billing.cardNumber.toString().length === this.valid_card_length);   
  }

  PostBillingData() {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post('https://slok.me', this.billing, {headers : headers})
      .subscribe(res => {
         console.log('submitted');
      },(error) => console.log('error submit billing data') )
  } 
}
