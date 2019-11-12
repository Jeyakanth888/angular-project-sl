import { Component, OnInit } from '@angular/core';
const reviewTableData = [{
  name: 'Aniqa Perry', email: 'temp-aperry@microsoft.com', alias: 'temp', US_govt_contract_ccess: true,
  roles: ['Read', 'Dev team', '1st reviewer', '2nd reviewer', 'Admin']
},
{
  name: 'Aniqa Perry', email: 'temp-aperry@microsoft.com', alias: 'temp', US_govt_contract_ccess: false,
  roles: ['Read']
},
{
  name: 'Aniqa Perry', email: 'temp-aperry@microsoft.com', alias: 'temp', US_govt_contract_ccess: false,
  roles: ['Read']
},
{
  name: 'Aniqa Perry', email: 'temp-aperry@microsoft.com', alias: 'temp', US_govt_contract_ccess: true,
  roles: ['Read']
},
{
  name: 'Aniqa Perry', email: 'temp-aperry@microsoft.com', alias: 'temp', US_govt_contract_ccess: true,
  roles: ['Read', '1st reviewer',]
},
{
  name: 'Aniqa Perry', email: 'temp-aperry@microsoft.com', alias: 'temp', US_govt_contract_ccess: false,
  roles: ['Read', 'Dev team']
},
{
  name: 'Aniqa Perry', email: 'temp-aperry@microsoft.com', alias: 'temp', US_govt_contract_ccess: false,
  roles: ['Read', '1st reviewer', 'Admin']
},
{
  name: 'Aniqa Perry', email: 'temp-aperry@microsoft.com', alias: 'temp', US_govt_contract_ccess: true,
  roles: ['Read', 'Dev team', '2nd reviewer',]
},
{
  name: 'Aniqa Perry', email: 'temp-aperry@microsoft.com', alias: 'temp', US_govt_contract_ccess: false,
  roles: ['Read', 'Dev team', 'admin']
}];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  reviewTableData: any[] = reviewTableData;
  showPop: boolean = false;
  selectionType: string;
  constructor() { }

  ngOnInit() {

  }

  clickAddUser() {
    this.showPop = !this.showPop;
    this.selectionType = 'add';
  }

  updateUserPopupStatus(status) {
    this.showPop = status;
  }

  cellClickHandler(event) {
    this.selectionType = 'view';
    this.showPop = !this.showPop;
  }


}
