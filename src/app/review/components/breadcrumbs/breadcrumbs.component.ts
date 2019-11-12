import { Component, OnInit } from '@angular/core';

const breadcrumbs = [{ bc: 'New', status: 'completed' }, { bc: '1R-In Progress', status: 'in progress' },
{ bc: '1RC', status: 'progress' }, { bc: '1RC-Audit', status: 'progress dashed' }, { bc: '2R-In Progress', status: 'progress' },
{ bc: '2R Variance', status: 'progress dashed' }, { bc: 'Approved', status: 'progress' }];

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs = breadcrumbs;
  constructor() { }

  ngOnInit() {

  }
}
