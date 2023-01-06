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
        headless: false,
    })
    context = await browser.newContext()
    page = await context.newPage()
    await page.goto("https://disneyworld.disney.go.com/availability-calendar/?segments=tickets,resort&defaultSegment=tickets")
    calendarPage = new CalendarPage(page)
})

test("Calendar", async() => {
    expect(page).toHaveURL("https://disneyworld.disney.go.com/availability-calendar/?segments=tickets,resort&defaultSegment=tickets")
})