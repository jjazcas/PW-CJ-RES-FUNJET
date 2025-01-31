import { Page } from "@playwright/test";

export default class TravelersInformationPage {

    constructor(private page: Page) {}

    private Elements = {

        locatorFirstNameTraveler1: "#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl00_pi_FirstName",
        locatorLastNameTraveler1: "#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl00_pi_LastName",
        locatorPhoneNumber: "#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl00_pi_LeadPassenger_PhoneNo",
        locatorEmail: "#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl00_pi_LeadPassenger_EmailAddress",
        locatorFirstNameTraveler2 : "#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl01_pi_FirstName",
        locatorLastNameTraveler2: "#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl01_pi_LastName",
        locatorButtonContinue: "#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_submit",
        locatorGender: "#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl00_pi_Gender_0"
    }

    private Variables = {
        traveler1FirstName: "Jaz",
        traveler1LastName: "Castro",
        traveler2FirstName: "Nata",
        traveler2LastName: "Castro",
        phoneNumber: '4149343005',
        email: "jahel.castro@triseptsolutions.com",
        gender: "Female"

    }

    async travelersHotelForm() {
        // First Traveler Data
        await this.page.locator(this.Elements.locatorFirstNameTraveler1).fill(this.Variables.traveler1FirstName)
        await this.page.locator(this.Elements.locatorLastNameTraveler1).fill(this.Variables.traveler1LastName)
        await this.page.locator(this.Elements.locatorPhoneNumber).fill(this.Variables.phoneNumber)
        await this.page.locator(this.Elements.locatorEmail).fill(this.Variables.email)

        //Second Traveler Data
        await this.page.locator(this.Elements.locatorFirstNameTraveler2).fill(this.Variables.traveler2FirstName)
        await this.page.locator(this.Elements.locatorLastNameTraveler2).fill(this.Variables.traveler2LastName)
        await this.page.locator(this.Elements.locatorButtonContinue).click()
    }

    async travelersHotelFlightForm() {
        // First Traveler Data
        await this.page.locator(this.Elements.locatorFirstNameTraveler1).fill(this.Variables.traveler1FirstName)
        await this.page.locator(this.Elements.locatorLastNameTraveler1).fill(this.Variables.traveler1LastName)
        await this.page.locator(this.Elements.locatorGender).check()
        //Date of Birth
        const dobMonth1 = this.page.locator("#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl00_pi_ctl07_MonthDropDown")
        await dobMonth1.selectOption({value: '2'})
        const dobday1 = this.page.locator("#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl00_pi_ctl07_DayDropDown")
        await dobday1.selectOption({value: '9'})
        const dobyear1 = this.page.locator("#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl00_pi_ctl07_YearDropDown")
        await dobyear1.selectOption({value: '1990'})
        await this.page.locator(this.Elements.locatorPhoneNumber).fill(this.Variables.phoneNumber)
        await this.page.locator(this.Elements.locatorEmail).fill(this.Variables.email)

        //Second Traveler
        await this.page.locator(this.Elements.locatorFirstNameTraveler2).fill(this.Variables.traveler2FirstName)
        await this.page.locator(this.Elements.locatorLastNameTraveler2).fill(this.Variables.traveler2LastName)
        
        await this.page.locator("#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl01_pi_Gender_0").check()
        
        //Date of Birth
        const dobMonth2 = this.page.locator("#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl01_pi_ctl07_MonthDropDown")
        await dobMonth2.selectOption({value: '2'})
        const dobday2 = this.page.locator("#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl01_pi_ctl07_DayDropDown")
        await dobday2.selectOption({value: '9'})
        const dobyear2 = this.page.locator("#ctl00_ctl01_ContentPlaceHolder_ContentPlaceHolder_TravelerInfotool_TravelersInput_RptTravelers_ctl00_TravelerInput_pr_ctl01_pi_ctl07_YearDropDown")
        await dobyear2.selectOption({value: '1992'})
        await this.page.locator(this.Elements.locatorButtonContinue).click()
    }
     
}


    