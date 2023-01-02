import {test, expect, Browser,firefox,Page,BrowserContext} from "@playwright/test"
import Urls from "../utils/urls"
import HomePage from "../pageObjects/home.page"
import * as data from "../utils/credentials.json"

//Pages:
let homePage: HomePage

//Variables:
let browser: Browser
let context: BrowserContext
let page: Page

test.beforeAll(async() =>{
    browser = await firefox.launch({
        headless: false,
    })
    context = await browser.newContext()
    page = await context.newPage()
    await page.goto(Urls.home)
    homePage = new HomePage(page)
})

test("Sign in", async() => {
    await test.step("Change Language", async() =>{
        await page.waitForLoadState()
        await homePage.clickLanguage()  
        await homePage.clickFirstLanguage()
        await homePage.clickContinue()
        await homePage.assertTitle()
    })
    await test.step("SignIn", async()=>{
        await homePage.clickSignIn()
        await homePage.logIn(data.email, data.pass)
        await homePage.clickSignIn2()
        await homePage.assertWelcome()
    })
})