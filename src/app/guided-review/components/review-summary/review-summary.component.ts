import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
const qusData = [{
  text: 'Identify the contract', type: 'step', questions: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Q 1.1: Is there a risk that there are other documents that should be accounted for as one accounting contract?', ans: 'yes', edit: true }, { text: 'Q 1.1: Conclusion', ans: 'yes', edit: true }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Q 1.2.1: Is there a signed and countersigned EWSO?' , ans: 'yes', edit: true }, { text: 'Q 1.2.1: Is there a signed and countersigned SOW?' , ans: 'yes', edit: true }, { text: 'Q 1.2.2: Are the payment terms clearly identified?' , ans: 'yes', edit: true }, { text: 'Q 1.2.2: Are the goods and services clearly identified?' , ans: 'yes', edit: true }, { text: 'Q 1.2.3: Are there any terms and conditions that call into question collectability risk (above and beyond the standard Credit Services process)?', ans: 'yes', edit: true }, { text: 'Q 1.2.4: Does the contract have commercial substance?' , ans: 'yes', edit: true }, { text: 'Q 1.2: Conclusion', ans: 'yes', edit: true }] }]
},
{
  text: 'Modify the performance obligation', type: 'step', questions: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Q 1.1: Is there a risk that there are other documents that should be accounted for as one accounting contract?', ans: 'yes', edit: false }, { text: 'Q 1.1: Conclusion' , ans: 'yes', edit: false }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Q 1.2.1: Is there a signed and countersigned EWSO?', ans: 'yes', edit: true }, { text: 'Q 1.2.1: Is there a signed and countersigned SOW?' , ans: 'yes', edit: true }, { text: 'Q 1.2.2: Are the payment terms clearly identified?', ans: 'yes', edit: true }, { text: 'Q 1.2.2: Are the goods and services clearly identified?', ans: 'yes', edit: true }, { text: 'Q 1.2.3: Are there any terms and conditions that call into question collectability risk (above and beyond the standard Credit Services process)?', ans: 'yes', edit: true }, { text: 'Q 1.2.4: Does the contract have commercial substance?', ans: 'yes', edit: true }, { text: 'Q 1.2: Conclusion', ans: 'yes', edit: true }] }]
},
{
  text: 'Allocate the transaction price', type: 'step', questions: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Q 1.1: Is there a risk that there are other documents that should be accounted for as one accounting contract?' , ans: 'yes', edit: false }, { text: 'Q 1.1: Conclusion' , ans: 'yes', edit: false }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Q 1.2.1: Is there a signed and countersigned EWSO?' , ans: 'yes', edit: false }, { text: 'Q 1.2.1: Is there a signed and countersigned SOW?', ans: 'yes', edit: false }, { text: 'Q 1.2.2: Are the payment terms clearly identified?', ans: 'yes', edit: false }, { text: 'Q 1.2.2: Are the goods and services clearly identified?' , ans: 'yes', edit: false}, { text: 'Q 1.2.3: Are there any terms and conditions that call into question collectability risk (above and beyond the standard Credit Services process)?', ans: 'yes', edit: false }, { text: 'Q 1.2.4: Does the contract have commercial substance?' , ans: 'yes', edit: false}, { text: 'Q 1.2: Conclusion' , ans: 'yes', edit: false}] }]
},
{
  text: 'Recognize Revenue', type: 'step', questions: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Q 1.1: Is there a risk that there are other documents that should be accounted for as one accounting contract?', ans: 'yes', edit: false }, { text: 'Q 1.1: Conclusion', ans: 'yes', edit: false }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Q 1.2.1: Is there a signed and countersigned EWSO?', ans: 'yes', edit: false }, { text: 'Q 1.2.1: Is there a signed and countersigned SOW?' , ans: 'yes', edit: false}, { text: 'Q 1.2.2: Are the payment terms clearly identified?' , ans: 'yes', edit: false}, { text: 'Q 1.2.2: Are the goods and services clearly identified?' , ans: 'yes', edit: false}, { text: 'Q 1.2.3: Are there any terms and conditions that call into question collectability risk (above and beyond the standard Credit Services process)?', ans: 'yes', edit: false }, { text: 'Q 1.2.4: Does the contract have commercial substance?' , ans: 'yes', edit: false}, { text: 'Q 1.2: Conclusion', ans: 'yes', edit: false }] }]
},
{
  text: 'Other', type: 'Appendix', questions: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Q 1.1: Is there a risk that there are other documents that should be accounted for as one accounting contract?', ans: 'yes', edit: false }, { text: 'Q 1.1: Conclusion', ans: 'yes', edit: false }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Q 1.2.1: Is there a signed and countersigned EWSO?', ans: 'yes', edit: false }, { text: 'Q 1.2.1: Is there a signed and countersigned SOW?', ans: 'yes', edit: false }, { text: 'Q 1.2.2: Are the payment terms clearly identified?' , ans: 'yes', edit: false}, { text: 'Q 1.2.2: Are the goods and services clearly identified?', ans: 'yes', edit: false }, { text: 'Q 1.2.3: Are there any terms and conditions that call into question collectability risk (above and beyond the standard Credit Services process)?', ans: 'yes', edit: false }, { text: 'Q 1.2.4: Does the contract have commercial substance?', ans: 'yes', edit: false }, { text: 'Q 1.2: Conclusion', ans: 'yes', edit: false }] }]
},
{
  text: 'Misc.', type: 'Appendix', questions: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Q 1.1: Is there a risk that there are other documents that should be accounted for as one accounting contract?', ans: 'yes', edit: false }, { text: 'Q 1.1: Conclusion', ans: 'yes', edit: false }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Q 1.2.1: Is there a signed and countersigned EWSO?', ans: 'yes', edit: false }, { text: 'Q 1.2.1: Is there a signed and countersigned SOW?', ans: 'yes', edit: false }, { text: 'Q 1.2.2: Are the payment terms clearly identified?' , ans: 'yes', edit: false}, { text: 'Q 1.2.2: Are the goods and services clearly identified?', ans: 'yes', edit: false }, { text: 'Q 1.2.3: Are there any terms and conditions that call into question collectability risk (above and beyond the standard Credit Services process)?', ans: 'yes', edit: false }, { text: 'Q 1.2.4: Does the contract have commercial substance?', ans: 'yes', edit: false }, { text: 'Q 1.2: Conclusion', ans: 'yes', edit: false }] }]
},
{
  text: 'Contract Modification', type: '', questions: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Q 1.1: Is there a risk that there are other documents that should be accounted for as one accounting contract?', ans: 'yes', edit: false }, { text: 'Q 1.1: Conclusion', ans: 'yes', edit: false }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Q 1.2.1: Is there a signed and countersigned EWSO?', ans: 'yes', edit: false }, { text: 'Q 1.2.1: Is there a signed and countersigned SOW?', ans: 'yes', edit: false }, { text: 'Q 1.2.2: Are the payment terms clearly identified?' , ans: 'yes', edit: false}, { text: 'Q 1.2.2: Are the goods and services clearly identified?', ans: 'yes', edit: false }, { text: 'Q 1.2.3: Are there any terms and conditions that call into question collectability risk (above and beyond the standard Credit Services process)?', ans: 'yes', edit: false }, { text: 'Q 1.2.4: Does the contract have commercial substance?', ans: 'yes', edit: false }, { text: 'Q 1.2: Conclusion', ans: 'yes', edit: false }] }]
}];

@Component({
  selector: 'app-review-summary',
  templateUrl: './review-summary.component.html',
  styleUrls: ['./review-summary.component.scss']
})
export class ReviewSummaryComponent implements OnInit {

  public data: any[] = qusData;
  public expandedKeys: any[] = ['0', '0_0', '0_1'];


  public checkChildren = true;
  public checkParents = true;
  public checkMode: any = 'multiple';
  public checkedKeys: any[] = [];
  public selectedQuestion: string;
  public get checkableSettings() {
    return {
      checkChildren: this.checkChildren,
      checkParents: this.checkParents,
      mode: this.checkMode
    };
  }
  constructor() { }


  ngOnInit() {

  }

  clickEditAnswer({ index }: any) {
    console.log(index);
  }


  handleSelection(event): void {
    console.log(event);
  }











}
