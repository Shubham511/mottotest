import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-printinv',
  templateUrl: './printinv.component.html',
  styleUrls: ['./printinv.component.css']
})
export class PrintinvComponent implements OnInit {

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
