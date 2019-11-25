import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface PeriodicElement {
  Patientid: string;
  name: string;
  village: string;
  gender:string;
  age: number;
  weight: number;
  health: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Patientid: "VAN/OP/001",  name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid'},
  { Patientid: "VAN/OP/001",  name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid'},
  { Patientid: "VAN/OP/001",  name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid'},
  { Patientid: "VAN/OP/001",  name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid'},
  { Patientid: "VAN/OP/001",  name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid'},
  { Patientid: "VAN/OP/001",  name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid'},
  { Patientid: "VAN/OP/001",  name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid'},
  { Patientid: "VAN/OP/001",  name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid'},
  { Patientid: "VAN/OP/001",  name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid'},
  { Patientid: "VAN/OP/001",  name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid'},
  { Patientid: "VAN/OP/001",  name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid'},
  
];


@Component({
  selector: 'app-patientinfo',
  templateUrl: './patientinfo.component.html',
  styleUrls: ['./patientinfo.component.css']
})
export class PatientinfoComponent implements OnInit {

  displayedColumns: string[] = ['Patientid', 'name', 'village', 'gender', 'age', 'weight', 'health', 'btn'];
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
