import { Component, OnInit } from '@angular/core';
import {MyService} from '../../services/my.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  output = null;

  constructor(private service: MyService) { }

  ngOnInit(): void {
    this.callApi();
  }

  callApi() {
    this.service.nestCall().subscribe({
      next: item => this.handleApiSuccess(item),
      error: error => this.handleApiError(error)
    })
  }

  handleApiSuccess(item: any) {
    this.output = item;
  }

  handleApiError(error: any) {
    this.output = error;
  }

}
