import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ModalComponent } from './components/modal/modal.component';

//External
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PagemprenComponent } from './components/pagempren/pagempren.component';
import { ComerciosListComponent } from './components/comercios-list/comercios-list.component';
import { ComerciosItemComponent } from './components/comercios-item/comercios-item.component';
import { MatTooltipModule} from '@angular/material/tooltip';
import { PasardatosService } from './services/pasardatos.service';
import { LoginComponent } from './components/login/login.component';
import { AdmonComponent } from './components/admon/admon.component';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './components/menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    ModalComponent,
    PagemprenComponent,
    ComerciosListComponent,
    ComerciosItemComponent,
    LoginComponent,
    AdmonComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    NgxPayPalModule,
    NgbModule,
    NgxSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NoopAnimationsModule, 
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,  
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [PasardatosService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
 }
