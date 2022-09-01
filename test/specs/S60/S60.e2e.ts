import { deepStrictEqual } from 'assert';
import * as CONSTANT from '../../constants';
import S60 from "../../pageobjects/S60.page";
import { InteriorLabels, OptionalEquipment, PackageLabels, ReviewLabels, S60Labels, WheelLabels } from './S60Labels';

describe('Open home page', () => {
    describe('Open home page', () => {
        before(async () => {
            S60.open();                    // Open home page
            await browser.maximizeWindow();
            await S60.acceptCookies();     // Accepts cookies
        });

        it('Open XC40 Recharge Page', async () => {
            const menuBtn       = await S60.MenuBtn;
            const buyBtn        = await S60.BuyBtn;
            const carConfigBtn  = await S60.CarConfigBtn;
            const s60Card       = await S60.S60Card;

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
    it('Should test image comparison for callouts', async() => {
        expect(await browser.checkElement(await S60.IntroEl, 'S60-intro', {})).toEqual(0);
    });

    it('Verify the title', async () => {
        const pageTitle     = await S60.PageTitle;
        const pageDesc      = await S60.PageDesc;
        const scrollToStart = await S60.ScrollToStart;

        expect(await pageTitle.getText()).toEqual(S60Labels.PAGE_TITLE);
        expect(await pageDesc.getText()).toEqual(S60Labels.PAGE_DESC);
        // deepStrictEqual(browser.checkElement(await S60.IntroImage, 'S60'), 0);
        await scrollToStart.click();
        await browser.pause(3000);
    });

    it('Should compair image for sales version', async () => {
        expect(await browser.checkElement(await S60.SalesVersionEl, 'S60-SalesVersion', {})).toEqual(0);
    });

    it('Choose your level', async () => {
        const levelTitle = await S60.LevelTitle;
        const engineLevel = await S60.GetLevel(CONSTANT.EngineLevels.PLUS);

        await levelTitle.waitForExist().then(async () => {
            expect(await levelTitle.getText()).toEqual(S60Labels.CHOOSE_LEVEL);
        });
        await engineLevel.click();      // Select the Plus Level
        await browser.pause(2000);      // wait for 2 seconds
    });

    it('Choose your color', async () => {
        const colorCarouselList = await S60.ColorCarouselList;
        const nextSlide = await S60.NextColorSlide;
        const previousSlide = await S60.PreviousColorSlide;
        let selectColor = await S60.SelectColor(CONSTANT.ColorLabels.CRYSTAL_WHITE);
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

        selectColor = await S60.SelectColor(CONSTANT.ColorLabels.FUSION_RED);
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
        let selectWheel = await S60.GetByAriaLabel(WheelLabels.OPEN_SPOKE_BLACK_DIAMOND);
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
        selectWheel = await S60.GetByAriaLabel(WheelLabels.SPOKE_BLACK_DIAMOND);
        await selectWheel.click();
        await browser.pause(3000);
        await carouselSlide(prevWheelSlide);
        expect(await activeWheelTitle.getText()).toEqual(await selectWheel.getAttribute('aria-label'));
    });

    it('Choose your interior', async () => {
        const interiorTitle     = await S60.InteriorTitle;
        const selectedInterior  = await S60.ChooseInterior(InteriorLabels.LEATHER_1);
        const overlayTitle      = await S60.OverlayTitle;
        const acceptOverlay     = await S60.AcceptOverlay;

        async function overlayConflict() {
            if (await overlayTitle.isExisting()) {
                await acceptOverlay.click();
            }
        }

        expect(await interiorTitle.getText()).toEqual(S60Labels.CHOOSE_INTERIOR);
        await selectedInterior.click();
        await browser.pause(3000);
        await overlayConflict();
        await (await S60.ChooseInterior(InteriorLabels.LEATHER_2)).click();
        await browser.pause(3000);
        await overlayConflict();
    });

    it('Add Packages', async () => {
        const addPackageLabel = await S60.PackageTitle;
        
        await addPackageLabel.scrollIntoView();
        expect(await addPackageLabel.getText()).toEqual(S60Labels.ADD_PACKAGE);
        await browser.pause(2000);
        await (await S60.AddPackages(PackageLabels.CLIMATE)).click();
        await browser.pause(2000);
    });

    it('Add Option Equipment', async () => {
        const optionalEquipment = await S60.OptionEquipmentTitle;
        expect(await optionalEquipment.getText()).toEqual(S60Labels.ADD_OPTIONAL);

        await (await S60.GetByAriaLabel(OptionalEquipment.PLOESTAR)).click();
        await browser.pause(2000);
        await (await S60.GetByAriaLabel(OptionalEquipment.MUD_FLAPS_REAR)).click();
        await browser.pause(2000);
    });

    it('Design is completed', async () => {
        const conclusionTitle = await S60.ConclusionTitle;
        const reviewDesignBtn = await S60.ReviewDesignBtn;

        await conclusionTitle.scrollIntoView();
        expect(await conclusionTitle.getText()).toEqual(S60Labels.DESIGN_COMPLETED);
        await browser.pause(2000);
        await reviewDesignBtn.click();
    });
});

describe('Review your S60 Recharge', async () => {
    it('Verify the title', async () => {
        const reviewTitle   = await S60.ReviewTitle;
        const reviewDesc    = await S60.ReviewDesc;

        await browser.pause(2000);
        expect(await reviewTitle.getText()).toEqual(ReviewLabels.REVIEW_TITLE);
        expect(await reviewDesc.getText()).toEqual(ReviewLabels.REVIEW_DESC);
    });

    it ('Test Features popup', async () => {
        const viewFeaturesBtn = await S60.ViewFeaturesBtn;
        const closeFeatureBtn = await S60.CloseFeatureBtn;

        expect(await viewFeaturesBtn.getText()).toEqual(ReviewLabels.VIEW_ALL_FEATURES);
        await viewFeaturesBtn.click();
        await browser.pause(2000);
        await closeFeatureBtn.click();
        await browser.pause(1000);
    });

    it('Test the carousel', async () => {
        const nextCaorouselBtn  = await S60.ReviewNextCarousel;
        const prevCarouselBtn   = await S60.ReviewPrevCarousel;

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
        const reviewLevel       = await S60.ReviewLevel;
        const reviewPowertrain  = await S60.ReviewPowertrain;
        const reviewColor       = await S60.ReviewColor;
        const reviewWheels      = await S60.ReviewWheels;
        const reviewInterior    = await S60.ReviewInterior;

        await browser.pause(3000);
        await reviewLevel.scrollIntoView();
        expect(await reviewLevel.getText()).toEqual(CONSTANT.EngineLevels.PLUS);
        expect((await reviewPowertrain.getText()).toLowerCase()).toEqual(CONSTANT.Powertrain.B3_MILD_HYBRID.toLocaleLowerCase());
        expect(await reviewColor.getText()).toEqual(CONSTANT.ColorLabels.BLACK_STONE);
        expect(await reviewWheels.getText()).toEqual(WheelLabels.SPOKE_BLACK_DIAMOND);
        expect(await reviewInterior.getText()).toEqual(InteriorLabels.LEATHER_2);
    });

    it('Review environment impact', async () => {
        const reviewEnvTitle    = await S60.EnvImpact;
        const reviewEnvDesc     = await S60.EnvImpactDesc;

        await reviewEnvTitle.waitForExist();
        await reviewEnvTitle.scrollIntoView();
        expect(await reviewEnvTitle.getText()).toEqual(CONSTANT.ReviewTitles.ENVIRONMENT_IMPACT);
        expect(await reviewEnvDesc.getText()).toEqual(CONSTANT.ReviewDesc.ENV_IMPACT_DESC);
    });
});