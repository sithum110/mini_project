import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-owner-account',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './owner-account.component.html',
  styleUrls: ['./owner-account.component.css']
})
export class OwnerAccountComponent {
  // Add ownerDetails property to avoid the error
  ownerDetails = {
    name: '',
    phoneNumber: '',
    address: ''
  };

  onSubmit() {
    console.log('Owner details submitted:', this.ownerDetails);
  }

  deleteOwnerAccount() {
    console.log('Delete owner account logic should be implemented here.');
  }
}
