import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Log } from 'ng2-logger';

import { RpcStateService } from '../../../core/core.module';

import { Amount } from '../../../core/util/utils';
import { takeWhile } from 'rxjs/operators';

import { Usd } from './coin.component';
// import { Eur } from './coin.component';
import { HttpService } from './http.service';
import { User } from './user';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
  providers: [HttpService]
})
export class BalanceComponent implements OnInit, OnDestroy {

  @Input() type: string; // "total_balance", "anon_balance", "balance", "staked_balance", "blind_balance"
  @Input() inSidebar: boolean = false; // located in sidebar?

  private log = Log.create(`balance.component ${this.type}`);
  private destroyed: boolean = false;
  private _balance: Amount = new Amount(0);
  private _coinPrices: {usd: number, eur: number} = {usd: 0, eur: 0};

  get balance() {
    return this._balance;
  }
  get balanceNumber() {
    const b = this._balance
    return Number(`${b.getIntegerPart()}${b.dot()}${b.getFractionalPart() || ''}`);
  }
  get coinPrices() {
    return this._coinPrices;
  }

  constructor(private _rpcState: RpcStateService, private httpService: HttpService) { }
  
  usd: Usd
  user: User

  async loadPrices(): Promise<void> {
    const result = await this.httpService.getData()
    this._coinPrices = result['falcon-token']
  }
  

  ngOnInit() {
    this.loadPrices().then((result) => this.log.info(JSON.stringify(result))).catch(console.error)

    const type = this.type === 'locked_balance' ? 'balance' : this.type;

    this._rpcState.observe('getwalletinfo', type)
      .pipe(takeWhile(() => !this.destroyed))
      .subscribe(
        balance => this.listUnSpent(balance),
        error => this.log.error('Failed to get balance, ', error));
  }

  /* UI */
  getTypeOfBalance(): string {

    switch (this.type) {
      case 'total_balance':
        return 'TOTAL BALANCE';
      case 'actual_balance':
        return 'Spendable';
      case 'balance':
        return 'Public';
      case 'anon_balance':
        return 'Anon (Private)';
      case 'blind_balance':
        return 'Blind (Private)';
      case 'staked_balance':
        return 'Staking';
      case 'locked_balance':
        return 'Locked';
    }

    return this.type;
  }

  listUnSpent(balance: number): void {
    this._rpcState.observe('listunspent')
      .pipe(takeWhile(() => !this.destroyed))
      .subscribe(unspent => {
          let tempBal = 0;
          for (let ut = 0; ut < unspent.length; ut++) {
            if ((!unspent[ut].coldstaking_address || unspent[ut].address) && unspent[ut].confirmations) {
              tempBal += unspent[ut].amount;
            };
          }

          if (this.type === 'locked_balance') {
            tempBal = balance - tempBal;
          } else if (this.type !== 'actual_balance') {
            tempBal = balance;
          }
          // else tempBal == 'actual balance'.

          this._balance = new Amount((tempBal) || 0, 8)
        },
        error => this.log.error('Failed to get balance, ', error));
  }

  ngOnDestroy() {
    this.destroyed = true;
  }
}
