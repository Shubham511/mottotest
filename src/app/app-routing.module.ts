import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddFindComponent } from './add-find/add-find.component';
import { ConsultionComponent } from './consultion/consultion.component';
import { ReviewDetComponent } from './review-det/review-det.component';
import { FindPatientComponent } from './find-patient/find-patient.component';
import { MedicineDetialsComponent } from './medicine-detials/medicine-detials.component';
import { PrintinvComponent } from './printinv/printinv.component';
import { BillinvoiceComponent } from './billinvoice/billinvoice.component';
import { PatientinfoComponent } from './patientinfo/patientinfo.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'deshboard', component: DashboardComponent,  },
  {path: 'add-find', component: AddFindComponent,},
  {path: 'consultion', component: ConsultionComponent,},
  {path: 'review-det', component: ReviewDetComponent,},
  {path: 'find-patient', component: FindPatientComponent,},
  {path: 'medicine-detials', component: MedicineDetialsComponent,},
  {path: 'printinv', component: PrintinvComponent,},
  {path: 'billinvoice', component: BillinvoiceComponent,},
  {path: 'patientinfo', component: PatientinfoComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
