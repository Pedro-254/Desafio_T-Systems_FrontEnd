import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { CadastrarService } from '../../services/cadastrar.service';

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    CadastrarService
  ],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss'
})
export class CadastroAlunoComponent {
  cadastroAlunoForm!: FormGroup;

  constructor(
    private router: Router,
    private cadastrarService: CadastrarService

  ) {
    this.cadastroAlunoForm = new FormGroup({
      Nome: new FormControl('', [Validators.required]),
      Numero: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Rua: new FormControl('', [Validators.required]),
      Cidade: new FormControl('', [Validators.required]),
      Estado: new FormControl('', [Validators.required]),
      CEP: new FormControl('', [Validators.required]),
      Pais: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    this.cadastrarService.cadastrarAluno(
      this.cadastroAlunoForm.value.Nome,
      this.cadastroAlunoForm.value.Email,
      this.cadastroAlunoForm.value.Numero,
      this.cadastroAlunoForm.value.Rua,
      this.cadastroAlunoForm.value.Cidade,
      this.cadastroAlunoForm.value.Estado,
      this.cadastroAlunoForm.value.CEP,
      this.cadastroAlunoForm.value.Pais
    ).subscribe({
      next: (scss) => console.log("sucesso", scss),
      error: (err) => console.log("error", err)
    })
  }

  navigate() {
    this.router.navigate(['/cadastro-professor']); // Navega para a rota especificada
  }
}
