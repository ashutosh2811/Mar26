import { LightningElement } from 'lwc';

export default class Child2 extends LightningElement {
    constructor() {
        super();
        console.log('Child2 Constructor: Component is being constructed');
    }

    connectedCallback() {
        console.log('Child2 Connected Callback: Component is inserted into the DOM');
    }

    renderedCallback() {
        console.log('Child2 Rendered Callback: Component has been rendered');
    }

    disconnectedCallback() {
        console.log('Child2 Disconnected Callback: Component is removed from the DOM');
    }
}