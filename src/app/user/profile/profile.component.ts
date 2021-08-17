import { Component, OnInit } from '@angular/core';
import { PurchaseHistory } from 'src/app/models/PurchaseHistory.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  purchaseList: Array<PurchaseHistory> =[]

  constructor() { }

  ngOnInit(): void {
  }

}
