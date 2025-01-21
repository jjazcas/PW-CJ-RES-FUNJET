import { Page } from "@playwright/test";;


export default class BookingPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    private Elements = {
        //web elements
        hotelName: "Your trip to Cancun - Cancun AND Riviera Maya",
        locatorTravelProtectionOption: "#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_ctl02_ctl02_insuranceOptions_insurancePrompt_0",
        locatorPackageUpdatedAlert: "#PackageUpdatedAlert",
        continueButton: "#summaryCartContinueBtn"
    }

    async selectTravelProtection() {
        //await this.page.waitForLoadState()

        await this.page.getByText(this.Elements.hotelName);
        await this.page.waitForTimeout(5000)
        //await this.page.locator("#MiniCartToggle").click()
        //await this.page.locator("button.clickable-card-link").click();      
        await this.page.locator(this.Elements.locatorTravelProtectionOption).click()   
        //verify the message: Your package has been updated.
        await this.page.locator(this.Elements.locatorPackageUpdatedAlert).isVisible()
        //click continue button
        await this.page.locator(this.Elements.continueButton).click()
                                              
    } 

    
}