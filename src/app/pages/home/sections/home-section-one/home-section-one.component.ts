import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from 'src/app/forms/contact-form/contact-form.component';

@Component({
  selector: 'app-home-section-one',
  templateUrl: './home-section-one.component.html',
  styleUrls: ['./home-section-one.component.scss']
})
export class HomeSectionOneComponent {
  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ContactFormComponent);
  }
}
