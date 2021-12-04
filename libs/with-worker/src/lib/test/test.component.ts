import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { TestService } from "../test.service";

@Component({
  selector: 'webworker-tests-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  formControl = new FormControl();
  result$ = this.testService.result$;

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe((x) => this.testService.input = x);
  }
}
