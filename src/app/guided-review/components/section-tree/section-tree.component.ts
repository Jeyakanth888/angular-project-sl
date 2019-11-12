import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CheckableSettings } from '@progress/kendo-angular-treeview';

@Component({
  selector: 'app-section-tree',
  templateUrl: './section-tree.component.html',
  styleUrls: ['./section-tree.component.scss']
})
export class SectionTreeComponent implements OnInit, OnChanges {
  public showQuestions: any[];
  public selectedKeys: any[] = ['0_0', '1_0'];
  public getSectionRow: number;
  public selectedQuestion: string;
  public checkedKeys: any[] = ['0_0'];
  public disabledKeys: any[] = ['0_0_1'];
  public enableCheck = true;
  public checkChildren = false;
  public checkParents = false;
  public checkOnClick = false;
  public checkMode: any = 'multiple';
  public selectedQusIndexNum = '';

//  public disabledKeys: any[] = ['0_2', '1'];

  public fetchChildren(node: any): Observable<any[]> {
    return of(node.Questions);
  }
  // public hasChildren = (item: any) => item.Questions && item.Questions.length > 0;
  public hasChildren = (item: any): boolean => item.Questions.length > 0;
  public children = (dataItem: any): Observable<any[]> => of(dataItem.Questions);


  public get checkableSettings(): CheckableSettings {
    return {
        checkChildren: this.checkChildren,
        checkParents: this.checkParents,
        enabled: this.enableCheck,
        mode: this.checkMode,
        checkOnClick: this.checkOnClick
    };
}
  constructor() { }
  @Input() sectionAllQuestions: any;
  @Input() selectedSection: number;
  @Output() passSelectedQuestion = new EventEmitter<string>();
  @Output() passSelectedQusIndexNum = new EventEmitter<string>();
  @ViewChild('treeView', { read: ElementRef, static: false }) tree: ElementRef;
  ngOnInit() {
    this.getSectionRow = this.selectedSection;
    this.showQuestions = this.sectionAllQuestions; 
  }
  ngAfterViewInit() {
    this.getQuestion(this.selectedKeys[0]);
  }
  
  ngOnChanges() {
    this.getSectionRow = this.selectedSection;
  }

  handleSelection({ index }: any): void {
    this.selectedKeys = [index];
    this.getQuestion(index);
  }


  getQuestion(index) {
    const ele = this.tree.nativeElement.querySelectorAll('span[data-treeindex="' + index + '"]');
    this.selectedQuestion = ele[0].innerText;
    this.passSelectedQuestion.emit(this.selectedQuestion);
    this.selectedQusIndexNum = index;
    this.passSelectedQusIndexNum.emit(this.selectedQusIndexNum);
  }

}
