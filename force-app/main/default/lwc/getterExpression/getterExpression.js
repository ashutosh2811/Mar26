import { LightningElement } from 'lwc';

export default class GetterExpression extends LightningElement {
    firstName = 'John';
    lastName = 'Doe';
    handleInputChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
    }
    get UppercasefullName() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }

}