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
  createSignature(FirstName,LastName:string,Postition,Sector,Department,City,OfficeAddress,Email,OfficePhone,InternalPhone,MobileNumber,ImageURL){
    return `<b><p  style="color:#808080;font-weight:bold;" >${FirstName}<label>&nbsp; ${LastName}</label><p></p></b><br><br>
    <p style="color:#808080;" >${Postition}</p>
    <p style="color:#808080;" >${Sector}</p>
    <p  style="color:#808080;" >${Department}</p>
    <p  style="color:#808080;">${City},<span>${{OfficeAddress}}</span></p>
    <p style="color:#808080;">E-Mail:<span >${Email}</span></p>
    <p  style="color:#808080;">Phone: (+995) ${OfficePhone} (ext. ${InternalPhone})</p>
    <p  style="color:#808080;">Mobile: ${MobileNumber}</p>
    <p><img src="${ImageURL}"></p>
    `
  }
  copyClipboard(){
var image=this.divView.nativeElement.src;

    var str=this.createSignature(this.SignatureModel.FirstName,this.SignatureModel.LastName,this.SignatureModel.Postition,this.SignatureModel.Sector,this.SignatureModel.Department,this.SignatureModel.City,this.SignatureModel.OfficeAddress,this.SignatureModel.Email,this.SignatureModel.OfficePhone,this.SignatureModel.InternalPhone,this.SignatureModel.MobileNumber,image);
    function listener(e) { 
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
  }
  changeOfficeAddress(){
    if(this.SignatureModel.IsHeadOffice){
    this.SignatureModel.OfficeAddress="Ana Politkovskaia Street 9a"
    this.SignatureModel.City="Tbilisi"
    this.SignatureModel.OfficePhone=2922222
  }else{
    this.SignatureModel.OfficeAddress=undefined;
    this.SignatureModel.City=undefined;
    this.SignatureModel.OfficePhone=undefined;
  }
  }

}
