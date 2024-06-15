import { PageManagerAPI } from '../API Object/PageManagerAPI';
import  { test } from './baseTest';
import { expect } from '@playwright/test';


test.describe('New Todo', () => {

test.beforeEach (async ({page, pageManager}) => {
    await pageManager.carbonio.Buttons.chatsButton.click(); 
})

test.afterEach (async ({page, pageManager}) => {
    await pageManager.chats.removeMember();
    await pageManager.chats.removeMember();
    await pageManager.chats.deleteGroup();
} )


test ('Click chats button. Click button create group, set a name for the group and add 2 members. Group was created.', async ({page, pageManager}) => {  
    await page.waitForTimeout(1000);
    await pageManager.chats.createNewGroup();
    await expect(page.getByText('Test Group').first()).toBeVisible();
})

test ('Create new group. Delete members from this group. Delete group. Group was deleted.', async ({page, pageManager}) => {
    await page.waitForTimeout(500);
    await pageManager.chats.createNewGroup();
    await pageManager.chats.removeMember();
    await pageManager.chats.removeMember();
    await pageManager.chats.deleteGroup();
    await expect(page.getByText('Test Group').first()).toBeHidden();
})

test ('Create new group. Add new member. Member was been added.', async ({page, pageManager}) => {
    await page.waitForTimeout(500);
    await pageManager.chats.createNewGвroup();
    await pageManager.chats.addMember();
    await expect(page.getByTitle('You have invited')).toBeVisible();
    await expect(page.getByText('test100@demo.zextras.io', { exact: true })).toBeVisible();
    await pageManager.chats.removeMember();
})



})