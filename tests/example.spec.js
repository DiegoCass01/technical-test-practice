// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')
  const button = page.getByRole('button')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await button.click()

  const textContentUpdated = await text.textContent()

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
  await expect(textContent).not.toBe(textContentUpdated)
})
