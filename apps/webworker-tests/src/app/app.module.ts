import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WithWorkerModule } from "@webworker-tests/with-worker";
import { BuildableWorkerModule } from "@webworker-tests/buildable-worker";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WithWorkerModule, BuildableWorkerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
