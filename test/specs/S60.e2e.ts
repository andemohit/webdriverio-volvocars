import { ColorLabels, S60Labels, WheelLabels, InteriorLabels } from "../constants/S60Labels";
import S60 from "../pageobjects/S60.page";

describe('Open home page', () => {
    describe('Open home page', () => {
        before(async () => {
            S60.open();                    // Open home page
            await S60.acceptCookies();     // Accepts cookies
        });

        it('Open XC40 Recharge Page', async () => {
            const menuBtn = await S60.MenuBtn;
            const buyBtn = await S60.BuyBtn;
            const carConfigBtn = await S60.CarConfigBtn;
            const s60Card = await S60.S60Card;

            await menuBtn.click();
            await browser.pause(2000);
            await buyBtn.click();
            await browser.pause(2000);
            await carConfigBtn.click();
            await s60Card.scrollIntoView();
            await browser.pause(1000);
            await s60Card.click();
            await browser.pause(2000);
        });
    });
});

describe('Design you S60 car', async () => {
    it('Verify the title', async () => {
        const pageTitle = await S60.PageTitle;
        const pageDesc = await S60.PageDesc;
        const scrollToStart = await S60.ScrollToStart;

        expect(await pageTitle.getText()).toEqual(S60Labels.PAGE_TITLE);
        expect(await pageDesc.getText()).toEqual(S60Labels.PAGE_DESC);
        await scrollToStart.click();
        await browser.pause(3000);
    });

    it('Choose your level', async () => {
        const levelTitle = await S60.LevelTitle;
        const coreLevel = await S60.PlusLevel;

        expect(await levelTitle.getText()).toEqual(S60Labels.CHOOSE_LEVEL);
        await coreLevel.click();        // Select the Core Level
        await browser.pause(2000);      // wait for 2 seconds
    });

    it('Choose your color', async () => {
        const colorCarouselList = await S60.ColorCarouselList;
        const nextSlide = await S60.NextColorSlide;
        const previousSlide = await S60.PreviousColorSlide;
        let selectColor = await S60.SelectColor(ColorLabels.CRYSTAL_WHITE);
        const colorStageName = await S60.ColorStageName;

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

        selectColor = await S60.SelectColor(ColorLabels.FUSION_RED);
        await selectColor.click();          // Select Crystal White color
        await browser.pause(3000);          // Wait for 3 seconds
        await carouselSlide(previousSlide); // Slide to left

        // Color title & selected color label should match.
        expect(await colorStageName.getText()).toEqual(await selectColor.getAttribute('aria-label'));
        await browser.pause(5000);
    });

    it('Choose your wheels', async () => {
        const wheelsTitle = await S60.WheelsTitle;
        const wheelsCarousel = await S60.WheelsCarousel;
        const nextWheelSlide = await S60.NextWheelSlide;
        const prevWheelSlide = await S60.PreviousWheelSlide;
        let selectWheel = await S60.SelectWheel(WheelLabels.OPEN_SPOKE_BLACK_DIAMOND);
        const activeWheelTitle = await S60.ActiveWheelTitle;

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

        expect(await wheelsTitle.getText()).toEqual(S60Labels.CHOOSE_WHEELS);

        await selectWheel.click();
        await carouselSlide(nextWheelSlide);
        selectWheel = await S60.SelectWheel(WheelLabels.SPOKE_BLACK_DIAMOND);
        await selectWheel.click();
        await browser.pause(3000);
        await carouselSlide(prevWheelSlide);
        expect(await activeWheelTitle.getText()).toEqual(await selectWheel.getAttribute('aria-label'));
    });

    it('Choose your interior', async () => {
        const interiorTitle = await S60.InteriorTitle;
        const selectedInterior = await S60.SelectInterior(InteriorLabels.LEATHER_1);

        expect(await interiorTitle.getText()).toEqual(S60Labels.CHOOSE_INTERIOR);
        await selectedInterior.click();
        await browser.pause(3000);
        await (await S60.SelectInterior(InteriorLabels.PREMIUM_TEXTILE_1)).click();
        await browser.pause(3000);
    });

    it('Add Packages',async () => {
        
    });
});