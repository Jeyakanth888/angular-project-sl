import { Component, OnInit, ViewChild, Input, NgZone, AfterViewInit, ElementRef } from '@angular/core';
import { SelectableSettings } from '@progress/kendo-angular-grid';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { NotificationService } from '@progress/kendo-angular-notification';
import { GridComponent } from '@progress/kendo-angular-grid';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';

@Component({
  selector: 'app-candidate-pool',
  templateUrl: './candidate-pool.component.html',
  styleUrls: ['./candidate-pool.component.scss']
})

export class CandidatePoolComponent implements OnInit, AfterViewInit {
  public selectableSettings: SelectableSettings;

  reviewTableData: any[] = [{
    customer_name: 'Banco Ang - BAI Banco Ang - BAI Banco Ang - BAI', engagement_name: 'PRBL-TM-MCS-ANG-B',
    clarity_id: '2038182821', opportunity_id: '7-SDHCV5PRJ', modify_by_sbd: '--', region: 'Central and Eastern Europe', sector: 'US PubSec',
    term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$497194.00', flag: true, sub_category: {
      CategoryID: 8,
      CategoryName: 'Seafood',
      Description: 'Seaweed and fish'
    },
    product: 'P00001', product_value: '$1000.00'
  },
  {
    customer_name: 'Banque Misr', engagement_name: 'CH-MFE-RayaNetwork-BanqueMisir--EX8-Extranet-MF-EGPT-FY14-6-EFL2YWEAE',
    clarity_id: '001507090', opportunity_id: '7-JZUYBRBEG', modify_by_sbd: '--', region: 'United States', sector: 'Not US PubSec',
    term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$336173.43', flag: false,
    product: 'P00002', product_value: '$1000.00'
  },
  {
    customer_name: 'Banque Misr', engagement_name: 'CH-FF-Raya Networks-BM-MCS Services-FY17-6-GNPHSST5F',
    clarity_id: '061018401', opportunity_id: '6-EFL2YWEAE', modify_by_sbd: '--', region: 'Western Europe', sector: 'Not US PubSec',
    term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$411173.43', flag: true,
    sub_category: {
      CategoryID: 8,
      CategoryName: 'Seafood',
      Description: 'Seaweed and fish'
    },
    product: 'P00003', product_value: '$1000.00'
  },
  {
    customer_name: 'SUTTER CHS', engagement_name: 'TM-SUTTER-USWEST-NC16048989-FY-16 O365 Migration_Azure_Intune',
    clarity_id: '001462374', opportunity_id: '6-GNPHSST5F', modify_by_sbd: '--', region: 'MEA', sector: 'US PubSec',
    term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$205970.00', flag: false,

    product: 'P00004', product_value: '$1000.00'
  },
  {
    customer_name: 'Banco Ang - BAI', engagement_name: 'PRBL-TM-MCS-ANG-BAI-ModernAppsConsolidation-FY18',
    clarity_id: '2038182821', opportunity_id: '7-SDHCV5PRJ', modify_by_sbd: '--', region: 'Central and Eastern Europe', sector: 'US PubSec',
    term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$497194.00', flag: true, sub_category: {
      CategoryID: 8,
      CategoryName: 'Seafood',
      Description: 'Seaweed and fish'
    },
    product: 'P00005', product_value: '$1000.00'
  },
  {
    customer_name: 'Banque Misr', engagement_name: 'CH-MFE-RayaNetwork-BanqueMisir--EX8-Extranet-MF-EGPT-FY14-6-EFL2YWEAE',
    clarity_id: '001507090', opportunity_id: '7-JZUYBRBEG', modify_by_sbd: '--', region: 'United States', sector: 'Not US PubSec',
    term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$336173.43', flag: false,

    product: 'P00006', product_value: '$1000.00'
  },
  {
    customer_name: 'Banque Misr', engagement_name: 'CH-FF-Raya Networks-BM-MCS Services-FY17-6-GNPHSST5F',
    clarity_id: '061018401', opportunity_id: '6-EFL2YWEAE', modify_by_sbd: '--', region: 'Western Europe', sector: 'Not US PubSec',
    term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$411173.43', flag: true,
    sub_category: {
      CategoryID: 8,
      CategoryName: 'Seafood',
      Description: 'Seaweed and fish'
    },
    product: 'P00007', product_value: '$1000.00'
  },
  {
    customer_name: 'SUTTER CHS', engagement_name: 'TM-SUTTER-USWEST-NC16048989-FY-16 O365 Migration_Azure_Intune',
    clarity_id: '001462374', opportunity_id: '6-GNPHSST5F', modify_by_sbd: '--', region: 'MEA', sector: 'US PubSec',
    term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$205970.00', flag: false,

    product: 'P00008', product_value: '$1000.00'
  },
  {
    customer_name: 'Banco Ang - BAI', engagement_name: 'PRBL-TM-MCS-ANG-BAI-ModernAppsConsolidation-FY18',
    clarity_id: '2038182821', opportunity_id: '7-SDHCV5PRJ', modify_by_sbd: '--', region: 'Central and Eastern Europe', sector: 'US PubSec',
    term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$497194.00', flag: true, sub_category: {
      CategoryID: 8,
      CategoryName: 'Seafood',
      Description: 'Seaweed and fish'
    },
    product: 'P00009', product_value: '$1000.00'
  },
  {
    customer_name: 'Banque Misr', engagement_name: 'CH-MFE-RayaNetwork-BanqueMisir--EX8-Extranet-MF-EGPT-FY14-6-EFL2YWEAE',
    clarity_id: '001507090', opportunity_id: '7-JZUYBRBEG', modify_by_sbd: '--', region: 'United States', sector: 'Not US PubSec',
    term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$336173.43', flag: false,

    product: 'P00010', product_value: '$1000.00'
  }];

  public checkboxOnly = false;
  public mode = 'multiple';
  @Input() public category: object;

  @ViewChild('gridCandidatePool', { read: ElementRef, static: false }) grid: ElementRef;
  @ViewChild(TooltipDirective, { static: false }) public tooltipDir: TooltipDirective;
  public view: Observable<GridDataResult>;
  public skip = 0;
  public gridView: GridDataResult;

  public buttonCount = 10;
  public info = true;
  public type: 'numeric' | 'input' = 'numeric';
  public pageSizes = true;
  public previousNext = true;
  public detailedCollapse = false;
  public pageSize = 20;
  public collapsedRowIndex: number;
  public sort: SortDescriptor[] = [{
    field: 'amount',
    dir: 'desc'
  }];
  public allowUnsort = true;

  constructor(private notificationService: NotificationService, private ngZone: NgZone) {
    this.setSelectableSettings();
  }

  ngOnInit() {

  }

  public ngAfterViewInit(): void {
    // this.fitColumns();
  }

  public setSelectableSettings(): void {
    this.selectableSettings = {
      checkboxOnly: this.checkboxOnly,
      mode: 'multiple'
    };
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadData();
  }

  private loadData(): void {
    this.gridView = {
      data: orderBy(this.reviewTableData, this.sort),
      total: this.reviewTableData.length
    };
  }


  public showOnlyBeveragesDetails(dataItem: any, index: number): boolean {
    let setFlag = false;
    if (typeof dataItem.sub_category === 'object') {
      setFlag = true;
    }
    return setFlag;
  }

  public onPageChange(state: any): void {
    this.pageSize = state.take;
  }

  public showTooltip(e: MouseEvent): void {
    const element = e.target as HTMLElement;
    if ((element.nodeName === 'TD' || element.nodeName === 'P')
      && element.offsetWidth < element.scrollWidth) {
        element.style.cursor = "pointer";
      this.tooltipDir.toggle(element);
    } else {
      this.tooltipDir.hide();
    }
  }

  cellClickHandler(event) {
    this.detailedCollapse = !this.detailedCollapse;
    if (this.detailedCollapse) {
      event.sender.expandRow(event.rowIndex);
      this.collapsedRowIndex = event.rowIndex;
    } else if (event.rowIndex === this.collapsedRowIndex) {
      event.sender.collapseRow(event.rowIndex);
    } else {
      event.sender.collapseRow(event.rowIndex);
    }
  }

  clickGenerateReview() {
    this.notificationService.show({
      content: 'The Review has been generated',
      cssClass: 'button-notification',
      animation: { type: 'slide', duration: 400 },
      position: { horizontal: 'center', vertical: 'top' },
      type: { style: 'error', icon: true },
      closable: true
    });
  }

  resize(event) {
    const targetEle = event.target;
    const isResize = targetEle.classList.contains('k-column-resizer');
    if (isResize) {
      const tableEle = targetEle.closest('table');
      const tableWidth = tableEle.offsetWidth;
      this.grid.nativeElement.querySelector('.k-grid-header').style.width = tableWidth + 'px';
      this.grid.nativeElement.querySelector(' kendo-grid-list').style.width = tableWidth + 'px';
    }
  }

}
