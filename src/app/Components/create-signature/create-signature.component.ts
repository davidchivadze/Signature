import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Signature } from 'src/app/Models/signature';

@Component({
  selector: 'app-create-signature',
  templateUrl: './create-signature.component.html',
  styleUrls: ['./create-signature.component.scss']
})
export class CreateSignatureComponent implements OnInit {

  constructor() { }
  SignatureModel:Signature;
status;
@ViewChild("CopyText") divView: ElementRef;
  ngOnInit(): void {

    this.SignatureModel=new Signature();
    this.SignatureModel.OfficePhone=2922222;
    
  }
  copyClipBoard(){

  }

}
