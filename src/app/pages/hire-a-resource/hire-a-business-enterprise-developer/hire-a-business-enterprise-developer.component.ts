import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from 'src/app/forms/contact-form/contact-form.component';

@Component({
	selector: 'app-hire-a-business-enterprise-developer',
	templateUrl: './hire-a-business-enterprise-developer.component.html',
	styleUrls: ['./hire-a-business-enterprise-developer.component.scss']
})
export class HireABusinessEnterpriseDeveloperComponent {
	home = {
		r1: {
			title: "Hire a Business Enterprise Developer!"
		},

		r3: {
			mat_card_1: {
				title: "Real Time Data Management",
				description: "Track real-time decisions and triggers scripts with fully customizable workflows and notifications"
			},
			mat_card_2: {
				title: "Security & Access Control",
				description: "IoT provides unique identifies which implements end-to-end security to connected devices and protect the data and users"
			},
			mat_card_3: {
				title: "Interconnected Devices",
				description: "IoT allows users to manage their smart devices seamlessly from anywhere and anytime"
			},
		},

		r4: {
			title: "Why Hire Blockchain/AI/IOT/CodeIgniter Developers?",
			mat_card_1: {
				title: "DEDICATED DEVELOPMENT TEAMS",
				description: "The Dedicated Development model is perfect for businesses who need to quickly ramp up their development. Our tech professionals combine substantial business domain experience and strong technical expertise with a passion for working on challenging projects."
			},
			mat_card_2: {
				title: "TECHNOLOGY AND DOMAIN EXPERTISE",
				description: "Our Blockchain development services implement solid business domain expertise to financial services, automotive, e-commerce, transportation, supply chain, real estate, HR management, training, and other sectors."
			},
			mat_card_3: {
				title: "DIVERSE BLOCKCHAIN APPLICATIONS",
				description: "We offer blockchain application development expertise in exploring, prototyping, developing and support for blockchain-enabled solutions across domains to secure transactions, control data, track digital assets, record events and prevent fraud."
			},
			mat_card_4: {
				title: "CONTINUOUS INNOVATION",
				description: "We at TheKoders have managed to preserve our innovative culture as we grow. Our primary goal is to deliver an innovative approach when working with technology companies as part of their R&D teams."
			},
		}
	}

	constructor(private dialog: MatDialog) { }

	openDialog() {
		const dialogRef = this.dialog.open(ContactFormComponent);
	}
}