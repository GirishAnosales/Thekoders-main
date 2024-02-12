import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from 'src/app/forms/contact-form/contact-form.component';

@Component({
  selector: 'app-hire-a-resource',
  templateUrl: './hire-a-resource.component.html',
  styleUrls: ['./hire-a-resource.component.scss']
})
export class HireAResourceComponent {
  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ContactFormComponent);
  }
}
