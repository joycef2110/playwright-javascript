// @ts-check


const { test, expect } = require('@playwright/test');

// test using viewport
//test.use({
//  viewport: { width: 1600, height: 1200 },
///});

// test using geolocation
//test.use({
//  geolocation: { longitude: 41.890221, latitude: 12.492348 },
//  permissions: ['geolocation'],
//});
test.beforeEach(async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
})

test('Login com sucesso @login', async ({ page }) => {
  const button = await page.getByRole('button', { name: 'Send Mail' });
  await button.scrollIntoViewIfNeeded();
  await button.click();

  const texto = await page.waitForSelector('text=NEWSLETTER');
  await texto.scrollIntoViewIfNeeded();

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('test@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('Login com sucesso 1 @login', async ({ page }) => {
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('test@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('Login com sucesso 2 @login', async ({ page }) => {
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('test@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});