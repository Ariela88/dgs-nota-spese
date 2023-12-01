import { Injectable, inject } from '@angular/core';
import { Client } from '../model/client';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  client?: Client;
  http:HttpClient = inject(HttpClient)
  clients: Client[] = [
    {
      id: 0,
      name: 'Luca Rossi',
      email: 'lucarossi@gmail.com',
    },
    {
      id: 1,
      name: 'Marco Verdi',
      email: 'marcoverdi@gmail.com',
    },
    {
      id: 2,
      name: 'Sara Neri',
      email: 'saraneri@gmail.com',
    },
  ];

  

  getClient(clientId: number): Observable<Client> {
    return this.http.get<Client>('/api/clients/' + clientId);
  }
}
