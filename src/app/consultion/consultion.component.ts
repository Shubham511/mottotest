import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-consultion',
  templateUrl: './consultion.component.html',
  styleUrls: ['./consultion.component.css']
})
export class ConsultionComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Diabetes', 'Blood Sugar', 'Thyroid', 'Liver Disorders', 'Blood Pressure',];

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
