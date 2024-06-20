import { Page } from "@playwright/test";
import { CreateFilesApi } from "./API Files/createFilesAPI";
import { DeleteFilesApi } from "./API Files/deleteFilesAPI";
import { CreateGroupApi} from "./API Chats/createGroupAPI";
import { DeleteMailApi } from "./API Mails/deleteMailAPI";
import { SendMailApi } from "./API Mails/sendMailAPI";

export class PageManagerAPI {
page: Page;
createFilesAPI;
deleteFilesAPI;
createGroupAPI;
deleteMailAPI;
sendMailAPI;


constructor(page) {
    this.page = page;
    this.createFilesAPI = new CreateFilesApi(page);
    this.deleteFilesAPI = new DeleteFilesApi(page);
    this.createGroupAPI = new CreateGroupApi(page);
    this.deleteMailAPI = new DeleteMailApi(page);
    this.sendMailAPI = new SendMailApi(page);



}
}