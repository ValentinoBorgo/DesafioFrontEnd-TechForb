import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/components/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from 'src/pages/home/home.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { ModalAddPlantaComponent } from 'src/components/modales/modalAddPlanta/modal-add-planta/modal-add-planta.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ModalUpdatePlantaComponent } from 'src/components/modales/modalUpdatePlanta/modal-update-planta/modal-update-planta.component';
import { ModalDeletePlantaComponent } from 'src/components/modales/modalDeletePlanta/modal-delete-planta/modal-delete-planta.component';
import { NumberFormatPipe } from 'src/pipes/number-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ModalAddPlantaComponent,
    ModalUpdatePlantaComponent,
    ModalDeletePlantaComponent,
    NumberFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatListModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
