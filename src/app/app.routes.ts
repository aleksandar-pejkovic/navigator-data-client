import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateCreateComponent } from './components/candidate-create/candidate-create.component';
import { HeroComponent } from './components/hero/hero.component';
import { EditCandidateComponent } from './components/edit-candidate/edit-candidate.component';

export const routes: Routes = [
    { path: '', component: HeroComponent },
    { path: 'candidates', component: CandidateListComponent },
    { path: 'candidates/add', component: CandidateCreateComponent },
    { path: 'candidates/edit/:id', component: EditCandidateComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
