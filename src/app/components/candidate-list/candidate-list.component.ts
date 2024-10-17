import { Component, OnInit } from '@angular/core';
import { CandidateService, Candidate } from '../../services/candidate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
  providers: [CandidateService],
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe((data) => {
      this.candidates = data;
    });
  }
}
