import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importando FormsModule
import { CommonModule } from '@angular/common'; // Importando CommonModule
import { ConsultaService } from '../../services/consulta.service'; // Certifique-se de que o serviço esteja correto

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Adicionando FormsModule aqui
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  alunos: any[] = [];  // Lista de alunos
  professores: any[] = [];  // Lista de professores
  searchTerm: string = '';  // Valor da pesquisa
  resultado: any = null;  // Resultado da busca
  tipoBusca: 'aluno' | 'professor' = 'aluno';  // Tipo de busca

  constructor(private consultaService: ConsultaService) {}

  ngOnInit(): void {
    // Carregar alunos e professores ao iniciar
    this.buscarAlunos();
    this.buscarProfessores();
  }

  buscarAlunos(): void {
    this.consultaService.ConsultaAluno().subscribe((dados) => {
      this.alunos = dados as any[]; // Atribuir dados recebidos à lista de alunos
    });
  }

  buscarProfessores(): void {
    this.consultaService.ConsultaProfessor().subscribe((dados) => {
      this.professores = dados as any[]; // Atribuir dados recebidos à lista de professores
    });
  }

  pesquisar(): void {
    // Filtrar alunos ou professores pelo email
    if (this.tipoBusca === 'aluno') {
      this.resultado = this.alunos.find(aluno => aluno.email === this.searchTerm);
    } else {
      this.resultado = this.professores.find(professor => professor.email === this.searchTerm);
    }

    if (!this.resultado) {
      this.resultado = { mensagem: 'Não encontrado!' };
    }
  }

  alternarBusca(tipo: 'aluno' | 'professor'): void {
    this.tipoBusca = tipo;
    this.searchTerm = '';  // Limpar o campo de pesquisa ao alternar
    this.resultado = null;  // Limpar o resultado anterior
  }
}
