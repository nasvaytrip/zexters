import { PageManager } from '../Page Object/pageManager';
import  { test } from './baseTest';
import { expect } from '@playwright/test';


test.describe('New Todo', () => {
 

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
    await pageManagerAPI.createFilesAPI.createGroup('TESTGROUP');
    await pageManagerAPI.createFilesAPI.kickFromGroup();
})
test('Kick group', async ({page, pageManager, pageManagerAPI}) => {
    await page.locator('[data-name="message-circle"]').click();
    await page.getByTestId('avatar').first().click();
    await pageManagerAPI.createFilesAPI.kickFromGroup();
    await pageManagerAPI.createFilesAPI.kickFromGroupTwo();
    await pageManagerAPI.createFilesAPI.leaveFromGroup();
})


})