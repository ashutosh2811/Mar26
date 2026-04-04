import { LightningElement, api } from 'lwc';

export default class ChildUsingAPI extends LightningElement {
    @api parentValue;

    get style() {
        return `width: ${this.parentValue}%; min-width: 10px; height: 20px; background-color: blue; border: 1px solid black;`;
    }
}