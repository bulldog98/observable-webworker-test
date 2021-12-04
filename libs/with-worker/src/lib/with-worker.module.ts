import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    TestComponent
  ],
  exports: [TestComponent],
})
export class WithWorkerModule {}
