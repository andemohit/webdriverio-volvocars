import Review from "./Review"

export default class DesignCar extends Review {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     public open(path: string = '') {
        return browser.url(`https://www.volvocars.com/intl/v/car-safety/a-million-more/${path}`)
    }

    public async acceptCookies() {
        return await $('#onetrust-accept-btn-handler').click();
    }

    /**-------- DESING CAR START -------- */
    get PageTitle() {
        return $('h1[data-autoid="stage-intro:title"]');
    }

    get PageDesc() {
        return $('[data-autoid="stage-intro:description"]');
    }

    get ScrollToStart() {
        return $('[data-autoid="stage-intro:scrollToStage"]');
    }

    get LevelTitle() {
        return $('[data-testid="stage-salesVersion:title"]');
    }

    async GetLevel(level: string) {
        return await $(`[aria-label=" ${level}"]`);
    }

    get PowertrainLabel() {
        return $('h2[data-testid="stage-powertrain:title"]');
    }

    async PowertrainMotor(motor: string) {
        return await $(`[data-testid="powertrain"] button[aria-label="${motor}"]`);
    }

    SelectColor(color: string) {
        return $(`[aria-label="${color}"]`);
    }

    get ColorStageName() {
        return $('[data-autoid="ColorsStage:name"]');
    }

    get WheelsTitle() {
        return $('h2[data-testid="stage-wheels:title"]');
    }

    get WheelsCarousel() {
        return $$('[data-autoid="springCarouselPane:carouselItem"]');
    }
    
    get NextWheelSlide() {
        return $('[data-stage-id="wheels"] [data-autoid="SpringCarouselArrow:right"]');
    }

    get PreviousWheelSlide() {
        return $('[data-stage-id="wheels"] [data-autoid="SpringCarouselArrow:left"]');
    }
    
    get ColorCarouselList() {
        return $$('[data-testid="ColorsStage"] [data-autoid="springCarouselPane:carouselItem"]');
    }

    get NextColorSlide() {
        return $('[data-testid="ColorsStage"] [aria-label="Next slide"]');
    }

    get PreviousColorSlide() {
        return $('[data-testid="ColorsStage"] [aria-label="Previous slide"]');
    }

    get ActiveWheelTitle() {
        return $('[data-autoid="StandardWheels:name"]');
    }

        /**-------- Interior START -------- */
    get InteriorTitle() {
        return $('h2[data-testid="stage-interior:title"]');
    }

    ChooseInterior(interiroName: string) {
        return $(`[data-testid="stage-interior"] [aria-label="${interiroName}"]`);
    }

    get OverlayTitle() {
        return $('h2[data-autoid="overlay:title"]');
    }

    get AcceptOverlay() {
        return $('button[data-autoid="conflictOverlay:accept"]');
    }
        /**-------- Interior END -------- */

    get ExteriorTitle() {
        return $('h2[data-testid="stage-exterior:title"]');
    }

    async SelectExterior(title: string) {
        return await $(`[data-testid="stage-exterior"] button[aria-label=" ${title}"]`);
    }

        /** Add Packages START */
    get PackageTitle() {
        return $('h2[data-autoid="stage-packages:title"]');
    }

    async AddPackages(packageName: string) {
        return await $(`[data-testid="stage-packages"] button[aria-label="${packageName}"]`);
    }
        /** Add Packages END */

        /** Option Equipment START */
    get OptionEquipmentTitle() {
        return $('h2[data-testid="stage-options:title"]');
    }
        /** Option Equipment END */

    get ConclusionTitle() {
        return $('[data-testid="stage-conclusion"] h2[data-testid="stage-conclusion:title"]');
    }

    get ReviewDesignBtn() {
        return $('[data-testid="stage-conclusion"] a[data-autoid="conclusionStage:reviewCTA"]');
    }

    /**-------- DESING CAR END -------- */

    async GetByAriaLabel(title: string) {
        return await $(`button[aria-label="${title}"]`);
    }

}
