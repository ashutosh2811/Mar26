import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    constructor() {
        super();
        console.log('Child Constructor: Component is being constructed');
    }

    connectedCallback() {
        console.log('Child Connected Callback: Component is inserted into the DOM');
    }

    renderedCallback() {
        console.log('Child Rendered Callback: Component has been rendered');
    }

    disconnectedCallback() {
        console.log('Child Disconnected Callback: Component is removed from the DOM');
    }
}