import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyloanComponent } from './myloan/myloan.component';
import { MylistingComponent } from './mylisting/mylisting.component';
import { LoanService } from './loan-service.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MylistingComponent,
    MyloanComponent,
  ],
  bootstrap: [AppComponent, MylistingComponent],
  providers: [LoanService],
})
export class AppModule {}
