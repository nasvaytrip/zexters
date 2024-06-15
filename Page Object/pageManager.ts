import { Page } from "@playwright/test";
import { ChatsPage } from "./chatsPage";
import { FilesPage } from "./filesPage";
import { LoginPage } from "./loginPage";
import { MailsPage } from "./mailsPage";
import { CarbonioPage } from "./carbonioPage";

export class PageManager {
page: Page;
chats;
files;
login;
mails;
carbonio;

constructor(page) {
    this.page = page;
    this.chats = new ChatsPage(page);
    this.files = new FilesPage(page);
    this.login = new LoginPage(page);
    this.mails = new MailsPage(page);
    this.carbonio = new CarbonioPage(page);
}
}