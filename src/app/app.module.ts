import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
