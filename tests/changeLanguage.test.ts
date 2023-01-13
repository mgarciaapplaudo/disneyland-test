import {test,Browser,BrowserContext,Page} from "@playwright/test"
import Urls from "../utils/urls"
import HomePage from "../pageObjects/home.page"

//Pages:
let homePage: HomePage

test.describe('Change language workflow', () =>{
    test('DIS-T61. user is able to change the website language to United States (English)', async ({browser})=>{
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto(Urls.home)
        homePage = new HomePage(page)
        //Change Language:
        await homePage.clickLanguage()  
        await homePage.clickFirstLanguage()
        await homePage.clickContinue()
        await homePage.assertTitle()
    })
})



