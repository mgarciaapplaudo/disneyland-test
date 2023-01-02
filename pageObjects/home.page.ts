import {Page, expect} from "@playwright/test"

export default class HomePage{
    private page: Page
    
    constructor(page: Page){
        this.page = page
    }

    //Locators:
    eleLanguage = async () => await this.page.$("//button[contains(@class,'syndicated-language-selector__open')]")
    eleSigninBtn = async () => await this.page.$("//a[@class='syndicated-profile__container__link signIn']")
    eleLanguagesLink = async () => await this.page.$$("//div[contains(@class,'syndicated-language-selector__container__content')][1]//child::a")
    eleContinueBtn = async () => await this.page.$("//a[contains(@class,' syndicated-button syndicated-button--wdw syndicated-button--primary syndicated-button--link')]")
    eleHeaderText = async () => this.page.getByText('Celebrate Now through March 31, 2023')

    //Actions:
    public async clickLanguage(){
        const ele = await this.eleLanguage()
        await ele?.click()
        /*
        if (ele != null){
            await ele?.click()
        }else throw new Error("Element Not Found!")
        */
    }

    public async clickSignin(){
        const ele = await this.eleSigninBtn()
        if (ele != null){
            await ele?.click()
        }else throw new Error("Element Not Found!")
    }

    public async clickFirstLanguage(){
        const ele = await this.eleLanguagesLink()
        if (ele != null){
            await ele[0]?.click()
        }else throw new Error("Element Not Found!")
    }

    public async clickContinue(){
        const ele = await this.eleContinueBtn()
        if (ele != null){
            await ele?.click()
        }else throw new Error("Element Not Found!")
    }

    public async assertTitle(){
        const ele = await this.eleHeaderText()
        if (ele != null){
           expect(ele).toHaveText("Celebrate")
        }else throw new Error("Element Not Found!")
    }
}