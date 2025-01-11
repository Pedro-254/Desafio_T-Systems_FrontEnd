import { Routes } from '@angular/router';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';
import { CadastroProfessorComponent } from './pages/cadastro-professor/cadastro-professor.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';

export const routes: Routes = [
  {
    path: "cadastro-aluno",
    component: CadastroAlunoComponent

  },
  {
    path: "cadastro-professor",
    component: CadastroProfessorComponent

  },
  {
    path: 'teste',
    component: ConsultaComponent
  }
];
