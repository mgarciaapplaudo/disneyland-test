import {Page, expect} from "@playwright/test"

export default class HomePage{
    private page: Page

    constructor(page: Page){
        this.page = page
    }

    //Locators:
    elements = {
        eleLanguage: () => this.page.locator("//button[contains(@class,'syndicated-language-selector__open')]"),
        eleContinueButton: () => this.page.locator("//a[contains(@class,' syndicated-button syndicated-button--wdw syndicated-button--primary syndicated-button--link')]"),
        eleLanguagesLink: () => this.page.locator("//div[contains(@class,'syndicated-language-selector__container__content')][1]//child::a").first(),
        eleHeaderText: () => this.page.getByText("'Celebrate Now through March 31, 2023'"),
        eleSignInBtn: () => this.page.locator("//a[contains(text(),'Sign In or Create Account')]").first(),
        eleEmailInput: () => this.page.frameLocator("#disneyid-iframe").locator("//input[contains(@placeholder,'Username or Email Address')]"),
        elePassInput: () => this.page.frameLocator("#disneyid-iframe").locator("//input[contains(@placeholder,'Password')]"),
        eleSignInBtn2: () => this.page.frameLocator("#disneyid-iframe").locator("//button[contains(@class,'btn btn-primary btn-submit ng-isolate-scope')]"),
        eleWelcomeLink: () => this.page.getByText("Welcome, Quality!"),
        eleParksAndTickets: () => this.page.locator("//div[contains(text(),'Parks & Tickets')]"),
        eleMagicKingdomPark: () => this.page.locator("//div[contains(text(),'Magic Kingdom')]").first(),
    }

    //private eleLanguage = "//button[contains(@class,'syndicated-language-selector__open')]"
    //private eleContinueButton = "//a[contains(@class,' syndicated-button syndicated-button--wdw syndicated-button--primary syndicated-button--link')]"
    //private eleLanguagesLink = "//div[contains(@class,'syndicated-language-selector__container__content')][1]//child::a"
    // private eleHeaderText = 'Celebrate Now through March 31, 2023'
    // private eleSignInBtn = "//a[contains(text(),'Sign In or Create Account')]"
    // private eleEmailInput = "//input[contains(@placeholder,'Username or Email Address')]"
    // private elePassInput = "//input[contains(@placeholder,'Password')]"
    // private eleSignInBtn2 = "//button[contains(@class,'btn btn-primary btn-submit ng-isolate-scope')]"
    // private eleWelcomeLink = "Welcome, Quality!"
    // private eleParksAndTickets = "//div[contains(text(),'Parks & Tickets')]"
    // private eleMagicKingdomPark = "//div[contains(text(),'Magic Kingdom')]"

    //Actions:

    //Language:
    public async clickLanguage(){
        let ele = this.elements.eleLanguage()
        await ele.click()
    }

    public async clickFirstLanguage(){
        const ele = this.elements.eleLanguagesLink()
        expect(ele).toBeVisible()
        await ele.click()
    }

    public async clickContinue(){
        const ele = this.elements.eleContinueButton()
        return await ele.click()
    }
    
    public async assertTitle(){
        const ele = this.elements.eleHeaderText()
        expect(ele).toHaveText("Celebrate Now through March 31, 2023")
    }

    //SignIn:
    public async clickSignIn(){
        const ele = this.elements.eleSignInBtn()
        expect(ele).toBeVisible()
        await ele.click()
    }

    public async logIn(email: string, pass: string){
        const Email = this.elements.eleEmailInput()
        const Pass = this.elements.elePassInput()
        await Email.fill(email)
        await Pass.fill(pass)
    }

    public async clickSignIn2(){
        const ele = this.elements.eleSignInBtn2()
        await ele.click()
    }

    public async assertWelcome(){
        const ele = this.elements.eleWelcomeLink()
        expect(ele)
    }

    //Navigate to Magic Kingdom Park:
    public async mouseOver(){
        const ele = this.elements.eleParksAndTickets()
        await ele.hover()
    }

    public async clickMagicKingdom(){
        const ele = this.elements.eleMagicKingdomPark()
        //await this.page.waitForSelector("//div[@class = 'syndicated-flyout syndicated-flyout--parksAndTickets']")
        await ele.click({force: true})
    }
}