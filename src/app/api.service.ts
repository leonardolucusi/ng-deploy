import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7114/Home';

  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
