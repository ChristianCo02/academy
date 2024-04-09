import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  getAllStudents(){

    return this.http.get("http://localhost:8080/api/studente/visualizzaTuttiStudenti")

  }

  addStudente(studente : any){

    return this.http.post("http://localhost:8080/api/studente/inserisciStudente",studente)

  }

  addCv(cv : File, id : any) {
    const formData = new FormData();
    formData.append('cv', cv);
  
    let params = new HttpParams();
    params = params.append('id', id);
  
    return this.http.patch("http://localhost:8080/api/studente/inserisciCv", formData, { params });
  }
  
  
}
