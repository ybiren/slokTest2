import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan-section',
  templateUrl: './plan-section.component.html',
  styleUrls: ['./plan-section.component.scss']
})
export class PlanSectionComponent implements OnInit {

  @Input() totalPrice = 0;
  constructor() { }

  ngOnInit() {
  }

}
