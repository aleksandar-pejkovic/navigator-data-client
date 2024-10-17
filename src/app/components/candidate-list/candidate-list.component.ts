import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { Candidate } from '../../models/candidate.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
  providers: [CandidateService],
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService, private router: Router) { }

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe((data) => {
      this.candidates = data;
    });
  }

  deleteCandidateById(id: number): void {
    if (confirm('Are you sure you want to delete this candidate?')) {
      this.candidateService.deleteCandidateById(id).subscribe(() => {
        this.candidates = this.candidates.filter(candidate => candidate.id !== id);
        console.log(`Candidate with id ${id} deleted.`);
      });
    }
  }

  viewCandidate(id: number): void {
    this.router.navigate([`/candidates/edit/${id}`]);
  }
}
