import { Component } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent {
	home = {
		r1: {
			title: "Helping you to make better business and focus on your aims!!",
		},
		r2: {
			para: "TheKoders, we understands and offers Ecommerce Applications, Web development, Mobile applications, offshore outsource Services in various technologies like Mean Stack development Flutter Devl6, Iot Development ect. We design, plan, implement and achieve your project objectives and worked with a number of global businesses across various verticals into best software and solutions at an affordable cost.",
		},
		r3: {
			title: "Vision",
			p1: "We Believe, offering end-to-end Software Development for businesses worldwide.",
			p2: "Delivered ionic and cross-platform portable software application.",
			p3: "Responsible for our every commitment.",
			p4: "Association with excellence teamwork, within clients, employees.",
			p5: "Offers a powerful and innovative way of understanding.",
		},
		r4: {
			title: "Mission",
			para: "Dedicated to converts your ideas into reality!! Not only the best but to be the most unique!!"
		},
		r5: {
			title: "History",
			p1: "Thekoders is a renowned web design and development company, Thekoders has consistently delivered exceptional websites that boast a seamless user experience, captivating visuals, and cross-device accessibility. Their expertise in creating websites that resonate with audiences has been honed through successful delivery, establishing them as one of the most dependable web design firms in India.",
			p2: "At Thekoders, their commitment to creating high-quality websites that drive business growth is evident in their custom and affordable web services. Their strategic approach to website design and development ensures a return on investment for their clients. Thekoders understands the importance of delivering within budget and before deadlines, making them a reliable and efficient partner for businesses seeking to enhance their online brand image.",
			p3: "A professional web design company like Thekoders can help you develop a website that is optimized for search engines, user-friendly, and visually appealing. They provide end-to-end web development solutions with a wide range of innovative ideas, web graphics, and strategic design work. Thekoders is your one-stop-shop for creating a website that is tailored to your business needs, with a focus on achieving a result-oriented web design.",
		}
	}

	scrollToTop() {
		window.scrollTo(0, 0);
	}
}
