import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const breadcrumbs = [{ bc: 'Guided Review', status: 'In Progress', path: 'guided-review' },
{ bc: 'Review summary', status: 'progress', path: 'review-summary' },
{ bc: 'Conclusion & Submit', status: 'progress', path: 'review-conclusion' }];

@Component({
  selector: 'app-breadcrumbs-gr',
  templateUrl: './breadcrumbs-gr.component.html',
  styleUrls: ['./breadcrumbs-gr.component.scss']
})
export class BreadcrumbsGrComponent implements OnInit {
  breadcrumbs = breadcrumbs;
  constructor(private router: Router) { }

  ngOnInit() {
    this.setStatus(0);
  }

  clickBreadcrumbNavigate(path, index) {
    this.router.navigate(['/review/' + path]);
    this.setStatus(index);
  }

  setStatus(index) {
    this.breadcrumbs[index].status = 'Completed';
    if (index !== 0) {
      for (let i = 0; i < index; i++) {
        this.breadcrumbs[i].status = 'Completed';
      }
    } else {
      this.breadcrumbs[index].status = 'Completed';
    }
  }


}
