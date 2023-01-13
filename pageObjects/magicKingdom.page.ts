import {Page, expect} from "@playwright/test"

export default class magicKingdomPage{
    private page: Page
    
    constructor(page: Page){
        this.page = page
    }

    //Locators:
    public get eleSelectTicketsBtn(){
        const ele = this.page.locator("//a[contains(text(),'Select Tickets')]")
        return ele
    }

    //Actions:
    public async clickSelectTickets(){
        let ele = this.eleSelectTicketsBtn
        await ele.click()
    }
}