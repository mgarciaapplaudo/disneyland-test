import {test, expect, Browser,firefox,Page,BrowserContext, chromium} from "@playwright/test"
import Urls from "../utils/urls"
import HomePage from "../pageObjects/home.page"
import MagicKingdomPage from "../pageObjects/magicKingdom.page"
import AdmissionTicketsPage from "../pageObjects/admissionTickets.page"
import StandardParkTicketsPage from "../pageObjects/standardParkTickets.page,"
import CalendarPage from "../pageObjects/calendar.page"
import * as data from "../utils/credentials.json"

//Pages:
let homePage: HomePage
let magicKingdomPage: MagicKingdomPage
let admissionTicketsPage: AdmissionTicketsPage
let standardParkTicketsPage: StandardParkTicketsPage
let calendarPage: CalendarPage

//Variables:
let browser: Browser
let context: BrowserContext
let page: Page

test.beforeAll(async () => {
    browser = await chromium.launch({
        headless: false,
    })
    context = await browser.newContext()
    page = await context.newPage()
    await page.goto(Urls.home)
    homePage = new HomePage(page)
})

test("Purchase Tickets for Magic Kingdom", async() => {
    await test.step("Change Language", async() =>{
        await homePage.clickLanguage()  
        await homePage.clickFirstLanguage()
        await homePage.clickContinue()
        await homePage.assertTitle()
    })
    
    await test.step("Sign In", async()=>{
        await homePage.clickSignIn()
        await homePage.logIn(data.email, data.pass)
        await homePage.clickSignIn2()
        await homePage.assertWelcome()
    })
    
    await test.step("Navigate to Magic Kingdom Park", async()=>{
        await homePage.mouseOver()
        await homePage.clickMagicKingdom()
        await page.waitForSelector("//div[contains(@class,'overtitle ng-star-inserted')]", {timeout: 30000})
        expect(page).toHaveURL("https://disneyworld.disney.go.com/destinations/magic-kingdom/")
        magicKingdomPage = new MagicKingdomPage(page)
        await magicKingdomPage.clickSelectTickets()
    })

    await test.step("Admissions Tickets", async()=>{
        expect(page).toHaveURL("https://disneyworld.disney.go.com/admission/tickets/")
        admissionTicketsPage = new AdmissionTicketsPage(page)
        await admissionTicketsPage.assertText()
        await admissionTicketsPage.clickContinue()
    })
    
    await test.step("Standard Theme Park Tickets", async()=>{
        expect(page).toHaveURL("https://disneyworld.disney.go.com/admission/tickets/theme-parks/")
        standardParkTicketsPage = new StandardParkTicketsPage(page)
        await standardParkTicketsPage.assertText()
        await standardParkTicketsPage.viewCalendar()
    })

    await test.step("Check Calendar Reservation Availability", async()=>{
        expect(page).toHaveURL("https://disneyworld.disney.go.com/availability-calendar/?segments=tickets,resort&defaultSegment=tickets")
        calendarPage = new CalendarPage(page)
        await calendarPage.assertDate()
    })
    
})