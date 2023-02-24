// @ts-check
// Everything work with promises
const { test, expect } = require('@playwright/test');
const hostURL = 'http://127.0.0.1:5173/';
const ImagPprefix = 'https://cataas.com/'

test('Title: App shows an image', async({ page }) => {
  await page.goto(hostURL);

  // As we donn't have elements with an id, we get elements by its role directly
  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  await expect(textContent).not.toBeUndefined()
  await expect(imageSrc?.startsWith(ImagPprefix)).toBeTruthy();

  console.log(textContent, imageSrc)
})

// ToDo: Create a test to check the button get new fact and check if it make a change on the page