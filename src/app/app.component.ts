import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'THEKODERS';

  onClickScrollToTop() {
    window.scrollTo(0, 0);
  }

  onClickScrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight,);
  }
}
