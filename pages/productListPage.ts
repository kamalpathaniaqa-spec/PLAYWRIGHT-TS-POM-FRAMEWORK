import {Page,Locator} from'@playwright/test'

export class ProductListPage
{
page: Page;
addTocartButton: Locator;
cartBadgeIcon: Locator;
cartIcon: Locator;

constructor(page:Page)
{

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
