import {Page, expect} from "@playwright/test"

export default class admissionTicketsPage{
    private page: Page
    
    constructor(page: Page){
        this.page = page
    }

    //Locators:
    public get eleText(){
        const ele = this.page.getByText("Standard Theme Park Ticket").nth(0)
        return ele
    }

    public get eleContinueBtn(){
        const ele = this.page.locator("#select")
        return ele
    }

    //Actions:
    public async clickContinue(){
        let ele = this.eleContinueBtn
        await ele.click()
    }

    public async assertText(){
        let ele = this.eleText
        expect(ele).toBeVisible()
    }
}