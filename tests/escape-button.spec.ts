import { test, expect } from '@playwright/test'

test.describe('EscapeButton', () => {
  test('should redirect to Google when clicked', async ({ page }) => {
    await page.goto('/')

    // Dismiss the tour
    const tourPopover = page.locator('.driver-popover-next-btn')
    await tourPopover.click()

    const escapeButton = page.locator('#escape-button')

    // Create a promise that will resolve when navigation starts
    const navigationPromise = page.waitForNavigation()

    // Click the escape button
    await escapeButton.click()

    // Wait for navigation to start
    await navigationPromise

    // Verify we're being redirected to Google
    expect(page.url()).toContain('google.com')
  })

  test('should be visible on the page', async ({ page }) => {
    await page.goto('/')
    const escapeButton = page.locator('#escape-button')
    await expect(escapeButton).toBeVisible()
    // Navigate to other pages
    await page.goto('/test')
    await expect(escapeButton).toBeVisible()
  })

  test('should show tour for first-time visitors', async ({ page }) => {
    // Clear localStorage to simulate first-time visit
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()

    // Wait for the tour popover to appear
    const tourPopover = page.locator('.driverjs-theme')
    await expect(tourPopover).toBeVisible({ timeout: 2000 })

    // Verify tour content
    await expect(tourPopover.locator('.driver-popover-title')).toContainText('دکمه خروج سریع')
    await expect(tourPopover.locator('.driver-popover-description')).toContainText('در صورت نیاز به خروج سریع')
  })

  test('should not show tour for returning visitors', async ({ page }) => {
    await page.goto('/')
    // Set localStorage to simulate returning visitor
    await page.evaluate(() => {
      localStorage.setItem('hasSeenEscapeButtonTour', 'true')
    })
    await page.reload()

    // Verify tour doesn't appear
    const tourPopover = page.locator('.driverjs-theme')
    await expect(tourPopover).not.toBeVisible({ timeout: 2000 })
  })
})
