import  { test } from './baseTest';
import { PageManager } from '../Page Object/pageManager';
import { expect } from '@playwright/test';
import { PageManagerAPI } from '../API Object/PageManagerAPI';

test.describe('New Todo', () => {
 
test('@mails Click files button.', async ({page, pageManagerAPI}) => {
    await page.locator('[data-name="email"]').click();
    await pageManagerAPI.sendMailAPI.sendMail('Test Subject');
    await expect(page.getByText('Test Subject').first()).toBeVisible();
})

test('@mails Delete ', async ({page, pageManager}) => {
    await page.locator('[data-name="email"]').click();
    
}) 

})