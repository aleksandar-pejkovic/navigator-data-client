import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateCreateComponent } from './components/candidate-create/candidate-create.component';

const routes: Routes = [
    { path: 'candidates', component: CandidateListComponent },
    { path: 'candidates/add', component: CandidateCreateComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
