import { BankingAuthService } from './services/banking/banking-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  authUrl: string;

  constructor(private bankingAuthService: BankingAuthService) {}

  ngOnInit(): void {
    this.bankingAuthService.getAuthUrl().subscribe(url => {
      this.authUrl = url;
    });
  }

  connectBank() {
    window.open(this.authUrl, '_self');
  }
}
