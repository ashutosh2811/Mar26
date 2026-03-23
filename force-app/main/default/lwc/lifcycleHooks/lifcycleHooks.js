import { LightningElement } from 'lwc';

export default class LifcycleHooks extends LightningElement {
    constructor() {
        super();
        console.log('Constructor: Component is being constructed');
    }

    connectedCallback() {
        console.log('Connected Callback: Component is inserted into the DOM');
    }

    renderedCallback() {
        console.log('Rendered Callback: Component has been rendered');
    }

    disconnectedCallback() {
        console.log('Disconnected Callback: Component is removed from the DOM');
    }  
}