const {test, expect}=require('@playwright/test');


test('No Username, No Email, No Password, No T&Cs', async({page})=>{


    await page.goto("https://app-development.onestream.live/login");

    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
    await page.getByRole('Link', { name: 'Sign Up' }).click();

    await expect(page).toHaveURL(/.*signup/);
    await expect(page).toHaveTitle(/OSL 2.0/);  
    
    await expect(page.getByTestId('google-sso-button', { name: 'google-icon' })).toBeVisible();
    await expect(page.getByTestId('facebook-sso-button', { name: 'facebook-icon' })).toBeVisible();
    await expect(page.getByTestId('twitch-sso-button', { name: 'twitch-icon' })).toBeVisible();
    await expect(page.getByTestId('apple-sso-button', { name: 'apple-icon' })).toBeVisible();


    await expect(page.getByRole('link', { name: 'Terms' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'privacy' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Join Our Community' })).toBeVisible();
    await expect(page.getByTestId('signup-submit-btn')).toBeVisible();

    await page.getByTestId('signup-submit-btn').click();

    await expect(page.getByTestId('signup-consent-error-alert')).toBeVisible();
    const errText1 = await page.locator('[data-testid="signup-consent-error-alert"]').innerText();
    console.log(errText1);

    await expect(page.getByText('Username must be 3–20 characters')).toBeVisible();
    await expect(page.getByText('Enter a valid email')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();

});



test('Existing Email',async({page})=>{

await page.goto("https://app-development.onestream.live/login");

    await page.getByRole('button', { name: 'Accept all cookies' }).click();
    await page.getByRole('button', { name: 'Switch to OSL 2.0' }).click();
    await page.getByRole('Link', { name: 'Sign Up' }).click();

    await page.getByTestId('signup-name-input-field').fill('Dilawar Khan');
    await page.getByTestId('signup-email-input-field').fill('dilawar.khanon1@gmail.com');
    await page.getByTestId('signup-password-input-field').fill('Axio2007!@#');
    await page.getByTestId('signup-consent-checkbox').check();
    await page.getByTestId('signup-submit-btn').click();    

    await expect(page.getByTestId('signup-error-alert')).toBeVisible();
    const errText = await page.locator('[data-testid="signup-error-alert"]').innerText();   
    console.log(errText);


});