import { PageManager } from '../Page Object/pageManager';
import  { test } from './baseTest';
import { expect } from '@playwright/test';


test.describe('New Todo', () => {

    test.beforeEach (async ({ pageManagerAPI}) => {
        await cleanGroups({pageManagerAPI});
    })

    test.afterEach (async ({ pageManagerAPI}) => {
        await cleanGroups({pageManagerAPI});
    })
 

test('Click files button. Create new document odt format. After this activities, new file odt format was created. ', async ({page, pageManager}) => {
    await pageManager.files.createNewDocumentOdtFormat({page});
    await expect(page.getByTestId('DisplayerHeader').getByText('1234')).toBeVisible();
    await pageManager.files.deleteDocumentOdtFormat();

})

test('Create new doc. Delete creating doc. Doc has been deleted.', async ({page, pageManager, pageManagerAPI}) => {
    await page.locator('[data-testid="icon: DriveOutline"]').click();
    await pageManagerAPI.createFilesAPI.createDocument('proverka12');

    
    
})

test('1232', async ({page, pageManager}) => {
    await page.locator('[data-testid="icon: DriveOutline"]').click();
    await pageManager.files.Buttons.NEWDropDownButton.click();
    await pageManager.files.Buttons.newDocumentButton.hover();
    await pageManager.files.Buttons.newDocumentOdtButton.click();
    await pageManager.files.EntryField.documentNameField.type('DocumentNameSuperBBB');
    await pageManager.files.Buttons.createButton.click();
    await pageManager.files.Containers.documentsContainer.locator('"DocumentNameSuperBBB"').click();
    await pageManager.files.Label.documentNameLabel.locator('"DocumentNameSuperBBB"').click({ button: 'right' });
})

test('Create group', async ({page, pageManager, pageManagerAPI}) => {
    await page.locator('[data-name="message-circle"]').click();
    const abc = await pageManagerAPI.createFilesAPI.createGroup('ASAP');
    await pageManagerAPI.createFilesAPI.kickFromGroup(abc);
    await expect(page.getByText('ASAP').first()).toBeVisible();
})

test('Kick group', async ({page, pageManager, pageManagerAPI}) => {
    await page.locator('[data-name="message-circle"]').click();
    await page.getByTestId('avatar').first().click();
    await pageManagerAPI.createFilesAPI.kickFromGroup();
    await pageManagerAPI.createFilesAPI.kickFromGroupTwo();
    await pageManagerAPI.createFilesAPI.leaveFromGroup();
})

async function cleanGroups({pageManagerAPI}) {
    const bca = await pageManagerAPI.createFilesAPI.getIdFromAllGroups();
    await Promise.all (bca.map(async (item) => {return await pageManagerAPI.createFilesAPI.deleteGroup(item); }))
}

})