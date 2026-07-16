import { Page,Locator } from "@playwright/test";

  export class HeaderComponent{

    page: Page;
    burgerMenu: Locator;
    burgerMenuClose: Locator;
    
    constructor(page:Page){
    

        this.page = page;
        this.burgerMenu =page.locator('#react-burger-menu-btn');
        this.burgerMenuClose = page.locator('#react-burger-cross-btn');
    }


     async opeandCloseBurger(){
        await this.burgerMenu.click();
        await this.burgerMenuClose.click();

     }


}