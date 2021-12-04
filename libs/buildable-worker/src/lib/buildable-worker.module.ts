import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildableComponent } from './buildable/buildable.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    BuildableComponent
  ],
  exports: [
    BuildableComponent
  ],
})
export class BuildableWorkerModule {}
