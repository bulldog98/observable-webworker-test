import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { fromWorker } from "observable-webworker";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private input$ = new Subject<string>();

  set input(value: string) {
    this.input$.next(value);
  }

  public result$ = fromWorker<string, string>(() => new Worker(
    new URL('./test.worker', import.meta.url)
    , { type: 'module' }
  ), this.input$)
}
