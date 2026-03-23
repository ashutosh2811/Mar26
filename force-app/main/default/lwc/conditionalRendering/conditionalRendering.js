import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false;
    handleCheckboxChange() {
        this.isVisible = !this.isVisible;
    }
    
}