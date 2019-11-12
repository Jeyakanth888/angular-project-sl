import { Component, OnInit, Input, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AttachmentsComponent implements OnInit, AfterViewInit {

  pageReference: string;
  constructor() { }
  reviewFileTypes: any[] = [{ text: 'Contract', value: 'contract' }, { text: 'Adjustment', value: 'adjustment' }, { text: 'Others', value: 'others' }];
  uploadedFiles: any[] = [{ filePath: '', fileType: 'C', fileName: 'filename.pdf', fileUploader: 'Sharron Jones' },
  { filePath: '', fileType: 'O', fileName: 'filename.pdf', fileUploader: 'Sharron Jones' },
  { filePath: '', fileType: 'A', fileName: 'filename.pdf', fileUploader: 'Sharron Jones' }];

  selectedReviewFileType = this.reviewFileTypes[0];
  @ViewChild('uploadFile', { read: ElementRef, static: false }) public uploadFileBlock: ElementRef;
  @Input() pageRef: string;
  ngOnInit() {
    this.pageReference = this.pageRef;
  }
  ngAfterViewInit() {
    this.uploadFileBlock.nativeElement.querySelectorAll('.k-button')[0].querySelector('span').innerText = "Select & Upload";
  }

  deleteFile() {

  }

}
