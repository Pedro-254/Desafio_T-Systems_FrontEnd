import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private httpClient: HttpClient) { }
  ConsultaAluno(){
    return this.httpClient.get<any[]>("http://localhost:3000/alunos");
  }

  ConsultaProfessor(){
    return this.httpClient.get<any[]>("http://localhost:3000/professores");
  }
}
