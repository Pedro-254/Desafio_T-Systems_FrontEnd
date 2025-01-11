import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { CadastrarService } from '../../services/cadastrar.service';

@Component({
  selector: 'app-cadastro-professor',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    CadastrarService
  ],
  templateUrl: './cadastro-professor.component.html',
  styleUrl: './cadastro-professor.component.scss'
})
export class CadastroProfessorComponent {
  cadastroProfessorForm!: FormGroup;

    constructor(
      private router: Router,
      private cadastrarService: CadastrarService
    ){
      this.cadastroProfessorForm = new FormGroup({
        Nome: new FormControl('', [Validators.required]),
        Numero: new FormControl('', [Validators.required]),
        Email: new FormControl('', [Validators.required, Validators.email]),
        Rua: new FormControl('', [Validators.required]),
        Cidade: new FormControl('', [Validators.required]),
        CEP: new FormControl('', [Validators.required]),
        Pais: new FormControl('', [Validators.required]),

      })

    }

    submit() {
      this.cadastrarService.cadastrarProfessor(
        this.cadastroProfessorForm.value.Nome,
        this.cadastroProfessorForm.value.Email,
        this.cadastroProfessorForm.value.Numero,
        this.cadastroProfessorForm.value.Rua,
        this.cadastroProfessorForm.value.Cidade,
        this.cadastroProfessorForm.value.Estado,
        this.cadastroProfessorForm.value.CEP,
        this.cadastroProfessorForm.value.Pais
      ).subscribe({
        next: (scss) => console.log("sucesso", scss),
        error: (err) => console.log("error", err)
      })
    }

    navigate() {
      this.router.navigate(['/cadastro-aluno']); // Navega para a rota especificada
    }
}
