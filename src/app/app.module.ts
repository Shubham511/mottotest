import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule, MatInputModule, MatToolbarModule, MatCardModule, MatButtonModule, MatOptionModule, MatSelectModule, MatGridListModule, MatDatepickerModule, MatTableModule, MatDividerModule, MatAutocompleteModule, MatListModule, MatNativeDateModule, MatFormFieldControl,} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddFindComponent } from './add-find/add-find.component';
import { ConsultionComponent } from './consultion/consultion.component';
import { ReviewDetComponent } from './review-det/review-det.component';
import { FindPatientComponent } from './find-patient/find-patient.component';
import { MedicineDetialsComponent } from './medicine-detials/medicine-detials.component';
import { PrintinvComponent } from './printinv/printinv.component';
import { BillinvoiceComponent } from './billinvoice/billinvoice.component';
import { PatientinfoComponent } from './patientinfo/patientinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddFindComponent,
    ConsultionComponent,
    ReviewDetComponent,
    FindPatientComponent,
    MedicineDetialsComponent,
    PrintinvComponent,
    BillinvoiceComponent,
    PatientinfoComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    MatDatepickerModule,
    MatTableModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatListModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatNativeDateModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
