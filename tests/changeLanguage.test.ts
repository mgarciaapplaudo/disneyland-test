import {test,Browser,BrowserContext,Page} from "@playwright/test"
import Urls from "../utils/urls"
import HomePage from "../pageObjects/home.page"

//Pages:
let homePage: HomePage

test.describe('Signin Workflow', () =>{
    test('DIS-T22. user is hable to signin', async ({browser})=>{
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto(Urls.home)
        homePage = new HomePage(page)
        //Change Language:
        await page.waitForLoadState()
        await homePage.clickLanguage()  
        await homePage.clickFirstLanguage()
        await homePage.clickContinue()
        await homePage.assertTitle()
    })
})



