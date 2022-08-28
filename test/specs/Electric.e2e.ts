import HomePage from "../pageobjects/Home.page";
import ElectricPage from "../pageobjects/Electric.page";
import { XC40Labels } from "../constants/XC40Recharge";

describe('Open XC40 Recharge', () => {
    before(async () => {
        HomePage.open();
        HomePage.acceptCookies();
    });

    it('Open our cars menu', async () => {
        (await ElectricPage.OurCarMenu).click();
        // await browser.pause(3000);
        // (await ElectricPage.CloseMenuBtn).click();
        // await browser.pause(3000);
        // (await ElectricPage.OurCarMenu).click();
        (await ElectricPage.ElectricMenuBtn).click();
        (await ElectricPage.XC40RechargeLink).click();
    });

    it('XC40 Recharge overview page', async () => {
        const xc40Title = await (await ElectricPage.XC40Title).getText();
        const subTitle = await (await ElectricPage.SubTitle).getText();
        const overviewPlayBtn = (await ElectricPage.OverviewPauseBtn);

        overviewPlayBtn.click();    // Pause video
        browser.pause(5000);        // Wait for 5 seconds
        overviewPlayBtn.click();    // Play video

        expect(xc40Title).toEqual(XC40Labels.XC40_RECHARGE);
        expect(subTitle).toEqual(XC40Labels.XC40_SUB_TITLE);
    });

});