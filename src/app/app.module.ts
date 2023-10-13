import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {TranslationComponent} from './translation/translation.component'
import { TranslationService } from './translation.service';

@NgModule({
  declarations: [AppComponent, TranslationComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [TranslationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
