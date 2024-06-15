import { title } from "process";
import { basePage } from "./basePage";

export class ChatsPage extends basePage {

    constructor(page) {
    super(page)
    }

    Buttons = {
    newButton: this.page.locator('[class="Button__StyledGrid-sc-1oof15b-6 kDNpzI"]'),
    newListButton: this.page.getByTestId('HeaderMainLogoContainer').getByRole('button').nth(1),
    createGroup: this.page.locator('div').filter({ hasText: /^Create Group$/ }).nth(2),
    }

    Input = {
    titleGroupName: this.page.getByPlaceholder('Title'),
    addPatricipants: this.page.locator('#input-4'),
    }

    async createNewGroup () {

    await this.page.getByTestId('HeaderMainLogoContainer').getByRole('button').nth(1).click();
    await this.page.locator('div').filter({ hasText: /^Create Group$/ }).nth(2).click();
    await this.page.getByPlaceholder('Title').click();
    await this.page.getByPlaceholder('Title').fill('Test Group');
    await this.page.getByText('Start typing to pick an').click();
    await this.page.getByPlaceholder('Start typing to pick an').fill('test140');
    await this.page.getByText('test140@demo.zextras.iotest140@demo.zextras.io').click();
    await this.page.getByPlaceholder('Start typing to pick an').fill('test141');
    await this.page.getByText('test141@demo.zextras.iotest141@demo.zextras.io').click();
    await this.page.getByTestId('modal').getByRole('button', { name: 'Create' }).click();
    }

    async addMember () {
    await this.page.getByText('Add new members').click();
    await this.page.getByPlaceholder('Add members').click();
    await this.page.getByPlaceholder('Add members').fill('test100');
    await this.page.getByText('test100@demo.zextras.iotest100@demo.zextras.io').click();
    await this.page.getByRole('button', { name: 'Save' }).click();
    }

   async removeMember () {
    await this.page.getByRole('button', { name: 'Remove member' }).first().click();
    await this.page.getByTestId('modal').getByRole('button', { name: 'Remove' }).click();
    await this.page.waitForTimeout(1000);
   }

   async deleteGroup () {
    await this.page.locator('div:nth-child(2) > div:nth-child(3) > div:nth-child(7) > .Container__ContainerEl-sc-1ihvhjw-0').click();
    await this.page.getByRole('button', { name: 'Leave' }).click();
    await this.page.waitForTimeout(1000);
   }


}