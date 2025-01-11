import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {

  constructor(private httpClient: HttpClient) { }
  cadastrarAluno(nome: string, email: string, numero: string , rua: string, cidade: string, estado: string, cep: string, pais: string){
    return this.httpClient.post("http://localhost:3000/alunos/cadastrar", {nome,email, numero , rua, cidade, estado, cep, pais})
  }

  cadastrarProfessor(nome: string, email: string, numero: string , rua: string, cidade: string, estado: string, cep: string, pais: string){
    return this.httpClient.post("http://localhost:3000/professores/cadastrar", {nome,email, numero , rua, cidade, estado, cep, pais})
  }
}
