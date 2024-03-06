import{ expect, test } from "@playwright/test";

test('the user login with success', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(await page.title()).toBe('Swag Labs');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    const productTitle = await page.locator('.header_secondary_container > span');
    await expect(productTitle).toHaveText('Products');


    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();

    await page.locator('[class="shopping_cart_link"]').click();

    await page.locator('[data-test="checkout"]').click();


    await page.locator('[data-test="firstName"]').fill('Maria Helena');
    await page.locator('[data-test="lastName"]').fill('Pereira da Silva');
    await page.locator('[data-test="postalCode"]').fill('011090-150');

    await page.locator('[data-test="continue"]').click();

    
    await page.locator('[data-test="finish"]').click();

    const locator = page.locator('.complete-header');
    await expect(locator).toContainText('Thank you for your order!');

    // await page.pause()
    
   


    
    


    
    
});

// test('all product names begin with "Sauce Labs"', async ({ page}) => {
//     test.fail();
//     await test.step('login', async () => {
//         await page.goto('https://www.saucedemo.com/');
//         await page.locator('[data-test="username"]').fill('standard_user');
//         await page.locator('[data-test="password"]').fill('secret_sauce');
//         await page.locator('[data-test="login-button"]').click();
//     })
//     await test.step('product title verification', async () => {
//         const titleListLocator = await page.locator('.inventory_item_name');
//         const productTitleList = await titleListLocator.allTextContents();

//         for(const item of productTitleList){
//             await expect(item.slice(0, 10)).toBe('Sauce Labs');
//         }
//     })

// })

