import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl : string = "https://localhost:7224/api/User/"
  constructor(private http : HttpClient) { }
}