import { Component } from '@angular/core';
import { MobileDev, Technologies } from 'src/app/interfaces/interface';

@Component({
	selector: 'app-home-section-four',
	templateUrl: './home-section-four.component.html',
	styleUrls: ['./home-section-four.component.scss']
})
export class HomeSectionFourComponent {

	mobileDev: MobileDev[] = [
		{ id: 1, title: 'Android App Development' },
		{ id: 2, title: 'IOS App Development' },
	];

	webTechnologies: Technologies[] = [
		{ id: 0, title: 'Angular' },
		{ id: 1, title: 'React Js' },
		{ id: 2, title: 'Node Js' },
		{ id: 3, title: 'Express Js' },
		{ id: 4, title: 'Vue Js' },
		{ id: 5, title: 'Django' },
		{ id: 6, title: 'Flask' },
		{ id: 7, title: 'Ruby on Rails' },
		{ id: 8, title: 'Laravel' },
		{ id: 9, title: 'CodeIgniter' },
		{ id: 10, title: 'Ember.js' },
		{ id: 11, title: 'Backbone.js' },
		{ id: 12, title: 'Polymer' },
		{ id: 13, title: 'Aurelia' },
		{ id: 14, title: 'Knockout.js' },
	];

	mobileTechnologies: Technologies[] = [
		{ id: 0, title: 'Flutter' },
		{ id: 1, title: 'React Native' },
		{ id: 2, title: 'Ionic' },
		{ id: 3, title: 'Xamarin' },
		{ id: 4, title: 'Kotlin' },
		{ id: 5, title: 'Swift' },
		{ id: 6, title: 'Java' },
		{ id: 7, title: 'NativeScript' },
		{ id: 8, title: 'Apache Cordova' },
	];

	scrollToTop() {
		window.scrollTo(0, 0);
	}

}
