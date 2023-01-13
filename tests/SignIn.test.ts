import {test} from "@playwright/test"
import Urls from "../utils/urls"
import HomePage from "../pageObjects/home.page"
import * as data from "../utils/credentials.json"

//Pages:
let homePage: HomePage

test.describe('Signin Workflow', () =>{
    test('DIS-T22. user is able to signin', async ({browser})=>{
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto(Urls.home)
        homePage = new HomePage(page)
        //Change Language:
        await homePage.clickLanguage()  
        await homePage.clickFirstLanguage()
        await homePage.clickContinue()
        await homePage.assertTitle()
        //Signin:
        await homePage.clickSignIn()
        await homePage.logIn(data.email, data.pass)
        await homePage.clickSignIn2()
        await homePage.assertWelcome()
        //Store State:
        await context.storageState({path: "auth.json"})
    })
})
