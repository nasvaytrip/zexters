import { test as base } from '@playwright/test'
import { PageManager } from '../Page Object/pageManager'
import { PageManagerAPI } from '../API Object/PageManagerAPI';

export const test = base.extend<{pageManager: PageManager, pageManagerAPI : PageManagerAPI}>({

    pageManager: async ({page}, use) => {
        const pageManager = new PageManager(page);
        await use(pageManager);
    },

     pageManagerAPI: async ({page}, use) => {
        const pageManagerAPI = new PageManagerAPI(page);
        await use(pageManagerAPI);
    },

    page: async ({page}, use) => {
    await page.goto('https://gb-auto-r-srv2.demo.zextras.io/static/login/');
    await page.locator('[data-testid="username"]').click();
    await page.locator('[data-testid="username"]').type('test174')
    await page.locator('[data-testid="password"]').click();
    await page.locator('[data-testid="password"]').type('812feee9-c08e-4ec5-9734-07f6e7a6b096');
    await page.locator('[data-testid="login"]').click();
    await page.waitForTimeout(5000);
    await use(page);
    },


})

