import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { BankingAuthService } from './../../services/banking/banking-auth.service';

@Component({
  selector: 'app-banking-callback',
  templateUrl: './banking-callback.component.html',
  styleUrls: ['./banking-callback.component.scss']
})
export class BankingCallbackComponent implements OnInit {
  tokens: any;

  constructor(
    private bankingAuthService: BankingAuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.code),
      switchMap(params => this.bankingAuthService.exchangeCode(params.code))
    ).subscribe(result => {
      this.tokens = result;
    });
  }
}
