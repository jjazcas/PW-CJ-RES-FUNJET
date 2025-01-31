import { test, expect } from '@playwright/test';
import HomePage from "../pages/homePage";
import AvailbilityPage from '../pages/availabilityPage';
import HotelInformationPage from '../pages/hotelInformationPage';
import BookingPage from '../pages/bookingPage';
import TravelerInformationPage from '../pages/travelersInfoPage';
import PaymentPage from '../pages/paymentPage';
import FlightsPage from '../pages/flightsPage';


test("End to End - Test Hotel Only Search", async({page}) => {

    const home = new HomePage(page)
    const availiabilityPage = new AvailbilityPage(page)
    let bookingPage: BookingPage
    
 

    await test.step("Click on hotel only", async ()  => {
        await page.goto("/");
        await home.clickHotelOnly();
    })

    await test.step("Select destination", async ()  => {
        await home.goingTo();
    })

    await test.step("Select check In Date", async ()  => {
        await home.selectCheckInDate()
    })

    await test.step("Select Rooms search", async ()  => {
        await home.selectRooms();
    })

    await test.step("Select Adults", async ()  => {
        await home.selectAdults();
    })

    await test.step("Select Children", async ()  => {
        await home.selectChildren();
    })

    await test.step("Click on Search Button", async ()  => {
        await home.clickSearch()
    })

    const newTab = await test.step("Select Hotel", async ()  => {
        return await availiabilityPage.selectHotel()
    })

    await test.step("Select Room Category", async ()  => {
        const hotelInformationPage = new HotelInformationPage(newTab)
        await hotelInformationPage.clickSelectHotel()
        bookingPage = await hotelInformationPage.clickSelectAvalHotelOnly()
        await bookingPage.selectTravelProtection()
       
    })
    await test.step("Fill travelers information", async ()  => {
        const travelerInformationPage = new TravelerInformationPage(newTab)
        await travelerInformationPage.travelersHotelForm()
    })

    await test.step("Verify Payment Page", async ()  => {
        const paymentPage = new PaymentPage(newTab)
        await paymentPage.verifyPaymentPage()
    })
})

test("End to End - Test Flight + Hotel Search", async({page}) => {
    const home = new HomePage(page)
    const availiabilityPage = new AvailbilityPage(page)
    let flightsPage: FlightsPage

    await test.step("Click on hotel only", async ()  => {
        await page.goto("/");
       
    })

    await test.step("Select destination", async ()  => {
        await home.flightHotelSearch()
    })
    await test.step("Select check In Date", async ()  => {
        await home.selectDates()
    })

    await test.step("Select Rooms search", async ()  => {
        await home.selectRooms()
    })

    await test.step("Select Adults", async ()  => {
        await home.selectAdults()
    })

    await test.step("Select Children", async ()  => {
        await home.selectChildren()
    })

    await test.step("Click on Search Button", async ()  => {
        await home.clickSearch()
    })

    const newTab = await test.step("Select Hotel", async ()  => {
        return await availiabilityPage.selectHotel()
    })

    await test.step("Select Room Category and departure flight", async ()  => {
        const hotelInformationPage = new HotelInformationPage(newTab)
        await hotelInformationPage.clickSelectHotel()
        flightsPage = await hotelInformationPage.clickSelectAvalFlightHotel();
        await flightsPage.selectAirline()
        await flightsPage.selectDepartureFlight()
        
       
    })

    await test.step("Select Room Category and departure flight", async ()  => {
        await flightsPage.selectReturnFlight()
    })

    await test.step("Select Travel Protection", async ()  => {
        const bookingPage = new BookingPage(newTab)
        await bookingPage.selectTravelProtection()
    })
    await test.step("Fill travelers information", async ()  => {
        const travelerInformationPage = new TravelerInformationPage(newTab)
        await travelerInformationPage.travelersHotelFlightForm()
    })

    await test.step("Verify Payment Page", async ()  => {
        const paymentPage = new PaymentPage(newTab)
        await paymentPage.verifyPaymentPage()
    })

    await test.step("Verify Payment Page", async ()  => {
        const paymentPage = new PaymentPage(newTab)
        await paymentPage.verifyPaymentPage()
    })

})