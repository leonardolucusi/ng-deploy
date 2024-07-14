import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { ParticlesComponent } from './particles/particles.component';
import { TestingpageComponent } from './testingpage/testingpage.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { TheGetComponent } from './the-get/the-get.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    FooterComponent,
    ParticlesComponent,
    TestingpageComponent,
    PortfolioPageComponent,
    TheGetComponent,
    ContactComponent,
    CarouselComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
