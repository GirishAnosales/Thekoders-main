import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from 'src/app/forms/contact-form/contact-form.component';

@Component({
	selector: 'app-hire-a-web-developer',
	templateUrl: './hire-a-web-developer.component.html',
	styleUrls: ['./hire-a-web-developer.component.scss']
})
export class HireAWebDeveloperComponent {

	home = {
		r1: {
			h1: "Hire a Web Developer!"
		},

		r3: {
			mat_card1: {
				h6: "Hire MEAN Stack Developers",
				p: "Hire MEAN Stack developers from Angular Minds and build robust, maintainable and fast production web applications using MEAN Stack development services"
			},
			mat_card2: {
				h6: "Hire AngularJS Developers",
				p: "Use AngularJS web application and experience it as seamless desktop application"
			},
			mat_card3: {
				h6: "Hire ReactJS Developers",
				p: "Unleash the power of react framework by creating awesome UIs and stunning solutions for our clients, Hire top reactJS developers from Angular Minds to scale up your business"
			},
			mat_card4: {
				h6: "Hire NodeJS Developers",
				p: "UX designers who are concerned with the overall feel of the product, user interface designers are particular about how the product is laid out"
			},
			mat_card5: {
				h6: "Hire UI/UX Designer & Developers",
				p: "Hire MEAN Stack developers from Angular Minds and build robust, maintainable and fast production web applications using MEAN Stack development services"
			},
			mat_card6: {
				h6: "Hire PHP Developers",
				p: "Hire dedicated PHP Web Developers to accelerate project delivery and add business value"
			},
		},

		r4: {
			h3: "Skilled and Experienced Programmers",
			listed_item_1: "End to End Development Expertise Hire Dedicated Team of Developers Agile Software Development Methodology",
			listed_item_2: "We help you to create high-internal and scalable applications for large companies, and we will help you manage them",
			listed_item_3: "We believe in flexibility and the development, helps create better and simpler applications",
			listed_item_4: "As the leading application development company, we have seen developers work seamlessly for your applications",
			listed_item_5: "The easiest way to build a web application is by development, which can be used to improve performance with MongoDB, Express JS, AngularJS, and Node JS",
			listed_item_6: "Our developers strive to create powerful applications for the enterprise market",
			listed_item_7: "MEAN Stack was designed to meet the needs of today's businesses. Developing MEAN Stack is a big step to get started",
			listed_item_8: "Our developers have a deep passion for fullStack JavaScript. You are ready to take over your project",
		},

		r5: {
			h3: "Main Reasons for Hiring Developers From TheKoders",
			mat_card_1: {
				title: "Constructive and Scalable Web development",
				description: "TheKoders is a leading application development company which helps global businesses constructive and scalable.",
				icon: "../../../../assets/images/brands/500x500/scalability.png"
			},
			mat_card_2: {
				title: "Affordable Solution",
				description: "We offer solutions and applications within your budget and can easily afford. We need not worry about the costing and need not to spend huge amount for your businesses.",
				icon: "../../../../assets/images/brands/500x500/affordability.png"
			},
			mat_card_3: {
				title: "Solid technical knowledge",
				description: "Hire our developers to make your customization more creative, unique, and innovative. Our dedicated team of developers is ready to handle every shift on time.",
				icon: "../../../../assets/images/brands/500x500/knowledge.png"
			},
			mat_card_4: {
				title: "Flexible hiring",
				description: "Hire our developers as per your project requirements and convenient work pattern. For more details go through our Business Engagement Models.",
				icon: "../../../../assets/images/brands/500x500/hiring.png"
			},
			mat_card_5: {
				title: "Upto date reporting & day-to-day communication",
				description: "Our developers are well versed as well as written communication in English for daily reporting on project status.",
				icon: "../../../../assets/images/brands/500x500/report.png"
			},
			mat_card_6: {
				title: "Experience Being top Development Company",
				description: "We have delivered Services and solutions by enabling customers to turn into high performance business units.",
				icon: "../../../../assets/images/brands/500x500/experience.png"
			},
		},
	}

	constructor(private dialog: MatDialog) { }

	openDialog() {
		this.dialog.open(ContactFormComponent);
	}
}