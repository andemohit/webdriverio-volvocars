class ElectricPage {
    get OurCarMenu() {
        return $('//*[@id="nav:topNavCarMenu"]');
    }

    get CloseMenuBtn() {
        return $('//*[@id="vcc-site-nav"]/div/div/div[1]/div/div[2]/button');
    }

    get ElectricMenuBtn() {
        return $('//*[@id="site-nav-cars-menu-section-tab-0"]');
    }

    get XC40RechargeLink() {
        return $('//*[@id="site-nav-cars-menu-section-panel-0"]/div/div[2]/a');
    }

    get XC40Title() {
        return $('//*[@id="__next"]/div/div[3]/div[1]/section/div/div[1]/h1');
    }

    get SubTitle() {
        return $('//*[@id="__next"]/div/div[7]/div/div/div/section/div[1]/div/div/div/p');
    }

    get OverviewPauseBtn() {
        return $('//*[@id="__next"]/div/div[6]/div/div/section/div/button');
    }
}

export default new ElectricPage();