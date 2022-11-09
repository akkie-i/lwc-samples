import { LightningElement, track } from 'lwc';
import getApiInfo from "@salesforce/apex/ApiSampleController.getApiInfo";
import getRecords from "@salesforce/apex/ApiSampleController.getRecords";
import createRecord from "@salesforce/apex/ApiSampleController.createRecord";
import getRecordById from "@salesforce/apex/ApiSampleController.getRecordById";
import updateRecord from "@salesforce/apex/ApiSampleController.updateRecord";
import deleteRecord from "@salesforce/apex/ApiSampleController.deleteRecord";


export default class ApiSample extends LightningElement {

  targetId = '';
  params = {};
  isStart = false;
  isShowModal = false;
  _inputFields = {
    id: '',
    name: '',
    age: null,
    email: '',
    gender: '',
  };
  inputFields = {};
  options = [];
  allRecords = [];
  tableBody = [];
  tableHead = [
    { label: '名前', fieldName: 'name', type: 'text',hideDefaultActions: true },
    { label: '年齢', fieldName: 'age', type: 'number', hideDefaultActions: true },
    { label: 'メールアドレス', fieldName: 'email', type: 'phone', hideDefaultActions: true },
    { label: '性別', fieldName: 'gender', type: 'text', hideDefaultActions: true },
  ];

  async startApi() {
    this.isStart = true;
    await this.getUsers();
    this.setOptions();
  }

  getTargetId(event) {
    this.targetId = event.target.value;
  }

  async getUsers() {
    const params = { ...this.params }
    params.path = `staging/users`;
    this.allRecords = JSON.parse(await getRecords(params));
    this.tableBody = this.allRecords.map((record) => ({...record}));
  }

  async getUser() {
    if (!this.getTargetId) {
      return;
    }
    const params = { ...this.params }
    params.path = `staging/users/${this.targetId}`;
    const user = JSON.parse(await getRecordById(params));
    this.tableBody = this.tableBody.filter((v) => v.id === user.id);
    this.initComboBox();
    this.targetId = '';
  }

  async deleteUser() {
    if (!this.getTargetId) {
      return;
    }
    const params = { ...this.params }
    params.path = `staging/users/${this.targetId}`;
    await deleteRecord(params);
    this.allRecords = this.allRecords.filter(({id}) => id !== this.targetId);
    this.tableBody = this.allRecords.map((record) => ({...record}));
    this.init();
  }

  async createUser(param) {
    const params = { ...this.params }
    params.path = `staging/users`;
    params.param = param;
    const response = JSON.parse(await createRecord(params));
    this.allRecords.unshift(response);
    this.tableBody = this.allRecords.map((record) => ({...record}));
    this.init();
  }

  async updateUser(param) {
    const params = { ...this.params }
    params.path = `staging/users/${this.targetId}`;
    params.param = param;
    const response = JSON.parse(await updateRecord(params));
    this.allRecords = this.allRecords.filter(({id}) => id !== this.targetId);
    this.allRecords.unshift(response);
    this.tableBody = this.allRecords.map((record) => ({...record}));
    this.init();
  }

  handleCreateUser() {
    const inputFields = { ...this._inputFields };
    this.inputFields = inputFields;
    this.handleModal();
  }

  handleUpdateUser() {
    if (!this.getTargetId) {
      return;
    }
    const inputFields = { ...this._inputFields };
    const target = this.tableBody.find((v) => v.id === this.targetId);
    inputFields.id = target.id;
    inputFields.name = target.name;
    inputFields.age = target.age;
    inputFields.email = target.email;
    inputFields.gender = target.gender;
    this.inputFields = inputFields;
    this.handleModal();
  }

  async onSubmit(event) {
    event.preventDefault();
    try {
      const param = {};
      let id;
      this.template.querySelectorAll(".formRequest").forEach((v) => {
        if (v.fieldName !== 'id__c') {
          param[v.fieldName.slice(0, -3)] = v.value;
        } else {
          id = v.value;
        }
      })

      if (Object.keys(param).find((col) => !param[col])) {
        return;
      }

      if (id) {
        await this.updateUser(JSON.stringify(param));
      } else {
        await this.createUser(JSON.stringify(param));
      }
      this.handleModal();
    } catch(e) {
      console.error(e);
    }
  }

  handleModal() {
    this.isShowModal = !this.isShowModal;
  }

  init() {
    this.setOptions();
    this.initComboBox();
    this.targetId = '';
  }

  setOptions() {
    this.options = this.tableBody.map(({name, id}) => {
      return {
        label: `${name}(${id})`,
        value: id
      }
    });
  }

  initComboBox() {
    this.template.querySelectorAll('.select').forEach(each => {
      each.value = null;
    });
  }

  async connectedCallback() {
    try {
      const apiInfo = await getApiInfo();
      if (!apiInfo.length) {
        throw 'aws_api_gateway does not exist';
      }
      this.params.url = apiInfo[0].url__c;
      this.params.secretKey = apiInfo[0].secret_key__c;
    } catch(e) {
      console.error(e);
    }
  }
}
