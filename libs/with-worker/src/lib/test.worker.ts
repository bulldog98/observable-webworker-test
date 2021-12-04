import { DoWork, runWorker } from "observable-webworker";
import { map, Observable } from "rxjs";

export class TestWorker implements DoWork<string, string> {
  public work(input$: Observable<string>): Observable<string> {
    return input$.pipe(
      map(data => `worker response to ${data}`)
    );
  }
}

runWorker(TestWorker)
