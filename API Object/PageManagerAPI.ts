import { Page } from "@playwright/test";
import { CreateFilesApi } from "./API Files/createFilesAPI";
import { DeleteFilesApi } from "./API Files/deleteFilesAPI";
import { CreateGroupApi} from "./API Message/createGroupAPI";

export class PageManagerAPI {
page: Page;
createFilesAPI;
deleteFilesAPI;
createGroupAPI

constructor(page) {
    this.page = page;
    this.createFilesAPI = new CreateFilesApi(page);
    this.deleteFilesAPI = new DeleteFilesApi(page);
    this.createGroupAPI = new CreateGroupApi(page);


}
}