import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
}
