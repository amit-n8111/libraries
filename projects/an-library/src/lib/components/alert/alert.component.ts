import { Component, OnInit } from '@angular/core';

import { merge, Observable, Subject } from 'rxjs';

import { IAlertMessage } from '../../interfaces/alert';
import { NgAlertService } from '../../services/alert.service';

@Component({
	selector: 'lib-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
	public alertMessage$: Observable<IAlertMessage | false>;

	private _close$ = new Subject<false>();

	constructor(private _alertService: NgAlertService) {}

	ngOnInit() {
		this.alertMessage$ = merge(this._alertService.alertMessage$, this._close$);
	}

	closeAlert(): void {
		this._close$.next(false);
	}
}
