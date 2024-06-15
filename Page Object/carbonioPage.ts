import { basePage } from "./basePage";

export class CarbonioPage extends basePage {

    constructor(page) {
    super(page)
    }

Buttons = {

mailsButton: this.page.locator('[data-name="email"]'),
calendarButton: this.page.locator('[data-name="calendar"]'),
contactsButton: this.page.locator('[data-name="people"]'),
contactsGroupsButton: this.page.locator('[data-name="list"]'),
chatsButton: this.page.locator('[data-name="message-circle"]'),
filesButton: this.page.locator('[data-testid="icon: DriveOutline"]'),
tasksButton: this.page.locator('[data-name="checkmark-circle-2"]'),
searchButton: this.page.locator('[data-testid="icon: SearchModOutline"]'),
settingsButton: this.page.locator('[data-testid="icon: SettingsModOutline"]'),



}

}