import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../services/consulta.service';
import { CommonModule } from '@angular/common'; // Importar o CommonModule
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [CommonModule,SearchComponent],  // Adicionar CommonModule aqui
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  alunos: any[] = [];
  professores: any[] = [
    {
      id: "1",
      nome: "Professor Simulado",
      numero: "456123789",
      email: "professor@exemplo.com",
      parkingPass: true,
      address: {
        rua: "Rua Simulada",
        cidade: "Cidade Simulada",
        estado: "SP",
        cep: "11223344",
        pais: "Brasil"
      },
      salary: 3500.0
    }
  ];

  constructor(private consultaService: ConsultaService) {}

  ngOnInit(): void {
    this.buscarAlunos();
    this.buscarProfessores();
  }

  buscarAlunos(): void {
    this.consultaService.ConsultaAluno().subscribe(
      (dados) => {
        this.alunos = dados as any[];
      },
      (erro) => {
        console.error('Erro ao buscar alunos:', erro);
      }
    );
  }

  buscarProfessores(): void {
    this.consultaService.ConsultaProfessor().subscribe({
      next: (dados) => {
        console.log('Dados dos professores:', dados); // Verificar no console
        this.professores = dados as any[];
      },
      error: (erro) => {
        console.error('Erro ao buscar professores:', erro);
      }
    });
  }
}
