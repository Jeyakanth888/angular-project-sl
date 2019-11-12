import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';

const data = [{
  engagement_name: 'PPDS-FF-123-333-Modern', account_contract: '1234567890', review_id: '1234567890',
  customer: 'Sony Corporation', program: 'MCS', flag: true
},
{
  engagement_name: 'PPDS-FF-123-333-Modern', account_contract: '1234567890', review_id: '1234567890',
  customer: 'Sony Corporation', program: 'MCS', flag: true
},
{
  engagement_name: 'PPDS-FF-123-333-Modern', account_contract: '1234567890', review_id: '1234567890',
  customer: 'Sony Corporation', program: 'MCS', flag: true
},
{
  engagement_name: 'PPDS-FF-123-333-Modern', account_contract: '1234567890', review_id: '1234567890',
  customer: 'Sony Corporation', program: 'MCS', flag: false
}];

/* const qusData = [{
  topic: 'Identify the contract', type: 'step', sections: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] }]
},
{
  topic: 'Modify the performance obligation', type: 'step', sections: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] }]
},
{
  topic: 'Allocate the transaction price', type: 'step', sections: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] }]
},
{
  topic: 'Recognize Revenue', type: 'step', sections: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] }]
},
{
  topic: 'Other', type: 'Appendix', sections: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] }]
},
{
  topic: 'Misc.', type: 'Appendix', sections: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] }]
},
{
  topic: 'Contract Modification', type: '', sections: [{ text: 'Multiple Element Arrangements', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] },
  { text: 'A Valid Contract Exists', questions: [{ text: 'Is there a risk that there are other documents that should be accounted for as one accounting contract? For example, do you have another Services document, VL arrangement, ECIF,… or free services?”' }, { text: 'Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?' }, { text: 'Are any of the following true? 1. The contracts were negotiated as a package with a single commercial objective, or… 2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or 3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.' }] }]
}]; */


const qusData = { "Id": 0, "RootNode": { "Id": 1, "ParentId": 0, "Question": "Root Node", "Steps": [{ "Id": 2, "ParentId": 1, "Question": "Identify the Contract", "IsRequired": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "StepSubtitle": "Step 1", "Sections": [{ "Id": 9, "ParentId": 2, "Question": "1.1: Multiple Element Arrangements", "IsRequired": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "Questions": [{ "Id": 10, "ParentId": 9, "Order": 1, "Question": "Is there a risk that there are other documents that should be accounted for as one accounting contract?For example, do you have another Services document, VL arrangement, ECIF, or free services?", "IsRequired": true, "IsYesNotesRequired": true, "IsNoNotesRequired": false, "Expression": "y=12,N=11", "HasHelpText": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "QCommentList": null, "QCommentId": 0, "QAnswers": null, "QAnswerId": 0, "SectionConclusion": null, "StepConclusion": null, "Questions": [{ "Id": 11, "ParentId": 10, "Order": 11, "Question": "No multiple element arrangement exists.", "IsRequired": false, "IsYesNotesRequired": false, "IsNoNotesRequired": false, "Expression": "C = 9", "HasHelpText": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "QCommentList": null, "QCommentId": 0, "QAnswers": null, "QAnswerId": 0, "SectionConclusion": null, "StepConclusion": null, "Questions": [] }, { "Id": 12, "ParentId": 10, "Order": 12, "Question": "Were the two or more contracts entered into at or near the same time (i.e., within 90 days) with the same customer (or related parties to the customer)?", "IsRequired": false, "IsYesNotesRequired": true, "IsNoNotesRequired": false, "Expression": "N=7,y=5", "HasHelpText": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "QCommentList": null, "QCommentId": 0, "QAnswers": null, "QAnswerId": 0, "SectionConclusion": null, "StepConclusion": null, "Questions": [{ "Id": 13, "ParentId": 12, "Order": 111, "Question": "Are any of the following true?1. The contracts were negotiated as a package with a single commercial objective, or2. The amount of consideration to be paid in one contract depends on the price or performance of the other contract, or3. The goods or services promised in the contracts (or some goods or services promised in each of the contracts) are a single performance obligation.", "IsRequired": false, "IsYesNotesRequired": true, "IsNoNotesRequired": false, "Expression": "N=8,Y=6", "HasHelpText": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "QCommentList": null, "QCommentId": 0, "QAnswers": null, "QAnswerId": 0, "SectionConclusion": null, "StepConclusion": null, "Questions": [{ "Id": 15, "ParentId": 13, "Order": 1111, "Question": "Account for the Contract as one.", "IsRequired": false, "IsYesNotesRequired": false, "IsNoNotesRequired": false, "Expression": "C=11", "HasHelpText": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "QCommentList": null, "QCommentId": 0, "QAnswers": null, "QAnswerId": 0, "SectionConclusion": null, "StepConclusion": null, "Questions": [] }, { "Id": 16, "ParentId": 13, "Order": 1112, "Question": "Account for the contracts separately.", "IsRequired": false, "IsYesNotesRequired": false, "IsNoNotesRequired": false, "Expression": "C=12", "HasHelpText": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "QCommentList": null, "QCommentId": 0, "QAnswers": null, "QAnswerId": 0, "SectionConclusion": null, "StepConclusion": null, "Questions": [] }] }, { "Id": 14, "ParentId": 12, "Order": 112, "Question": "Account for the contracts separately.", "IsRequired": false, "IsYesNotesRequired": false, "IsNoNotesRequired": false, "Expression": "C=10", "HasHelpText": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "QCommentList": null, "QCommentId": 0, "QAnswers": null, "QAnswerId": 0, "SectionConclusion": null, "StepConclusion": null, "Questions": [] }] }] }] }, { "Id": 17, "ParentId": 2, "Question": "1.2: A Valid Contract Exists", "IsRequired": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "Questions": [{ "Id": 18, "ParentId": 17, "Order": 1, "Question": "Is there a signed and countersigned EWSO?If No, document why, with whom you discussed, and why this is or is not a revenue recognition concern.", "IsRequired": true, "IsYesNotesRequired": false, "IsNoNotesRequired": true, "Expression": "y=13,N=13", "HasHelpText": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "QCommentList": null, "QCommentId": 0, "QAnswers": null, "QAnswerId": 0, "SectionConclusion": null, "StepConclusion": null, "Questions": [{ "Id": 19, "ParentId": 18, "Order": 1, "Question": "Is there a signed and countersigned SOW?If No, document why, with whom you discussed, and why this is or is not a revenue recognition concern.", "IsRequired": true, "IsYesNotesRequired": false, "IsNoNotesRequired": true, "Expression": "y=13,N=13", "HasHelpText": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "QCommentList": null, "QCommentId": 0, "QAnswers": null, "QAnswerId": 0, "SectionConclusion": null, "StepConclusion": null, "Questions": [{ "Id": 20, "ParentId": 19, "Order": 1, "Question": "Are the payment terms clearly identified?If No, document why, and why this is or is not a revenue recognition concern.", "IsRequired": true, "IsYesNotesRequired": false, "IsNoNotesRequired": true, "Expression": "y=13,N=13", "HasHelpText": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "QCommentList": null, "QCommentId": 0, "QAnswers": null, "QAnswerId": 0, "SectionConclusion": null, "StepConclusion": null, "Questions": [{ "Id": 21, "ParentId": 20, "Order": 1, "Question": "Are the goods and services clearly identified?If No, document why, and why this is or is not a revenue recognition concern.", "IsRequired": true, "IsYesNotesRequired": false, "IsNoNotesRequired": true, "Expression": "y=13,N=13", "HasHelpText": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "Step": 1, "QCommentList": null, "QCommentId": 0, "QAnswers": null, "QAnswerId": 0, "SectionConclusion": null, "StepConclusion": null, "Questions": [] }] }] }] }] }] }, { "Id": 3, "ParentId": 1, "Question": "Modify the Performance Obligation", "IsRequired": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "StepSubtitle": "Step 2", "Sections": [] }, { "Id": 4, "ParentId": 1, "Question": "Allocate the Transaction Price", "IsRequired": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "StepSubtitle": "Step 3", "Sections": [] }, { "Id": 5, "ParentId": 1, "Question": "Recognize Revenue", "IsRequired": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "StepSubtitle": "Step 4", "Sections": [] }, { "Id": 6, "ParentId": 1, "Question": "Other", "IsRequired": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "StepSubtitle": "Appendix 1", "Sections": [] }, { "Id": 7, "ParentId": 1, "Question": "Misc.", "IsRequired": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "StepSubtitle": "Appendix 2", "Sections": [] }, { "Id": 8, "ParentId": 1, "Question": "Contract Modification", "IsRequired": false, "IsDeleted": false, "QuestionnaireId": 1, "QNodeTypeId": 0, "StepSubtitle": "null", "Sections": [] }] }, "QuestionnaireId": 0 }


@Component({
  selector: 'app-decision-tree',
  templateUrl: './decision-tree.component.html',
  styleUrls: ['./decision-tree.component.scss']
})
export class DecisionTreeComponent implements OnInit {

  questionsData: any = qusData;
  tableData: any[] = data;
  showSectionTree: boolean;
  showQuestionsToSectionTree = [];
  selectedSectionRow = 1;
  printQuestion = '';
  otherCheckboxDisabled: true;
  enabledCheckBoxes: any[] = [];
  showContractModification = false;
  showCopyDecisionPopup = false;
  stepSubTitle: string = '';
  qustionNumber: string = '';
  constructor() { }

  @ViewChild('sectionLists', { read: ElementRef, static: false }) sectionLists: ElementRef;

  ngOnInit() {
    this.questionsData = this.questionsData.RootNode.Steps;
    this.showQuestionsToSectionTree = this.questionsData[0].Sections;

  }

  showSectionTreeQuestions(recFlag) {
    this.showSectionTree = recFlag;
    if (recFlag) {
      const elems = this.sectionLists.nativeElement.querySelectorAll('li');
      this.removeActiveClass(elems);
      elems[1].classList.add('active');
      this.stepSubTitle = this.questionsData[0].StepSubtitle;
    } else {
      const elems = this.sectionLists.nativeElement.querySelectorAll('li');
      this.removeActiveClass(elems);
      elems[0].classList.add('active')
    }
  }

  removeActiveClass(elems) {
    [].forEach.call(elems, (el) => {
      el.classList.remove("active");
    });
  }

  onSelectSection(event) {
    const ele = event.target.parentNode;
    const rootEle = ele.parentNode.querySelectorAll('.active');
    this.removeActiveClass(rootEle);
    ele.classList.add('active');
    const findCheckbox = ele.querySelector('.section-selection-checkbox');
    findCheckbox.setAttribute('checked', true);
    const findIndex = findCheckbox.getAttribute('id').split('_');
    const rowIndex = findIndex[1];
    this.showQuestionsToSectionTree = this.questionsData[rowIndex].Sections;
    this.stepSubTitle = this.questionsData[rowIndex].StepSubtitle;
    this.selectedSectionRow = rowIndex + 1;
    const leftTreeDataLength = this.questionsData.length;
    this.showContractModification = false;
    if (leftTreeDataLength === this.selectedSectionRow) {
      this.showContractModification = true;
    }
  }

  printSelectedQuestion(qus) {
    this.printQuestion = qus;
  }

  clickCopyDecision() {
    this.showCopyDecisionPopup = !this.showCopyDecisionPopup;
  }

  closeTogglePopup() {
    this.showCopyDecisionPopup = false;
  }

  printSelectedQuestionNumber(qusNumIndex) {
    const indArr = qusNumIndex.split('_');
    let qusNum1 = parseInt(indArr[0]) + 1;
    let qusNum2 = parseInt(indArr[1]) + 1;
    this.qustionNumber = qusNum1 + '.' + qusNum2;
  }

}
