import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() txt = '';
  public isExpanded = false;
  
  constructor() { }

  ngOnInit() {
  }
  
  doToggle() {
    this.isExpanded = !this.isExpanded
  }

}
