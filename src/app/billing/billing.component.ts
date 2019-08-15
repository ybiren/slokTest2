import { Component, OnInit } from '@angular/core';
import { SlokotoService } from '../slokoto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  // Public
  public price = 0;
  public showSettings = true;
  
  constructor(private billingSvc: SlokotoService, private modalService: NgbModal) { }

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
      this.modalService.open(AlertModalComponent, {centered: true, backdrop: 'static'});
    }
  }
  
  toggleSettings() {
    this.showSettings = !this.showSettings;  
  }
}
