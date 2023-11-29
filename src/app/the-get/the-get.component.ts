import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-the-get',
  templateUrl: './the-get.component.html',
  styleUrls: ['./the-get.component.css']
})
export class TheGetComponent {
  apiData?: any[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllPlayers().subscribe({
      next: (data) => console.log(this.apiData = data),
      error: (e) => console.error('Error fetching data from API', e),
      complete: () => console.info('complete'),
    })
  }
}
