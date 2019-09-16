import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cake } from './model/cake';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  private cakesUrl = 'http://localhost:8080/cakes'

  constructor(
    private htpp: HttpClient) { }

  getCakes(): Observable<Cake[]> {
    return this.htpp.get<Cake[]>(this.cakesUrl)
  }
}
