import { Component } from '@angular/core';
import { Plan } from 'src/app/interfaces/interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	basicPlan: Plan[] = [
		{ index: 1, viewValue: "1 Free Domain Name" },
		{ index: 2, viewValue: "4 Pages Website" },
		{ index: 3, viewValue: "1 Free Business Email" },
		{ index: 4, viewValue: "Unlimited Images & Videos" },
		{ index: 5, viewValue: "20 GB Disk Space" },
		{ index: 6, viewValue: "SEO Ready Website With 50 Keywords" },
		{ index: 7, viewValue: "Logo Design" },
		{ index: 8, viewValue: "Google Map / Business Listing" },
		{ index: 9, viewValue: "100% Responsive Website" },
		{ index: 10, viewValue: "Payment Gateway Integration" },
		{ index: 11, viewValue: "SSL Certificate For 1 Year" },
		{ index: 12, viewValue: "Social Media Pages Integration" },
		{ index: 13, viewValue: "Call and Whats App Button Integration" },
		{ index: 14, viewValue: "Inquiry Form With Email Notification" },
	]

	standardPlan: Plan[] = [
		{ index: 1, viewValue: "1 Free Domain Name" },
		{ index: 2, viewValue: "7 Pages Website" },
		{ index: 3, viewValue: "1 Free Business Email" },
		{ index: 4, viewValue: "Unlimited Images & Videos" },
		{ index: 5, viewValue: "35 GB Disk Space" },
		{ index: 6, viewValue: "SEO Ready Website With 50 Keywords" },
		{ index: 7, viewValue: "Logo Design" },
		{ index: 8, viewValue: "Google Map / Business Listing" },
		{ index: 9, viewValue: "100% Responsive Website" },
		{ index: 10, viewValue: "Payment Gateway Integration" },
		{ index: 11, viewValue: "SSL Certificate For 1 Year" },
		{ index: 12, viewValue: "Social Media Pages Integration" },
		{ index: 13, viewValue: "Call and Whats App Button Integration" },
		{ index: 14, viewValue: "Inquiry Form With Email Notification" },
	]

	premiumPlan: Plan[] = [
		{ index: 1, viewValue: "1 Free Domain Name" },
		{ index: 2, viewValue: "10 Pages Website" },
		{ index: 3, viewValue: "1 Free Business Email" },
		{ index: 4, viewValue: "Unlimited Images & Videos" },
		{ index: 5, viewValue: "50 GB Disk Space" },
		{ index: 6, viewValue: "SEO Ready Website With 50 Keywords" },
		{ index: 7, viewValue: "Logo Design" },
		{ index: 8, viewValue: "Google Map / Business Listing" },
		{ index: 9, viewValue: "100% Responsive Website" },
		{ index: 10, viewValue: "Payment Gateway Integration" },
		{ index: 11, viewValue: "SSL Certificate For 1 Year" },
		{ index: 12, viewValue: "Social Media Pages Integration" },
		{ index: 13, viewValue: "Call and Whats App Button Integration" },
		{ index: 14, viewValue: "Inquiry Form With Email Notification" },
	]

	scrollToTop() {
		window.scrollTo(0, 0);
	}

}
