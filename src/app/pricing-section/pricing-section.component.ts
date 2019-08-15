import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pricing-section',
  templateUrl: './pricing-section.component.html',
  styleUrls: ['./pricing-section.component.scss']
})
export class PricingSectionComponent implements OnInit {

  @Output() planChanged: EventEmitter<number> = new EventEmitter(); 
  public period = 'year';
  public planDescription = '';
  
  constructor() { }

  ngOnInit() {
  }
  
  setPeriod(period: string) {
    this.period = period;
  }
 
  setPlanDescription(planDescription: string, price: number) {
    this.planDescription = planDescription;
    this.planChanged.emit(price);
  }

}
