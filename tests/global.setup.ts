import { TEST_DATA } from "../data/testData";
import {test,expect} from '../fixture/pageObjectFixture'
import { LoginPage } from "../pages/loginPage";

test('authentication', async({page,loginpage}) => {

  // test code here

  await loginpage.openApplication();
  await loginpage.Login();
  await expect(page).toHaveURL(TEST_DATA.urls.inventory);
  await page.context().storageState({path: 'auth.user.json'});
  
});