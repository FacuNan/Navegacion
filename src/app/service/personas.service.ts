import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaEdit } from '../Model/PersonaEdit';




@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  constructor(private httpClient: HttpClient) { }

  
  
  }