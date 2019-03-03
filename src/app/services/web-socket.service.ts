import { Injectable } from "@angular/core";
import { Observable, Subscriber } from "rxjs";

@Injectable()
export class WebSocketService {
  constructor() {}

  private ws: WebSocket;

  createObservableSocket(url: string): Observable<any> {
    console.log('inside createObservableSocket')
    this.ws = new WebSocket(url);
    return new Observable(observer => {
      this.ws.addEventListener('message', function(e) {
        var stockData = JSON.parse(e.data);
        observer.next(stockData)
      });
      return () => this.ws.close();
    });
  }
  }
