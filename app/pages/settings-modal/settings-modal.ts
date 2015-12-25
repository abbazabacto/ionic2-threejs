import {Page, Modal} from 'ionic-framework/ionic';

@Page({
	template: `
		<ion-toolbar>
			<ion-title>Settings</ion-title>
			<ion-buttons end>
				<button (click)="close()">
					<icon close></icon>
				</button>
			</ion-buttons>
		</ion-toolbar>
		<ion-content padding>
			<ion-toggle energized>Cardboard</ion-toggle>
		</ion-content>`
})
export class SettingsModal {
	constructor(){
		
	}
}