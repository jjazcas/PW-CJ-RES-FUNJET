import { expect, Page } from "@playwright/test";;


export default class HomePage {
    constructor(private page: Page) {}

    private Elements = {

        searchProgressField: "#searchProgressField",
        apiDestinations: "/Search/RestoolConfiguration.asmx/GetDestinationMarkets",
        destinationSelector: "#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_SearchComponents_scc_rt_Destination_SelectizeInput",
        citySelected: "#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_SearchComponents_scc_rt_Destination_CUN",
        locatorCheckInDate: "#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_SearchComponents_scc_rt_departure",
        locatorRoomsField: '#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_SearchComponents_scc_rt_passengers_numrooms',
        locatorChildrenField: '#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_SearchComponents_scc_rt_passengers_pr_ctl00_pi_children',
        locatorAdultsField: '#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_SearchComponents_scc_rt_passengers_pr_ctl00_pi_adults',
        searchButton: '#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_SearchComponents_scc_rt_submit',
        locatorWaitModal1: "#WaitScreenModalDescription"
    }

    private Variables = {
        radioButtonHotelOnly: "Hotel Only",
        checkInDate: '03/15/2025',
        numRooms: 1,

    }

    async clickHotelOnly() {
        await this.page.getByRole('radio', { name: this.Variables.radioButtonHotelOnly }).check({ force: true });

    }

    async goingTo() {
        (await this.page.waitForSelector(this.Elements.searchProgressField)).isHidden()

        // wait for the API lo load the Destination information
        const responseDestination = await this.page.waitForResponse((response) => response.url().includes(this.Elements.apiDestinations));
    
        // Assert the response status and body
        const responseBody = await responseDestination.json();
        expect(responseDestination.status()).toBe(200);

        //Select the Destination
        await this.page.locator(this.Elements.destinationSelector).click()
     
        await this.page.locator(this.Elements.destinationSelector).hover()
        
        await this.page.locator(this.Elements.citySelected).click()
    }

    async selectCheckInDate(){
        // Check In Date
        await this.page.fill(this.Elements.locatorCheckInDate, this.Variables.checkInDate)
    }

    async selectRooms(){
         //Rooms
         if (this.Variables.numRooms == 1) {

            const dropDownRooms = this.page.locator(this.Elements.locatorRoomsField)
            await dropDownRooms.click()

        }
        
    }

    async selectAdults(){
        //Adults
        const dropDownAdults = this.page.locator(this.Elements.locatorAdultsField)
        await dropDownAdults.click()
        
    }

    async selectChildren(){
        //Children
        const dropDownChildrens = this.page.locator(this.Elements.locatorChildrenField)
        await dropDownChildrens.click()
        
    }
    async clickSearch(){
        //Search button
        const searchButton = this.page.locator(this.Elements.searchButton)
        await searchButton.click();
    }

    async waitScreen1(){
        //loading wait screen modal
        await this.page.waitForSelector(this.Elements.locatorWaitModal1)
    }

    
}