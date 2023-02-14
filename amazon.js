import { Selector } from "testcafe";

fixture('Automate Amazon')
    .page('https://www.amazon.in/')
    .skipJsErrors();

test('Login to Amazon', async t => {

    await t
        .wait(1000)
        .maximizeWindow()
        .wait(1000)

        //Click sign in button
        .click('#nav-link-accountList')

        //Enter email id
        .typeText('#ap_email', 'testid0@outlook.com')
        .click('#continue')

        //Enter password
        .typeText('#ap_password', 'India@123456')
        .click('#signInSubmit')

        //Enter chair in textbox
        .expect(Selector('#twotabsearchtextbox').exists).ok()
        .wait(1000)
        .typeText('#twotabsearchtextbox', 'Chair')
        .click('#nav-search-submit-button')

        //Add the item in cart
        .expect(Selector('a[class="a-link-normal s-no-outline"]').exists).ok()
        .wait(2000)
        .click(Selector('a[class="a-link-normal s-no-outline"]'))
        .wait(2000)

    const item = Selector('a[class="a-link-normal s-no-outline"]')
    if (await item.exists) {

        //Click item again if didn't get clicked
        await t
        .click(Selector('a[class="a-link-normal s-no-outline"]'))
      
    }

    await t
        .expect(Selector('#add-to-cart-button').exists).ok()
        .wait(2000)
        .click('#add-to-cart-button')
        .wait(2000)
        .click(Selector('span[id="sw-gtc"]'))
        //.click(Selector('a[class="a-button-text"]').nth(2))

        //Remove the item from cart
        .wait(1000)
        .click(Selector('input[value="Delete"]'))
})