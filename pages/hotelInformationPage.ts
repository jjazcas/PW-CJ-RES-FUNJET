import { Page } from "@playwright/test";

import BookingPage from '../pages/bookingPage'; 
import FlightsPage from "./flightsPage";

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
     
    async  clickSelectAvalHotelOnly(): Promise<BookingPage> {
   
        await this.page.locator(this.Elements.locatorSelectAvalRoomButton).first().click()
        return new BookingPage(this.page);
  
    }

    async  clickSelectAvalFlightHotel(): Promise<FlightsPage> {
   
        await this.page.locator(this.Elements.locatorSelectAvalRoomButton).first().click()
        return new FlightsPage(this.page);
  
    }
           

   
}