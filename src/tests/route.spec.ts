import {test, expect} from '@playwright/test';

test('Init', async({page})=>{
  await page.goto('http://localhost:8000/');
  const pages = page.locator('.description');
  await expect(pages).toHaveText('Ravinthiran Partheepan - Azog');
});

test('home', async({page})=>{
  await page.goto('http://localhost:8000/');
  const home = page.locator('.Home');
  await expect(home).toHaveAttribute('href', 'https://ravinthiranpartheepan.com');
})
