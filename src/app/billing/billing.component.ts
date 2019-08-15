import { Component, OnInit } from '@angular/core';
import { SlokotoService } from '../slokoto.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  // Public
  public price = 0;
  public showSettings = true;
  
  constructor(private billingSvc: SlokotoService) { }

  ngOnInit() {
  }

  setTotal(price: number) {
    this.price = price;
    this.billingSvc.billing.total = price;
  }
  
  checkAndPostData() {
    if (this.billingSvc.IsBillingFormValid()) {
      this.billingSvc.PostBillingData();
    } else {
      alert("Wrong credit card number");
    }
  }
  
  toggleSettings() {
    this.showSettings = !this.showSettings;  
  }
}
