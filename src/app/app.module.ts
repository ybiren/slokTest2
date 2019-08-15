import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { BillingSectionComponent } from './billing-section/billing-section.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { UpgradeAssistComponent } from './upgrade-assist/upgrade-assist.component';
import { PaymentSectionComponent } from './payment-section/payment-section.component';
import { PlanSectionComponent } from './plan-section/plan-section.component';
import { AccordionComponent } from './upgrade-assist/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    BillingSectionComponent,
    PricingSectionComponent,
    UpgradeAssistComponent,
    PaymentSectionComponent,
    PlanSectionComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
