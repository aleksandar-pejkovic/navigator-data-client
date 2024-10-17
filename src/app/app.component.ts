import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateService } from './services/candidate.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CandidateListComponent, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CandidateService],
})

export class AppComponent {
  constructor(private candidateService: CandidateService) { }

  exportCandidates() {
    this.candidateService.exportCandidatesToCsv().subscribe((response: any) => {
      const message = response?.message || 'Exported candidates to CSV';
      alert(message);
    }, (error) => {
      console.error('Error exporting candidates:', error);
    });
  }
}
