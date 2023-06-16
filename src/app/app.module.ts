import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BlogwidgetComponent } from './pages/blogwidget/blogwidget.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { OpinionsComponent } from './pages/opinions/opinions.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    BlogwidgetComponent,
    HomeComponent,
    BlogsComponent,
    OpinionsComponent,
    AboutusComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
