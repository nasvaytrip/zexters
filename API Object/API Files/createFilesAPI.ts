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
    const body = await this.GetResponceBody(response);
    return body.id;
}

async kickFromGroup(konvid) {
    const response = await this.page.request.post('https://gb-auto-r-srv2.demo.zextras.io/zx/team/v22/kickFromConversation', {
    data: {conversation_id: konvid ,kicked_user_ids:["75bbeae5-5120-4d77-96d1-b1451d23f9c2"]}
    });
    await this.GetResponceBody(response);
}

async getIdFromAllGroups() {
    const response = await this.page.request.post('https://gb-auto-r-srv2.demo.zextras.io/zx/team/v22/getConversations', {
        data: {}
        });
       const body = await this.GetResponceBody(response);
       let arr = body.conversations;
       let arr2 = await Promise.all (arr.map(async (obj) => {return obj.id}))
      return arr2
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

async deleteGroup(konvid) {
    const response = await this.page.request.post('https://gb-auto-r-srv2.demo.zextras.io/zx/team/v22/kickFromConversation', {
        data: {conversation_id: konvid ,kicked_user_ids:["75bbeae5-5120-4d77-96d1-b1451d23f9c2"]}
        });
        await this.GetResponceBody(response);
    
    const responsea = await this.page.request.post('https://gb-auto-r-srv2.demo.zextras.io/zx/team/v22/kickFromConversation', {
        data: {conversation_id: konvid ,kicked_user_ids:["ea8f7cc4-54e7-407c-87ae-ba22764117c7"]}
        });
        await this.GetResponceBody(responsea);

         const responseb = await this.page.request.post('https://gb-auto-r-srv2.demo.zextras.io/zx/team/v22/leaveConversation', {
            data: {conversation_id: konvid}
            });
            await this.GetResponceBody(responseb);

}

};

