import {test, expect, Browser,firefox, chromium,Page,BrowserContext} from "@playwright/test"
import Urls from "../utils/urls"
import HomePage from "../pageObjects/home.page"

//Pages:
let homePage: HomePage

//Variables:
let browser: Browser
let context: BrowserContext
let page: Page

test.beforeAll(async() =>{
    browser = await chromium.launch({
        headless: true,
    })
    context = await browser.newContext()
    page = await context.newPage()
})

test("change Language", async() => {
    await page.goto(Urls.home)
    homePage = new HomePage(page)
    await homePage.clickLanguage()  
    await homePage.clickFirstLanguage()
    await homePage.clickContinue()
    await homePage.assertTitle()
})

