import {chromium, test} from "@playwright/test";

test('Open Disney Website', async () =>{
    const browser = await chromium.launch({
        headless:false
    })
    const context = await browser.newContext()
    const page = await context.newPage() 
    await page.goto('https://disneyworld.disney.go.com')
    await browser.close()
})
