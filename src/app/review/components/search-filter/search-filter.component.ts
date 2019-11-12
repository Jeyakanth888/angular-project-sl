import { Component, OnInit } from '@angular/core';
import {
  trigger, state, style, transition,
  animate, group, query, stagger, keyframes
} from '@angular/animations';


const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
      'max-height': '500px', opacity: '1', visibility: 'visible'
    })),
    state('out', style({
      'max-height': '0px', opacity: '0', visibility: 'hidden'
    })),
    transition('in => out', [group([
      animate('400ms ease-in-out', style({
        opacity: '0'
      })),
      animate('600ms ease-in-out', style({
        'max-height': '0px'
      })),
      animate('700ms ease-in-out', style({
        visibility: 'hidden'
      }))
    ]
    )]),
    transition('out => in', [group([
      animate('1ms ease-in-out', style({
        visibility: 'visible'
      })),
      animate('600ms ease-in-out', style({
        'max-height': '500px'
      })),
      animate('800ms ease-in-out', style({
        opacity: '1'
      }))
    ]
    )])
  ])];

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-40%)' }),
        animate('500ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateY(-40%)' }))
      ])
    ])
  ]
})
export class SearchFilterComponent implements OnInit {

  showFilterOptions = false;
  // testDropdowns: any[] = ['Test1', 'Test2', 'Test3'];
  public testDropdowns: Array<{ text: string, value: number }> = [
    { text: 'Test1', value: 1 },
    { text: 'Test2', value: 2 },
    { text: 'Test3', value: 3 }
  ];

  constructor() { }

  ngOnInit() {
  }

  clickFilter() {
    this.showFilterOptions = !this.showFilterOptions;
  }

}
