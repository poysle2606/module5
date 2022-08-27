import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DanhSachBenhAnComponent } from './benh_an/component/danh-sach-benh-an/danh-sach-benh-an.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { SuaBenhAnComponent } from './benh_an/component/sua-benh-an/sua-benh-an.component';
import { ThemMoiBenhAnComponent } from './benh_an/component/them-moi-benh-an/them-moi-benh-an.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DanhSachBenhAnComponent,
    SuaBenhAnComponent,
    ThemMoiBenhAnComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
