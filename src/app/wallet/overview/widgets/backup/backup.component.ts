import { Component, OnInit } from '@angular/core';
import { ModalsHelperService } from 'app/modals/modals-helper.service';
import { RpcService } from 'app/core/core.module';
import {saveAs} from 'file-saver'

@Component({
  selector: 'app-backup-component',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss'],
})

export class BackupComponent {

  constructor(
    private _modals: ModalsHelperService,
    private _rpc: RpcService
  ) {

  }

  // saveWallet(): void {
  //   this._modals.unlock({ timeout: 10000 }, this.backupWallet)
  // }

  // backupWallet() {
  //   var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"})
  //   saveAs(blob, "helloworld.txt")
  //   // const suka = new File(['ololo'], 'wallet.dat')
  //   // saveAs('/home/user/backup.dat', 'wallet.dat')
  // }
}