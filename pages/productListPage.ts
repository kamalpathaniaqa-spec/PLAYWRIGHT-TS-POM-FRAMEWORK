import {Page,Locator} from'@playwright/test'
import {HeaderComponent} from "../components/HeaderComponent";
import { BasePage } from './basePage';


export class ProductListPage extends BasePage
{
page: Page;
addTocartButton: Locator;
cartBadgeIcon: Locator;
cartIcon: Locator;


constructor(page:Page)
{
 super(page);
this.page = page;
this.addTocartButton = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
this.cartBadgeIcon = page.locator('.shopping_cart_badge');
this.cartIcon = page.locator('.shopping_cart_link');

}

async clickAddToCartButton()
{

 await this.addTocartButton.click();

}

async clickBadgeIcon()
{
    await this.cartBadgeIcon.click();

}
async clickcartIcon()
{
    await this.cartIcon.click();
}



}
