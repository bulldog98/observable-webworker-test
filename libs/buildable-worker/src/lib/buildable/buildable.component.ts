import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { BuildableService } from "../buildable.service";

@Component({
  selector: 'webworker-tests-buildable',
  templateUrl: './buildable.component.html',
  styleUrls: ['./buildable.component.scss']
})
export class BuildableComponent implements OnInit {
  formControl = new FormControl();
  result$ = this.testService.result$;

  constructor(private testService: BuildableService) {}

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe((x) => this.testService.input = x);
  }
}
