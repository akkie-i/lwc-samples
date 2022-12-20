import { LightningElement, wire, api } from 'lwc';

export default class CommunityVariable extends LightningElement {
  @api recordId;
  @api metaString = 'jsMetaValue';
  @api metaBoolean;
  @api metaInteger;
  @api metaPicklist;
  @api metaColor = '#ff00ff';

  output;
  connectedCallback() {

    const output = {
      recordId: this.recordId,
      metaString: this.metaString,
      metaBoolean: this.metaBoolean,
      metaInteger: this.metaInteger,
      metaPicklist: this.metaPicklist,
      metaColor: this.metaColor,
    }

    this.output = JSON.stringify(output);
  }
}