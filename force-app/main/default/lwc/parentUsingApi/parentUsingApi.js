import { LightningElement } from 'lwc';

export default class ParentUsingApi extends LightningElement {
    inputValue = 0;

    handleInputChange(event) {
        const value = parseInt(event.target.value, 10);
        if (value >= 0 && value <= 100) {
            this.inputValue = value;
        } else {
            this.inputValue = 0; // Reset to 0 if out of range
        }
    }
}