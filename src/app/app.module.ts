import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSkeletonLoaderModule } from '../../projects/ngx-if-skeleton-loader/src/lib/ngx-if-skeleton-loader.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxSkeletonLoaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
