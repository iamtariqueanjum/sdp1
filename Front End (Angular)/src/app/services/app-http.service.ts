import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  constructor() { }

  get(url: string){
    return this.http.get(url)
  }
}
