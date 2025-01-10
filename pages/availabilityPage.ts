import { BrowserContext, expect, Page } from "@playwright/test";;
import { TIMEOUT } from "dns";

export default class AvailbilityPage {
    constructor(private page: Page) {}

    private Elements = {

        selectedHotel : "#lnkHotelTileClick0",
        
    }


    async selectHotel() {
     
            const [newtab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.locator(this.Elements.selectedHotel).click() 
            ]);
            return newtab;
        
    }
}