import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule} from './footer/footer.module';
import { DashboardModule} from './dashboard/dashboard.module';
import { PaymentModule} from './payment/payment.module';
import { LoginModule} from './login/login.module';
import { RegisterModule} from './register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterService } from './services/router.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeModule } from './home/home.module';
import { PagenotfoundexceptionModule } from './pagenotfoundexception/pagenotfoundexception.module';
import { ContactusModule } from './contactus/contactus.module';
import { SearchModule } from './search/search.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    ContactusModule,
    DashboardModule,
    HomeModule,
    PagenotfoundexceptionModule,
    PaymentModule,
    LoginModule,
    RegisterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SearchModule
  ],
  providers: [HttpClientModule, RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
