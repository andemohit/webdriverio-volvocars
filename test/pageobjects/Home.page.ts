class HomePage {
    open() {
        browser.url('');
    }

    get acceptCookiesBtn() {
        return $('#onetrust-accept-btn-handler');
    }

    get logoSite() {
        return $('img._SN-bk._SN-bl._SN-bm._SN-i');
    }

    get IdeaTitle() {
        return $('#ModelIntro-1 section h2');
    }

    get IdeaTitleDesc() {
        return $('//*[@id="ModelIntro-1"]/section/p');
    }

    get FeatureTitle() {
        return $('//*[@id="TextStatement-1"]/section/div/div/p');
    }

    get SpeedCapTitle() {
        return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[1]/div[2]/em');
    }

    get SpeedCapDesc() {
        return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[1]/div[2]/div');
    }

    get HighwayPilotTitle() {
        return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[2]/div[2]/em');
    }

    get HighwayPilotDesc() {
        return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[2]/div[2]/div/p');
    }

    get DriverMonitoringCamerasTitle() {
        return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[3]/div[2]/em');
    }

    get DriverMonitoringCamerasDesc() {
        return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[3]/div[2]/div/p');
    }

    get CareKeyTitle() {
        return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[4]/div[2]/em');
    }

    get CareKeyDesc() {
        return $('//*[@id="IconCallouts-1"]/section/div/div[1]/div[4]/div[2]/div/p');
    }

    get OneOfMillionTitle() {
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[1]/h2');
    }

    get OneOfMillionDesc() {
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[1]/p');
    }

    get AmyTitle() {
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[1]/div[2]/em');
    }

    get AmyStory() {
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[1]/div[2]/p');
    }

    get SummerTitle() {
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[2]/div[2]/em');
    }

    get SummerStory() {
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[2]/div[2]/p');
    }

    get LindaMollyTitle() {
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[3]/div[2]/em');
    }

    get LindaMollyStory() {
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[3]/div[2]/p');
    }

    get AlexTitle() {
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[4]/div[2]/em');
    }

    get AlexStory() {
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[4]/div[2]/p');
    }

    get InnovationTitle() {
        return $('//*[@id="ImageWithText-1"]/section/div[1]/div[2]/div/div/div/h2');
    }

    get InnovationDesc() {
        return $('//*[@id="ImageWithText-1"]/section/div[1]/div[2]/div/div/div/p');
    }

    get InnovationLearnMore() {
        return $('//*[@id="ImageWithText-1"]/section/div[1]/div[2]/div/div/div/div[3]/div/div/a');
    }

    get GetImageView() {
        return $('//*[@id="ImageWithText-2"]/section/div[1]/div[1]/div/div/picture/img');
    }

    get exploreModelsTitle() {
        return $('//*[@id="ProductListCarousel-1"]/section/div/div[1]/div/h2');
    }

    get ModelsList() {
        return $$('.ay.bw.bx.by.c.ex.hv.n.og.oh.oi.oj.ok.ol.om.on');
    }

    get CarouselNextButton() {
        return $('//*[@data-autoid="springCarouselNextButton"]');
    }
    
    get CarouselPreviousButton() {
        return $('//*[@data-autoid="springCarouselPreviousButton"]');
    }

    get Disclaimer() {
        return $('//*[@id="Disclaimer-1"]/section/div/div[1]/div/p');
    }

    acceptCookies() {
        this.acceptCookiesBtn.click();
    }
}

export default new HomePage();