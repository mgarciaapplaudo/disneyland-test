import {Page, expect} from "@playwright/test"

export default class HomePage{
    private page: Page
    
    constructor(page: Page){
        this.page = page
    }

    //Locators:
    eleLanguage = async () => await this.page.$("//button[contains(@class,'syndicated-language-selector__open')]")
    eleLanguagesLink = async () => await this.page.$$("//div[contains(@class,'syndicated-language-selector__container__content')][1]//child::a")
    eleContinueBtn = async () => await this.page.$("//a[contains(@class,' syndicated-button syndicated-button--wdw syndicated-button--primary syndicated-button--link')]")
    eleHeaderText = async () => this.page.getByText('Celebrate Now through March 31, 2023')
    eleSignInBtn = async () => await this.page.$("//a[contains(text(),'Sign In or Create Account')]")[0]
    eleEmailInput = async () => await this.page.$("//input[contains(@placeholder,'Username or Email Address')]")
    elePassInput = async () => await this.page.$("//input[contains(@placeholder,'Password')]")
    eleSignInBtn2 = async () => await this.page.$("//button[contains(@class,'btn btn-primary btn-submit ng-isolate-scope')]") 
    eleWelcomeLink = async () => this.page.getByText("Welcome")
    //Actions:

    //Language:
    public async clickLanguage(){
        const ele = await this.eleLanguage()
        await ele?.click()
    }

    public async clickFirstLanguage(){
        const ele = await this.eleLanguagesLink()
        await ele[0]?.click()
    }

    public async clickContinue(){
        const ele = await this.eleContinueBtn()
        await ele?.click()     
    }
    
    public async assertTitle(){
        const ele = await this.eleHeaderText()
        expect(ele).toHaveText("Celebrate Now through March 31,2023")
    }

    //SignIn:
    public async clickSignIn(){
        const ele = await this.eleSignInBtn()
        await ele?.click()
    }

    public async logIn(email: string, pass: string){
        const Email= await this.eleEmailInput()
        const Pass = await this.elePassInput()
        await Email?.fill(email)
        await Pass?.fill(pass)
    }

    public async clickSignIn2(){
        const ele = await this.eleSignInBtn2()
        await ele?.click()
    }

    public async assertWelcome(){
        const ele = await this.eleWelcomeLink()
        expect(ele).toHaveText("Quality!")
    }
}