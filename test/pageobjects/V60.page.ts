import DesignCar from "./DesignCar";

class V60 extends DesignCar {
    public open() {
        return super.open();
    }

    get MenuBtn() {
        return $('#sitenav-sidenav-toggle');
    }

    get BuyBtn() {
        return $('button[data-autoid="nav:sideNavLinksMenuDrawer"][aria-controls="links-menu0-content"]');
    }

    get CarConfigBtn() {
        return $('a[data-autoid="nav:sideNavLinksMenuItem"][data-di-id="di-id-c3a86ba2-590479fa"]');
    }

    get V60Card() {
        return $('a[data-di-id="di-id-fdc72f08-d7796779"]');
    }

    get IntroEl() {
        return $('[data-testid="stage-intro"]');
    }
}

export default new V60();