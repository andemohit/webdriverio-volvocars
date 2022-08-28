import { XC40Labels } from "../constants/XC40Recharge";
import XC40ElectricPage from "../pageobjects/XC40-electric.page";

describe('Open home page', () => {
    before(async () => {
        XC40ElectricPage.open();                    // Open home page
        await XC40ElectricPage.acceptCookies();     // Accepts cookies
    });

    it('Open XC40 Recharge Page', async () => {
        const menuBtn = await XC40ElectricPage.MenuBtn;
        const buyBtn = await XC40ElectricPage.BuyBtn;
        const carConfigBtn = await XC40ElectricPage.CarConfigBtn;
        const xc40Card = await XC40ElectricPage.XC40Card;

        await menuBtn.click();
        await buyBtn.click();
        await carConfigBtn.click();
        await xc40Card.click();
    });
});

describe('Design you XC40 Recharge car', async () => {
    it('Verify the title', async () => {
        const pageTitle = await XC40ElectricPage.PageTitle;
        const pageDesc = await XC40ElectricPage.PageDesc;
        const scrollToStart = await XC40ElectricPage.ScrollToStart;

        expect(await pageTitle.getText()).toEqual(XC40Labels.PAGE_TITLE);
        expect(await pageDesc.getText()).toEqual(XC40Labels.PAGE_DESC);

        await scrollToStart.click();
    });

    it('Choose your level', async () => {
        const levelTitle = await XC40ElectricPage.LevelTitle;

        expect(await levelTitle.getText()).toEqual(XC40Labels.CHOOSE_YOUR_LEVEL);
    });
});