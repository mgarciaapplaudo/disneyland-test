import {Page, expect} from "@playwright/test"

export default class standardParkTicketsPage{
    private page: Page
    
    constructor(page: Page){
        this.page = page
    }

    //Locators:
    public get eleText(){
        const ele = this.page.getByText("Standard Theme Park Ticket")
        return ele
    }

    //Actions:
    public async assertText(){
        let ele = this.eleText
        expect(ele).toBeVisible()
    }
}