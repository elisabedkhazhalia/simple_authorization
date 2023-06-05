import {Component } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  inputValue: string = '';
  selectedCitizenship: string = "";
  isInputValid: boolean = true;
  toggleChecked: boolean = false;
  nameToggleChecked: boolean = false;
  surnametoggleChecked: boolean = false;
  gendertoggleChecked: boolean = false;
  dateofbirthtoggleChecked: boolean = false;
  idtoggleChecked: boolean = false;
  phonetoggleChecked: boolean = false;
  mailtoggleChecked: boolean = false;
  cardIDtoggleChecked: boolean = false;

  logInputOnChange(event: any) {
    this.inputValue = this.inputValue.replace(/\D/g, '');
    if (this.selectedCitizenship==='Georgia'){
      if (this.inputValue.length===11){
        this.isInputValid = true;
      }else{
        this.isInputValid = false;
      }
    }else{
      this.isInputValid = true;
    }
  }


  }

