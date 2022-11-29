import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { IAlertMessage } from '../interfaces/alert';

@Injectable({
	providedIn: 'root'
})
export class NgAlertService {
	public alertMessage$ = new Subject<IAlertMessage>();

	public createSuccessAlert(message: string): void {
		this.alertMessage$.next(this._createAlertMessage('Success', message, 'green'));
	}

	public createDangerAlert(message: string): void {
		this.alertMessage$.next(this._createAlertMessage('Danger', message, 'red'));
	}

	public createWarningAlert(message: string): void {
		this.alertMessage$.next(this._createAlertMessage('Warning', message, 'darkorange'));
	}

	public createInfoAlert(message: string): void {
		this.alertMessage$.next(this._createAlertMessage('Info', message, 'dodgerblue'));
	}

	private _createAlertMessage(prefix: string, message: string, color: string): IAlertMessage {
		return { prefix, message, color };
	}
}
