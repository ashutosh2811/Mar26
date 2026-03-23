import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    constructor() {
        super();
        console.log('Parent Constructor: Component is being constructed');
    }

    connectedCallback() {
        console.log('Parent Connected Callback: Component is inserted into the DOM');
    }

    renderedCallback() {
        console.log('Parent Rendered Callback: Component has been rendered');
    }

    disconnectedCallback() {
        console.log('Parent Disconnected Callback: Component is removed from the DOM');
    }
}