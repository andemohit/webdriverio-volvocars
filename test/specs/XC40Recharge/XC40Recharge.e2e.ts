import { XC40Labels, WheelLabels, ExteriorStyling, InteriorStyling, OptionalEquipment, ReviewLabels } from "./XC40Labels";
import XC40ElectricPage from "../../pageobjects/XC40Recharge.page";
import * as CONSTANT from "../../constants";

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
        
        await browser.pause(3000);
        expect(await pageTitle.getText()).toEqual(XC40Labels.PAGE_TITLE);
        expect(await pageDesc.getText()).toEqual(XC40Labels.PAGE_DESC);

        await scrollToStart.click();
        await browser.pause(3000);
    });

    it('Choose your level', async () => {
        const levelTitle    = await XC40ElectricPage.LevelTitle;
        const engineLevel   = await XC40ElectricPage.GetLevel(CONSTANT.EngineLevels.ULTIMATE);

        expect(await levelTitle.getText()).toEqual(XC40Labels.CHOOSE_LEVEL);
        await engineLevel.click();        // Select the Core Level
    });

    it('Choose your powertrain', async () => {
        const powertrainLabel   = await XC40ElectricPage.PowertrainLabel;
        const twinMotor         = await XC40ElectricPage.PowertrainMotor(CONSTANT.Powertrain.TWIN_MOTOR);

        await powertrainLabel.scrollIntoView();
        await browser.pause(2000);          // wait fo 2 seconds
        expect(await powertrainLabel.getText()).toEqual(XC40Labels.POWERTRAIN_LABEL);
        twinMotor.click();                  // Select Twin Motor
    });

    it('Choose your color', async () => {
        const colorCarouselList = await XC40ElectricPage.ColorCarouselList;
        const nextSlide         = await XC40ElectricPage.NextColorSlide;
        const previousSlide     = await XC40ElectricPage.PreviousColorSlide;
        let selectColor         = await XC40ElectricPage.SelectColor(CONSTANT.ColorLabels.SAGE_GREEN);
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

        selectColor = await XC40ElectricPage.SelectColor(CONSTANT.ColorLabels.CRYSTAL_WHITE);
        await selectColor.click();          // Select Crystal White color
        await browser.pause(3000);          // Wait for 3 seconds
        await carouselSlide(previousSlide); // Slide to left

        // Color title & selected color label should match.
        expect(await colorStageName.getText()).toEqual(await selectColor.getAttribute('aria-label'));
    });

    it('Choose your wheels', async () => {
        const wheelsTitle       = await XC40ElectricPage.WheelsTitle;
        const wheelsCarousel    = await XC40ElectricPage.WheelsCarousel;
        const nextWheelSlide    = await XC40ElectricPage.NextWheelSlide;
        const prevWheelSlide    = await XC40ElectricPage.PreviousWheelSlide;
        let selectWheel         = await XC40ElectricPage.GetByAriaLabel(WheelLabels.DOUBLE_SPOKE);
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
        selectWheel = await XC40ElectricPage.GetByAriaLabel(WheelLabels.SPOKE_DIAMOND);
        await selectWheel.click();
        await browser.pause(3000);
        await carouselSlide(prevWheelSlide);
        expect(await activeWheelTitle.getText()).toEqual(await selectWheel.getAttribute('aria-label'));
    });

    it('Add exterior styling', async () => {
        const exteriorTitle     = await XC40ElectricPage.ExteriorTitle;
        const selectedExterior  = await XC40ElectricPage.SelectExterior(ExteriorStyling.TINTED_REAR_WINDOWS);

        expect(await exteriorTitle.getText()).toEqual(XC40Labels.ADD_EXTERIOR);
        await selectedExterior.click();
    });

    it('Choose your interior', async () => {
        const interiorTitle = await XC40ElectricPage.InteriorTitle;
        const selectInterior  = await XC40ElectricPage.GetByAriaLabel(InteriorStyling.CONNECT_SUEDE_2);

        await interiorTitle.waitForExist();
        expect(await interiorTitle.getText()).toEqual(XC40Labels.ADD_INTERIOR);
        await selectInterior.click();
        await browser.pause(4000);
    });

    it('Add optional equipment', async () => {
        const optionalEquipment = await XC40ElectricPage.OptionEquipmentTitle;

        expect(await optionalEquipment.getText()).toEqual(XC40Labels.ADD_OPTIONAL);
        
        await (await XC40ElectricPage.GetByAriaLabel(OptionalEquipment.PIXEL_LED)).click();
        await browser.pause(3000);
        await (await XC40ElectricPage.GetByAriaLabel(OptionalEquipment.RECHARGE_TYRES)).click();
        await browser.pause(3000);
    });

    it('Design is completed', async () => {
        const conclusionTitle = await XC40ElectricPage.ConclusionTitle;
        const reviewDesignBtn = await XC40ElectricPage.ReviewDesignBtn;

        expect(await conclusionTitle.getText()).toEqual(XC40Labels.DESIGN_COMPLETED);
        await conclusionTitle.scrollIntoView();
        await browser.pause(2000);
        await reviewDesignBtn.click();
    });
});

describe('Review your XC40 Recharge', async () => {
    it('Verify the title', async () => {
        const reviewTitle   = await XC40ElectricPage.ReviewTitle;
        const reviewDesc    = await XC40ElectricPage.ReviewDesc;

        await browser.pause(2000);
        expect(await reviewTitle.getText()).toEqual(ReviewLabels.REVIEW_TITLE);
        expect(await reviewDesc.getText()).toEqual(ReviewLabels.REVIEW_DESC);
    });

    it ('Test Features popup', async () => {
        const viewFeaturesBtn = await XC40ElectricPage.ViewFeaturesBtn;
        const closeFeatureBtn = await XC40ElectricPage.CloseFeatureBtn;

        expect(await viewFeaturesBtn.getText()).toEqual(ReviewLabels.VIEW_ALL_FEATURES);
        await viewFeaturesBtn.click();
        await browser.pause(2000);
        await closeFeatureBtn.click();
        await browser.pause(1000);
    });

    it('Test the carousel', async () => {
        const nextCaorouselBtn  = await XC40ElectricPage.ReviewNextCarousel;
        const prevCarouselBtn   = await XC40ElectricPage.ReviewPrevCarousel;

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
        const reviewLevel       = await XC40ElectricPage.ReviewLevel;
        const reviewPowertrain  = await XC40ElectricPage.ReviewPowertrain;
        const reviewColor       = await XC40ElectricPage.ReviewColor;
        const reviewWheels      = await XC40ElectricPage.ReviewWheels;
        const reviewInterior    = await XC40ElectricPage.ReviewInterior;

        await browser.pause(3000);
        await reviewLevel.scrollIntoView();
        // expect(await reviewLevel.getText()).toEqual(CONSTANT.EngineLevels.ULTIMATE);
        expect(await (await reviewPowertrain.getText()).toLowerCase()).toEqual(CONSTANT.Powertrain.TWIN_MOTOR.toLocaleLowerCase());
        expect(await reviewColor.getText()).toEqual(CONSTANT.ColorLabels.CRYSTAL_WHITE);
        expect(await reviewWheels.getText()).toEqual(WheelLabels.SPOKE_DIAMOND);
        expect(await reviewInterior.getText()).toEqual(InteriorStyling.CONNECT_SUEDE_2);
    });

    it('Review environment impact', async () => {
        const reviewEnvTitle    = await XC40ElectricPage.EnvImpact;
        const reviewEnvDesc     = await XC40ElectricPage.EnvImpactDesc;

        await reviewEnvTitle.waitForExist();
        await reviewEnvTitle.scrollIntoView();
        expect(await reviewEnvTitle.getText()).toEqual(CONSTANT.ReviewTitles.ENVIRONMENT_IMPACT);
        expect(await reviewEnvDesc.getText()).toEqual(CONSTANT.ReviewDesc.ENV_IMPACT_DESC);
    });
});