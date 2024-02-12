import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { WebDev } from 'src/app/interfaces/interface';

@Component({
	selector: 'app-home-section-three',
	templateUrl: './home-section-three.component.html',
	styleUrls: ['./home-section-three.component.scss']
})
export class HomeSectionThreeComponent {
	webDev: WebDev[] = [
		{ id: 1, title: 'Angular Development' },
		{ id: 2, title: 'React Js Development' },
		{ id: 3, title: 'MEAN Stack Development' },
		{ id: 4, title: 'Ux / Ui Development' },
		{ id: 5, title: 'Node Js Development' },
		{ id: 6, title: 'Node Js Development' },
	]

	scrollToTop() {
		window.scrollTo(0, 0);
	}
}
