import { Page } from "@playwright/test";

export default class PaymentPage {

    constructor(private page: Page) {}

    private Elements = {
        paymentLabel: "Payment Information",
        locatorcheckOutTab: "Checkout"
    }


    async verifyPaymentPage() {
        // Select room
        await this.page.getByText(this.Elements.paymentLabel).isVisible()
        await this.page.getByText(this.Elements.locatorcheckOutTab).isVisible()
        
    }
}