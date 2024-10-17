import { Component } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { Candidate } from '../../models/candidate.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candidate-create.component.html',
  styleUrls: ['./candidate-create.component.css'],
  providers: [CandidateService],
})

export class CandidateCreateComponent {
  newCandidate: Candidate = {
    id: 0,
    firstName: '',
    lastName: '',
    jmbg: '',
    birthYear: 0,
    email: '',
    phone: '',
    note: '',
    isHired: false,
    lastModified: new Date()
  };

  constructor(private candidateService: CandidateService) { }

  addCandidate(): void {
    this.candidateService.addCandidate(this.newCandidate).subscribe((response) => {
      console.log('Candidate added:', response);
      // Reset the form after successful submission
      this.newCandidate = {
        id: 0,
        firstName: '',
        lastName: '',
        jmbg: '',
        birthYear: 0,
        email: '',
        phone: '',
        note: '',
        isHired: false,
        lastModified: new Date()
      };
    });
  }
}
