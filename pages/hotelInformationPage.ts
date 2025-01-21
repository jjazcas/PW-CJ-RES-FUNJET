import { Page } from "@playwright/test";

import BookingPage from '../pages/bookingPage'; 

export default class HotelInformationPage {

    constructor(private page: Page) {}

    private Elements = {

        locatorSelectRoomButton : "#selectButton",
        locatorSelectAvalRoomButton: "[name=\"hotelComponentBtn\"]"
        
    }

    async clickSelectHotel() {
        // Select room
        await this.page.locator(this.Elements.locatorSelectRoomButton).click() 
        
    }
     
    async  clickSelectAvalHotel(): Promise<BookingPage> {
   
        await this.page.locator(this.Elements.locatorSelectAvalRoomButton).first().click()
        return new BookingPage(this.page);
  
    }
           

    

    
            
            
         
            
            

            

    /* const pagePromise2 = newPage.context().waitForEvent('page');
    // Select Available Room
    await newPage.locator("[name=\"hotelComponentBtn\"]").first().click()

   
        await this.page.locator(this.Elements.selectedHotel).click()

    */
}