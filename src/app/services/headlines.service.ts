import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeadlinesService {

  constructor(private httpClient:HttpClient) { }

  getNews(country:string):Promise<any> {
    const url = environment.apiUrl+'top-headlines?country='+country+'&apiKey='+environment.apiKey;
    return this.httpClient.get(url).toPromise();
  }

}


/**
 * Para llamadas HTTP
 * 1. Importar Modulo HttpClientModule en app.module
 * 2. Importar clase Servicio HttpClient en servicio headlines 
 * 3. Injectar el servicio en el constructor
 * 4. Regresar la llamada get .toPromise
 * 5. En el componente (headlines) injectar el servicio headlines
 * 6. Cuando se inicializa, llamar al metodo getNews del servicio
 * 7. Dado que es promesa, capturar el .then y .catch
 * 
 */