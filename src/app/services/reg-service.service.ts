import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegClass } from '../interfaces/reg-class';

@Injectable({
  providedIn: 'root'
})
export class RegServiceService {

  constructor(private _http:HttpClient) { }

  postReg(regValues: RegClass){
  return this._http.post<any>(" http://localhost:3000/register",regValues)

  }
}
