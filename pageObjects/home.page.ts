import {Page, expect} from "@playwright/test"

export default class HomePage{
    private page: Page
    
    constructor(page: Page){
        this.page = page
    }

    //Locators:
    public get  eleLanguage(){
        const ele = this.page.locator("//button[contains(@class,'syndicated-language-selector__open')]")
        return ele
    }

    public get eleContinueBtn(){
        const ele = this.page.locator("//a[contains(@class,' syndicated-button syndicated-button--wdw syndicated-button--primary syndicated-button--link')]")
        return ele
    }

    public get eleLanguagesLink(){
        const ele = this.page.locator("//div[contains(@class,'syndicated-language-selector__container__content')][1]//child::a").first()
        return ele
    }

    public get eleHeaderText(){
        const ele = this.page.getByText('Celebrate Now through March 31, 2023')
        return ele
    }

    public get eleSignInBtn(){
        const ele = this.page.locator("//a[contains(text(),'Sign In or Create Account')]").first()
        return ele
    }

    public get eleEmailInput(){
        const ele = this.page.frameLocator("#disneyid-iframe").locator("//input[contains(@placeholder,'Username or Email Address')]")
        return ele
    }

    public get elePassInput(){
        const ele =  this.page.frameLocator("#disneyid-iframe").locator("//input[contains(@placeholder,'Password')]")
        return ele 
    }
    
    public get eleSignInBtn2(){
        const ele = this.page.frameLocator("#disneyid-iframe").locator("//button[contains(@class,'btn btn-primary btn-submit ng-isolate-scope')]")
        return ele
    }

    public get eleWelcomeLink(){
        const ele = this.page.getByText("Welcome, Quality!")
        return ele
    }

    public get eleParksAndTickets(){
        const ele = this.page.locator("//div[contains(text(),'Parks & Tickets')]")
        return ele
    }

    public get eleMagicKingdomPark(){
        const ele = this.page.locator("//div[contains(text(),'Magic Kingdom')]").nth(0)
        return ele
    }

    //Actions:

    //Language:
    public async clickLanguage(){
        let ele = this.eleLanguage
        await ele.click()
    }

    public async clickFirstLanguage(){
        const ele = this.eleLanguagesLink
        expect(ele).toBeVisible()
        await ele.click()
    }

    public async clickContinue(){
        const ele = this.eleContinueBtn
        await ele.click()
    }
    
    public async assertTitle(){
        const ele = this.eleHeaderText
        expect(ele).toHaveText("Celebrate Now through March 31, 2023")
    }

    //SignIn:
    public async clickSignIn(){
        const ele = this.eleSignInBtn
        expect(ele).toBeVisible()
        await ele.click()
    }

    public async logIn(email: string, pass: string){
        const Email= await this.eleEmailInput
        const Pass = await this.elePassInput
        await Email.fill(email)
        await Pass.fill(pass)
    }

    public async clickSignIn2(){
        const ele = this.eleSignInBtn2
        await ele?.click()
    }

    public async assertWelcome(){
        const ele = this.eleWelcomeLink
        expect(ele)
    }

    //Navigate to Magic Kingdom Park:
    public async mouseOver(){
        const ele = this.eleParksAndTickets
        await ele.hover()
    }

    public async clickMagicKingdom(){
        const ele = this.eleMagicKingdomPark
        //await this.page.waitForSelector("//div[@class = 'syndicated-flyout syndicated-flyout--parksAndTickets']")
        await ele.nth(0).click({force: true})
    }
}