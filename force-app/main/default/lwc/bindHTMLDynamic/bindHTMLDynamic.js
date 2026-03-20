import { LightningElement } from 'lwc';

export default class BindHTMLDynamic extends LightningElement {
     myval='my value';
     handleInputChange(event){
        this.myval=event.target.value;
     }
}