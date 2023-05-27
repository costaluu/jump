import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { ImageApiService } from './services/image-api.service';
import { LucideAngularModule, Combine, Group } from 'lucide-angular';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Combine, Group }),
  ],
  providers: [ImageApiService],
  bootstrap: [],
  exports: [HeaderComponent],
})
export class SharedModule {}
