import { test, expect } from '@playwright/test'

test.describe('HIV Test Centers Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/free-hiv-test-centers')
    // Dismiss the tour
    const tourPopover = page.locator('.driver-popover-next-btn')
    await tourPopover.click()
  })

  test('should display the centers page heading', async ({ page }) => {
    const heading = await page.getByRole('heading', { level: 2 })
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('لیست مراکز آزمایش رایگان ایدز')
  })

  test('should have at least one center listed', async ({ page }) => {
    const rows = await page.locator('table tbody tr')
    const count = await rows.count()
    expect(count).toBeGreaterThan(0)
  })
})
