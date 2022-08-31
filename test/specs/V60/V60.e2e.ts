import V60 from '../../pageobjects/V60.page';
import { InteriorStyling, OptionalEquipment, PackageLabels, ReviewLabels, V60Labels, WheelLabels } from './V60Labels';
import * as CONSTANT from "../../constants";

describe('Open home page', () => {
    describe('Open home page', () => {
        before(async () => {
            V60.open();                    // Open home page
            await V60.acceptCookies();     // Accepts cookies
        });

        it('Open V60 Recharge Page', async () => {
            const menuBtn       = await V60.MenuBtn;
            const buyBtn        = await V60.BuyBtn;
            const carConfigBtn  = await V60.CarConfigBtn;
            const v60Card       = await V60.V60Card;

            await menuBtn.click();
            await browser.pause(2000);
            await buyBtn.click();
            await browser.pause(2000);
            await carConfigBtn.click();
            await browser.pause(2000);
            await v60Card.click();
        });
    });
});

describe('Design you V60 Recharge car', async () => {
    it('Verify the title', async () => {
        const pageTitle     = await V60.PageTitle;
        const pageDesc      = await V60.PageDesc;
        const scrollToStart = await V60.ScrollToStart;

        await browser.pause(3000);
        expect(await pageTitle.getText()).toEqual(V60Labels.PAGE_TITLE);
        expect(await pageDesc.getText()).toEqual(V60Labels.PAGE_DESC);

        await scrollToStart.click();
        await browser.pause(3000);
    });

    it('Choose your level', async () => {
        const levelTitle    = await V60.LevelTitle;
        const engineLevel   = await V60.GetLevel(CONSTANT.EngineLevels.ESSENTIAL);

        expect(await levelTitle.getText()).toEqual(V60Labels.CHOOSE_LEVEL);
        await engineLevel.click();        // Select the Essential Level
    });

    it('Choose your color', async () => {
        const colorCarouselList = await V60.ColorCarouselList;
        const nextSlide         = await V60.NextColorSlide;
        const previousSlide     = await V60.PreviousColorSlide;
        let selectColor         = await V60.SelectColor(CONSTANT.ColorLabels.SILVER_DAWN);
        const colorStageName    = await V60.ColorStageName;

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

        selectColor = await V60.SelectColor(CONSTANT.ColorLabels.THUNDER_GREY);
        await selectColor.click();          // Select Crystal White color
        await browser.pause(3000);          // Wait for 3 seconds
        await carouselSlide(previousSlide); // Slide to left

        // Color title & selected color label should match.
        expect(await colorStageName.getText()).toEqual(await selectColor.getAttribute('aria-label'));
    });

    it('Choose your wheels', async () => {
        const wheelsTitle       = await V60.WheelsTitle;
        const wheelsCarousel    = await V60.WheelsCarousel;
        const nextWheelSlide    = await V60.NextWheelSlide;
        const prevWheelSlide    = await V60.PreviousWheelSlide;
        let selectWheel         = await V60.GetByAriaLabel(WheelLabels.OPEN_SPOKE);
        const activeWheelTitle  = await V60.ActiveWheelTitle;

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

        expect(await wheelsTitle.getText()).toEqual(V60Labels.CHOOSE_WHEELS);
        await selectWheel.click();
        await carouselSlide(nextWheelSlide);
        expect(await activeWheelTitle.getText()).toEqual(await selectWheel.getAttribute('aria-label'));
    });

    it('Choose your interior', async () => {
        const interiorTitle = await V60.InteriorTitle;
        const selectInterior  = await V60.GetByAriaLabel(InteriorStyling.BLOND_LEATHER);

        await interiorTitle.waitForExist();
        expect(await interiorTitle.getText()).toEqual(V60Labels.ADD_INTERIOR);
        await selectInterior.click();
        await browser.pause(4000);
    });

    it('Add Packages', async () => {
        const addPackageLabel = await V60.PackageTitle;

        await addPackageLabel.scrollIntoView();
        expect(await addPackageLabel.getText()).toEqual(V60Labels.ADD_PACKAGE);
        await browser.pause(2000);
        await (await V60.AddPackages(PackageLabels.CLIMATE)).click();
        await browser.pause(2000);
    });

    it('Add optional equipment', async () => {
        const optionalEquipment = await V60.OptionEquipmentTitle;
        expect(await optionalEquipment.getText()).toEqual(V60Labels.ADD_OPTIONAL);

        await (await V60.GetByAriaLabel(OptionalEquipment.MUD_FLAPS_FRONT)).click();
        await browser.pause(2000);
        await (await V60.GetByAriaLabel(OptionalEquipment.MUD_FLAPS_REAR)).click();
        await browser.pause(2000);
    });

    it('Design is completed', async () => {
        const conclusionTitle = await V60.ConclusionTitle;
        const reviewDesignBtn = await V60.ReviewDesignBtn;

        await conclusionTitle.scrollIntoView();
        expect(await conclusionTitle.getText()).toEqual(V60Labels.DESIGN_COMPLETED);
        await browser.pause(2000);
        await reviewDesignBtn.click();
    });
});

describe('Review your V60 Recharge', async () => {
    it('Verify the title', async () => {
        const reviewTitle   = await V60.ReviewTitle;
        const reviewDesc    = await V60.ReviewDesc;

        await browser.pause(2000);
        expect(await reviewTitle.getText()).toEqual(ReviewLabels.REVIEW_TITLE);
        expect(await reviewDesc.getText()).toEqual(ReviewLabels.REVIEW_DESC);
    });

    it ('Test Features popup', async () => {
        const viewFeaturesBtn = await V60.ViewFeaturesBtn;
        const closeFeatureBtn = await V60.CloseFeatureBtn;

        expect(await viewFeaturesBtn.getText()).toEqual(ReviewLabels.VIEW_ALL_FEATURES);
        await viewFeaturesBtn.click();
        await browser.pause(2000);
        await closeFeatureBtn.click();
        await browser.pause(1000);
    });

    it('Test the carousel', async () => {
        const nextCaorouselBtn  = await V60.ReviewNextCarousel;
        const prevCarouselBtn   = await V60.ReviewPrevCarousel;

        await nextCaorouselBtn.click();
        await browser.pause(1000);
        await nextCaorouselBtn.click();
        await browser.pause(1000);
        await nextCaorouselBtn.click();
        await browser.pause(1000);
        await prevCarouselBtn.click();
        await browser.pause(1000);
        await prevCarouselBtn.click();
    });

    it('Review your design', async () => {
        const reviewLevel       = await V60.ReviewLevel;
        const reviewPowertrain  = await V60.ReviewPowertrain;
        const reviewColor       = await V60.ReviewColor;
        const reviewWheels      = await V60.ReviewWheels;
        const reviewInterior    = await V60.ReviewInterior;

        await browser.pause(3000);
        await reviewLevel.scrollIntoView();
        expect(await reviewLevel.getText()).toEqual(CONSTANT.EngineLevels.ESSENTIAL);
        expect(await reviewColor.getText()).toEqual(CONSTANT.ColorLabels.THUNDER_GREY);
        expect(await reviewWheels.getText()).toEqual(WheelLabels.OPEN_SPOKE);
        expect(await reviewInterior.getText()).toEqual(InteriorStyling.BLOND_LEATHER);
    });

    it('Review environment impact', async () => {
        const reviewEnvTitle    = await V60.EnvImpact;
        const reviewEnvDesc     = await V60.EnvImpactDesc;

        await reviewEnvTitle.waitForExist();
        await reviewEnvTitle.scrollIntoView();
        expect(await reviewEnvTitle.getText()).toEqual(CONSTANT.ReviewTitles.ENVIRONMENT_IMPACT);
        expect(await reviewEnvDesc.getText()).toEqual(CONSTANT.ReviewDesc.ENV_IMPACT_DESC);
    });
});