import { test, expect } from '../fixture/pageObjectFixture'
import { TEST_DATA } from '../data/testData';
import {HeaderComponent} from "../components/HeaderComponent";
import { LoginPage } from '../pages/loginPage';

test('ValidateLogin ', async ({ page, loginpage, productlistpage, cartpage }) => {


  // await loginpage.openApplication();
   //await loginpage.Login();

   await page.goto(TEST_DATA.urls.inventory);
   expect(await page).toHaveURL(TEST_DATA.urls.inventory);
   await page.waitForTimeout(4000);



})

test('ValidateAddtoCart', async ({ page, loginpage, productlistpage, cartpage }) => {

    await page.goto(TEST_DATA.urls.inventory);
    await productlistpage.waitPageLoad();
    await productlistpage.clickAddToCartButton();
    await productlistpage.header.opeandCloseBurger();
    expect(await productlistpage.cartBadgeIcon).toHaveText('1');
    await productlistpage.clickcartIcon();
    expect(await page).toHaveURL('https://www.saucedemo.com/cart.html');
    await page.waitForTimeout(2000);

})

test('VaidateCartIteam', async ({ page, loginpage, productlistpage, cartpage }) => {

   await page.goto(TEST_DATA.urls.inventory);
   await productlistpage.waitPageLoad();
   await productlistpage.clickAddToCartButton();
   expect(await productlistpage.cartBadgeIcon).toHaveText('1');
   await productlistpage.clickcartIcon();
   expect(await page).toHaveURL('https://www.saucedemo.com/cart.html');

   expect(await cartpage.cartProduct).toHaveText('Sauce Labs Bolt T-Shirt');
   await cartpage.header.opeandCloseBurger();
   await page.waitForTimeout(2000);

})