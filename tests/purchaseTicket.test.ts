import {test, expect, Browser,firefox,Page,BrowserContext, chromium} from "@playwright/test"
import Urls from "../utils/urls"
import HomePage from "../pageObjects/home.page"
import MagicKingdomPage from "../pageObjects/magicKingdom.page"
import AdmissionTicketsPage from "../pageObjects/admissionTickets.page"
import StandardParkTicketsPage from "../pageObjects/standardParkTickets.page"
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
        headless: true,
    })
    context = await browser.newContext({storageState: "./auth.json"})
    page = await context.newPage()
    await page.goto(Urls.home)
    homePage = new HomePage(page)
})

test("Purchase Tickets for Magic Kingdom", async() => {
    await test.step("Navigate to Magic Kingdom Park", async()=>{
        await homePage.mouseOver()
        await homePage.clickMagicKingdom()
        //await page.waitForTimeout(5000)
        expect(page).toHaveURL("https://disneyworld.disney.go.com/destinations/magic-kingdom/")
    })

    await test.step("Admissions Tickets", async()=>{
        magicKingdomPage = new MagicKingdomPage(page)
        await magicKingdomPage.clickSelectTickets()
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
        //await calendarPage.searchAvailableDate()
    })
    
})