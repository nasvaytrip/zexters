import { baseAPI } from "../baseAPI";


export class CreateFilesApi extends baseAPI {

constructor (page) {
    super (page);}

async createDocument(name) {
    const response = await this.page.request.post('https://gb-auto-r-srv2.demo.zextras.io/services/docs/files/create', {
    data: {filename: name, type: "LIBRE_DOCUMENT", destinationFolderId: "LOCAL_ROOT"}
    });
    const body = await this.GetResponceBody(response);

    return body.nodeId;

}

async createGroup(name) {
    const response = await this.page.request.post('https://gb-auto-r-srv2.demo.zextras.io/zx/team/v22/createGroup', {
    data: {invited_user_ids:["ea8f7cc4-54e7-407c-87ae-ba22764117c7","75bbeae5-5120-4d77-96d1-b1451d23f9c2"],topic: name}

    });
    await this.GetResponceBody(response);
}

async kickFromGroup() {
    const response = await this.page.request.post('https://gb-auto-r-srv2.demo.zextras.io/zx/team/v22/kickFromConversation', {
    data: {conversation_id:"ab5b8f6c-31f4-4f79-8467-358a67e5fd9c@demo.zextras.io",kicked_user_ids:["75bbeae5-5120-4d77-96d1-b1451d23f9c2"]}
    });
    await this.GetResponceBody(response);
}

async kickFromGroupTwo() {
    const response = await this.page.request.post('https://gb-auto-r-srv2.demo.zextras.io/zx/team/v22/kickFromConversation', {
    data: {conversation_id:"ab5b8f6c-31f4-4f79-8467-358a67e5fd9c@demo.zextras.io",kicked_user_ids:["ea8f7cc4-54e7-407c-87ae-ba22764117c7"]}
    });
    await this.GetResponceBody(response);
}

async leaveFromGroup() {
    const response = await this.page.request.post('https://gb-auto-r-srv2.demo.zextras.io/zx/team/v22/leaveConversation', {
    data: {conversation_id:"ab5b8f6c-31f4-4f79-8467-358a67e5fd9c@demo.zextras.io"}
    });
    await this.GetResponceBody(response);
}



};

