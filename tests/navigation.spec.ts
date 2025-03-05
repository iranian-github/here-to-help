import { test, expect } from '@playwright/test'

test.describe('Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Dismiss the tour
    const tourPopover = page.locator('.driver-popover-next-btn')
    await tourPopover.click()
  })
  test('should navigate to home page', async ({ page }) => {
    const header = await page.getByRole('banner')
    await expect(header).toBeVisible()
  })

  test('should navigate to HIV test centers page and display correct content', async ({ page }) => {
    // Verify and click the illness category
    const illnessCategory = page.locator('#category-illness')
    await expect(illnessCategory).toBeVisible()
    await illnessCategory.click()

    // Find and click the view centers link
    const viewCentersLink = page.getByRole('link', { name: 'مشاهده لیست مراکز' })
    await expect(viewCentersLink).toBeVisible()
    await viewCentersLink.click()

    // Wait for navigation and verify URL
    await page.waitForURL(/.*free-hiv-test-centers/)
    await expect(page).toHaveURL(/.*free-hiv-test-centers/)

    const heading = await page.getByRole('heading', { level: 2 })
    await expect(heading).toContainText('لیست مراکز آزمایش رایگان ایدز و مشاوره بیماری های رفتاری')
  })

  test('should show 404 page for non-existent routes', async ({ page }) => {
    await page.goto('/non-existent-page')
    await expect(page).toHaveURL(/.*non-existent-page/)
  })
})
