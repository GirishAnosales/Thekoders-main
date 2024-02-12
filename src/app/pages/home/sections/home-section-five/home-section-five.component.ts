import { Component } from '@angular/core';
import { Technologies } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-home-section-five',
  templateUrl: './home-section-five.component.html',
  styleUrls: ['./home-section-five.component.scss']
})
export class HomeSectionFiveComponent {

  businessEnterprise: Technologies[] = [
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

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
