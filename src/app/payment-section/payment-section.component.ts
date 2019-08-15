import { Component, OnInit } from '@angular/core';
import { SlokotoService } from '../slokoto.service';

@Component({
  selector: 'app-payment-section',
  templateUrl: './payment-section.component.html',
  styleUrls: ['./payment-section.component.scss']
})
export class PaymentSectionComponent implements OnInit {

  // Public
  public paymentMethods = ['Credit Card'];
  public creditCardTypes =['Master Card','Visa', 'American Express'];
  public monthList = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  public yearList = [2019,2020,2021,2022,2023,2024]; 
  
  constructor(public billingSvc: SlokotoService) { }
  ngOnInit() {
  }
}
