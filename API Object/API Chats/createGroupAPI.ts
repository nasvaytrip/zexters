import { baseAPI } from "../baseAPI";

export class CreateGroupApi extends baseAPI {

    constructor (page) {
        super (page);}
    
    async createGroup(name) {
        const response = await this.page.request.post('https://gb-auto-u-srv2.demo.zextras.io/zx/team/v22/createGroup', {
        data: {invited_user_ids:["ea8f7cc4-54e7-407c-87ae-ba22764117c7","75bbeae5-5120-4d77-96d1-b1451d23f9c2"],topic: name}

        });
        await this.GetResponceBody(response);
    }
    
    async kickFromGroup() {
        const response = await this.page.request.post('https://gb-auto-u-srv2.demo.zextras.io/zx/team/v22/kickFromConversation', {
        data: {conversation_id:"f4e73bbe-f44b-451c-9eac-60e9e526fcbb@demo.zextras.io",kicked_user_ids:["75bbeae5-5120-4d77-96d1-b1451d23f9c2"]}
        });
        await this.GetResponceBody(response);
    }

 
    };
    