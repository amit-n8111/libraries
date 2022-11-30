import { Component } from '@angular/core';

import { NgAlertService } from 'an-library';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private _alertService: NgAlertService) {}

	public createSuccessMessage(): void {
		this._alertService.createSuccessAlert('Sample success message');
	}

	public createDangerMessage(): void {
		this._alertService.createDangerAlert('Sample danger message');
	}

	public createWarningMessage(): void {
		this._alertService.createWarningAlert('Sample warning message');
	}

	public createInfoMessage(): void {
		this._alertService.createInfoAlert('Sample info message');
	}
}
