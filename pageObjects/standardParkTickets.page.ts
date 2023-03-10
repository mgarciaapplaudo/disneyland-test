import {Page, expect} from "@playwright/test"

export default class standardParkTicketsPage{
    private page: Page
    
    constructor(page: Page){
        this.page = page
    }

    //Locators:
    public get eleText(){
        const ele = this.page.getByText("Standard Theme Park Ticket").nth(0)
        return ele
    }

    public get eleViewCalendar(){
        const ele = this.page.getByText("View Calendar")
        return ele
    }

    public get eleRadioBtn2(){
        const ele = this.page.locator("#radio-2")
        return ele
    }

    //Actions:
    public async assertText(){
        let ele = this.eleText
        expect(ele).toBeVisible()
    }

    public async viewCalendar(){
        let ele = this.eleViewCalendar
        ele.click()
    }

    public async click2Days(){
        let ele = this.eleRadioBtn2
        ele.click()
        this.page.pause()
    }    
}