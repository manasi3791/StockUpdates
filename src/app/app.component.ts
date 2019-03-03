import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stocksApp';
  latestStockUpdate = [];
  marketData = [];

  constructor(private wsService: WebSocketService) {
  }
    ngOnInit() {
      console.log(this.marketData)
       this.wsService.createObservableSocket('ws://stocks.mnet.website')
        .subscribe(  stockData => {
            this.latestStockUpdate = stockData
            if(typeof this.marketData == 'undefined') {
              this.marketData = this.latestStockUpdate
            } else {
            this.latestStockUpdate.forEach((item, index) => {
                let shareData = this.marketData.find(e => e[0] === item[0])
                if(shareData){
                  setTimeout(() => {
                    if( this.marketData[index][1] < shareData[1] ) {
                      this.marketData[index][2] = 'rise'
                    }
                    else if( this.marketData[index][1] > shareData[1] ) {
                      this.marketData[index][2] = 'down'
                    }
                    this.marketData[index][1] = shareData[1]
                  }, 1500);
                }
                else {
                  this.marketData.push(item)
                }
              })
            }    
          console.log(this.marketData)
        });
    }
}
