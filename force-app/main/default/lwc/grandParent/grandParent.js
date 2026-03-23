import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    constructor() {
        super();
        console.log('Grandparent Constructor: Component is being constructed');
    }

    connectedCallback() {
        console.log('Grandparent Connected Callback: Component is inserted into the DOM');
    }

    renderedCallback() {
        console.log('Grandparent Rendered Callback: Component has been rendered');
    }

    disconnectedCallback() {
        console.log('Grandparent Disconnected Callback: Component is removed from the DOM');
    }
}