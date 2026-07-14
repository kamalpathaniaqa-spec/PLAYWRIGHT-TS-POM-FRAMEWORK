import { test, expect } from '../fixture/pageObjectFixture'
import { TEST_DATA } from '../data/testData';

test('ValidateLogin ', async ({ page, loginpage, productlistpage, cartpage }) => {


  // await loginpage.openApplication();
   //await loginpage.Login();
   await page.goto(TEST_DATA.urls.inventory);
   expect(await page).toHaveURL(TEST_DATA.urls.inventory);
   await page.waitForTimeout(3000);



})

test('ValidateAddtoCart', async ({ page, loginpage, productlistpage, cartpage }) => {

  // await loginpage.openApplication();
   //await loginpage.Login();
    await page.goto(TEST_DATA.urls.inventory);
   expect(await page).toHaveURL(TEST_DATA.urls.inventory);

   await page.waitForTimeout(3000);

})

test('VaidateCartIteam', async ({ page, loginpage, productlistpage, cartpage }) => {

   //await loginpage.openApplication();
   //await loginpage.Login();
   await page.goto(TEST_DATA.urls.inventory);
   expect(await page).toHaveURL(TEST_DATA.urls.inventory);

   await productlistpage.clickAddToCartButton();
   expect(await productlistpage.cartBadgeIcon).toHaveText('1');
   await productlistpage.clickcartIcon();
   expect(await page).toHaveURL(TEST_DATA.urls.cart);

   expect(await cartpage.cartProduct).toHaveText('Sauce Labs Bolt T-Shirt');
   await page.waitForTimeout(3000);

})