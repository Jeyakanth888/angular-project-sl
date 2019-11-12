import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { SelectableSettings } from '@progress/kendo-angular-grid';

const data = [{
  customer_name: 'Banco Ang - BAI', engagement_name: 'PRBL-TM-MCS-ANG-BAI-ModernAppsConsolidation-FY18',
  clarity_id: '2038182821', opportunity_id: '7-SDHCV5PRJ', modify_by_sbd: '--', region: 'Central and Eastern Europe', sector: 'US PubSec',
  term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$497194.00', flag: true, product: '--', product_value: '$1000.10'
},
{
  customer_name: 'Banque Misr', engagement_name: 'CH-MFE-RayaNetwork-BanqueMisir--EX8-Extranet-MF-EGPT-FY14-6-EFL2YWEAE',
  clarity_id: '001507090', opportunity_id: '7-JZUYBRBEG', modify_by_sbd: '--', region: 'United States', sector: 'Not US PubSec',
  term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$336173.43', flag: false, product: '--', product_value: '$1000.10'
},
{
  customer_name: 'Banque Misr', engagement_name: 'CH-FF-Raya Networks-BM-MCS Services-FY17-6-GNPHSST5F',
  clarity_id: '061018401', opportunity_id: '6-EFL2YWEAE', modify_by_sbd: '--', region: 'Western Europe', sector: 'Not US PubSec',
  term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$411173.45', flag: true, product: '--', product_value: '$1000.10'
},
{
  customer_name: 'SUTTER CHS', engagement_name: 'TM-SUTTER-USWEST-NC16048989-FY-16 O365 Migration_Azure_Intune',
  clarity_id: '001462374', opportunity_id: '6-GNPHSST5F', modify_by_sbd: '--', region: 'MEA', sector: 'US PubSec',
  term: '--', effective_date: 'May 11, 2017', involved_party: 'Yes', amount: '$205970.00', flag: false, product: '--', product_value: '$1000.10'
}];


@Component({
  selector: 'app-question-node',
  templateUrl: './question-node.component.html',
  styleUrls: ['./question-node.component.scss']
})
export class QuestionNodeComponent implements OnInit, OnChanges {
  public selectableSettings: SelectableSettings;
  startedBegin: boolean;
  dropdown: any[] = [{ text: 'The Dropdowns enable you to set their width and the width of the popup which contains the list of suggestions or options', value: 1 },
  { text: 'To specify the width of the popup which contains the list of suggestion or options, set the popupSettings property. By default, the popup acquires you to have a set width of the component', value: 2 },
  { text: 'The Dropdowns enable you to set their width and the width of the popup which contains the list of suggestions or options', value: 2 }];
  pageRef = 'reviewQuided';
  public opened = false;
  showContractTable = false;
  btnHeadText = '';
  public checkboxOnly = false;
  public mode = 'multiple';
  reviewTableData: any[] = data;
  isConclusion = false;
  contractIds = [{ acc_contract_type: 'New' }, { acc_contract_type: 'New' }, { acc_contract_type: 'New' }, { acc_contract_type: 'New' }];
  constructor() {
    this.setSelectableSettings();
  }
  @Output() showSectionTree = new EventEmitter();
  @Input() showQuestion: string;
  @Input() showContract: boolean;
  @Input() ShowStepSubTitle: string;
  @Input() showQuestionNumber: string;

  ngOnInit() {

  }

  ngOnChanges() {
    this.showContractTable = this.showContract;
    if (this.showContract) {
      this.btnHeadText = 'Contract modification';
    }
    this.btnHeadText = 'Question ' + this.showQuestionNumber;
  }

  public setSelectableSettings(): void {
    this.selectableSettings = {
      checkboxOnly: this.checkboxOnly,
      mode: 'multiple'
    };
  }

  clickStartQuestion() {
    this.showSideSectionTree(true);
  }

  showSideSectionTree(flag: boolean): void {
    this.startedBegin = flag;
    this.showSectionTree.emit(this.startedBegin);
  }

  clickBackBtn() {
    this.showSideSectionTree(false);
  }


  public openHelpTogglePopup() {
    this.opened = !this.opened;
  }

  printHelpPopupStatus(status) {
    this.opened = status;
  }

  clickNext() {
    this.isConclusion = !this.isConclusion;
    if (this.isConclusion) {
      this.showQuestion = 'Conclusion';
    } else {
      this.showQuestion = this.showQuestion;
    }
  }
}
