export default class Review {
    /**-------- REVIEW DESIGN START -------- */
    get ReviewTitle() {
        return $('h1[data-autoid="review:title"]');
    }

    get ReviewDesc() {
        return $('p[data-sources="dict:global.review.introDescription"]');
    }

    get CarTitle() {
        return $('h2[data-autoid="summary:trimlabel"]');
    }

    /**----- Features START -----*/
    get ViewFeaturesBtn() {
        return $('button[data-sources="dict:global.ctas.viewAllFeatures"]');
    }

    get AllFeaturesTitle() {
        return $('em[data-sources="dict:modules.style.allFeatures"]');
    }

    get CloseFeatureBtn() {
        return $('//*[@id="__next"]/div[3]/div[2]/div/div/div/section/div[1]/button');
    }
    /**----- Features END -----*/

    /**----- Carousel START -----*/
    get ReviewNextCarousel() {
        return $('button[data-autoid="springCarouselNextButton"]');
    }

    get ReviewPrevCarousel() {
        return $('button[data-autoid="springCarouselPreviousButton"]');
    }
    /**----- Carousel END -----*/

    /**----- Your Design START -----*/
    get ReviewLevel() {
        return $('p[data-autoid="salesVersion:title"]');
    }

    get ReviewPowertrain() {
        return $('p[data-autoid="powertrain:title"]');
    }

    get ReviewSetting() {
        return $('p[data-autoid="seats:title"]');
    }

    // get ReviewPowertrain() {
    //     return $('p[data-autoid="powertrain:title"]');
    // }

    get ReviewTheme() {
        return $('p[data-autoid="theme:title"]');
    }

    get ReviewColor() {
        return $('p[data-autoid="color:title"]');
    }

    get ReviewWheels() {
        return $('p[data-autoid="wheels:title"]');
    }

    get ReviewInterior() {
        return $('p[data-autoid="interior:title"]');
    }
    /**----- Your Design END -----*/

    /**----- ENVIRONMENT IMPACT START -----*/
    get EnvImpact() {
        return $('h2[data-autoid="overviewOverlay:emissionTitle"]');
    }

    get EnvImpactDesc() {
        return $('p[data-autoid="overviewOverlay:emissionDesc"]');
    }
    /**----- ENVIRONMENT IMPACT END -----*/

    /**-------- REVIEW DESIGN END -------- */
}