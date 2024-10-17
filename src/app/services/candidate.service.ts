import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = 'http://localhost:8080/api/candidates';

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.apiUrl);
  }

  addCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(this.apiUrl, candidate);
  }
}
