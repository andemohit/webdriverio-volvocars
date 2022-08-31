import DesignCar from "./DesignCar";
import Page from "./page";

class XC40Recharge extends DesignCar {
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

    get XC40Card() {
        return $('a[data-di-id="di-id-47c916d7-f9aa649"]');
    }
}

export default new XC40Recharge();