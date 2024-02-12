import { Component } from '@angular/core';

@Component({
	selector: 'app-hire-a-mobile-developer',
	templateUrl: './hire-a-mobile-developer.component.html',
	styleUrls: ['./hire-a-mobile-developer.component.scss']
})
export class HireAMobileDeveloperComponent {

	home = {
		r1: {
			title: "Hire a Mobile App Developer!"
		},

		r3: {
			content_1: {
				title: "Hire Android / IOS App Developers & Programmer",
				description: "Hire our expert developers on monthly, weekly or hourly contract, as per your budget to create perfect mobile apps."
			},
			content_2: {
				title: "Android App Development",
				description: "We develop android or java applications that easy the way of business and bring exponential growth. Our skillful and dedicated android app developers are creating an android mobile app for few years and satisfied many customers."
			},
			content_3: {
				title: "iPhone App Development",
				description: "We mold your idea in real ios mobile applications that can work on both iPhone and iPad platforms. Our dedicated ios app developers have the experience of developing and designing more complex app ideas with perfection."
			},
		},

		r4: {
			h3: "Why Choose Our Mobile Application Developers??",
			content_1: {
				title: "Follows Agile Methodology Process",
				description: "We follow the agile development process to increased values, visibility, and adaptability thus we deliver projects much faster and accurate. This process helps us to deal with more conventionally with our customer at no risk.",
				icon: "../../../../assets/images/brands/96x96/agile.png"
			},
			content_2: {
				title: "Experience Team",
				description: "Our team of mobile app developers has the experience of years who well knows the fundamental of development. We have developed more than 100 apps from easy to more complex levels in the last few years.",
				icon: "../../../../assets/images/brands/500x500/experience.png"
			},
			content_3: {
				title: "Remote Team Support",
				description: "We have a remote team supports system to communicate with you 24x7 globally. We listen and answer every query of customers to make more understandable relation and to maintain high-value CRM.",
				icon: "../../../../assets/images/brands/96x96/24x7.png"
			},
			content_4: {
				title: "Secure & Safe",
				description: "We make mobile applications that are more secure to use and provide safety to customer's data from any data scraping or hacking.",
				icon: "../../../../assets/images/brands/96x96/security.png"
			},
			content_5: {
				title: "Support & Maintenance",
				description: "Having any problem in the developed application or any questions in mind? Don't get bothered we are always here to support and provide a solution to your problem. We dedicated support and maintenance teams that work only for you.",
				icon: "../../../../assets/images/brands/96x96/tech-support.png"
			},
			content_6: {
				title: "Commitment",
				description: "As we are the best mobile app development agency thus we always focused to complete our mobile app development projects within the deadline and fulfill our commitment to you.",
				icon: "../../../../assets/images/brands/96x96/agreement.png"
			},
		},
	}
}
