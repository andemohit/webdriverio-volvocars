export default class DesignCar {
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

    get CoreLevel() {
        return $('[aria-label=" Core"]');
    }

    get PlusLevel() {
        return $('[aria-label=" Plus"]');
    }

    get UltimateLevel() {
        return $('[aria-label=" Ultimate"]');
    }

    get PowertrainLabel() {
        return $('h2[data-testid="stage-powertrain:title"]');
    }

    get SingleMotor() {
        return $('button[aria-label="Single motor"]');
    }

    get TwinMotor() {
        return $('button[aria-label="Twin motor"]');
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

    async SelectWheel(wheelType: string) {
        return await $(`button[aria-label="${wheelType}"]`);
    }

    get ActiveWheelTitle() {
        return $('[data-autoid="StandardWheels:name"]');
    }

    get InteriorTitle() {
        return $('h2[data-testid="stage-interior:title"]');
    }
    
    async SelectInterior(title: string) {
        return await $(`button[aria-label="${title}"]`);
    }

    get ExteriorTitle() {
        return $('h2[data-testid="stage-exterior:title"]');
    }

    async SelectExterior(title: string) {
        return await $(`[data-testid="stage-exterior"] button[aria-label=" ${title}"]`);
    }

    get OptionEquipmentTitle() {
        return $('h2[data-testid="stage-options:title"]');
    }

    async SelectEquipment(title: string) {
        return await $(`button[aria-label="${title}"]`);
    }

    get ConclusionTitle() {
        return $('h2[data-testid="stage-conclusion:title"]');
    }

    get ReviewDesignBtn() {
        return $('a[data-autoid="conclusionStage:reviewCTA"]');
    }
}
