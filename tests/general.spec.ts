import { test, expect } from '@playwright/test'

test.describe('General Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Dismiss the tour
    const tourPopover = page.locator('.driver-popover-next-btn')
    await tourPopover.click()
  })

  test('Check for title', async ({ page }) => {
    await expect(page).toHaveTitle(/Here to Help/)
    await expect(page).toHaveTitle(/اینجائیم برای کمک/)
  })

  test('Check for favicon', async ({ page }) => {
    const favicon = page.locator('link[rel="icon"]').first()
    await expect(favicon).toHaveAttribute('href', /.*\.(ico|png)$/)
  })

  test('Back to top button functionality', async ({ page }) => {
    // Initially button should not be visible
    const backToTopButton = page.locator('#back-to-top')
    await expect(backToTopButton).not.toBeVisible()

    // Click on the category containers to add enough content to scroll
    // class category-container
    const categoryContainers = page.locator('.category-container')
    const containerCount = await categoryContainers.count()
    for (let i = 0; i < containerCount; i++) {
      await categoryContainers.nth(i).click()
    }

    // Scroll down to make the button appear
    await page.evaluate(() => {
      window.scrollTo(0, 1000)
    })

    // Wait for button to become visible
    await expect(backToTopButton).toBeVisible()

    // Click the button
    await backToTopButton.click()

    // Wait for smooth scroll animation to complete (typical duration is ~300-500ms)
    await page.waitForFunction(() => window.scrollY === 0)

    // Verify we're back at the top
    await expect(page.evaluate(() => window.scrollY)).resolves.toBe(0)
  })
})

test('pages keep working offline after a first visit', async ({ page, context }) => {
  await page.goto('/free-hiv-test-centers')
  await page.evaluate(() => navigator.serviceWorker.ready)
  await page.reload() // now controlled by the service worker, which caches as it fetches
  await page.waitForLoadState('networkidle')
  await context.setOffline(true)
  await page.reload()
  await expect(page.getByRole('heading', { level: 2 })).toContainText('لیست مراکز آزمایش رایگان ایدز')
})
