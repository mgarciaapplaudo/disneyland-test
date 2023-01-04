import {Page, expect} from "@playwright/test"

export default class calendarPage{
    private page: Page
    
    constructor(page: Page){
        this.page = page
    }

    //Locators:
    public get eleText(){
        const ele = this.page.getByText("Standard Theme Park Ticket")
        return ele
    }

    public get eleNumber(){
        const ele = this.page.getByText('8')
        return ele
    }

    //Actions:
    public async assertText(){
        let ele = this.eleText
        expect(ele).toBeVisible()
    }

    public async assertDate(){
        let ele = this.eleNumber
        expect(ele).toBeVisible()
    }
}