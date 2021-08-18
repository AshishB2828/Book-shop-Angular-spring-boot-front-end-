import { Component, OnInit } from '@angular/core';
import { PurchaseItem } from 'src/app/models/purchase-item.model';
import { PurchaseHistory } from 'src/app/models/PurchaseHistory.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  purchaseItemList: Array<PurchaseItem> =[]

  constructor(private authService: AuthenticationService, private purchaseService: PurchaseService) { 

  }

  ngOnInit(): void {

    this.purchaseService.getPurchasItems(this.authService.currentUserValue?.id).subscribe(
      data=> {this.purchaseItemList = data
      console.log(data)
      }
      ,error=>{
        console.log(error)
      }
    )

  }

}
