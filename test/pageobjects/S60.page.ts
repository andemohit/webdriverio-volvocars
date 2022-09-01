import DesignCar from "./DesignCar";

class S60 extends DesignCar {
    public open() {
        return super.open();
    }

    get MenuBtn() {
        return $('#sitenav-sidenav-toggle');
    }

    get BuyBtn() {
        return $('//*[@id="nav:sideNavigation"]/div[2]/div[2]/div/div/div[1]/div[2]/div[1]/button');
    }

    get CarConfigBtn() {
        return $('//*[@id="nav:sideNavigation"]/div[2]/div[2]/div[2]/div/div/div/div[2]/a');
    }

    get S60Card() {
        return $('a[data-di-id="di-id-fdc72f08-1f99e809"]');
    }

    get IntroEl() {
        return $('[data-testid="stage-intro"]');
    }

    get SalesVersionEl() {
        return $('[data-testid="stage-salesVersion"]');
    }
}

export default new S60();