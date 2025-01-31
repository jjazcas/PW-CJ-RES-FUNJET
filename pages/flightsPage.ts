import { expect, Page } from "@playwright/test";;


export default class FlightsPage {
    constructor(private page: Page) {}

    private Elements = {
        locatorAmericanAir: "#airMatrix_X-AA",
        locatorSelectFlight: "#toggleFareOptions_0",
        locatorMainCabinFlex: "#airSelectionOption_0_2",
        flightsLabel: "Filter flights by carrier and/or number of stops",
        locatorButtonDepartureFlight: "[name=\"airComponentBtn_0\"]",
        locatorButtonReturnFlight: "[name=\"0airComponentBtn_0\"]"

       
    }

    async selectAirline() {
     
        //Select the airline
        (await this.page.waitForSelector(this.Elements.locatorAmericanAir)).click()
    
    }

    async selectDepartureFlight() {
     
        //Select the airline
        await this.page.getByText(this.Elements.flightsLabel);
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.Elements.locatorSelectFlight).click()
        await this.page.locator(this.Elements.locatorMainCabinFlex).check()
        // Select the departure flight
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.Elements.locatorButtonDepartureFlight).locator('visible=true').click();
         
    }

    async selectReturnFlight() {

         // Select the departure flight
         await this.page.locator(this.Elements.locatorSelectFlight).click()
         await this.page.locator(this.Elements.locatorMainCabinFlex).check()
         await this.page.locator(this.Elements.locatorButtonDepartureFlight).locator('visible=true').click();

    }



async selectAirlineadad() {
     
    const [newtab] = await Promise.all([
    this.page.waitForEvent("popup"),
    this.page.locator(this.Elements.locatorAmericanAir).click() 
    ]);
    return newtab;

}
}