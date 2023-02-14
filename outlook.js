import { Selector } from "testcafe";
import step from 'testcafe-reporter-allure/dist/utils';

fixture('Automate Outlook')
    .page('https://outlook.live.com/')
    .skipJsErrors();

function GetTime() {

    // Get current date, hour, minute and am pm
    let current = new Date();
    let hour = current.getHours();
    let minutes = current.getMinutes();
    let ampm = hour >= 12 ? ' PM' : ' AM'

    if (hour > 12) {
        hour = hour - 12;
    }

    return hour + ":" + minutes + ampm;
}

test.only('Login', async t => {

  await t
        //Maximize the window
        .maximizeWindow()

        //Click Sign in button
        .click(Selector('a').withText('Sign in'))

        //Enter email id
        .typeText('input', 'hcltest00@outlook.com')
        .click(Selector('input').withAttribute('value', 'Next'))

        // //Enter password
        // .typeText('input[name="passwd"]', 'India@123456')
        // .click(Selector('input').withAttribute('value', 'Sign in'))

        // //click next
        // .click(Selector('input').withAttribute('value', 'Yes'))
        // .wait(10000)
});

test('Send an email', async t => {

    await t
        //Maximize the window
        .maximizeWindow()

        //Click Sign in button
        .click(Selector('a').withText('Sign in'))

        //Enter email id
        .typeText('input', 'hcltest00@outlook.com')
        .click(Selector('input').withAttribute('value', 'Next'))

        //Enter password
        .typeText('input[name="passwd"]', 'India@123456')
        .click(Selector('input').withAttribute('value', 'Sign in'))

        //click next
        .click(Selector('input').withAttribute('value', 'Yes'))
        .wait(10000)

        //Code to send an email
        .click(Selector('button').withAttribute('aria-label', 'New mail'))
        .wait(8000)
        //Add attendee's name
        .typeText(Selector('div').withAttribute('aria-label', 'To'), 'testing-44@outlook.com')
        .wait(2000)
        .pressKey('enter')
        //To provide subject
        .typeText(Selector('input').withAttribute('placeholder', 'Add a subject'), 'Automation')
        //To provide message body
        .typeText('.elementToProof', 'ignore this message, testing automation')
        .wait(2000)
        .click(Selector('button').withAttribute('aria-label', 'Send'))

})


test('Check time', async t => {

    // const time = GetTime();
    await t
    //     .click(Selector('div').withAttribute('title', 'Sent Items'))
    //     .wait(2000)
    //     .click(Selector('div').withAttribute('aria-label', 'Select a conversation'))
    //     .wait(2000)
    // const sel = Selector('.srQCs').textContent
    // await t.expect(await sel).contains(time)

    //Maximize the window
    .maximizeWindow()

    //Click Sign in button
    .click(Selector('a').withText('Sign in'))

    //Enter email id
    .typeText('input', 'hcltest00@outlook.com')
    .click(Selector('input').withAttribute('value', 'Next'))

    //Enter password
    .typeText('input[name="passwd"]', 'India@123456')
    .click(Selector('input').withAttribute('value', 'Sign in'))

    //click next
    .click(Selector('input').withAttribute('value', 'Yes'))
    .wait(10000)

    //Code to send an email
    .click(Selector('button').withAttribute('aria-label', 'New mail'))
    .wait(8000)
    //Add attendee's name
    .typeText(Selector('div').withAttribute('aria-label', 'To'), 'testing-44@outlook.com')
    .wait(2000)
    .pressKey('enter')
    //To provide subject
    .typeText(Selector('input').withAttribute('placeholder', 'Add a subject'), 'Automation')
    //To provide message body
    .typeText('.elementToProof', 'ignore this message, testing automation')
    .wait(2000)

    //Upload file
    .setFilesToUpload(Selector('input').withAttribute('type', 'file'), [
        'C:\\Users\\SecurityTools\\Documents\\TestCafe\\test.png'
    ])
    // .wait(7000)
    //To send the email     
    //.click(Selector('div').withAttribute('aria-label', 'Send'))

    // .click(Selector('div').withAttribute('title', 'Notes'))
    // .wait(5000)
    // .click(Selector('button').withAttribute('aria-label', 'New note'))
    // .wait(2000)
    // .typeText(Selector('div').withAttribute('aria-label', 'Editing note'), 'Hello Testers')
    // .setFilesToUpload('.n-image-input',
    //     ['C:\\Users\\SecurityTools\\Documents\\TestCafe\\test.png'])
    // .wait(3000)

})



