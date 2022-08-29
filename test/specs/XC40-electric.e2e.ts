import { ColorLabels, XC40Labels, WheelLabels } from "../constants/XC40Recharge";
import Page from "../pageobjects/page";
import XC40ElectricPage from "../pageobjects/XC40-electric.page";

describe('Open home page', () => {
    before(async () => {
        XC40ElectricPage.open();                    // Open home page
        await XC40ElectricPage.acceptCookies();     // Accepts cookies
    });

    it('Open XC40 Recharge Page', async () => {
        const menuBtn       = await XC40ElectricPage.MenuBtn;
        const buyBtn        = await XC40ElectricPage.BuyBtn;
        const carConfigBtn  = await XC40ElectricPage.CarConfigBtn;
        const xc40Card      = await XC40ElectricPage.XC40Card;

        await menuBtn.click();
        await browser.pause(2000);
        await buyBtn.click();
        await browser.pause(2000);
        await carConfigBtn.click();
        await browser.pause(2000);
        await xc40Card.click();
    });
});

describe('Design you XC40 Recharge car', async () => {
    it('Verify the title', async () => {
        const pageTitle     = await XC40ElectricPage.PageTitle;
        const pageDesc      = await XC40ElectricPage.PageDesc;
        const scrollToStart = await XC40ElectricPage.ScrollToStart;
        
        expect(await pageTitle.getText()).toEqual(XC40Labels.PAGE_TITLE);
        expect(await pageDesc.getText()).toEqual(XC40Labels.PAGE_DESC);

        await scrollToStart.click();
        await browser.pause(3000);
    });

    it('Choose your level', async () => {
        const levelTitle    = await XC40ElectricPage.LevelTitle;
        const coreLevel     = await XC40ElectricPage.UltimateLevel;

        expect(await levelTitle.getText()).toEqual(XC40Labels.CHOOSE_LEVEL);
        await coreLevel.click();        // Select the Core Level
        await browser.pause(2000);      // wait for 2 seconds
    });

    it('Choose your powertrain', async () => {
        const powertrainLabel   = await XC40ElectricPage.PowertrainLabel;
        const singleMotor       = await XC40ElectricPage.SingleMotor;
        const twinMotor         = await XC40ElectricPage.TwinMotor;
        
        powertrainLabel.scrollIntoView();
        expect(await powertrainLabel.getText()).toEqual(XC40Labels.POWERTRAIN_LABEL);
        twinMotor.click();                  // Select Twin Motor
        await browser.pause(2000);          // wait fo 2 seconds
    });

    it('Choose your color', async () => {
        const colorCarouselList = await XC40ElectricPage.ColorCarouselList;
        const nextSlide         = await XC40ElectricPage.NextColorSlide;
        const previousSlide     = await XC40ElectricPage.PreviousColorSlide;
        let selectColor         = await XC40ElectricPage.SelectColor(ColorLabels.SAGE_GREEN);
        const colorStageName    = await XC40ElectricPage.ColorStageName;

        /**
         * Clicks on next or previuos carousel button for selected color.
         * @param {WebdriverIO.Element} el next or previous button for carousel
         */
        async function carouselSlide(el: WebdriverIO.Element) {
            for (const _carousel of colorCarouselList) {
                el.click();                 // Clicks on next or prev button
                await browser.pause(1500);  // Waits for 1.5 seconds
            }
        }

        await selectColor.click();          // Select Sage Green color
        await browser.pause(3000);          // Wait for 3 seconds
        await carouselSlide(nextSlide);     // Slide to right

        selectColor = await XC40ElectricPage.SelectColor(ColorLabels.CRYSTAL_WHITE);
        await selectColor.click();          // Select Crystal White color
        await browser.pause(3000);          // Wait for 3 seconds
        await carouselSlide(previousSlide); // Slide to left

        // Color title & selected color label should match.
        expect(await colorStageName.getText()).toEqual(await selectColor.getAttribute('aria-label'));

        await browser.pause(5000);
    });

    it('Choose your wheels', async () => {
        const wheelsTitle       = await XC40ElectricPage.WheelsTitle;
        const wheelsCarousel    = await XC40ElectricPage.WheelsCarousel;
        const nextWheelSlide    = await XC40ElectricPage.NextWheelSlide;
        const prevWheelSlide    = await XC40ElectricPage.PreviousWheelSlide;
        let selectWheel       = await XC40ElectricPage.SelectWheel(WheelLabels.DOUBLE_SPOKE);
        const activeWheelTitle  = await XC40ElectricPage.ActiveWheelTitle;

        /**
         * Clicks on next or previuos wheels carousel button for selected color.
         * @param {WebdriverIO.Element} el next or previous button for wheel carousel
         */
         async function carouselSlide(el: WebdriverIO.Element) {
            for (const _carousel of wheelsCarousel) {
                el.click();                 // Clicks on next or prev button
                await browser.pause(1500);  // Waits for 1.5 seconds
            }
        }
        
        expect(await wheelsTitle.getText()).toEqual(XC40Labels.CHOOSE_WHEELS);
        
        await selectWheel.click();
        await carouselSlide(nextWheelSlide);
        selectWheel = await XC40ElectricPage.SelectWheel(WheelLabels.SPOKE_DIAMOND);
        await selectWheel.click();
        await browser.pause(3000);
        await carouselSlide(prevWheelSlide);
        expect(await activeWheelTitle.getText()).toEqual(await selectWheel.getAttribute('aria-label'));
    });
});