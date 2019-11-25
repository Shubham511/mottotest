import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  Patientid: string;
  phone: number;
  name: string;
  village: string;
  age: number;
  weight: number;
  health: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  '},
  { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  '},
  { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  '},
  { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  '},
  { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  '},
  { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  '},
  { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  '},
  { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  '},
  { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  '},
  { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  '},
  { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  '},

];

@Component({
  selector: 'app-find-patient',
  templateUrl: './find-patient.component.html',
  styleUrls: ['./find-patient.component.css']
})

export class FindPatientComponent implements OnInit {

  displayedColumns: string[] = ['Patientid', 'phone', 'name', 'village', 'age', 'weight', 'health', 'btn'];
  dataSource = ELEMENT_DATA;
  constructor(private _router:Router) { }

  ngOnInit() {
   
  }
  
  
  gologin(){
    this._router.navigate(['/login']);
  }

  gohome(){
    this._router.navigate(['/deshboard']);
  }

  goaddfind(){
    this._router.navigate(['/add-find']);
  }
  
  goConsultion(){
    this._router.navigate(['/consultion']);
  }

  goreviewdet(){
    this._router.navigate(['/review-det']);
  }

  goprintinv(){
    this._router.navigate(['/printinv']);
  }

  gofinedetails(){
    this._router.navigate(['/find-patient']);
  }

  gobillinvioes(){
    this._router.navigate(['/billinvoice']);
  }

  gopatientinfo(){
    this._router.navigate(['/patientinfo']);
  }

  gomedicine(){
    this._router.navigate(['/medicine-detials']);
  }


}
