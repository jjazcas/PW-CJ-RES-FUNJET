import { BrowserContext, expect, Page } from "@playwright/test";;
import { TIMEOUT } from "dns";
import { waitForDebugger } from "inspector";

export default class BookingPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    private Elements = {
        //web elements
        
    }

    async verifyNewPage() {
        //await this.page.waitForLoadState()

        await this.page.getByText("Your trip to Cancun - Cancun AND Riviera Maya")
        setTimeout(() => {
            console.log("Waited 5 seconds!");
        }, 15000);
        await this.page.click("Your trip to Cancun")
        //await this.page.click('#MiniCartToggle')                                                               
    } 

    async clickT() {
        //await this.page.locator("#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_ctl02_ctl02_insuranceOptions_insurancePrompt").click()
        //await this.page.waitForNavigation()
        //await this.page.waitForLoadState('load', {timeout: 50000});
        //await this.page.waitForURL("**/Booking/Cart")
        //await this.page.getByText("Travel Protection Plus: Full Travel Credit").click()
        await Promise.all([
            this.page.click('#MiniCartToggle'),
            this.page.waitForURL('**/Booking/Cart/Summary/',
                 { 
              waitUntil: "load" 
         }),
         ]);
    }   
}