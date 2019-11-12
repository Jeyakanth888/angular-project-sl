import { Component, OnInit, Input } from '@angular/core';

interface Item {
  text: string;
  value: string;
}

@Component({
  selector: 'app-dashboard-tiles',
  templateUrl: './dashboard-tiles.component.html',
  styleUrls: ['./dashboard-tiles.component.scss']
})


export class DashboardTilesComponent implements OnInit {

  @Input() data: any;
  progressDropdown: any = [{ text: 'All', value: 'All' }, { text: 'MCS', value: 'MCS' }, { text: 'Premier', value: 'Premier' }];
  comparisonLayersColor: any = [{ comparsion: 'MCS', color: '#0065B3', background: '#E6E6E6' },
  { comparsion: 'Premier coverage', color: '#4EC6BB', background: '#E6E6E6' },
  { comparsion: 'Mid Tier', color: '#F46B73', background: '#E6E6E6' },
  { comparsion: 'Low Tier', color: '#F46B73', background: '#E6E6E6' },
  { comparsion: 'Amendment', color: '#0065B3', background: '#E6E6E6' },
  { comparsion: 'Base coverage', color: '#4EC6BB', background: '#E6E6E6' },
  { comparsion: 'Public sector', color: '#F05325', background: '#404040' },
  { comparsion: 'Non-Public coverage', color: '#404040', background: '#E6E6E6' }];
  public selectedSortValue = this.progressDropdown[0];


  constructor() { }

  ngOnInit() {

  }

  getClasses(val) {
    return 'p' + val;
  }

  setBackgroundColor(comparisonLayer) {
    let dataArr; let styles;
    dataArr = this.comparisonLayersColor.filter(cdata => cdata.comparsion === comparisonLayer);
    if (dataArr.length > 0) {
      styles = {
        'background-color': dataArr[0].background
      };

    } else {
      styles = {
        'background-color': '#E6E6E6',
      };
    }
    return styles;
  }


  setBorderColor(comparisonLayer) {
    let dataArr; let styles;
    dataArr = this.comparisonLayersColor.filter(cdata => cdata.comparsion === comparisonLayer);
    if (dataArr.length > 0) {
      styles = {
        'border-color': dataArr[0].color,
        'background-color': dataArr[0].color
      };
      return styles;
    }

  }


}
