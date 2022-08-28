import Page from "./page";

class XC40Eelectric extends Page {
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
        return $('//*[@id="__next"]/div[4]/div/div/div[2]/div/a[2]');
    }

    get PageTitle() {
        return $('//*[@id="__next"]/div[3]/div/section/div/div[1]/h1');
    }

    get PageDesc() {
        return $('//*[@id="__next"]/div[3]/div/section/div/div[1]/p');
    }

    get ScrollToStart() {
        return $('//*[@id="__next"]/div[3]/div/section/div/div[3]/div/button');
    }

    get LevelTitle() {
        return $('//*[@id="__next"]/div[4]/h2');
    }
}

export default new XC40Eelectric();