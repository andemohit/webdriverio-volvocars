import HomePage from "../pageobjects/Home.page";
import { HomeLables, HomeLablesDesc } from "../constants/HomeLabels";

describe('Open home page', () => {
    before(async () => {
        HomePage.open();
        await HomePage.acceptCookies();
        await browser.maximizeWindow();
    });

    it('Should test image comparison for top nav bar',async () => {
        expect(await browser.checkScreen('#site-nav-topbar-wrapper', {})).toEqual(0);
    });

    it('Should test image comparison for callouts', async() => {
        await (await HomePage.IconCalloutEl).click();
        expect(await browser.checkElement(await HomePage.IconCalloutEl, 'icon-callouts', {})).toEqual(0);
    });

    it('Should test home page title & description', async () => {
        const ideaTitle = await HomePage.IdeaTitle;
        const ideaTitleDesc = await HomePage.IdeaTitleDesc;

        await await ideaTitle.scrollIntoView();   // Scroll to view

        expect(await ideaTitle.getText()).toEqual(HomeLables.IDEA_THAT_CHANGES_THE_WORLD);
        expect(await ideaTitleDesc.getText()).toEqual(HomeLables.THREE_POINT_SAFETY_BELT);
    });

    it('Check list of features', async () => {
        const featureTitle      = await HomePage.FeatureTitle;
        const speedCapTitle     = await HomePage.SpeedCapTitle;
        const speedCapDesc      = await HomePage.SpeedCapDesc;
        const highwayPilotTitle = await HomePage.HighwayPilotTitle;
        const highwayPilotDesc  = await HomePage.HighwayPilotDesc;
        const driverCameraTitle = await HomePage.DriverMonitoringCamerasTitle;
        const driverCamerasDesc = await HomePage.DriverMonitoringCamerasDesc;
        const careKeyTitle      = await HomePage.CareKeyTitle;
        const careKeyDesc       = await HomePage.CareKeyDesc;

        await featureTitle.scrollIntoView();  // Scroll to view

        expect(await featureTitle.getText()).toEqual(HomeLables.A_MILLION_MORE);

        expect(await speedCapTitle.getText()).toEqual(HomeLables.SPEED_CAP);
        expect(await speedCapDesc.getText()).toEqual(HomeLablesDesc.SPEED_CAP);

        expect(await highwayPilotTitle.getText()).toEqual(HomeLables.HIGHWAY_PILOT);
        expect(await highwayPilotDesc.getText()).toEqual(HomeLablesDesc.HIGHWAY_PILOT);

        expect(await driverCameraTitle.getText()).toEqual(HomeLables.DRIVER_MONITORING_CAMERAS);
        expect(await driverCamerasDesc.getText()).toEqual(HomeLablesDesc.DRIVER_MONITORING_CAMERAS);

        expect(await careKeyTitle.getText()).toEqual(HomeLables.CARE_KEY);
        expect(await careKeyDesc.getText()).toEqual(HomeLablesDesc.CARE_KEY);
    });

    it('Check stories of real car survivors', async () => {
        const oneOfMillionTitle = (await HomePage.OneOfMillionTitle);
        const oneOfMillionDesc  = (await HomePage.OneOfMillionDesc);
        const amyTitle          = (await HomePage.AmyTitle);
        const amyStory          = (await HomePage.AmyStory);
        const summerTitle       = (await HomePage.SummerTitle);
        const summerStory       = (await HomePage.SummerStory);
        const lindaMollyTitle   = (await HomePage.LindaMollyTitle);
        const lindaMollyStory   = (await HomePage.LindaMollyStory);
        const alexTitle         = (await HomePage.AlexTitle);
        const alexStory         = (await HomePage.AlexStory);

        await oneOfMillionTitle.scrollIntoView();     // Scroll to view
        await browser.pause(2000);

        expect(await oneOfMillionTitle.getText()).toEqual(HomeLables.ONE_IN_A_MILLION);
        expect(await oneOfMillionDesc.getText()).toEqual(HomeLablesDesc.ONE_IN_A_MILLION);

        expect(await amyTitle.getText()).toEqual(HomeLables.AMY);
        expect(await amyStory.getText()).toEqual(HomeLablesDesc.AMY);

        expect(await summerTitle.getText()).toEqual(HomeLables.SUMMER);
        expect(await summerStory.getText()).toEqual(HomeLablesDesc.SUMMER);

        expect(await lindaMollyTitle.getText()).toEqual(HomeLables.LINDA_MOLLY);
        expect(await lindaMollyStory.getText()).toEqual(HomeLablesDesc.LINDA_MOLLY);

        expect(await alexTitle.getText()).toEqual(HomeLables.ALEX);
        expect(await alexStory.getText()).toEqual(HomeLablesDesc.ALEX);
    });

    it('Test Decades of innovation', async () => {
        const innovationTitle       = await HomePage.InnovationTitle;
        const innovationDesc        = await HomePage.InnovationDesc;
        const innovationLearnMore   = (await HomePage.InnovationLearnMore);
        const getImage              = await HomePage.GetImageView;

        await innovationTitle.scrollIntoView();   // Scroll to view

        expect(await innovationTitle.getText()).toEqual(HomeLables.INNOVATION);
        expect(await innovationDesc.getText()).toEqual(HomeLablesDesc.INNOVATION);
        expect(await innovationLearnMore.getText()).toEqual(HomeLables.LEARN_MORE_BTN);
        // await (innovationLearnMore).click();
        // await browser.pause(5000);
        // await getImage.click();
        // await browser.pause(5000);
        // await browser.back();
        // await browser.pause(5000);
    });

    it('Test explore our models', async () => {
        const exploreModelsTitle    = await HomePage.exploreModelsTitle;
        const modelsList            = await HomePage.ModelsList;
        const carouselNextButton    = await HomePage.CarouselNextButton;
        const carouselPrevButton    = await HomePage.CarouselPreviousButton;

        await exploreModelsTitle.scrollIntoView();  // Scroll to view
        expect(await exploreModelsTitle.getText()).toEqual(HomeLables.EXPLORE_OUR_MODELS);

        /**
         * Clicks carousel button for Next or Previous.
         * Loops for 4 times.
         * @param {WebdriverIO.Element} el Carousel button element
         */
        async function carouselBtn(el: WebdriverIO.Element) {
            for (let i = 0; i < 4; i++) await el.click();
        }

        /** 
         * Getting list of carousels and hover on each element
         */
        for (const model of modelsList) {
            if (model.index === 4) 
                await carouselBtn(carouselNextButton);  // Clicks on Next Carousel button
            
            await model.moveTo();                       // hover on element
            await browser.pause(800);                   // pause for 0.8 seconds
        }
        await carouselBtn(carouselPrevButton);          // Clicks on Previous Carousel button
    });

    it('Verify Disclaimer', async () => {
        const disclaimer = await HomePage.Disclaimer;
        expect(await disclaimer.getText()).toEqual(HomeLables.DISCLAIMER);
    });
});