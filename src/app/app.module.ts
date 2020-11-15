import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GithubService} from './services/github.service';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import  {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
