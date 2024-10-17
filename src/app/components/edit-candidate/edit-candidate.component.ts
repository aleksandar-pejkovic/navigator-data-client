import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CandidateService } from '../../services/candidate.service';
import { Candidate } from '../../models/candidate.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-candidate',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css'],
  providers: [CandidateService],
})
export class EditCandidateComponent implements OnInit {
  candidate: Candidate;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidateService: CandidateService
  ) {
    this.candidate = {
      id: 0,
      firstName: '',
      lastName: '',
      jmbg: '',
      birthYear: 0,
      email: '',
      phone: '',
      note: '',
      hired: false,
      lastModified: new Date()
    };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.candidateService.getCandidateById(+id).subscribe((data: Candidate) => {
        this.candidate = data;
      });
    }
  }

  updateCandidate(): void {
    this.candidateService.updateCandidate(this.candidate).subscribe(() => {
      alert('Candidate updated successfully');
      this.router.navigate(['/candidates']);
    });
  }
}
